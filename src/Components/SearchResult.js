import React, { Component } from "react";
import "./SearchResult.css";

export class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poster_url: "",
    };
  }

  render() {
    return (
      <div className="result-container">
        <div className="result-box">
          <div class="movie-poster">
            <img id="movie-poster" src={this.state.poster_url} />
          </div>
          <div class="movie-title">Title</div>
          <div class="movie-content">
            <div class="movie-rating">4.5</div>
            <div class="movie-year">2018</div>
            <div class="movie-cast">Actor, Actress</div>
            <div class="movie-plot">very good movie</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResult;
