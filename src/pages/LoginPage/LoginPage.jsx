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
  ModalMessageError,
  ModalInput,
} from "./LoginPage.styled";

import { GlobalStyled } from "../../Global.styled";

function LoginPage() {
  const { loginUser } = useUser();
  const [isError, setIsError] = useState(false);

  const loginForm = {
    login: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginForm);

  const handleLogin = async (e) => {
    setIsError(false);
    e.preventDefault();
    await login(loginData)
      .then((data) => {
        console.log(data);
        loginUser(data.user);
      })
      .catch((error) => {
        setIsError(true);
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
              <ModalFormLogin onSubmit={(e) => e.preventDefault}>
                <ModalInput
                  type="text"
                  value={loginData.login}
                  onChange={handleInputChange}
                  name="login"
                  placeholder="Эл. почта"
                />
                <ModalInput
                  type="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  name="password"
                  placeholder="Пароль"
                />
                {isError && (
                  <ModalMessageError>
                    Введенные вами данные не распознаны. Проверьте свой логин и
                    пароль и повторите попытку входа.
                  </ModalMessageError>
                )}
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
