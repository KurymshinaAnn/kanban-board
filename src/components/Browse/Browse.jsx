import ModalTask from "../ModalTask/ModalTask";
import { BrowseComponent, BrowseContainer,  } from "./Browse.styled";

function Browse({ isEdit }) {
  return (
    <BrowseComponent>
      <BrowseContainer>
        {isEdit ? <ModalTask isEdit={true} /> : <ModalTask isEdit={false} />}
      </BrowseContainer>
    </BrowseComponent>
  );
}

export default Browse;
