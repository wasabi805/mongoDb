import { styled, Box, useMediaQuery } from "@mui/material";

export const DashContentContainer = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;

  return `
       background: beige;
   
    `;
});
