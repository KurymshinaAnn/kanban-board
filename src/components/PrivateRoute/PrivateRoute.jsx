import { Navigate, Outlet } from "react-router";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

function PrivateRoute() {
  const {user} = useUser();
  
  if (!user) {
    return <Navigate to={appRoutes.LOGIN} />;
  }
  return <Outlet />;
}

export default PrivateRoute;
