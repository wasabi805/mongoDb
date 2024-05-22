import { styled, Box } from "@mui/material";
import useAppMedia from "../../../../hooks/useAppMedia";

export const UserAddAvatarPreviewContainer = styled(Box)(({ theme }) => {
  const { isMobile, isTablet, isDesktop, isTv } = useAppMedia({ theme });

  return `
      display: flex;
      padding: 3rem;

      .add-user-avatar{
        background: lime;
        flex: ${isDesktop ? "0 0 60%" : isTv ? "0 0 60%" : "0 0 0"};
        
      }

      .user-add-avatar-preview{
        display : ${isMobile ? `none` : isTablet ? `none` : `block`};

        flex: ${isDesktop ? "0 0 40%" : isTv ? "0 0 40%" : "0 0 0"};

        .avatar-preview{
          
        }
      }
      

  `;
});
