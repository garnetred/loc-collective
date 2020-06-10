import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchForm from "./SearchForm";

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
    const submitForm = jest.fn();
    const { getByPlaceholderText, getByText } = render(
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
    await waitFor(() => expect(submitForm).toHaveBeenCalled());
  });

  it("should not submit the form if fields are empty", () => {
    const retrieveSearchResults = jest.fn();
    const submitForm = jest.fn();
    const { getByText } = render(
      <BrowserRouter>
        <SearchForm retrieveSearchResults={retrieveSearchResults} />
      </BrowserRouter>
    );
    fireEvent.click(getByText("search"));
    expect(submitForm).not.toHaveBeenCalled();
  });
});

//tests
//onchange handler is working
//search form is being rendered
//on submit is working
//submit form is invoked when form is submitted
