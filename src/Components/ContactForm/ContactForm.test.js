import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("should render the ContactForm component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ContactForm />
      </BrowserRouter>
    );
    const content = getByText("Comments:");
    expect(content).toBeInTheDocument();
  });
});
