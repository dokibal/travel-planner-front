import { Box, Card, Typography } from "@mui/material";
import type { ItineraryOutput } from "../../types/travel";

type ItineraryProps = {
  itineraryOutput: ItineraryOutput;
};

export default function Itinerary({
  itineraryOutput,
}: Readonly<ItineraryProps>) {
  return (
    <Card sx={{ mt: 2, borderRadius: 5, padding: 5 }} variant="outlined">
      <Typography variant="h4">{itineraryOutput.city}</Typography>
      {itineraryOutput.days.map((day) => {
        return (
          <Box sx={{ m: 2 }}>
            <Typography variant="h5">Day {day.day}:</Typography>
            <ul>
              {day.activities.map((a) => (
                <li>{a}</li>
              ))}
            </ul>
          </Box>
        );
      })}
    </Card>
  );
}
