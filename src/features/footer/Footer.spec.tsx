import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer test", () => {
  it("should display page title", () => {
    render(<Footer />);

    expect(
      screen.getByText("© 2025 Dream Tripper. All rights reserved.")
    ).toBeInTheDocument();
  });
});
