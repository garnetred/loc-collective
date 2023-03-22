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
          often noticed that it was difficult to filter out stylists who do not
          work with my hair texture or to find stylists who specialized in locs
          beyond traditional locs. It was even difficult to find people to start
          locs in less common ways. This site tries to make this process a
          little easier for others.
        </p>
        <p className="about-paragraph-2">
          If you have any questions, comments, or concerns, please feel free to
          reach out via the{' '}
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
