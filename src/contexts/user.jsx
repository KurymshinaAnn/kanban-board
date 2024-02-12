import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { appRoutes } from "../lib/appRoutes";

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState(getUserFromLocalStorage());

  const loginUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate(appRoutes.MAIN);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate(appRoutes.LOGIN);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
