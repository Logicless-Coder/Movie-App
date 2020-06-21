import React, { Component } from "react";
import "./App.css";

// Components
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import SearchResult from "./Components/SearchResult";

var apiBase = "http://www.omdbapi.com/?apikey=";
var apiKey = "7a7e5642";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      queryResult: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  search = (event) => {
    event.preventDefault();
    fetch(`${apiBase}${apiKey}?t=${this.state.searchQuery}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          searchQuery: "",
          queryResult: result,
        });
      });
    console.log(this.state.queryResult);
  };

  // search = (event) => {
  //   event.preventDefault();
  //   var apiUrl =
  //     apiBase +
  //     "[" +
  //     apiKey +
  //     "]" +
  //     "&?t=" +
  //     this.state.searchQuery.toLowerCase();
  //   var data;
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((d) => (data = d));
  //   console.log(data);
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox
          handleChange={this.handleChange}
          searchQuery={this.state.searchQuery}
          search={this.search}
        />
        <SearchResult />
      </div>
    );
  }
}

export default App;
