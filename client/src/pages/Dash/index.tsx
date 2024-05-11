import { DashContainer } from "./styled";
// import Login from "../Login";
import HeaderBar from "./components/HeaderBar";
import LeftNav from "./components/LeftNav";
import DashContent from "./components/DashContent";
// import { DashBodyContainer } from "./components/styled/DashBodyContainer";
import DashBody from "./components/DashBody";

const Dash = () => {
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
