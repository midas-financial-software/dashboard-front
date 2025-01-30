import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given the Card component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Total Revenue' inside a heading", () => {
      const expectedTitle = /Total Revenue/i;

      render(<Card title={"Total Revenue"} />);

      const cardTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(cardTitle).toBeInTheDocument();
    });
  });
});
