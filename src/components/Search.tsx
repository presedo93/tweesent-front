import { AiOutlineSearch } from "react-icons/ai";
import "../styles/search.css";

const Search = () => {
  return (
    <div className="searchBox">
      <input className="searchInput" type="text" placeholder="Search..." />
      <button className="searchButton">
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default Search;
