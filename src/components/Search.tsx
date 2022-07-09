import { useState } from "react";
import shallow from "zustand/shallow";
import { AiOutlineSearch } from "react-icons/ai";
// import axios from "axios";
import useParams from "../stores/params";
import "../styles/search.css";

const Search = () => {
    const [input, setInput] = useState("");
    const params = useParams((state) => ({ numTweets: state.numTweets, allowRt: state.allowRt, allowRe: state.allowRe }), shallow);
    const live = useParams((state) => state.live);

    const searchTweets = async (): Promise<void> => {
        // const path = "http://127.0.0.1:8000/search_tweets";
        // let res = await axios.post(path);
        // let data = res.data;
        if (!live) {
            const config = { ...params, Query: input }
            console.log(config);
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
