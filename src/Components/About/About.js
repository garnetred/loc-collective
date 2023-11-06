import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <h3 className="about-header">About</h3>
      <section className="about-info">
        <h4>I'm December!</h4>
        <p className="about-paragraph-1">
          I designed this site to make it easier for black people with locs to
          find a loctician, no matter where they are or what type of locs they
          have. In my own search for a loctician, I noticed how difficult it was
          to find a loctician in a new city, from filtering out stylists who did
          not work with my hair texture to finding stylists skilled in
          interlocking. This site makes it easier to find the perfect loctician
          for you and your locs.
        </p>
        <p>
          loc collective searches Yelp to find you a loctician based on hair
          specialty. Currently you can search for locticians who specialize in
          the following areas:
        </p>
        <ul>
          <li>traditional locs (also called dreadlocks)</li>
          <li>sisterlocks</li>
          <li>brotherlocks</li>
          <li>brotherlocks</li>
          <li>interlocks</li>
          <li>microlocs</li>
          <li>faux locs</li>
        </ul>
        <p>
          You can view contact information for each loctician in the directory
          as well as their overall rating on Yelp.
        </p>
        <p className="about-paragraph-2">
          If you have any feedback or are interested in being matched with a
          loctician, please feel free to reach out via the{' '}
          <Link to="/contact" className="about-link">
            contact form
          </Link>
          .
        </p>
      </section>
    </section>
  );
};

export default About;
