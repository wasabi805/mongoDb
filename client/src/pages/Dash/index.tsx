import { FC, ReactElement } from "react";
import { DashContainer } from "./styled";
import HeaderBar from "./components/HeaderBar";
import LeftNav from "./components/LeftNav";
import DashContent from "./components/DashContent";
import DashBody from "./components/DashBody";

interface DashProps extends React.PropsWithChildren {
  className?: string;
  children?: ReactElement;
}

const Dash: FC<DashProps> = () => {
  return (
    <DashContainer>
      {/* <Login />  */}
      <HeaderBar>Top</HeaderBar>

      <DashBody className="dash-body-container">
        <LeftNav className="dash-left-nav">left</LeftNav>
        <DashContent className="dash-content">body</DashContent>
      </DashBody>
    </DashContainer>
  );
};

export default Dash;
