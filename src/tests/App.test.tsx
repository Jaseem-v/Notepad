import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

describe("renders home page with contents", () => {
  afterEach(cleanup);

  it("should have 'untitled.txt - notepad' title", () => {
    render(<App />);
    const titleElement = screen.getByText(/untitled.txt - notepad/i);
    expect(titleElement).toBeInTheDocument();
  });
});
