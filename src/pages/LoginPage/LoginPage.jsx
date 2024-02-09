import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

import { appRoutes } from "../../lib/appRoutes";
import { login } from "../../api/api";

import {
  Wrapper,
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalButtonEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalTitle,
} from "./LoginPage.styled";

import { GlobalStyled } from "../../Global.styled";
import "../../../css/signin.css";

function LoginPage() {
  const {loginUser} = useUser();

  const loginForm = {
    login: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginForm);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(loginData)
      .then((data) => {
        console.log(data);
        loginUser(data.user)
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <>
      <GlobalStyled />

      <Wrapper>
        <ContainerSignin>
          <Modal>
            <ModalBlock>
              <ModalTitle>
                <h2>Вход</h2>
              </ModalTitle>
              <ModalFormLogin>
                <input
                  className="modal__input"
                  type="text"
                  id="formlogin"
                  value={loginData.login}
                  onChange={handleInputChange}
                  name="login"
                  placeholder="Эл. почта"
                />
                <input
                  className="modal__input"
                  type="password"
                  id="formpassword"
                  value={loginData.password}
                  onChange={handleInputChange}
                  name="password"
                  placeholder="Пароль"
                />

                <ModalButtonEnter onClick={handleLogin}>Войти</ModalButtonEnter>

                <ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                </ModalFormGroup>
              </ModalFormLogin>
            </ModalBlock>
          </Modal>
        </ContainerSignin>
      </Wrapper>
    </>
  );
}

export default LoginPage;
