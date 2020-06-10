import React from "react";
import "./WebContentContainer.css";
import WebContent from "../WebContent/WebContent";

const WebContentContainer = (props) => {
  //should I map through smoething here?
  //I could map through the data? hmm
  //web content was supposed to be each section itself
  //all web content should do is display the actual data in each individual paragraph or section or whatever, not determine the logic itself
  const displayInfo = props.data.map((section) => {
    return (
      <WebContent header={section.header} info={section.info}/>
    );
  });
  console.log(displayInfo);
  return (
    <section className="all-web-content">
      <h2>{props.name}</h2>
      {displayInfo}
    </section>
  );
};

export default WebContentContainer;
