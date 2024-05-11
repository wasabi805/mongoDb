import { styled, useMediaQuery, Box } from "@mui/material";

export const LoginForm = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;
  //   console.log("what is breakpoints", breakpoints);
  const isMobile = !useMediaQuery(breakpoints.up("sm"));
  const isTablet = useMediaQuery(breakpoints.up("md"));

  return `
        display: flex;
        flex-direction: ${isMobile ? `column` : `row`};
        align-items: center;
        height: 100%;
        margin : ${isTablet && `auto 8rem`};

        border: 1px solid cyan;
        
        //ch1
        .login-info{
            flex: 1 0 0;

            margin: 2rem;
            // background: blue;
            border: 6px solid lime;
        }


        //ch2
        .login-form-inputs{
            flex: 1 0 0;
            justify-content: ${!isMobile && `center`};
            // align-items: ${!isMobile && `center`};


            border: 1px solid magenta;

            posiition: relative;
            display: flex;
            flex-direction: column;
        

            padding: 3rem 1rem;

            .inputs-title{
                display : ${isMobile && `none`};
                margin-bottom: 3rem;
            }


            & input{
                // flex 5 0 0;
                width: 100%;
            }

        }
    `;
});
