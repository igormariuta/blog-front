import { Routes, Route, NavLink } from "react-router-dom";
import { List, Person } from "react-bootstrap-icons";

import cn from "classnames";

interface IProps {
  changeSidebarVis: Function;
}

function Header({ changeSidebarVis }: IProps) {
  return (
    <header className="header fixed-top d-flex bg-primary align-items-center px-3 py-2">
      <div className="header-navigation d-flex align-items-center">
        <button className="btn p-0 me-4" onClick={() => changeSidebarVis()}>
          <List size={25} />
        </button>
        <div className="me-4" style={{ fontWeight: "900", fontSize: "30px" }}>
          BG
        </div>
        <div>
          <input
            className={cn("form-control bg-primary-gray")}
            type="text"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div className="header-user-menu ms-auto">
        <button className="btn p-1 d-flex align-items-center">
          <Person className="me-2" size={20} /> Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
