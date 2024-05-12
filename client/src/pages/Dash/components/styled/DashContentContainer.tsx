import { styled, Box, useMediaQuery } from "@mui/material";

export const DashContentContainer = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;
  //   console.log("what is breakpoints", breakpoints);
  //   const isMobile = !useMediaQuery(breakpoints.up("sm"));
  //   const isTablet = useMediaQuery(breakpoints.up("md"));
  const isDesktop = useMediaQuery(breakpoints.up("lg"));

  console.log("what is isTablet", isDesktop);

  return `
        border: 1px solid cyan;

        //make child flexy
        flex : 2 0 0;

        display: flex;
        align-items: ${isDesktop ? `center` : ``};
        
    `;
});
