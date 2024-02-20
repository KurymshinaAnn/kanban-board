import { useState } from "react";
import { Link } from "react-router-dom";

import Calendar from "../Calendar/Calendar";
import { createTask } from "../../api/api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";
import { appRoutes } from "../../lib/appRoutes";

import {
  CardCalendar,
  CardCalendarBlock,
  CategoriesSubTitle,
  CategoriesTheme,
  CategoriesThemes,
  FormNewArea,
  FormNewBlock,
  FormNewCreate,
  FormNewInput,
  GreenLabel,
  NewCardBlock,
  NewCardCategories,
  NewCardClose,
  NewCardContent,
  NewCardForm,
  NewCardTitle,
  NewCardWrap,
  OrangeLabel,
  PurpleLabel,
  SubTitle,
} from "./NewTask.styled";

function NewTask() {
  const { user } = useUser();
  const { refreshTasks } = useTasks();

  const [selected, setSelected] = useState();

  const [newUserTask, setNewUserTask] = useState({
    title: "",
    topic: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewUserTask({
      ...newUserTask,
      [name]: value,
    });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    await createTask({
      title: newUserTask.title,
      description: newUserTask.description,
      topic: newUserTask.topic,
      date: selected,
      token: user.token,
    })
      .then((data) => {
        refreshTasks(data.tasks);
      })
      .catch(() => {
        alert("Ошибка");
      });
  };

  let originalTask = {
    ...newUserTask,
    data: selected,
  };
  console.log(originalTask);

  return (
    <NewCardBlock>
      <NewCardContent>
        <NewCardTitle>Создание задачи</NewCardTitle>
        <NewCardClose>
          <Link to={appRoutes.MAIN}>&#10006;</Link>
        </NewCardClose>
        <NewCardWrap> 
          <NewCardForm>
            <FormNewBlock>
              <SubTitle>Название задачи</SubTitle>
              <FormNewInput
                value={newUserTask.title}
                onChange={handleInputChange}
                name="title"
                id="formTitle"
                placeholder="Введите название задачи..."
              />
            </FormNewBlock>
            <FormNewBlock>
              <SubTitle>Описание задачи</SubTitle>
              <FormNewArea
                value={newUserTask.description}
                onChange={handleInputChange}
                name="description"
                placeholder="Введите описание задачи..."
              ></FormNewArea>
            </FormNewBlock>
          </NewCardForm>
          <CardCalendarBlock>
            <CardCalendar>Даты</CardCalendar>
            <Calendar selected={selected} setSelected={setSelected} />
          </CardCalendarBlock>
        </NewCardWrap>
        <NewCardCategories>
          <CategoriesSubTitle>Категория</CategoriesSubTitle>
          <CategoriesThemes>
            <CategoriesTheme>
              <input
                value="Web Design"
                name="topic"
                onChange={handleInputChange}
                type="radio"
                id="web-design-radio"
              />
              <OrangeLabel
                $active={newUserTask.topic === "Web Design"}
                htmlFor="web-design-radio"
              >
                Web Design
              </OrangeLabel>
            </CategoriesTheme>
            <CategoriesTheme>
              <input
                value="Research"
                name="topic"
                onChange={handleInputChange}
                type="radio"
                id="research-radio"
              />
              <GreenLabel
                $active={newUserTask.topic === "Research"}
                htmlFor="research-radio"
              >
                Research
              </GreenLabel>
            </CategoriesTheme>
            <CategoriesTheme>
              <input
                value="Copywriting"
                name="topic"
                onChange={handleInputChange}
                type="radio"
                id="copyright-radio"
              />
              <PurpleLabel
                $active={newUserTask.topic === "Copywriting"}
                htmlFor="copyright-radio"
              >
                Copywriting
              </PurpleLabel>
            </CategoriesTheme>
          </CategoriesThemes>
        </NewCardCategories>
        <FormNewCreate onClick={handleCreateTask}>Создать задачу</FormNewCreate>
      </NewCardContent>
    </NewCardBlock>
  );
}
export default NewTask;
