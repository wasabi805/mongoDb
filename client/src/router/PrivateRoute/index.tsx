import { FunctionComponent, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../types/Slices";

interface PrivateRouteProps extends React.PropsWithChildren {
  somePropName?: "foo";
  children: ReactElement;
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  children,
}) => {
  const isHomeAuth = useSelector<RootState>(
    (state) => state.loginSlice.isHomeAuth,
  );

  if (!isHomeAuth) {
    return <Navigate to="/" />;
  }

  return children;
};
