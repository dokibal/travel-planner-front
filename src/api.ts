import type { AxiosResponse } from "axios";
import axios from "axios";
import type { ItineraryInput, ItineraryOutput } from "./types/travel";
import type { City } from "./types/city";

const API_URL: string = import.meta.env.VITE_BACKEND_URL;

export const createItinerary = async (
  itineraryInput: ItineraryInput
): Promise<ItineraryOutput | null> => {
  const response: AxiosResponse = await axios.post<ItineraryOutput>(
    `${API_URL}/ai/itinerary`,
    itineraryInput
  );
  return response.data;
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const wakeup = async () => {
  await axios.get(`${API_URL}/wakeup`);
};

export const getCities = async (searchTerm: string | null): Promise<City[]> => {
  const response: AxiosResponse = await axios.get<City[]>(`${API_URL}/cities`, {
    params: { searchTerm },
  });
  return response.data;
};
