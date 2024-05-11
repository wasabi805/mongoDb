import { styled, useMediaQuery, Box } from "@mui/material";

export const HeaderBarContainer = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;
  console.log("what is breakpoints", breakpoints);
  //   const isMobile = !useMediaQuery(breakpoints.up("sm"));
  //   const isTablet = useMediaQuery(breakpoints.up("md"));
  const isDeskTop = useMediaQuery(breakpoints.up("lg"));

  //   console.log("what is brs", { isMobile, isTablet });

  return `
        border: 1px solid lime;
        height: 4rem;

        .hamburger{
            display : ${isDeskTop && `none`};
        }

    `;
});
