import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault(); // Stop form reloading
    console.log(text);
    props.handleSearch(text);
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
