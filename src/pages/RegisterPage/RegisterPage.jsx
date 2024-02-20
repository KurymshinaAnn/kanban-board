import { Link } from "react-router-dom";
import { useState } from "react";
import { appRoutes } from "../../lib/appRoutes";
import { registration } from "../../api/api";
import { useUser } from "../../hooks/useUser";

import {
  Wrapper,
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalButtonSignupEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalTitle,
  ModalMessageError,
  ModalInput,
} from "./RegisterPage.styled";

import { GlobalStyled } from "../../Global.styled";

function RegisterPage() {
  const { loginUser } = useUser();
  const [isError, setIsError] = useState(false);

  const registerForm = {
    name: "",
    login: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(registerForm);

  const handleRegister = async (e) => {
    setIsError(false);
    e.preventDefault();
    await registration(registerData)
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

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <ContainerSignup>
          <Modal>
            <ModalBlock>
              <ModalTitle>
                <h2>Регистрация</h2>
              </ModalTitle>
              <ModalFormLogin>
                <ModalInput
                  type="text"
                  value={registerData.name}
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Имя"
                />
                <ModalInput
                  type="text"
                  value={registerData.login}
                  onChange={handleInputChange}
                  name="login"
                  placeholder="Эл. почта"
                />
                <ModalInput
                  type="password"
                  value={registerData.password}
                  onChange={handleInputChange}
                  name="password"
                  placeholder="Пароль"
                />
                {isError && (
                  <ModalMessageError>
                    Введенные вами данные не корректны. Чтобы завершить
                    регистрацию, введите данные корректно и повторите попытку.
                  </ModalMessageError>
                )}
                <ModalButtonSignupEnter onClick={handleRegister}>
                  Зарегистрироваться
                </ModalButtonSignupEnter>
                <ModalFormGroup>
                  <p>Уже есть аккаунт?</p>
                  <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
                </ModalFormGroup>
              </ModalFormLogin>
            </ModalBlock>
          </Modal>
        </ContainerSignup>
      </Wrapper>
    </>
  );
}

export default RegisterPage;
