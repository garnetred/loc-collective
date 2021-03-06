import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ContactForm.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    const { name } = e.target;
    if (name === "name") {
      this.setState({ name: e.target.value });
    }
    if (name === "email") {
      this.setState({ email: e.target.value });
    }

    if (name === "message") {
      this.setState({ message: e.target.value });
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    // if (this.state.location !== "" && this.state.style !== "") {
    //   this.props.retrieveSearchResults(this.state);
    //   this.setState({ locationError: false, styleError: false });
    // } else {
    //   this.displayErrorMessage();
    // }
  };

  displayErrorMessage = () => {
    // if (this.state.location === "") {
    //   this.setState({ locationError: true });
    // }
    // if (this.state.style === "") {
    //   this.setState({ styleError: true });
    // }
  };

  render() {
    return (
      <section className="contact-form-container">
        <form
          className="contact-form"
          data-testid="contactform"
          action="mailto:test@gmail.com"
          method="post"
        >
          <p className="contact-form-labels">Name:</p>
          <input
            className="name-input"
            type="text"
            placeholder="name"
            name="name"
            aria-label="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <p className="contact-form-labels">Email:</p>
          <input
            className="email-input"
            type="text"
            placeholder="email"
            name="email"
            aria-label="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <p className="contact-form-labels">Comments:</p>
          <textarea
            className="message-input"
            type="textarea"
            placeholder="message"
            name="message"
            aria-label="message"
            value={this.state.message}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <button
            type="submit"
            className="contact-form-button"
            onClick={this.submitForm}
          >
            submit
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

// ContactForm.propTypes = {
//   retrieveSearchResults: PropTypes.func,
// };

export default ContactForm;
