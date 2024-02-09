import { Link } from "react-router-dom";

import { appRoutes } from "../../lib/appRoutes";
import { UserPopUp, UserName, UserMail, UserTheme, UserButton } from "./User.styled";
import { useUser } from "../../hooks/useUser";


function User() {
  const {user} = useUser();

  return (
    <UserPopUp>
      {/* <a href="">x</a> */}
      <UserName>{user.name}</UserName>
      <UserMail>{user.login}</UserMail>
      <UserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </UserTheme>
      <UserButton>
      <Link to={appRoutes.EXIT}>Выйти</Link>
      </UserButton>
    </UserPopUp>
  );
}
export default User;
