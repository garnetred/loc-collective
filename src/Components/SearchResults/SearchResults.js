import React from "react";
import "./SearchResults.css";
import { Link } from "react-router-dom";

const SearchResults = (props) => {
  console.log(props);

  const stringifiedRating = String(props.rating)
  const rating = stringifiedRating.split("");
  console.log(rating)
  const distance = (props.distance / 1609).toFixed(2);
  return (
    <section className="specific-search-result">
      <section className="search-result-header">
        <section className="name-and-rating">
          <h3>{props.name}</h3>
          <img
            className="star-rating"
            alt="star-rating"
            src={
              rating.length === 3
                ? `images/yelp_stars/web_and_ios/small/small_${rating[0]}_half@2x.png`
                : `images/yelp_stars/web_and_ios/small/small_${rating[0]}@2x.png`
            }
            // need to account for no ratings
          ></img>
        </section>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img
            className="yelp-logo"
            src="images/yelp-logo.svg"
            alt="yelp-logo"
          ></img>
        </a>
      </section>
      <section className="search-results-content">
        <figure className="company-image">
          <img
            src={props.image_url}
            alt={`${props.name} stylist`}
            className="company-image"
          ></img>
        </figure>
        <article>
          <p>
            {props.review_count !== 1
              ? `${props.review_count} reviews`
              : `${props.review_count} review`}
          </p>
          <p>
            {distance === 1.0
              ? `${distance} mile away`
              : `${distance} miles away`}
          </p>
          {/* <p>Review sample if possible without fetch call</p> */}
        </article>
      </section>
    </section>
    //divide by 1609 to convert meters to miles
    //must link yelp business page
    //must also convert rating into an array, then check to see if the third value is a 0 or a 5
  );
};

export default SearchResults;
