import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      style: "",
      locationError: false,
      styleError: false,
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
    if (this.state.location !== "" && this.state.style !== "") {
      this.props.retrieveSearchResults(this.state);
      this.setState({ locationError: false, styleError: false });
    } else {
      this.displayErrorMessage();
    }
  };

  displayErrorMessage = () => {
    if (this.state.location === "") {
      this.setState({ locationError: true });
    }

    if (this.state.style === "") {
      this.setState({ styleError: true });
    }
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

        <form className="search-form" data-testid="form">
          <select
            name="style"
            id="style"
            data-testid="select"
            onChange={(e) => this.handleChange(e)}
            aria-label="style"
          >
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
            placeholder="location"
            name="location"
            aria-label="location"
            value={this.state.location}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <button
            type="submit"
            className="search-form-button"
            onClick={this.submitForm}
          >
            search
          </button>
        </form>
        <section className="error-wrapper">
          {this.state.styleError && (
            <p className="form-error-message">Please choose a hairstyle.</p>
          )}
          {this.state.locationError && (
            <p className="form-error-message">Please input a location.</p>
          )}
        </section>
      </section>
    );
  }
}

SearchForm.propTypes = {
  retrieveSearchResults: PropTypes.func,
};

export default SearchForm;
