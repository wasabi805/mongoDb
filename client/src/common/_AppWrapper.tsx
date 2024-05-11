import { FC, ReactElement } from "react";
import { AppContainer } from "./styled";

/* ref: https://blog.logrocket.com/react-children-prop-typescript/ */
interface AppLayoutProps extends React.PropsWithChildren {
  // name: 'foo',
  children: ReactElement;
}

const AppLayout: FC<AppLayoutProps> = (props: AppLayoutProps) => {
  return (
    <AppContainer className="app-container">{props.children}</AppContainer>
  );
};
export default AppLayout;
