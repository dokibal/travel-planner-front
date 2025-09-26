import { type ItineraryInput, type ItineraryOutput } from "../../types/travel";
import { givenItineraryInput, givenItineraryOutput } from "../../test/mock";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../test/utils";
import CreateItinerary from "./CreateItinerary";
import userEvent from "@testing-library/user-event";
import * as api from "./../../api.ts";

describe("CreateItinerary test", () => {
  const user = userEvent.setup({ delay: 0 });

  it("should send create itinerary request after filling all the fields", async () => {
    const itineraryInput: ItineraryInput = givenItineraryInput();
    const itineraryOutput: ItineraryOutput = givenItineraryOutput();

    const createItinerarySpy = vi.spyOn(api, "createItinerary");

    renderWithProviders(<CreateItinerary />);

    await user.click(screen.getByLabelText("Destination"));
    await user.click(
      screen.getByRole("option", {
        name: new RegExp(itineraryInput.destination),
      })
    );

    fireEvent.change(screen.getByRole("slider", { name: "Number of days" }), {
      target: { value: itineraryInput.days },
    });

    await user.click(screen.getByRole("combobox", { name: "Travel type" }));
    await user.click(
      screen.getByRole("option", {
        name: itineraryInput.travelType,
      })
    );
    expect(
      screen.queryByText(
        `Your amazing itinerary to ${itineraryOutput.city} is ready!`
      )
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Generate" }));

    expect(createItinerarySpy).toHaveBeenCalledTimes(1);
    expect(createItinerarySpy).toHaveBeenCalledWith(itineraryInput);

    expect(
      screen.getByText(
        `Your amazing itinerary to ${itineraryOutput.city} is ready!`
      )
    ).toBeInTheDocument();
  });
});
