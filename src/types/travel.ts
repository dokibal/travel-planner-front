export enum TravelType {
  SIGHTSEEING = "Sightseeing / Cultural",
  RELAXATION = "Relaxation / Leisure",
  ADVENTURE = "Adventure / Outdoor",
  CULINARY = "Food & Drink / Culinary",
  SHOPPING = "Shopping",
  NIGHTLIFE = "Nightlife / Entertainment",
  FAMILY = "Family / Kid-friendly",
  ROMANTIC = "Romantic / Honeymoon",
  WELLNESS = "Wellness / Health",
}

export type ItineraryInput = {
  destination: string;
  days: number;
  travelType: TravelType;
};

export type Day = {
  day: number;
  activities: string[];
};

export type ItineraryOutput = {
  city: string;
  days: Day[];
};
