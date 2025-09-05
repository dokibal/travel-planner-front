import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { AppImage, HeaderContainer } from "./AppTemplate";
import type { AxiosResponse } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [itinerary, setItinerary] = useState<string | null>(null);

  const getItinerary = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await axios.get<string>(
        "https://travel-planner-back-7x1q.onrender.com/api/ai/itinerary"
      );
      setItinerary(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getItinerary();
  }, []);

  return (
    <Box
      className="app-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" color="transparent">
        <Toolbar>
          <HeaderContainer>
            <AppImage src="travel.svg" />
            <Typography variant="h6">Travel Planner</Typography>
          </HeaderContainer>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          mt: 4,
          mb: 4,
        }}
      >
        <Typography variant="body1" color="textSecondary">
          Welcome to Travel Planner!
        </Typography>
        <div>{itinerary}</div>
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2025 Travel Planner. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
