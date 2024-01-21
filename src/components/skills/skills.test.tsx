import { render, screen, logRoles } from "@testing-library/react";
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

  test("'Strt learning' button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // const startLearningButton = screen.getByRole("button", { // using 'getBy' will fail because it does not wait for element to be rendered on the screen ('Start learning' renders after a delay of 500ms)

    // screen.debug(); //  prints the DOM to the terminal so you can debug easily
    /**Do not commit debug statements */
    const startLearningButton = await screen.findByRole(
      "button",
      {
        // returns a promis
        name: "Start learning",
      },
      {
        timeout: 2000, // override default 1000ms timeout
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
