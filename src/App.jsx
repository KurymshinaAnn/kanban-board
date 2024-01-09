import "./App.css";
import Column from "./components/Column/Column";
import Exit from "./components/Exit/Exit";
import NewTask from "./components/NewTask/NewTask";
import ModalTask from "./components/ModalTask/ModalTask";
import Header from "./components/header/header";

const demoTasks = [
  {
    theme: "Web Design",
    title: "Работай",
    date: "09.01.24",
  },
  {
    theme: "Research",
    title: "Доработай",
    date: "09.01.24",
  },
  {
    theme: "Copywriting",
    title: "Переработай",
    date: "09.01.24",
  },
  {
    theme: "Web Design",
    title: "Работай",
    date: "09.01.23",
  },
  {
    theme: "Research",
    title: "Доработай",
    date: "09.01.23",
  },
];
function App() {
  return (
    <div className="wrapper">
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <Exit/>
        </div>
      </div>

      <div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
          <NewTask/>
        </div>
      </div>

      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <ModalTask/>
        </div>
      </div>

      <Header/>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column tasks={demoTasks} title="Без статуса" />
              <Column tasks={demoTasks} title="Нужно сделать" />
              <Column tasks={demoTasks} title="В работе" />
              <Column tasks={demoTasks} title="Тестирование" />
              <Column tasks={demoTasks} title="Готово" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
