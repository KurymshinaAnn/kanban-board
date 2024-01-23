//import Browse from "../Browse/Browse";
//import ExitBlock from "../ExitBlock/ExitBlock";
import Header from "../Header/Header";
import MainElement from "../MainElement/MainElement";
//import NewTaskBlock from "../NewTaskBlock/NewTaskBlock";

import { WrapperBlock } from "./Wrapper.styled";

import { demoTasks } from "../../date";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

function Wrapper() {
  const [tasks, setTasks] = useState(demoTasks);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
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
      {/* <ExitBlock />
      <NewTaskBlock />
      <Browse /> */}
      <Outlet />
      <Header addTask={addTask} />
      <MainElement isLoaded={isLoaded} tasks={tasks} />
    </WrapperBlock>
  );
}

export default Wrapper;
