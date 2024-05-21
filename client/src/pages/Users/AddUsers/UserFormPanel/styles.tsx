import { useState, useEffect } from "react";
import { styled, useMediaQuery, Box } from "@mui/material";
import useAppMedia from "../../../../hooks/useAppMedia";

export const AddUsersContainer = styled(Box)(({ theme }) => {
  const { isDevice, isMobile, isTablet, isDesktop, isTv } = useAppMedia({
    theme,
  });

  console.log("useHook", isMobile);

  return `
      
      .inputs-title{
       
        .title{
         
        }

        .avatar{

        }

      }


      div[class^="add-user-avatar"]{
        // background: blue;
        width: 100%;
      }
    }


    //ch1
      .inputs{
        display: flex;
        flex-wrap: wrap;
      
        .form_inputs{
          display: flex;
          flex-direction: column;
          flex : ${isMobile ? `0 0 100%;` : `0 0 50%;`}
        }

        .button-row{
            flex: 0 0 100%;
            display: flex;
            justify-content: center;
            padding: 5rem 0;
        }

      }


    //ch2
      .text-container{
       
      }

    `;
});
