import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import {
  ExitBlock,
  ExitButtonNo,
  ExitButtonYes,
  ExitFormGroup,
  ExitTitle,
} from "./Exit.styled";

function Exit({ onExit }) {
  return (
    <ExitBlock>
      <ExitTitle>Выйти из аккаунта?</ExitTitle>
      <form>
        <ExitFormGroup>
          <ExitButtonYes onClick={onExit}>Да, выйти</ExitButtonYes>
          <ExitButtonNo>
            <Link to={appRoutes.MAIN}>Нет, остаться</Link>
          </ExitButtonNo>
        </ExitFormGroup>
      </form>
    </ExitBlock>
  );
}
export default Exit;
