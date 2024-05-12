import { FC } from "react";
import { HeaderBarContainer } from "./styled/HeaderBarContainer";
import { setIsHomeAuth } from "../../../store/slices/loginSlice";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../../store";

interface HeaderBarProps extends React.PropsWithChildren {
  className?: string;
}
const HeaderBar: FC<HeaderBarProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    return dispatch(setIsHomeAuth({ bool: false }));
  };

  return (
    <HeaderBarContainer>
      <div style={{ display: "flex" }}>
        <div className={"hamburger"}>+</div>
        <div>HeaderBar</div>
        <span>
          <Button onClick={() => handleLogOut()}>Log Out</Button>
        </span>
      </div>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
