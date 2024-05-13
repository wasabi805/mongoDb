import React, { FC } from "react";
import { useAppDispatch } from "../../../store";
import { HeaderBarContainer } from "./styled/HeaderBarContainer";
import { setIsHomeAuth } from "../../../store/slices/loginSlice";
import { Button } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import { setTabClick } from "../../../store/slices/dashboardSlice";

interface HeaderBarProps extends React.PropsWithChildren {
  className?: string;
}
const HeaderBar: FC<HeaderBarProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    return dispatch(setIsHomeAuth({ bool: false }));
  };

  const handleClickTab = ({ name }: { name: string }) => {
    return dispatch(setTabClick({ currentTab: name }));
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeaderBarContainer>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <div style={{ display: "flex" }}>
        <Menu
          id="hamburger"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleClickTab({ name: "users" })}>
            Users
          </MenuItem>
          <MenuItem onClick={() => handleClickTab({ name: "addUser" })}>
            Add User
          </MenuItem>
          <MenuItem onClick={() => handleClickTab({ name: "uploadDoc" })}>
            Upload Doc
          </MenuItem>
        </Menu>
        {/* <div>HeaderBar</div> */}
        <span>
          <Button onClick={() => handleLogOut()}>Log Out</Button>
        </span>
      </div>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
