import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      style: "",
    };
  }

  handleChange = (e) => {
    const { name } = e.target;
    if (name === "location") {
      this.setState({ location: e.target.value });
    }
    if (name === "style") {
      this.setState({ style: e.target.value });
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.retrieveSearchResults(this.state);
  };

  render() {
    return (
      <section className="search-form-container">
        <section className="background-image-container">
          <section className="background-image-overlay"></section>
          <img
            src="/images/eyeforebony-nappy-.jpeg"
            alt="black woman with locs smiling while leaning against a wall"
            className="background-images"
          ></img>
          <section className="text-container">
            <h2>Spend less time searching for a loctician</h2>
            <h2>Search locticians across the US by hairstyle</h2>
          </section>
        </section>

        <form className="search-form" onSubmit={this.submitForm}>
          <select name="style" required onChange={(e) => this.handleChange(e)}>
            <option value="" selected disabled>
              -- Please select a style --{" "}
            </option>
            <option value="locs+dreadlocks">traditional locs</option>
            <option value="sisterlocks">sisterlocks</option>
            <option value="brotherlocks">brotherlocks</option>
            <option value="interlocks+sisterlocks">interlocks</option>
            <option value="microlocs">microlocs</option>
            <option value="faux locs">faux locs</option>
          </select>
          <input
            className="location-input"
            type="text"
            required
            placeholder="location"
            name="location"
            aria-label="location"
            value={this.state.location}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <button type="submit" className="search-form-button">
            search
          </button>
        </form>
      </section>
    );
  }
}

//need to pass function that runs the fetch call here
//also need to store these values in state and then pass them on
//or do I?

export default SearchForm;
