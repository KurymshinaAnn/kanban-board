import "./App.css";
import Exit from "./components/Exit/Exit";
import NewTask from "./components/NewTask/NewTask";
import ModalTask from "./components/ModalTask/ModalTask";
import Header from "./components/Header/Header";
import MainElement from "./components/MainElement/MainElement";
import { demoTasks } from "./date";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(demoTasks);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000)
  }, [])

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
    <div className="wrapper">
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <Exit />
        </div>
      </div>

      <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
          <NewTask />
        </div>
      </div>

      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <ModalTask />
        </div>
      </div>

      <Header addTask={addTask} />
      <MainElement isLoaded={isLoaded} tasks={tasks} />
    </div>
  );
}

export default App;
