import { Container, Box, ThemeProvider } from "@mui/material";
import CreateItinerary from "./features/create-itinerary/CreateItinerary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import { wakeup } from "./api";
import { useState } from "react";
import { Loading } from "./features/backend-loading/Loading";
import theme from "./theme";

function App() {
  const queryClient: QueryClient = new QueryClient();

  const [backendLoading, setBackendLoading] = useState<boolean>(true);

  wakeup().then(() => setBackendLoading(false));

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box
          className="app-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />

          <Container
            sx={{
              flex: 1,
              mt: 4,
              mb: 4,
            }}
          >
            {backendLoading ? <Loading /> : <CreateItinerary />}
          </Container>

          <Footer />
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
