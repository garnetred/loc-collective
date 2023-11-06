import React from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';

const Styles = () => {
  return (
    <section className="style-section-container">
      <h3 className="style-header">Traditional locs</h3>
      <section className="style-info">
        <p className="style-paragraph">
          Traditional locs are a long-term hair style that can be started using
          many methods - most popularly, twists or comb coils. Traditional locs
          are normally retwisted using palm rolling - however, it's possible to
          get traditional locs and then switch to a different retightening
          technique. Traditional locs are larger than other locs and someone
          with traditional locs will have fewer locs than someone with micro
          locs.
        </p>
      </section>
      <h3 className="style-header">Interlocks</h3>
      <section className="style-info">
        <p className="style-paragraph">
          Interlocks are generally smaller locs that are maintained and started
          via a method called interlocking, which crochets the hair together.
          Some people choose interlocks because retightenings often last longer
          and you can do things such as swim or wash your hair immediately after
          a retightening with no ill effect. Interlocking can also be used to
          maintain other types of locs as well.
        </p>
      </section>
      <h3 className="style-header">Sisterlocks/Brotherlocks</h3>
      <section className="style-info">
        <img
          className="style-img"
          src="../public/images/sisterlocks.jpeg"
          alt="An example of sisterlocks."
        ></img>
        <p className="style-paragraph">
          Sisterlocks are micro locs (very small locs) They come in several
          different sizes. Since sisterlocks are a patented technique, they can
          be expensive to install and maintain, but they offer a lot of
          versatility in terms of hair styling options and the same benefits as
          interlocking above. You can also find a sisterlocks consultant via the
          <a href="https://www.sisterlocks.com/certified-consultant-registry.html">
            official certified consultant registry.
          </a>
        </p>
        <p className="style-paragraph">
          Brotherlocks are larger sisterlocks - they may not always be
          considered microlocs. They're also a patented technique and look
          similar to sisterlocks except for the size.
        </p>
      </section>
      <h3 className="style-header">Microlocs</h3>
      <section className="style-info">
        <p className="style-paragraph">
          Microlocs are very small locs. Someone with microlocs can have upwards
          of 500+ locs. Usually microlocs are maintained via interlocking.
        </p>
      </section>
      <h3 className="style-header">Faux locs</h3>
      <section className="style-info">
        <p className="style-paragraph">
          Faux loc hair extensions that look like locs. They often look like
          traditional locs, but have a shinier appearance. This can be a good
          way to test out locs without making the commitment.
        </p>
      </section>
      <h3 className="style-header">Ready to Get Started?</h3>
      <section className="style-info">
        <p className="style-paragraph">
          Search for a loctician by loc type in the{' '}
          <Link to="/" className="directory-link">
            directory
          </Link>{' '}
          today.
        </p>
      </section>
    </section>
  );
};

export default Styles;
