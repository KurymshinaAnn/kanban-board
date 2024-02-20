import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

import Calendar from "../Calendar/Calendar";
import { saveTask, deleteTask } from "../../api/api";
import ThemeLabel from "../Task/ThemeLabel";

import {
  CardCalendar,
  CardCalendarBlock,
  SubTitle,
} from "../NewTask/NewTask.styled";
import {
  BrowseBlock,
  BrowseButtonGroup,
  BrowseContent,
  BrowseForm,
  BrowseStatus,
  BrowseTitle,
  BrowseTopBlock,
  BrowseWrap,
  ButtonClose,
  ButtonDelete,
  ButtonEdit,
  ButtonGroup,
  FormBrowseArea,
  FormBrowseBlock,
  StatusTheme,
  StatusThemes,
  StatusTitle,
} from "./ModalTask.styled";

function ModalTask({ isEdit = false }) {
  const { user } = useUser();
  const { tasks, refreshTasks } = useTasks();

  let { taskId } = useParams();

  const task = tasks.filter((task) => {
    const id = task._id;
    return id === taskId;
  })[0];
  console.log(tasks);
  console.log(tasks.filter((t) => taskId === t._id));
  const [selected, setSelected] = useState(task.date);

  const [userTask, setUserTask] = useState({
    title: task.title,
    topic: task.topic,
    status: task.status,
    description: task.description,
  });

  const handleInputChange = (e) => {
    if (isEdit) {
      const { name, value } = e.target;
      setUserTask({
        ...userTask,
        [name]: value,
      });
    }
  };

  const handleSaveTask = async (e) => {
    e.preventDefault();
    await saveTask({
      id: taskId,
      token: user.token,
      title: userTask.title,
      status: userTask.status,
      description: userTask.description,
      topic: userTask.topic,
      date: selected,
    })
      .then((data) => {
        refreshTasks(data.tasks);
      })
      .catch(() => {
        alert("Ошибка");
      });
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    setUserTask({
      title: task.title,
      topic: task.topic,
      status: task.status,
      description: task.description,
    });
    setSelected(task.date);
  };

  const handleDeleteTask = async (e) => {
    e.preventDefault();
    await deleteTask({
      id: taskId,
      token: user.token,
    })
      .then((data) => {
        refreshTasks(data.tasks);
      })
      .catch(() => {
        alert("Ошибка");
      });
  };

  const handleStatusTheme = (e) => {
    if (isEdit) {
      const status = e.target.getAttribute("data-status");
      setUserTask({
        ...userTask,
        status: status,
      });
    }
  };

  return (
    <BrowseBlock>
      <BrowseContent>
        <BrowseTopBlock>
          <BrowseTitle>{userTask.title}</BrowseTitle>
          <ThemeLabel large={true} topic={userTask.topic}></ThemeLabel>
        </BrowseTopBlock>
        <BrowseStatus>
          <StatusTitle>Статус</StatusTitle>
          <StatusThemes>
            <StatusTheme
              data-status="Без статуса"
              $enabled={isEdit || userTask.status === "Без статуса"}
              $selected={userTask.status === "Без статуса"}
              onClick={handleStatusTheme}
            >
              <p data-status="Без статуса">Без статуса</p>
            </StatusTheme>
            <StatusTheme
              data-status="Нужно сделать"
              $enabled={isEdit || userTask.status === "Нужно сделать"}
              $selected={userTask.status === "Нужно сделать"}
              onClick={handleStatusTheme}
            >
              <p data-status="Нужно сделать">Нужно сделать</p>
            </StatusTheme>
            <StatusTheme
              data-status="В работе"
              $enabled={isEdit || userTask.status === "В работе"}
              $selected={userTask.status === "В работе"}
              onClick={handleStatusTheme}
            >
              <p data-status="В работе">В работе</p>
            </StatusTheme>
            <StatusTheme
              data-status="Тестирование"
              $enabled={isEdit || userTask.status === "Тестирование"}
              $selected={userTask.status === "Тестирование"}
              onClick={handleStatusTheme}
            >
              <p data-status="Тестирование">Тестирование</p>
            </StatusTheme>
            <StatusTheme
              data-status="Готово"
              $enabled={isEdit || userTask.status === "Готово"}
              $selected={userTask.status === "Готово"}
              onClick={handleStatusTheme}
            >
              <p data-status="Готово">Готово</p>
            </StatusTheme>
          </StatusThemes>
        </BrowseStatus>
        <BrowseWrap>
          <BrowseForm>
            <FormBrowseBlock>
              <SubTitle>Описание задачи</SubTitle>
              <FormBrowseArea
                value={userTask.description}
                onChange={handleInputChange}
                name="description"
                readOnly={!isEdit}
                placeholder="Введите описание задачи..."
              ></FormBrowseArea>
            </FormBrowseBlock>
          </BrowseForm>
          <CardCalendarBlock>
            <CardCalendar>Даты</CardCalendar>
            <Calendar selected={selected} setSelected={setSelected} />
          </CardCalendarBlock>
        </BrowseWrap>
        {isEdit ? (
          <BrowseButtonGroup>
            <ButtonGroup>
              <ButtonEdit onClick={handleSaveTask}>Сохранить</ButtonEdit>
              <ButtonEdit onClick={handleCancelEdit}>Отменить</ButtonEdit>
              <ButtonEdit onClick={handleDeleteTask}>Удалить задачу</ButtonEdit>
            </ButtonGroup>
            <ButtonGroup>
              <Link to={appRoutes.MAIN}>
                <ButtonClose>Закрыть</ButtonClose>
              </Link>
            </ButtonGroup>
          </BrowseButtonGroup>
        ) : (
          <BrowseButtonGroup>
            <ButtonGroup>
              <Link to={appRoutes.EDIT_TASK + "/" + taskId}>
                <ButtonEdit>Редактировать задачу</ButtonEdit>
              </Link>
              <ButtonDelete onClick={handleDeleteTask}>
                Удалить задачу
              </ButtonDelete>
            </ButtonGroup>
            <ButtonGroup>
              <Link to={appRoutes.MAIN}>
                <ButtonClose>Закрыть</ButtonClose>
              </Link>
            </ButtonGroup>
          </BrowseButtonGroup>
        )}
      </BrowseContent>
    </BrowseBlock>
  );
}

export default ModalTask;
