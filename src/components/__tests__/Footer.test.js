import { render } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

test("Footer should load when page is loaded", () => {
  const footerComponent = render(<Footer />);
  const footer = footerComponent.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});
