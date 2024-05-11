import { FC, ReactElement } from "react";

/* ref: https://blog.logrocket.com/react-children-prop-typescript/ */
interface AppLayoutProps extends React.PropsWithChildren {
  // name: 'foo',
  children: ReactElement;
}

const AppLayout: FC<AppLayoutProps> = (props: AppLayoutProps) => {
  return <div className="app-layout">{props.children}</div>;
};
export default AppLayout;
