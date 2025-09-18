import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { LoadingText } from "./LoadingTemplate";

export const Loading = () => {
  const [seconds, setSeconds] = useState<number>(0);

  const WAIT_TIME_STEP: number = 0.5;
  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((s) => s + WAIT_TIME_STEP),
      WAIT_TIME_STEP * 1000
    );
    return () => clearInterval(interval);
  }, []);

  const getMessage = (): string => {
    if (seconds < 10)
      return "Waking up the server... it's just taking a moment to start.";
    if (seconds < 30)
      return "Preparing the backend, this may take around 30 seconds...";
    if (seconds < 45) return "Still working on it, thanks for your patience!";
    return "This is taking longer than usual, but we’re almost there...";
  };

  return (
    seconds > WAIT_TIME_STEP && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LoadingText variant="h5" sx={{ fontWeight: "bold" }}>
          {getMessage()}
        </LoadingText>
      </Box>
    )
  );
};
