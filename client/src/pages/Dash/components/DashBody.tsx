import { FC } from "react";
import { DashBodyContainer } from "./styled/DashBodyContainer";

interface DashBodyProps extends React.PropsWithChildren {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const DashBody: FC<DashBodyProps> = ({ children }) => {
  return <DashBodyContainer>{children}</DashBodyContainer>;
};

export default DashBody;
