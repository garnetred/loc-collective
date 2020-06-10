import React from "react";
import "./WebContentContainer.css";
import WebContent from "../WebContent/WebContent";

const WebContentContainer = (props) => {
  const displayInfo = props.data.map((section) => {
    return <WebContent header={section.header} info={section.info} />;
  });
  return (
    <section className="all-web-content">
      <h2>{props.name}</h2>
      {displayInfo}
    </section>
  );
};

export default WebContentContainer;
