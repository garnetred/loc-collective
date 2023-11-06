import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <h3 className="about-header">About</h3>
      <section className="about-info">
        <p className="about-paragraph-1">
          This site was designed to make the process of finding a loctician much
          easier for black people with locs. In my own search for a loctician, I
          noticed how difficult it was to find a loctician online in a new city.
          It was also difficult to filter out stylists who do not work with my
          hair texture and to find stylists familiar with interlocking. I also
          had a hard time finding locticians who accepted transfer clients. This
          site makes it easier to find the perfect loctician for you and your
          locs.
        </p>
        <p>
          loc collective searches Yelp to find you a loctician based on hair
          specialty. Currently you can search for locticians who specialize in
          the following areas:
        </p>
        <ul>
          <li>traditional locs</li>
          <li>sisterlocks</li>
          <li>brotherlocks</li>
          <li>brotherlocks</li>
          <li>interlocks</li>
          <li>microlocs</li>
          <li>faux locs</li>
        </ul>
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
