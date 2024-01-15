/**
 * Greet should render the text 'hello'.
 * If a name is passed into the component, it should render 'hello', followed by the name.
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// Group multiple tests with 'describe'
/**
 * You can use nesr describe blocks
 * You can use .skip and .only methods with describe blocks
 * You can have multiple describe blocks in same file
 * Test Suite = A file
 *
 */
describe("Greet", () => {
  test("renders correctly", () => {
    // create virtual DOM of the component with 'render'
    render(<Greet />);
    // check if the text "Hello" is present
    const textElement = screen.getByText("Hello"); // 'getByText' takes strings and regexes
    // test assertion with 'expect' from jest
    expect(textElement).toBeInTheDocument();
  });

  // '.only' makes sure only said test is run on save
  // test.only("Greet renders with a name", () => {
  test("renders with a name", () => {
    render(<Greet name={"Brown"} />);
    const textElement = screen.getByText("Hello Brown");
    expect(textElement).toBeInTheDocument();
  });
});
