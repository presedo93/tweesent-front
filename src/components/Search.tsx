import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import useParams from "../stores/params";
import "../styles/search.css";

const Search = () => {
    const [input, setInput] = useState("");
    let params = useParams();

    const searchTweets = async (): Promise<void> => {
        // const path = "http://127.0.0.1:8000/search_tweets";
        // let res = await axios.post(path);
        // let data = res.data;
        if (!params.live) {
            const config = {...params, Query: input}
            console.log(config);
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
