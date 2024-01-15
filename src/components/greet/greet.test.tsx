import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  // create virtual DOM of the component with 'render'
  render(<Greet />);
  // check if the text "Hello" is present
  const textElement = screen.getByText(/hello/i); // 'getByText' takes strings and regexes
  // test assertion with 'expect' from jest
  expect(textElement).toBeInTheDocument();
});
