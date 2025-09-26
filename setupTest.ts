import "@testing-library/jest-dom";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { beforeAll, beforeEach, afterAll } from "vitest";
import { givenCities, givenItineraryOutput } from "./src/test/mock";

const server = setupServer(
  http.get("**/api/wakeup", () => {
    return HttpResponse.json();
  }),
  http.post("**/api/ai/itinerary", () => {
    return HttpResponse.json(givenItineraryOutput());
  }),
  http.get("**/api/geo/cities", () => {
    return HttpResponse.json(givenCities());
  })
);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});
beforeEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
