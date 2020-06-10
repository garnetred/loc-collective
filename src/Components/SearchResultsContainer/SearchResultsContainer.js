import React from "react";
import PropTypes from "prop-types";
import "./SearchResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";

const SearchResultsContainer = (props) => {
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
        id={salon.id}
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
          <>
            <h3>Featured Loctician</h3>
            <SearchResults
              key={Math.round(100000)}
              name="Bornu Locs - Natural Dreadlocks- Hair Products & Loc Extensions"
              image_url="https://s3-media2.fl.yelpcdn.com/bphoto/0dZbm39TYA1r2FfpwdPi7Q/o.jpg"
              url="https://www.yelp.com/biz/bornu-locs-natural-dreadlocks-hair-products-and-loc-extensions-atlanta?adjust_creative=4b4u9NSjrFIuzcuj_TKnAQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4b4u9NSjrFIuzcuj_TKnAQ"
              review_count={20}
              distance={10079.201499705512}
              rating={4.5}
              price="$$"
              id="_Qde9mvL7hddZTiT1YMN8Q"
            />
          </>
        ) : (
          allSearchResults
        )}
      </main>
    </section>
  );
};

SearchResultsContainer.propTypes = {
  results: PropTypes.array,
  style: PropTypes.string,
};

export default SearchResultsContainer;
