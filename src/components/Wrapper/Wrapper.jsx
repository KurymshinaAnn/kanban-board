import { WrapperBlock } from "./Wrapper.styled";
import { demoTasks } from "../../date";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getTasks } from "../../api/api";

import Header from "../Header/Header";
import MainElement from "../MainElement/MainElement";

function Wrapper({ userData }) {
  const [tasks, setTasks] = useState(demoTasks);

  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getTasks({ token: userData.token })
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

  function addTask() {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        theme: "Research",
        title: "Доработай",
        date: "09.01.23",
        status: "Готово",
      },
    ]);
  }

  return (
    <WrapperBlock>
      <Outlet />
      <Header addTask={addTask} userData={userData}/>
      <MainElement isLoaded={isLoaded} tasks={tasks} isError={isError}/>
    </WrapperBlock>
  );
}

export default Wrapper;
