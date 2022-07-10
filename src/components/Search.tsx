import { useState, Dispatch } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import shallow from "zustand/shallow";
import axios from "axios";

import useParams from "../stores/params";
import "../styles/search.css";

import { TweetMetrics } from "../types/tweets";

interface SearchProps {
    setTweets: Dispatch<any>,
}

const Search = (props: SearchProps) => {
    const [input, setInput] = useState("");
    const live = useParams((state) => state.live);
    const params = useParams((state) => ({ numTweets: state.numTweets, allowRt: state.allowRt, allowRe: state.allowRe }), shallow);

    const searchTweets = async (): Promise<void> => {
        if (!live) {
            const path = "http://localhost:8000/search_tweets";
            const config = { ...params, Query: input }

            let res = await axios.post(path, config);
            let positives = [], neutral = [], negatives = [];
            let numPositives = 0, numNeutral = 0, numNegatives = 0, numTotal = 0;
            for (let tweet of res.data.tweets) {
                if (tweet.sentiment === "positive") {
                    positives.push(tweet);
                    numPositives++;
                } else if (tweet.sentiment === "neutral") {
                    neutral.push(tweet);
                    numNeutral++;
                } else {
                    negatives.push(tweet);
                    numNegatives++;
                }
                numTotal++;
            }

            let metrics: TweetMetrics = {
                positives: numPositives * 100 / numTotal,
                neutral: numNeutral * 100 / numTotal,
                negatives: numNegatives * 100 / numTotal
            };
            props.setTweets({positives, neutral, negatives, metrics });
        }
        else {
            console.log("Not live!");
        }
    }

    return (
        <div className="searchBox">
            <input className="searchInput" type="text" placeholder="Search..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="searchButton" onClick={searchTweets}>
                <AiOutlineSearch />
            </button>
        </div>
    );
};

export default Search;
