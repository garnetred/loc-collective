import React from "react";
import "./SearchResults.css";
import { Link } from "react-router-dom";

const SearchResults = () => {
  return (
    <section className="specific-search-result">
      <section className="search-result-header">
        <section className="name-and-rating">
          <h3>Locs By Bess</h3>
          <img
            className="star-rating"
            alt="star-rating"
            src="images/yelp_stars/web_and_ios/small/small_1_half@2x.png"
          ></img>
        </section>
        <img
          className="yelp-logo"
          src="images/yelp-logo.svg"
          alt="yelp-logo"
        ></img>
      </section>
      <section className="search-results-content">
        <figure className="company-image"></figure>
        <article>
          <p>Number of reviews</p>
          <p>Number of miles away</p>
          <p>Review sample if possible without fetch call</p>
        </article>
      </section>
    </section>
    //divide by 1609 to convert meters to miles
  );
};

export default SearchResults;
