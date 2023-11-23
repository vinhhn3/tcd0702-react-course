import React, { useContext, useState } from "react";
import GithubContext from "../context/github/githubContext";

const Search = (props) => {
  const githubContext = useContext(GithubContext);
  const { searchUsers } = githubContext;
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault(); // Stop form reloading
    searchUsers(text);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Search" onChange={handleChange} />
        <button onClick={handleClick} className="btn btn-dark btn-block">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
