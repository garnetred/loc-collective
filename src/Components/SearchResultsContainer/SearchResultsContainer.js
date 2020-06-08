import React from "react";
import "./SearchResultsContainer.css";

//function or class? hmm

const SearchResultsContainer = () => {
  return (
    <section className="search-results-container">
      <aside className="sort-by-box">
        <p>sort by:</p>
        <label htmlFor="distance">
          <input type="checkbox" name="distance" value="distance" /> distance
        </label>
        <label htmlFor="rating">
          <input type="checkbox" name="rating" value="rating" /> rating
        </label>
        <label htmlFor="price">
          <input type="checkbox" name="price" value="price" /> price
        </label>
      </aside>
      <main className="all-search-results"></main>
    </section>
  );
};

export default SearchResultsContainer;
