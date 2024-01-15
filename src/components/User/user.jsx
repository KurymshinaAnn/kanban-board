import { UserPopUp, UserName, UserMail, UserTheme, UserButton } from "./User.styled";


function User() {
  return (
    <UserPopUp>
      {/* <a href="">x</a> */}
      <UserName>Ivan Ivanov</UserName>
      <UserMail>ivan.ivanov@gmail.com</UserMail>
      <UserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </UserTheme>
      <UserButton>
        <a href="#popExit">Выйти</a>
      </UserButton>
    </UserPopUp>
  );
}
export default User;
