import { FC } from "react";
import { HeaderBarContainer } from "./styled/HeaderBarContainer";

interface HeaderBarProps extends React.PropsWithChildren {
  className?: string;
}
const HeaderBar: FC<HeaderBarProps> = () => {
  return (
    <HeaderBarContainer>
      <div style={{ display: "flex" }}>
        <div className={"hamburger"}>+</div>
        <div>HeaderBar</div>
      </div>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
