import ExitBlock from "../../components/ExitBlock/ExitBlock";
import { useUser } from "../../hooks/useUser";

function ExitPage() {
  const {logoutUser} = useUser();

  const onExit = (ev) => {
    ev.preventDefault();
    logoutUser();
  };

  return (
    <>
      <ExitBlock onExit={onExit} />
    </>
  );
}

export default ExitPage;
