import { screen } from "@testing-library/react";
import TravelForm from "./TravelForm";
import { renderWithProviders } from "../../test/utils";
import { userEvent } from "@testing-library/user-event";

describe("TravelForm test", () => {
  const createItineraryMock = vi.fn();

  it("should generate button be disabled if a request is ongoing", async () => {
    renderWithProviders(
      <TravelForm createItinerary={createItineraryMock} isLoading={true} />
    );

    const generateButton: HTMLElement = screen.getByRole("button", {
      name: "Generating...",
    });
    expect(generateButton).toBeDisabled();
  });

  it("should not send create itinerary request if the fields are not filled", async () => {
    renderWithProviders(
      <TravelForm createItinerary={createItineraryMock} isLoading={false} />
    );

    const user = userEvent.setup({ delay: 0 });
    await user.click(screen.getByRole("button", { name: "Generate" }));

    expect(createItineraryMock).not.toHaveBeenCalled();
  });
});
