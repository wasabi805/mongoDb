import { useState, useEffect } from "react";
import { styled, useMediaQuery, Box } from "@mui/material";
import useAppMedia from "../../hooks/useAppMedia";

export const AddUsersContainer = styled(Box)(({ theme }) => {
  const { isDevice, isMobile, isTablet, isDesktop, isTv } = useAppMedia({
    theme,
  });

  console.log("useHook", isMobile);

  return `
      
      .inputs-title{
        display: flex;    
        width: 80%;
       
        .title{
         display: flex;
         width: 100%;
         .text{
          color: cyan;

          .title-avatar {
            display: ${isMobile ? `none` : isTv ? `none` : `inline`};
          }
         }
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

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};
export const DropzoneContainer = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;

  height: 9rem;
`;
