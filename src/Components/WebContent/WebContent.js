import React from "react";
import "./WebContent.css";

const WebContent = (props) => {
  let array;
  if (typeof props.info !== "string") {
    array = props.info.map((info) => {
      return <p className="web-content-p">{info}</p>;
    });
  }
  return (
    <section className="web-content-section">
      <h3 className="web-content-header">{props.header}</h3>
      <section className="web-content-info">
        {typeof props.info === "string" ? (
          <p className="web-content-p">{props.info}</p>
        ) : (
          array
        )}
      </section>
    </section>
  );
};

export default WebContent;
