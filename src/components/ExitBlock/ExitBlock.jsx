import Exit from "../Exit/Exit";
import { ExitPop, ExitContainerPop } from "./ExitBlock.styled";

function ExitBlock({ onExit }) {
  return (
    <ExitPop>
      <ExitContainerPop>
        <Exit onExit={onExit}/>
      </ExitContainerPop>
    </ExitPop>
  );
}

export default ExitBlock;
