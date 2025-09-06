import type { AxiosResponse } from "axios";
import axios from "axios";
import type { ItineraryInput, ItineraryOutput } from "./types/travel";

export const createItinerary = async (
  itineraryInput: ItineraryInput
): Promise<ItineraryOutput | null> => {
  try {
    const response: AxiosResponse = await axios.post<ItineraryOutput>(
      `${import.meta.env.VITE_BACKEND_URL}/ai/itinerary`,
      itineraryInput
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
