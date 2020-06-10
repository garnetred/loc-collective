import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText("loc collective.")).toBeInTheDocument();
  });

  it("can navigate to other pages", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const aboutDetails =
      "This site was designed to make the process of finding a loctician much easier for black people. In my own search for a loctician, I often noticed that it was difficult to filter out stylists who couldn’t do black hair or find stylists who specialized in locs other than traditional locs. It was even difficult to find people to start locs in less common ways. This site tries to make this process a little easier for others.";
    const resourcesDetails = "Cultural Appropriation";
    fireEvent.click(getByText("about"));
    expect(getByText(aboutDetails)).toBeInTheDocument();
    fireEvent.click(getByText("resources"));
    expect(getByText(resourcesDetails)).toBeInTheDocument();
  });
});

//tests
//can type in a search term and get the appropriate results displaying on the page
//if there aren't any appropriate results, will get 'no results found' in response
//can click on that result and then see more details on the page (like reviews)
//can click on the resources tab and see what's on that page
//can click on about and see what's there
//can click on styles and see what's there
