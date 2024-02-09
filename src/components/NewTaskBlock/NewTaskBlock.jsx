import NewTask from "../NewTask/NewTask";
import { NewCard, NewCardContainer } from "./NewTaskBlock.styled";

function NewTaskBlock() {
  return (
    <NewCard>
      <NewCardContainer>
        <NewTask />
      </NewCardContainer>
    </NewCard>
  );
}

export default NewTaskBlock;
