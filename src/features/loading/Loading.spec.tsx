import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";
import { act } from "react";

describe("Loading test", () => {
  it("should Loading display different texts by time", () => {
    vi.useFakeTimers();

    render(<Loading />);

    act(() => {
      vi.advanceTimersByTime(1001);
    });
    expect(
      screen.getByText(
        "Waking up the server... it's just taking a moment to start."
      )
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(9000);
    });
    expect(
      screen.getByText(
        "Preparing the backend, this may take around 30 seconds..."
      )
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(20000);
    });
    expect(
      screen.getByText("Still working on it, thanks for your patience!")
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(15000);
    });
    expect(
      screen.getByText(
        "This is taking longer than usual, but we’re almost there..."
      )
    ).toBeInTheDocument();

    vi.useRealTimers();
  });
});
