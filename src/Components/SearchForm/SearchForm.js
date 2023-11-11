import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = (props) => {
  const [location, setLocation] = useState('');
  const [style, setStyle] = useState('');
  const [locationError, setLocationError] = useState(false);
  const [styleError, setStyleError] = useState(false);

  const data = {
    location,
    style,
    styleError,
    locationError,
  };

  const handleChange = (e) => {
    const { name } = e.target;
    if (name === 'location') {
      setLocation(e.target.value);
    }
    if (name === 'style') {
      setStyle(e.target.value);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (location !== '' && style !== '') {
      props.retrieveSearchResults(data);
      setLocationError(false);
      setStyleError(false);
      // set loading here if form submitted successfully
      props.setIsLoading(true);
    } else {
      displayErrorMessage();
    }
  };

  const displayErrorMessage = () => {
    if (location === '') {
      setLocationError(true);
    }

    if (style === '') {
      setStyleError(true);
    }
  };

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
          <h2>Search locticians across the United States by hairstyle</h2>
        </section>
      </section>

      <form className="search-form" data-testid="form">
        <select
          name="style"
          id="style"
          data-testid="select"
          onChange={(e) => handleChange(e)}
          aria-label="style"
          className="search-form-input"
        >
          <option value="" selected disabled>
            -- Please select a style --{' '}
          </option>
          <option value="locs+dreadlocks">traditional locs</option>
          <option value="sisterlocks">sisterlocks</option>
          <option value="brotherlocks">brotherlocks</option>
          <option value="interlocks+sisterlocks">interlocks</option>
          <option value="microlocs">microlocs</option>
          <option value="faux locs">faux locs</option>
        </select>
        <input
          className="location-input search-form-input"
          type="text"
          placeholder="location"
          name="location"
          aria-label="location"
          value={location}
          onChange={(e) => handleChange(e)}
          required
        />
        <button
          type="submit"
          className="search-form-button search-form-input"
          onClick={submitForm}
        >
          search
        </button>
      </form>
      <section className="error-wrapper">
        {styleError && (
          <p className="form-error-message">Please choose a hairstyle.</p>
        )}
        {locationError && (
          <p className="form-error-message">Please input a location.</p>
        )}
      </section>
    </section>
  );
};

SearchForm.propTypes = {
  retrieveSearchResults: PropTypes.func,
};

export default SearchForm;
