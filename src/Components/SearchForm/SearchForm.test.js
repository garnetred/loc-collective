import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@sheerun/mutationobserver-shim";
import { BrowserRouter } from "react-router-dom";
import SearchForm from "./SearchForm";
window.MutationObserver = require("@sheerun/mutationobserver-shim");

describe("SearchForm", () => {
  it("should render the SearchForm component", () => {
    const retrieveSearchResults = jest.fn();
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <SearchForm retrieveSearchResults={retrieveSearchResults} />
      </BrowserRouter>
    );
    const location = getByPlaceholderText("location");
    expect(location).toBeInTheDocument();
  });

  it("should submit the form if all fields have been filled out", async () => {
    const retrieveSearchResults = jest.fn();
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <BrowserRouter>
        <SearchForm retrieveSearchResults={retrieveSearchResults} />
      </BrowserRouter>
    );

    fireEvent.change(getByTestId("select"), {
      target: { value: "locs+dreadlocks" },
    });

    fireEvent.change(getByPlaceholderText("location"), {
      target: { value: "Boston" },
    });

    fireEvent.click(getByText("search"));
    await waitFor(() => expect(retrieveSearchResults).toHaveBeenCalled());
  });

  it("should not submit the form if fields are empty", async () => {
    const retrieveSearchResults = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <SearchForm retrieveSearchResults={retrieveSearchResults} />
      </BrowserRouter>
    );

    fireEvent.click(getByText("search"));
    await waitFor(() =>
      expect(getByText("Please input a location.")).toBeInTheDocument()
    );
  });
});
