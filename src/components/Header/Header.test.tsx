import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When rendered", () => {
    test("Then it should show the webiste logo with the alternative text 'Midas Capital logo'", () => {
      const expectedAltText = /midas capital logo/i;

      render(<Header />);

      const websiteLogo = screen.getByAltText(expectedAltText);

      expect(websiteLogo).toBeInTheDocument();
    });

    test("Then it shoul show 'Dashboard' inside a heading", () => {
      const expectedHeadingText = /dashboard/i;

      render(<Header />);

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
