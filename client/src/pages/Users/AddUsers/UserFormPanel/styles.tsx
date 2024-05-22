import { useState, useEffect } from "react";
import { styled, useMediaQuery, Box } from "@mui/material";
import useAppMedia from "../../../../hooks/useAppMedia";
// div[class^="add-user-avatar"]
export const AddUsersContainer = styled(Box)(({ theme }) => {
  const { isDevice, isMobile, isTablet, isDesktop, isTv } = useAppMedia({
    theme,
  });

  console.log("useHook", isMobile, isTablet);

  return `
        display: flex;
        padding: 2rem;
        // background: ${isMobile ? "red" : "blue"};

        .form_inputs{
            position: relative;

            .MuiFormControl-root{
                width: 100%;
                margin-bottom: 2rem;
            }
          
            flex: 0 0 ${isMobile ? `100%` : isTablet ? `100%` : `50%`};

            .button-row{
                display: flex;
                justify-content: center;
                padding: 5rem 0;
            }
        }

        .text-container{
            display: ${isMobile ? `none` : isTablet ? `none` : `inline`};
            padding: 2rem;
        }
    `;
});
