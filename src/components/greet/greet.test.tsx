/**
 * Greet should render the text 'hello'.
 * If a name is passed into the component, it should render 'hello', followed by the name.
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  // create virtual DOM of the component with 'render'
  render(<Greet />);
  // check if the text "Hello" is present
  const textElement = screen.getByText("Hello"); // 'getByText' takes strings and regexes
  // test assertion with 'expect' from jest
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name={"Brown"} />);
  const textElement = screen.getByText("Hello Brown");
  expect(textElement).toBeInTheDocument();
});
