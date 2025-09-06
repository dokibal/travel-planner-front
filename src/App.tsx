import { Container, Box } from "@mui/material";
import CreateItinerary from "./features/create-itinerary/CreateItinerary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";

function App() {
  const queryClient: QueryClient = new QueryClient();

  return (
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
          <CreateItinerary />
        </Container>

        <Footer />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
