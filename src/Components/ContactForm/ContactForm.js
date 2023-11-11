import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name } = e.target;
    if (name === 'name') {
      setName(e.target.value);
    }
    if (name === 'email') {
      setEmail(e.target.value);
    }

    if (name === 'message') {
      setMessage(e.target.value);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert('your message has been sent successfully');
    // if (this.state.location !== "" && this.state.style !== "") {
    //   this.props.retrieveSearchResults(this.state);
    //   this.setState({ locationError: false, styleError: false });
    // } else {
    //   this.displayErrorMessage();
    // }
  };

  const displayErrorMessage = () => {
    // if (this.state.location === "") {
    //   this.setState({ locationError: true });
    // }
    // if (this.state.style === "") {
    //   this.setState({ styleError: true });
    // }
  };

  return (
    <section className="contact-form-container">
      <form
        className="contact-form"
        name="contact-form"
        data-testid="contactform"
        method="POST"
        data-netlify="true"
      >
        <p className="contact-form-labels">Name:</p>
        <input type="hidden" name="form-name" value="contact-form" />
        <input
          className="name-input form-input-field"
          type="text"
          placeholder="name"
          name="name"
          aria-label="name"
          value={name}
          onChange={(e) => handleChange(e)}
          required
        />
        <p className="contact-form-labels">Email:</p>
        <input
          className="email-input form-input-field"
          type="text"
          placeholder="email"
          name="email"
          aria-label="email"
          value={email}
          onChange={(e) => handleChange(e)}
          required
        />
        <p className="contact-form-labels">Comments:</p>
        <textarea
          className="message-input form-input-field"
          type="textarea"
          placeholder="message"
          name="message"
          aria-label="message"
          value={message}
          onChange={(e) => handleChange(e)}
          required
        />
        <button
          type="submit"
          className="contact-form-button"
          // onClick={submitForm}
        >
          submit
        </button>
      </form>
      <section className="error-wrapper"></section>
    </section>
  );
};

// ContactForm.propTypes = {
//   retrieveSearchResults: PropTypes.func,
// };

export default ContactForm;
