import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./StylistPage.css";
import { fetchStylist } from "../../apiCalls";

const StylistPage = (props) => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [reviewCount, setReviewCount] = useState("");
  const [photos, setPhotos] = useState("");
  const [price, setPrice] = useState(null);
  const [url, setUrl] = useState("");
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const beginFetchingStylist = async () => {
      fetchStylist(props.id).then((response) => {
        try {
          if (response) {
            setPhone(response[0].display_phone || "N/A");
            setAddress(response[0].location.display_address);
            setName(response[0].name);
            setRating(response[0].rating);
            setReviewCount(response[0].review_count);
            setPhotos(response[0].photos);
            setPrice(response[0].price);
            setUrl(response[0].url);
            setReviews(response[1].reviews);
          } else {
            throw new Error();
          }
        } catch {
          setError("no results found");
        }
      });
    };
    beginFetchingStylist();
  }, []);

  const stringifiedRating = String(rating);
  const newRating = stringifiedRating.split("");
  let allReviews;
  if (reviews) {
    allReviews = reviews.map((review) => {
      return (
        <section className="single-review">
          <p className="review-text">{review.text}</p>
          <p className="reviewer-name">-{review.user.name}</p>
          <a
            href={review.url}
            className="review-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more...
          </a>
        </section>
      );
    });
  }
  return (
    <section className="stylist-container">
      <section className="stylist-header">
        <section className="stylist-name-and-rating">
          <h3>{name ? name : null}</h3>
          {rating && (
            <img
              className="star-rating"
              alt="star-rating"
              src={
                newRating.length === 3
                  ? `/images/yelp_stars/web_and_ios/small/small_${newRating[0]}_half@2x.png`
                  : `/images/yelp_stars/web_and_ios/small/small_${newRating[0]}@2x.png`
              }
            ></img>
          )}
        </section>
        {name && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              className="yelp-logo"
              src="/images/yelp-logo.svg"
              alt="yelp-logo"
            ></img>
          </a>
        )}
      </section>
      <section className="stylist-content">
        {photos && (
          <img
            src={photos ? photos[0] : null}
            alt={`${name} stylist`}
            className="stylist-company-image"
          ></img>
        )}
        <section className="stylist-info-container">
          <article>
            <p>{address && `Address: ${address.join(", ")}`}</p>
            <p>{phone && `Phone: ${phone}`}</p>
            <p>
              {reviewCount &&
                (reviewCount !== 1
                  ? `${reviewCount} reviews`
                  : `${reviewCount} review`)}
            </p>
            <p>{price && `Price: ${price}`}</p>
          </article>
          <section className="reviews">{allReviews}</section>
        </section>
      </section>
    </section>
  );
};

StylistPage.propTypes = {
  id: PropTypes.string,
};

export default StylistPage;
