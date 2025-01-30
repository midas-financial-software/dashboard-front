import { render, screen } from "@testing-library/react";
import Financials from "./Financials";

describe("Given the Financials component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Financials' inside a heading", () => {
      const expectedTitle = /Financials/i;

      render(<Financials />);

      const sectionTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(sectionTitle).toBeInTheDocument();
    });
  });
});
