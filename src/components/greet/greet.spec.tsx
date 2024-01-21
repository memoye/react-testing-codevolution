/**
 * Greet should render the text 'hello'.
 * If a name is passed into the component, it should render 'hello', followed by the name.
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe.skip("Greet", () => {
  // 'it' can be used in place of 'test'
  it("renders correctly", () => {
    // 'xit' is same as test.skip
    // xit("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello"); // 'getByText' takes strings and regexes
    expect(textElement).toBeInTheDocument();
  });

  // 'fit' is same as test.only
  it("renders with a name", () => {
    // fit("renders with a name", () => {
    render(<Greet name={"Brown"} />);
    const textElement = screen.getByText("Hello Brown");
    expect(textElement).toBeInTheDocument();
  });
});
