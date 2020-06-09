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


  retrieveStylistInfo = async () => {
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
      console.log(response);
    });
    //try catch should be in the data, I think 
  };

  render() {
      this.retrieveStylistInfo();
    return (
      <section className="stylist-container">
        <p className="stylist-header">Stylist Page</p>
      </section>
    );
  }
}

export default StylistPage;
