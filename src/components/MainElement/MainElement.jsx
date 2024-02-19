import Column from "../Column/Column";
import ColumnSkeleton from "../Column/ColumnSkeleton";
import { Container } from "../Common/Common.styled";
import { Main, MainBlock, MainContent } from "./MainElement.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainElement({ tasks, isLoaded, isError }) {
  return (
    <Main>
      <Container>
        <MainBlock>
          <MainContent>
            {isError
              ? "Ошибка загрузки"
              : statusList.map((item) =>
                  isLoaded ? (
                    <ColumnSkeleton key={item} count={3} title={item} />
                  ) : (
                    <Column
                      key={item}
                      tasks={tasks.filter((task) => task.status === item)}
                      title={item}
                    />
                  )
                )}
          </MainContent>
        </MainBlock>
      </Container>
    </Main>
  );
}

export default MainElement;
