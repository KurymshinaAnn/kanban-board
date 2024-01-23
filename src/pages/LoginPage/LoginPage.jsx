import { Link } from "react-router-dom";
import "../../../css/signin.css";
import { appRoutes } from "../../lib/appRoutes";

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

function LoginPage() {
  return (
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
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <ModalButtonEnter>
                <a href="../main.html">Войти</a>{" "}
                {/* делала через <LinK> но почему-то не получилось, ссылка не работала */}
              </ModalButtonEnter>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
}

export default LoginPage;
