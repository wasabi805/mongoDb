import { styled, Box, useMediaQuery } from "@mui/material";

export const DashContentContainer = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;

  return `
        width: 100%;
        background: beige;
        padding: 2rem;
        min-height: 88vh;
   
    `;
});
