import { render, screen } from "@testing-library/react";
import App from "./App";

describe("dasda", () => {
  describe("das", () => {
    test("dasdaa", () => {
      const titleApp = "Hello World";

      render(<App />);

      const headingApp = screen.getByRole("heading", { name: titleApp });

      expect(headingApp).toBeInTheDocument();
    });
  });
});
