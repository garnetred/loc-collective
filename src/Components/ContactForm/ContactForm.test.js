import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ContactForm from "./ContactForm";

describe("WebContentContainer", () => {
  it("should render the WebContentContainer component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ContactForm />
      </BrowserRouter>
    );
    const content = getByText("Comments:");
    expect(content).toBeInTheDocument();
  });
});
