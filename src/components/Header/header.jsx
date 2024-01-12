import User from "../User/User";
import { useState } from 'react';

function Header({addTask}) {
  const [isOpened,setIsOpened] = useState(false); 
  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={addTask}>
              Создать новую задачу
            </button>
            <a href="#" className="header__user _hover02" onClick={togglePopUp}>
              Ivan Ivanov
            </a>
            {isOpened && <User />}
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
