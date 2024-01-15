import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// 'test' is from jest
// '.skip' makes sure said test is skipped
test.skip("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); // 'expect' is from jest
});
