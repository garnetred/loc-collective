import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchResults from "./SearchResults";
import { singleSalon } from "../../mockData";

describe("SearchResults", () => {
  it("should render the SearchResults component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SearchResults
          key={singleSalon.id}
          name={singleSalon.name}
          image_url={singleSalon.image_url}
          url={singleSalon.url}
          review_count={singleSalon.review_count}
          distance={singleSalon.distance}
          rating={singleSalon.rating}
          price={singleSalon.price}
          id={singleSalon.id}
        />
      </BrowserRouter>
    );
    const salonName = getByText("Sisterlocks Boston LOC-UR Integrity");
    expect(salonName).toBeInTheDocument();
  });
});
