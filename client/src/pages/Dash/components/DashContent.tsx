import { DashContentContainer } from "./styled/DashContentContainer";
const DashContent = ({ className }) => {
  //this is the comp that will more than likey be hooked up redux and dynamically change with left nav and url

  return (
    <DashContentContainer className={className}>
      DashContent Comp
    </DashContentContainer>
  );
};

export default DashContent;
