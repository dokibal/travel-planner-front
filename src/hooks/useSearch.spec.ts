import { act, renderHook } from "@testing-library/react";
import { useSearch } from "./useSearch";

describe("useSearch test", () => {
  it("should setSearchTerm change searchTerm after 500 ms", () => {
    vi.useFakeTimers();

    const newSearchTerm: string = "TEST";

    const { result } = renderHook(useSearch);

    act(() => result.current.setSearchTerm(newSearchTerm));

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.searchTerm).toStrictEqual(newSearchTerm);

    vi.useRealTimers();
  });

  it("should setSearchTerm not change searchTerm in 500 ms", () => {
    vi.useFakeTimers();

    const newSearchTerm: string = "TEST";

    const { result } = renderHook(useSearch);

    act(() => result.current.setSearchTerm(newSearchTerm));

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.searchTerm).toBeNull();

    vi.useRealTimers();
  });
});
