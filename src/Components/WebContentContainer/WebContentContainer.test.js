import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WebContentContainer from "./WebContentContainer";
import { about } from "../../content-data";

describe("WebContentContainer", () => {
  it("should render the WebContentContainer component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <WebContentContainer name="About" data={about} />
      </BrowserRouter>
    );
    const content = getByText(
      "If you have any questions, comments, or additional concerns, please feel free to reach out via the contact form, available here. You can also view my other work via GitHub."
    );
    expect(content).toBeInTheDocument();
  });
});
