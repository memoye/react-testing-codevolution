import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list"); // finding the 'ul'
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem"); // finding all the 'li'
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders 'Login' button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("'Start learning' button is not rendered", () => {
    render(<Skills skills={skills} />);

    // even though we don't need the button in the doc as specified below, 'getBy' will always throw an error if it doesn't find what it's looking for. for this purpose, we use 'queryBy' which returns the matching node for the query and 'null' if it's not found
    // const startLearningButton = screen.getByRole("button", {
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});
