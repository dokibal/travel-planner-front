import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from "@mui/material";
import type { ItineraryOutput } from "../../types/travel";
import { ExpandMore, Star } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

type ItineraryProps = {
  itineraryOutput: ItineraryOutput;
};

export default function Itinerary({
  itineraryOutput,
}: Readonly<ItineraryProps>) {
  return (
    <Card sx={{ mt: 2, borderRadius: 5, padding: 5 }} variant="outlined">
      <Typography
        variant="h5"
        sx={{ mb: 1 }}
      >{`Your amazing trip itinerary to ${itineraryOutput.city}`}</Typography>
      {itineraryOutput.days.map((day) => {
        return (
          <Accordion key={day.day} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h5">Day {day.day}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {day.activities.map((a, idx) => (
                  <ListItem key={idx}>
                    <ListItemIcon>
                      <Star color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={a} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Card>
  );
}
