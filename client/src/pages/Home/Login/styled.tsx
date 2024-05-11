import { styled, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const LoginForm = styled(Box)(({ theme }) => {
  const { breakpoints } = theme;
  const isMobile = !useMediaQuery(breakpoints.up("sm"));

  return `
        display: flex;
        flex-direction: ${isMobile ? `column` : `row`} ;
        border: 1px solid cyan;


        .login-form-inputs{

            border: 1px solid magenta;

            posiition: relative;
            display: flex;
            flex-direction: column;
        

            padding: 3rem 1rem;

            & input{
                // flex 5 0 0;
                width: 100%;
            }

        }
    `;
});
