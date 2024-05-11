import { FC } from "react";
import { LeftNavContainer } from "./styled/LeftNavContainer";

interface LeftNavProps extends React.PropsWithChildren {
  className: string;
}
const LeftNav: FC<LeftNavProps> = ({ className }) => {
  const items = ["users", "addUsers", "email", "upload"];

  return (
    <LeftNavContainer className={className}>
      {items.map((item, idx) => {
        return <span key={`${idx}-${item}`}>{item}</span>;
      })}
    </LeftNavContainer>
  );
};

export default LeftNav;
