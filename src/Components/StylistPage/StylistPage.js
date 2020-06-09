import React, { Component } from "react";
import "./StylistPage.css";

class StylistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 //how do I differentiate between loading and no results found?
  componentDidMount = async () => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer B1luOAhR9OYY1l9WsHUFv7oJ2-CdckIvtrb7Q9RyptY6iJIIdCytMCmiE7BDg8QnGAMXhxWFkhSGZUJVLUjbBZHEpBouBNVjitjOQkwDqDSKRiVVLkp6cTl-A8rZXnYx"
    );
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      // body: raw,
      // redirect: "follow",
    };
    const info = await Promise.all([
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${this.props.id}`,
        requestOptions
      ).then((response) => response.json()),
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${this.props.id}/reviews`,
        requestOptions
      ).then((response) => response.json()),
    ]).then((response) => {
      try {
        console.log(response);
        console.log("response.ok", response.ok);
        if (response) {
          console.log("response is ok");
          this.setState({
            phone: response[0].display_phone,
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
    //try catch should be in the data, I think
    //I wonder where I should do the fetch call for reviews?
  };
  render() {
    //how do I know if there's an error in order to display an error message?
    const stringifiedRating = String(this.state.rating);
    const rating = stringifiedRating.split("");
    console.log(this.state.location);
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
            <h3>{this.state.name}</h3>
            <img
              className="star-rating"
              alt="star-rating"
              src={
                rating.length === 3
                  ? `/images/yelp_stars/web_and_ios/small/small_${rating[0]}_half@2x.png`
                  : `/images/yelp_stars/web_and_ios/small/small_${rating[0]}@2x.png`
              }
              // need to account for no ratings
            ></img>
          </section>
          <a href={this.state.url} target="_blank" rel="noopener noreferrer">
            <img
              className="yelp-logo"
              src="/images/yelp-logo.svg"
              alt="yelp-logo"
            ></img>
          </a>
        </section>
        <section className="stylist-content">
          {/* <figure className="stylist-company-image"> */}
          <img
            src={this.state.photos ? this.state.photos[0] : null}
            alt={`${this.state.name} stylist`}
            className="stylist-company-image"
          ></img>
          {/* </figure> */}
          <section className="stylist-info-container">
            <article>
              <p>Address: {this.state.address ? this.state.address.join(', ') : null}</p>
              <p>Phone: {this.state.phone || "unavailable"}</p>
              <p>
                {" "}
                {this.state.review_count !== 1
                  ? `${this.state.review_count} reviews`
                  : `${this.state.review_count} review`}
              </p>
              <p>Price: {this.state.price}</p>
            </article>
            <section className="reviews">{allReviews}</section>
          </section>
        </section>
      </section>
    );
  }
}

// alias
// "loc-lyfe-by-kiy-atlanta"

// categories
// [{…}]

// coordinates
// {latitude: 33.814147, longitude: -84.384553}
// display_phone
// ""

// hours
// [{…}]
// id
// "2Lx9Qsq3kEq7mcEMp903aQ"
// image_url
// "https://s3-media2.fl.yelpcdn.com/bphoto/cmE5noBC3GrTiDa0MYEVuw/o.jpg"
// is_claimed
// true
// is_closed
// false

// location
// {address1: "", address2: "", address3: "", city: "A…}
// name
// "Loc Lyfe By Kiy"
// phone
// ""

// photos
// ["https://s3-media2.fl.yelpcdn.com/bphoto/cmE5noBC3…]
// price
// "$"
// rating
// 4.5
// review_count
// 11
// transactions
// []
// url
// "https://www.yelp.com/biz/loc-lyfe-by-kiy-atlanta?adjust_creative=4b4u9NSjrFIuzcuj_TKnAQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=4b4u9NSjrFIuzcuj_TKnAQ"

export default StylistPage;
