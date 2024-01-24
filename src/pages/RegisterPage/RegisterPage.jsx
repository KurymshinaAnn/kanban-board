import { Link } from "react-router-dom";
import "../../../css/signup.css";
import { appRoutes } from "../../lib/appRoutes";


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

function RegisterPage() {
  return (
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
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <ModalButtonSignupEnter>
                <a href="../main.html">Зарегистрироваться</a>{" "}
                {/* аналогично с логинпейдж */}
              </ModalButtonSignupEnter>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
}

export default RegisterPage;
