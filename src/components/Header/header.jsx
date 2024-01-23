import { Container } from "../Common/Common.styled";
import User from "../User/User";
import { useState } from "react";
import { HeaderSection, HeaderBlock, HeaderNav } from "./Header.styled";

function Header({ addTask }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened);
  }
  return (
    <HeaderSection>
      <Container>
        <HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <button
              className="header__btn-main-new _hover01"
              id="btnMainNew"
              onClick={addTask}
            >
              Создать новую задачу
            </button>
            <a href="#" className="header__user _hover02" onClick={togglePopUp}>
              Ivan Ivanov
            </a>
            {isOpened && <User />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderSection>
  );
}
export default Header;
