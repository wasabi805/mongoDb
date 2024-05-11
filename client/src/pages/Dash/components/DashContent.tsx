import { FC } from "react";
import { DashContentContainer } from "./styled/DashContentContainer";
import { useAppSelector } from "../../../store";

import Users from "../../Users";

interface DashContentProps extends React.PropsWithChildren {
  className: string;
}

const DashContent: FC<DashContentProps> = ({ className }) => {
  //this is the comp that will more than likey be hooked up redux and dynamically change with left nav and url
  const { currentTab } = useAppSelector((state) => state.dashboardSlice);

  console.log("what is currentTab", currentTab);
  return (
    <DashContentContainer className={className}>
      DashContent Comp
      {currentTab === "users" && <Users />}
    </DashContentContainer>
  );
};

export default DashContent;
