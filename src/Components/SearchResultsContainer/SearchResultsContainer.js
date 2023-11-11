import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';
import './SearchResultsContainer.css';
import SearchResults from '../SearchResults/SearchResults';

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
        {props.isLoading && <Loading />}{' '}
        {props.style && !props.results.length && !props.isLoading ? (
          <p className="no-results">
            No results found. Please try a new search.
          </p>
        ) : null}
        {props.style && props.results.length && !props.isLoading
          ? allSearchResults
          : null}
      </main>
    </section>
  );
};

SearchResultsContainer.propTypes = {
  results: PropTypes.array,
  style: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default SearchResultsContainer;
