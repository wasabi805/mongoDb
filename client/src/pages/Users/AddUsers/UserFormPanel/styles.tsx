import { styled, Box } from "@mui/material";
import useAppMedia from "../../../../hooks/useAppMedia";
// div[class^="add-user-avatar"]
export const AddUsersContainer = styled(Box)(({ theme }) => {
  const { isMobile, isTablet, isDesktop, isTv } = useAppMedia({
    theme,
  });

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

            .add-user-email, .add-user-phone{
                width: ${isMobile ? `100%` : isDesktop ? `50%` : isTv ? `50%` : `100%`};
            }

            .add-user-state, .add-user-zipcode{
                width: ${isMobile ? `100%` : isDesktop ? `50%` : isTv ? `50%` : `100%`};
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
