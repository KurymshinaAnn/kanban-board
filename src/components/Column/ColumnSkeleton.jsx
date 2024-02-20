import TaskSkeleton from "../Task/TaskSkeleton";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";

function ColumnSkeleton({ count, title }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {Array(count).fill(0).map((_task, index) => (
          <TaskSkeleton key={index} />
        ))}
      </Cards>
    </MainColumn>
  );
}
export default ColumnSkeleton;
