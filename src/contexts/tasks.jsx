import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { appRoutes } from "../lib/appRoutes";

export const TasksContext = createContext(null);


export const TasksProvider = ({ children }) => {
  let navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const refreshTasks = (tasks) => {
    setTasks(tasks);
    navigate(appRoutes.MAIN);
  };

  return (
    <TasksContext.Provider value={{ tasks, refreshTasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};