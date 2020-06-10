import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import "@sheerun/mutationobserver-shim";
// import {mutationobserver} from 'mutationobserver-shim'
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

    fireEvent.change(getByText("-- Please select a style --"), {
      target: { value: "interlocks+sisterlocks" },
    });

    fireEvent.change(getByPlaceholderText("location"), {
      target: { value: "Boston" },
    });
    fireEvent.click(getByText("search"));
    fireEvent.submit(getByTestId("form"));
    await waitFor(() => expect(retrieveSearchResults).toHaveBeenCalled());
  });

  it("should not submit the form if fields are empty", () => {
    const retrieveSearchResults = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <SearchForm retrieveSearchResults={retrieveSearchResults} />
      </BrowserRouter>
    );
    fireEvent.click(getByText("search"));
    expect(retrieveSearchResults).not.toHaveBeenCalled();
  });
});
