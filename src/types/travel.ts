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

export enum Budget {
  BUDGET = "Budget",
  MID_RANGE = "Mid-range",
  LUXURY = "Luxury",
}

export enum Transportation {
  "Walking",
  "Public Transport",
  "Car Rental",
  "Biking / E-bike",
  "Taxi",
  "Private Driver",
}

export enum Weather {
  "Sunny and Warm",
  "Mild / Spring",
  "Cool / Autumn",
  "Cold / Winter",
  "Avoid Rainy Season",
}

export type ItineraryInput = {
  destination: string;
  days: number;
  travelType: TravelType;
  budget?: Budget;
  transportation?: Transportation;
  weather?: Weather;
};

export type Day = {
  day: number;
  activities: string[];
};

export type ItineraryOutput = {
  city: string;
  days: Day[];
};
