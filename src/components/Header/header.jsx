import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import User from "../User/User";

import { appRoutes } from "../../lib/appRoutes";

import { Container } from "../Common/Common.styled";
import {
  HeaderSection,
  HeaderBlock,
  HeaderNav,
  HeaderButtonNewTask,
  HeaderLogo,
  HeaderUser,
} from "./Header.styled";
import { useUser } from "../../hooks/useUser";

function Header() {
  const { user } = useUser();

  const [isOpened, setIsOpened] = useState(false);
  const location = useLocation();

  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened);
  }

  useEffect(() => {
    setIsOpened((value) => {
      if (value) {
        return false;
      }
      return value;
    });
  }, [location]);

  return (
    <HeaderSection>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <Link to={appRoutes.MAIN}>
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <Link to={appRoutes.NEW_TASK}>
              <HeaderButtonNewTask>Создать новую задачу</HeaderButtonNewTask>
            </Link>
            <HeaderUser onClick={togglePopUp}>{user.name}</HeaderUser>
            {isOpened && <User />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderSection>
  );
}
export default Header;
