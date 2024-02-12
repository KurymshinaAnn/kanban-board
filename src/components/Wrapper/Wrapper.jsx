import { WrapperBlock } from "./Wrapper.styled";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getTasks } from "../../api/api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks"

import Header from "../Header/Header";
import MainElement from "../MainElement/MainElement";

function Wrapper() {
  const {user} = useUser();
  const {tasks, setTasks} = useTasks(); 

  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getTasks({ token: user.token })
      .then((data) => {
        console.log(data.tasks);
        setTasks(data.tasks);
      })
      .then(() => {
        setIsLoaded(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);


  return (
    <WrapperBlock>
      <Outlet />
      <Header />
      <MainElement isLoaded={isLoaded} tasks={tasks} isError={isError}/>
    </WrapperBlock>
  );
}

export default Wrapper;
