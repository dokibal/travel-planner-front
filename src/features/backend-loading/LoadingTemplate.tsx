import { Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import theme from "../../theme";

const colorShift = keyframes`
  0% { color: ${theme.palette.primary.light}; }
  50% { color: ${theme.palette.primary.dark}; }
  100% { color: ${theme.palette.primary.light}; }
`;

export const LoadingText = styled(Typography)`
  margin-top: 1em;
  animation: ${colorShift} 3s ease-in-out infinite;
`;
