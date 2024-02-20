import { Link } from "react-router-dom";

import { useUser } from "../../hooks/useUser";

import { appRoutes } from "../../lib/appRoutes";
import {
  UserPopUp,
  UserName,
  UserMail,
  UserTheme,
  UserButton,
} from "./User.styled";

function User() {
  const { user } = useUser();

  return (
    <UserPopUp>
      <UserName>{user.name}</UserName>
      <UserMail>{user.login}</UserMail>
      <UserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </UserTheme>
      <Link to={appRoutes.EXIT}>
        <UserButton>Выйти</UserButton>
      </Link>
    </UserPopUp>
  );
}
export default User;
