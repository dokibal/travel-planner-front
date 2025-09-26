import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header test", () => {
  it("should display page title", () => {
    render(<Header />);

    expect(screen.getByText("Dream Tripper")).toBeInTheDocument();
  });
});
