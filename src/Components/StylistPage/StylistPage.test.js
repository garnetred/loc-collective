import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import StylistPage from "./StylistPage";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import "@sheerun/mutationobserver-shim";
import { fetchStylist } from "../../apiCalls";
import { singleSalonBusinessFetch } from "../../mockData";

window.MutationObserver = require("@sheerun/mutationobserver-shim");
jest.mock("../../apiCalls");
const id = "ZrFvwUE6r0UE2HwOtjtX6Q";

describe("StylistPage", () => {
  it("should render the StylistPage", async () => {
    fetchStylist.mockResolvedValue(singleSalonBusinessFetch);
    const { getByAltText } = render(
      <MemoryRouter>
        <StylistPage id={id} />
      </MemoryRouter>
    );

    //gotta mock out this implementation, but how?
    await waitFor(() => expect(getByAltText("yelp-logo")).toBeInTheDocument());
  });

  it("should display the appropriate result on the page", async () => {
    fetchStylist.mockReturnValue(Promise.resolve(singleSalonBusinessFetch));
    const { getByText } = render(
      <MemoryRouter>
        <StylistPage id={id} />
      </MemoryRouter>
    );
    await waitFor(() => expect(getByText("Bornu Locs")).toBeInTheDocument());
  });
});
