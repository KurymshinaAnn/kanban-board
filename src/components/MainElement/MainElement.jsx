import Column from "../Column/Column";
import { Container } from "../Common/Common.styled";
import { Main, MainBlock, MainContent } from "./MainElement.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainElement({ tasks, isLoaded }) {
  return (
    <Main>
      <Container>
        <MainBlock>
          <MainContent>
            {isLoaded
              ? "Данные загружаются"
              : statusList.map((item) => (
                  <Column
                    key={item}
                    tasks={tasks.filter((task) => task.status === item)}
                    title={item}
                  />
                ))}
          </MainContent>
        </MainBlock>
      </Container>
    </Main>
  );
}

export default MainElement;
