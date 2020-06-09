import React, { Component } from "react";
import "./StylistPage.css";

class StylistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //can't use this endpoint. provides lots of info but not info I need.
  //doesn't return anything with just one review. ugh.
  //will need to match the name with the name in the results array, maybe?
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
    const info = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${this.props.id}`,
      requestOptions
    );
    const data = await info.json().then((response) => {
      try {
        console.log(response);
        console.log("response.ok", response.ok);
        if (response) {
          console.log("response is ok");
          this.setState({...response.location, ...response.price})
        } else {
          throw new Error();
        }
      } catch {
        this.setState({ error: "no results found" });
      }
    });
    //try catch should be in the data, I think
  };
  render() {
    return (
      <section className="stylist-container">
        <section className="stylist-header">
          <section className="stylist-name-and-rating">
            <h3>Salon</h3>
            <img
              className="star-rating"
              alt="star-rating"
              //   src={
              //     rating.length === 3
              //       ? `images/yelp_stars/web_and_ios/small/small_${rating[0]}_half@2x.png`
              //       : `images/yelp_stars/web_and_ios/small/small_${rating[0]}@2x.png`
              //   }
              // need to account for no ratings
            ></img>
          </section>
          <a href="google.com" target="_blank" rel="noopener noreferrer">
            <img
              className="yelp-logo"
              src="/images/yelp-logo.svg"
              alt="yelp-logo"
            ></img>
          </a>
        </section>
        <section className="stylist-content">
          <figure className="stylist-company-image">
            <img
              //   src={props.image_url}
              alt={`stylist`}
              className="stylist-company-image"
            ></img>
          </figure>
          <article>
            <p>reviews</p>
            <p>distance</p>
            <p>$$$</p>
          </article>
        </section>
      </section>
    );
  }
}

export default StylistPage;
