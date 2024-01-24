import NewTask from "../NewTask/NewTask";

function NewTaskBlock() {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <NewTask />
      </div>
    </div>
  );
}

export default NewTaskBlock;
