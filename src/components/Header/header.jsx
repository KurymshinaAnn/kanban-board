import { useState } from "react";
import { Link } from "react-router-dom";

import User from "../User/User";

import { appRoutes } from "../../lib/appRoutes";

import { Container } from "../Common/Common.styled";
import {
  HeaderSection,
  HeaderBlock,
  HeaderNav,
  HeaderButtonNewTask,
} from "./Header.styled";
import { useUser } from "../../hooks/useUser";

function Header() {
  const { user } = useUser();

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
            <HeaderButtonNewTask>
              <Link to={appRoutes.NEW_TASK}>Создать новую задачу</Link>
            </HeaderButtonNewTask>

            <a href="#" className="header__user _hover02" onClick={togglePopUp}>
              {user.name}
            </a>
            {isOpened && <User />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderSection>
  );
}
export default Header;
