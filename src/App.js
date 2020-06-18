import React from "react";
import "./App.css";

// Components
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import SearchResult from "./Components/SearchResult";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <SearchResult />
    </div>
  );
}

export default App;
