import React from "react";
import "./SearchBox.css";

function SearchBox(props) {
  return (
    <div className="search-div">
      <div className="search-bar">
        <input
          id="search-input"
          onChange={props.handleChange}
          value={props.searchQuery}
        />
        <button id="search-button" onClick={props.search}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
