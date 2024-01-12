import Column from "../Column/Column";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainElement({ tasks, isLoaded }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {isLoaded
              ? "Данные загружаются"
              : statusList.map((item) => (
                  <Column
                    key={item}
                    tasks={tasks.filter((task) => task.status === item)}
                    title={item}
                  />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainElement;
