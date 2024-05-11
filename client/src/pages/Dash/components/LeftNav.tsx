import { LeftNavContainer } from "./styled/LeftNavContainer";

const LeftNav = ({ className }) => {
  const items = ["users", "addUsers", "email", "upload"];

  return (
    <LeftNavContainer className={className}>
      {items.map((item) => {
        return <span>{item}</span>;
      })}
    </LeftNavContainer>
  );
};

export default LeftNav;
