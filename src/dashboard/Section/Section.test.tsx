import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Given the Section component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Financials' inside a heading", () => {
      const expectedTitle = /Financials/i;
      const title = "Financials";

      render(<Section sectionTitle={title} />);

      const sectionTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(sectionTitle).toBeInTheDocument();
    });
  });
});
