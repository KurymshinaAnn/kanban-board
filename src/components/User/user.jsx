import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { UserPopUp, UserName, UserMail, UserTheme, UserButton } from "./User.styled";


function User({ userData }) {
  return (
    <UserPopUp>
      {/* <a href="">x</a> */}
      <UserName>{userData.name}</UserName>
      <UserMail>{userData.login}</UserMail>
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
