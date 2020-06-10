import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WebContent from "./WebContent";
import { styles } from "../../content-data";

describe("WebContent", () => {
  it("should render the WebContent component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <WebContent header={styles[0].header} info={styles[0].info} />
      </BrowserRouter>
    );
    const hairstyle = getByText("Interlocks");
    expect(hairstyle).toBeInTheDocument();
  });
});
