import { styled, Box } from "@mui/material";

export const UserAddAvatarPreviewContainer = styled(Box)`
  background: aqua;
  display: flex;
  border: 2px solid brown;
  flex-direction: column;
  width: 30vw;

  .avatar-preview {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;
