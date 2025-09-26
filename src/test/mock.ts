import type { City } from "../types/city";
import {
  TravelType,
  type ItineraryInput,
  type ItineraryOutput,
} from "../types/travel";

export function givenItineraryInput(): ItineraryInput {
  return {
    destination: "San Francisco",
    days: 2,
    travelType: TravelType.SIGHTSEEING,
  };
}

export function givenItineraryOutput(): ItineraryOutput {
  return {
    city: "San Francisco",
    days: [
      {
        day: 1,
        activities: [
          "Visit the Golden Gate Bridge",
          "Explore Golden Gate Park",
          "See the de Young Museum",
        ],
      },
      {
        day: 2,
        activities: [
          "Tour Alcatraz Island",
          "Visit Fisherman's Wharf",
          "Explore Pier 39",
        ],
      },
    ],
  };
}

export function givenCity1(): City {
  return {
    name: "Shanghai",
    latitude: 31.22222,
    longitude: 121.45806,
    countryCode: "CN",
    countryName: "China",
    population: 24874500,
    elevation: 12,
    timeZone: "Asia/Shanghai",
  };
}

export function givenCity2(): City {
  return {
    name: "San Francisco",
    latitude: 37.77493,
    longitude: -122.41942,
    countryCode: "US",
    countryName: "United States",
    population: 827526,
    elevation: 28,
    timeZone: "America/Los_Angeles",
  };
}

export function givenCities(): City[] {
  return [givenCity1(), givenCity2()];
}
