import { useNavigate } from "react-router";
import ExitBlock from "../../components/ExitBlock/ExitBlock";
import { appRoutes } from "../../lib/appRoutes";

function ExitPage({ setUserData }) {
  const navigate = useNavigate();

  const onExit = (ev) => {
    ev.preventDefault();
    setUserData(null);
    navigate(appRoutes.LOGIN);
  };

  return (
    <>
      <ExitBlock onExit={onExit} />
    </>
  );
}

export default ExitPage;
