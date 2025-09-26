import { givenItineraryOutput } from "../../test/mock";
import { renderWithProviders } from "../../test/utils";
import type { ItineraryOutput } from "../../types/travel";
import Itinerary from "./Itinerary";
import { screen } from "@testing-library/react";

describe("Itinerary test", () => {
  it("should render city and list of days", () => {
    const itineraryOutput: ItineraryOutput = givenItineraryOutput();
    renderWithProviders(<Itinerary itineraryOutput={itineraryOutput} />);

    expect(
      screen.getByText(
        `Your amazing itinerary to ${itineraryOutput.city} is ready!`
      )
    ).toBeInTheDocument();

    itineraryOutput.days.forEach((d) => {
      expect(
        screen.getByText(new RegExp(`Day\\s*${d.day}`))
      ).toBeInTheDocument();

      d.activities.forEach((a) => {
        expect(screen.getByText(a)).toBeInTheDocument();
      });
    });
  });
});
