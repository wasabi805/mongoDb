import { FC, useState } from "react";
import { LeftNavContainer } from "./styled/LeftNavContainer";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Typography, Button } from "@mui/material";
import { useAppDispatch } from "../../../store";
import { setTabClick } from "../../../store/slices/dashboardSlice";

interface LeftNavProps extends React.PropsWithChildren {
  className: string;
}
const LeftNav: FC<LeftNavProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const [localState] = useState({
    tabs: [
      { name: "users", text: "View all users", icon: <GroupIcon /> },
      { name: "addUser", text: "Add User", icon: <GroupAddIcon /> },
      { name: "uploadDoc", text: "Upload Doc", icon: <FileUploadIcon /> },
    ],
  });

  const handleClickTab = ({ name }: { name: string }) => {
    return dispatch(setTabClick({ currentTab: name }));
  };

  return (
    <LeftNavContainer className={className}>
      {localState.tabs.map((item) => {
        return (
          <Button
            key={`left-nav-${item.name}`}
            sx={{ width: "12rem" }}
            onClick={() => handleClickTab({ name: item.name })}
          >
            <Typography>
              {item.icon} {item.text}{" "}
            </Typography>
          </Button>
        );
      })}
    </LeftNavContainer>
  );
};

export default LeftNav;
