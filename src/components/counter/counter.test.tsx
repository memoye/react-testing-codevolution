import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button");
    expect(incrementButton).toBeInTheDocument();
  });

  // test the initial state of the component
  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  // test user interactions - mouse-click
  test("renders a count of '1' after clicking the 'Increment' button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    // user events are 'async' so we have to 'await'
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  // Exercise:
  test("renders a count of '2' after clicking the 'Increment' button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    // user events are 'async' so we have to 'await'
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});

/**Convenience APIs
 * - click()
 * - dblClick()
 * - tripleClick()
 * - hover()
 * - unhover()
 */
