import React from "react";
import "./SearchResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";

//function or class? hmm

const SearchResultsContainer = (props) => {
  console.log(props);
  const allSearchResults = props.results.map((salon) => {
    return (
      <SearchResults
        key={salon.id}
        name={salon.name}
        image_url={salon.image_url}
        url={salon.url}
        review_count={salon.review_count}
        distance={salon.distance}
        rating={salon.rating}
        price={salon.price}
      />
    );
  });
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
      <main className="all-search-results">
        {props.style && !props.results.length ? (
          <p className="no-results">
            No results found. Please try a new search.
          </p>
        ) : null}
        {props.style === undefined ? (
          <SearchResults
            key={Math.round(100000)}
            name='Locs By Bess'
            // image_url=
            // url={salon.url}
            review_count={22}
            distance={2300}
            rating={4.0}
            price='$$$'
          />
        ) : (
          allSearchResults
        )}
      </main>
    </section>
  );
};

export default SearchResultsContainer;
