import { styled, Box } from "@mui/material";

export const DashBodyContainer = styled(Box)(() => {
  //   const { breakpoints } = theme;
  //   console.log("what is breakpoints", breakpoints);
  //   const isMobile = !useMediaQuery(breakpoints.up("sm"));
  //   const isTablet = useMediaQuery(breakpoints.up("md"));

  //   console.log("what is isTablet", isTablet);

  return `
        border: 1px solid magenta;
        background: azure;
        position: relative;
        display: flex;
         
    `;
});
