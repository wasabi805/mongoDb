import { styled, useMediaQuery, Box } from "@mui/material";

export const LeftNavContainer = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;
  //   console.log("what is breakpoints", breakpoints);
  //   const isMobile = !useMediaQuery(breakpoints.up("sm"));
  //   const isTablet = useMediaQuery(breakpoints.up("md"));

  //   console.log("what is isTablet", isTablet);

  return `
        border: 1px solid yellow;
        background: yellow;

        //make child flexy

        flex: 0 0 4rem;
        
        display: flex;
        position: relative;
        flex-direction: column;
    `;
});
