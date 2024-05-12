import { styled, useMediaQuery, Box } from "@mui/material";

export const AddUsersContainer = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;
  //   console.log("what is breakpoints", breakpoints);

  const isMobile = !useMediaQuery(breakpoints.up("sm"));
  const isTablet = !useMediaQuery(breakpoints.up("md"));
  const isDesktop = useMediaQuery(breakpoints.up("lg"));
  //   console.log("yee", { isMobile, isTablet, isDesktop });
  return `
      display: flex;

    //ch1
      .inputs{
        border : 1px solid orange;
        display: flex;
        flex-wrap: wrap;
        flex : 0 0 ${(isMobile && 90) || (isTablet && 87) || (isDesktop && 50)}%;
        padding: 1rem;
     

        .col-1{
            display: flex;
            flex-direction: column;
            margin-right: ${(isTablet && `21px`) || (isDesktop && `21px`)};

            flex : 1 0 47%;
            & input{

                background: cyan;
            }
        }

        .col-2{
            display: flex;
            flex-direction: column;

            flex : 1 0 47%;
            // background: lime;
        }

        .submit-button{
            flex-basis: 100%;
        }

      }


    //ch2
      .text-container{
        border : 1px solid red;
        flex : 1 0 0;
        display: ${!isDesktop ? `none` : ``};



      }

    `;
});
