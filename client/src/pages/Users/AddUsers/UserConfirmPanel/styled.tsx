import { styled, useMediaQuery, Box } from "@mui/material";
import useAppMedia from "../../../../hooks/useAppMedia";

export const UserConfirmPanelContainer = styled(Box)(({ theme }) => {
  const { isDevice, isMobile, isTablet, isDesktop, isTv } = useAppMedia({
    theme,
  });

  console.log("DEVICE", isDevice);
  console.log("MOBILE", isMobile);
  console.log("TABLE", isTablet);
  console.log("DESKTOP", isDesktop);
  console.log("TV", isTv);
  return `
    .confirm-user-data {
      div[class$="row"] {
        display: flex;
        flex-direction: ${isMobile ? `column` : `row`};
        font-size: 1.5rem;
        margin-bottom: 1rem;

        span:nth-of-type(1){
            flex: 0 0 ${!isMobile ? `10rem` : isTablet ? `0` : `0`};
            background: pink;
        }

      }
  
      .user-info {
        
      }
  
      .user-address: {
      }
    }
  `;
});
