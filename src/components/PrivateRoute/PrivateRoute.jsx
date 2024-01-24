import { Navigate, Outlet } from "react-router";
import { appRoutes } from "../../lib/appRoutes";

function PrivateRoute({ user }) {
  if (!user) {
    return <Navigate to={appRoutes.LOGIN} />;
  }
  return <Outlet />;
}

export default PrivateRoute;
