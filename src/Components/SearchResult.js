import React, { Component } from "react";
import "./SearchResult.css";

export class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poster_url:
        "data:image/jpeg;base64,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",
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