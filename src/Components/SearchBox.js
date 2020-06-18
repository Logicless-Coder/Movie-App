import React from "react";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="search-div">
      <div className="search-bar">
        <input id="search-input" />
        <button id="search-button">Search</button>
      </div>
    </div>
  );
}

export default SearchBox;
