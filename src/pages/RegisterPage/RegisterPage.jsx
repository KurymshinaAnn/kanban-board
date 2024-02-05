import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { appRoutes } from "../../lib/appRoutes";
import { registration } from "../../api/api";
import {
  Wrapper,
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalButtonSignupEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalTitle,
} from "./RegisterPage.styled";

import { GlobalStyled } from "../../Global.styled";
import "../../../css/signup.css";

function RegisterPage({ setUserData }) {
  let navigate = useNavigate();

  const registerForm = {
    name: "",
    login: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(registerForm);

  const handleRegister = async (e) => {
    e.preventDefault();
    await registration(registerData)
      .then((data) => {
        console.log(data);
        setUserData(data.user);
      })
      .then(() => {
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
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
                <input
                  className="modal__input first-name"
                  type="text"
                  id="name"
                  value={registerData.name}
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Имя"
                />
                <input
                  className="modal__input login"
                  type="text"
                  id="loginReg"
                  value={registerData.login}
                  onChange={handleInputChange}
                  name="login"
                  placeholder="Эл. почта"
                />
                <input
                  className="modal__input password-first"
                  type="password"
                  id="passwordFirst"
                  value={registerData.password}
                  onChange={handleInputChange}
                  name="password"
                  placeholder="Пароль"
                />

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
