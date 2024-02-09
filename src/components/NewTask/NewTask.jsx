import { useState } from "react";

import Calendar from "../calendar/calendar";
import { createTask } from "../../api/api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

import {
  FormNewBlock,
  FormNewCreate,
  NewCardBlock,
  NewCardClose,
  NewCardContent,
  NewCardForm,
  NewCardTitle,
  NewCardWrap,
  SubTitle,
} from "./NewTask.styled";


function NewTask() {
  const {user} = useUser();
  const {refreshTasks} = useTasks();

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
        refreshTasks(data.tasks)
      })
      .catch(() => {
        alert("Ошибка");
      });
  };

  // if поле вода пусто,то заполни его, функция для проверки заполнения полей
  // надо сделать котекст для карточки, как мы это делали с юзерскими карточками
  // адаптировать приложение  для получения данных из контекста
  // надо реализовать добавление карточки, из контекста
  // надо получать данные из контекста

  let originalTask = {
    ...newUserTask,
    data: selected,
  };
  console.log(originalTask);

  return (
    <NewCardBlock>
      <NewCardContent>
        <NewCardTitle>Создание задачи</NewCardTitle>
        <NewCardClose>&#10006;</NewCardClose>
        <NewCardWrap>
          <NewCardForm>
            <FormNewBlock>
              <SubTitle>Название задачи</SubTitle>
              <input
                value={newUserTask.title}
                onChange={handleInputChange}
                className="form-new__input"
                name="title"
                id="formTitle"
                placeholder="Введите название задачи..."
              />
            </FormNewBlock>
            <FormNewBlock>
              <SubTitle>Описание задачи</SubTitle>
              <textarea
                value={newUserTask.description}
                onChange={handleInputChange}
                className="form-new__area"
                name="description"
                id="textArea"
                placeholder="Введите описание задачи..."
              ></textarea>
            </FormNewBlock>
          </NewCardForm>
          <div className="pop-new-card__calendar calendar">
            {/* <p className="calendar__ttl subttl">Даты</p> */}
            <Calendar selected={selected} setSelected={setSelected} />
          </div>
        </NewCardWrap>
        <div className="pop-new-card__categories categories">
          <p className="categories__p subttl">Категория</p>
          <div className="categories__themes">
            {/* <div className="categories__theme _orange _active-category">
              <p className="_orange">Web Design</p>
            </div>
            <div className="categories__theme _green">
              <p className="_green">Research</p>
            </div>
            <div className="categories__theme _purple">
              <p className="_purple">Copywriting</p>
            </div> */}

            <div className="prod_checbox">
              <div className="radio-toolbar">
                <input
                  value="Web Design"
                  name="topic"
                  onChange={handleInputChange}
                  type="radio"
                  id="radio1"
                />
                <label htmlFor="radio1">Web Design</label>

                <input
                  value="Research"
                  name="topic"
                  onChange={handleInputChange}
                  type="radio"
                  id="radio2"
                />
                <label htmlFor="radio2">Research</label>

                <input
                  value="Copywriting"
                  name="topic"
                  onChange={handleInputChange}
                  type="radio"
                  id="radio3"
                />
                <label htmlFor="radio3">Copywriting</label>
              </div>
            </div>
          </div>
        </div>
        <FormNewCreate onClick={handleCreateTask}>Создать задачу</FormNewCreate>
      </NewCardContent>
    </NewCardBlock>
  );
}
export default NewTask;
