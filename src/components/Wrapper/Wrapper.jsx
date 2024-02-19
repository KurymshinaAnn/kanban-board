import { WrapperBlock } from "./Wrapper.styled";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getTasks, saveTask } from "../../api/api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

import Header from "../Header/Header";
import MainElement from "../MainElement/MainElement";
import { DndContext, MouseSensor, useSensor } from "@dnd-kit/core";

function Wrapper() {
  const { user } = useUser();
  const { tasks, setTasks } = useTasks();

  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = [mouseSensor];

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

  const onDragEnd = async (e) => {
    const newStatus = e.over.data.current.title;
    const targetTask = e.active.data.current.id;
    const task = tasks.filter((t) => t._id === targetTask)[0];
    if (task == undefined || newStatus === task.status) {
      return;
    }
    await handleTaskCategoryChange(task, newStatus);
  };

  const handleTaskCategoryChange = async (task, newStatus) => {
    saveTask({
      id: task._id,
      title: task.title,
      status: newStatus,
      description: task.description,
      topic: task.topic,
      date: task.date,
      token: user.token,
    })
      .then((data) => {
        setTasks(data.tasks);
      })

      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  };

  return (
    <WrapperBlock>
      <Outlet />
      <Header />
      <DndContext
        onDragEnd={onDragEnd}
        sensors={sensors}
      >
        <MainElement isLoaded={isLoaded} tasks={tasks} isError={isError} />
      </DndContext>
    </WrapperBlock>
  );
}

export default Wrapper;
