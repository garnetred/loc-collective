import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchResultsContainer from "./SearchResultsContainer";
import { salonData } from "../../mockData";

describe("SearchResultsContainer", () => {
  it("should render the SearchResultsContainer component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SearchResultsContainer results={salonData} />
      </BrowserRouter>
    );
    const distance = getByText("distance");
    expect(distance).toBeInTheDocument();
  });
});
