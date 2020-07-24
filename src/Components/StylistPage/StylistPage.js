import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StylistPage.css";
import { fetchStylist } from "../../apiCalls";

class StylistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    fetchStylist(this.props.id).then((response) => {
      try {
        if (response) {
          this.setState({
            phone: response[0].display_phone || "N/A",
            address: response[0].location.display_address,
            name: response[0].name,
            rating: response[0].rating,
            review_count: response[0].review_count,
            photos: response[0].photos,
            price: response[0].price,
            url: response[0].url,
            reviews: response[1].reviews,
          });
        } else {
          throw new Error();
        }
      } catch {
        this.setState({ error: "no results found" });
      }
    });
  };
  render() {
    const stringifiedRating = String(this.state.rating);
    const rating = stringifiedRating.split("");
    let allReviews;
    if (this.state.reviews) {
      allReviews = this.state.reviews.map((review) => {
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
            <h3>{this.state.name ? this.state.name : null}</h3>
            {this.state.rating && (
              <img
                className="star-rating"
                alt="star-rating"
                src={
                  rating.length === 3
                    ? `/images/yelp_stars/web_and_ios/small/small_${rating[0]}_half@2x.png`
                    : `/images/yelp_stars/web_and_ios/small/small_${rating[0]}@2x.png`
                }
              ></img>
            )}
          </section>
          {this.state.name && (
            <a href={this.state.url} target="_blank" rel="noopener noreferrer">
              <img
                className="yelp-logo"
                src="/images/yelp-logo.svg"
                alt="yelp-logo"
              ></img>
            </a>
          )}
        </section>
        <section className="stylist-content">
          {this.state.photos && (
            <img
              src={this.state.photos ? this.state.photos[0] : null}
              alt={`${this.state.name} stylist`}
              className="stylist-company-image"
            ></img>
          )}
          <section className="stylist-info-container">
            <article>
              <p>
                {this.state.address &&
                  `Address: ${this.state.address.join(", ")}`}
              </p>
              <p>{this.state.phone && `Phone: ${this.state.phone}`}</p>
              <p>
                {this.state.review_count &&
                  (this.state.review_count !== 1
                    ? `${this.state.review_count} reviews`
                    : `${this.state.review_count} review`)}
              </p>
              <p>{this.state.price && `Price: ${this.state.price}`}</p>
            </article>
            <section className="reviews">{allReviews}</section>
          </section>
        </section>
      </section>
    );
  }
}

StylistPage.propTypes = {
  id: PropTypes.string,
};

export default StylistPage;
