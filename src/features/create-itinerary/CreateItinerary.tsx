import { useMutation } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";
import { createItinerary } from "../../api";
import TravelForm from "./TravelForm";
import type { ItineraryInput } from "../../types/travel";
import Itinerary from "./Itinerary";

function CreateItinerary() {
  const {
    mutate,
    data: itineraryOutput,
    isPending,
  } = useMutation({
    mutationFn: async (itineraryInput: ItineraryInput) =>
      createItinerary(itineraryInput),
  });

  return (
    <>
      <TravelForm createItinerary={mutate} />
      {isPending ? (
        <LinearProgress />
      ) : (
        itineraryOutput && <Itinerary itineraryOutput={itineraryOutput} />
      )}
    </>
  );
}

export default CreateItinerary;
