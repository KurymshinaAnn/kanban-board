import { useDroppable } from "@dnd-kit/core";
import Task from "../Task/Task";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";

function Column({ tasks, title }) {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${title}`,
    data: {
      title: title,
    },
  });

  return (
    <MainColumn ref={setNodeRef} $over={isOver}>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {tasks.map((task) => (
          <Task id={task._id} key={task._id} task={task} />
        ))}
      </Cards>
    </MainColumn>
  );
}
export default Column;
