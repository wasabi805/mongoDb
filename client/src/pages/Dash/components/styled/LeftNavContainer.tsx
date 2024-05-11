import { styled, useMediaQuery, Box } from "@mui/material";

export const LeftNavContainer = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;
  //   console.log("what is breakpoints", breakpoints);
  //   const isMobile = !useMediaQuery(breakpoints.up("sm"));
  //   const isTablet = useMediaQuery(breakpoints.up("md"));
  const isDeskTop = useMediaQuery(breakpoints.up("lg"));
  //   console.log("what is isTablet", isTablet);

  return `
        border: 1px solid yellow;
        background: yellow;

        //make child flexy

        display : ${isDeskTop === false ? `none` : `flex`};
        flex: 0 0 4rem;

        position: relative;
        flex-direction: column;
    `;
});
