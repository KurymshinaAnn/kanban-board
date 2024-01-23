import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

import {
  Wrapper,
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalButtonEnter,
  ModalFormLogin,
  ModalTitle,
} from "./ErrorPage.styled";

function ErrorPage() {
  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>ОЙ 404 ОЙ</h2>
            </ModalTitle>
            <ModalFormLogin>
              <ModalButtonEnter>
                <Link to={appRoutes.MAIN}>Домой</Link>
              </ModalButtonEnter>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
}

export default ErrorPage;
