import { Routes, Route, NavLink } from "react-router-dom";
import {
  Activity,
  Bookmark,
  Brush,
  Clock,
  GraphUp,
} from "react-bootstrap-icons";

import cn from "classnames";

function Sidebar() {
  return (
    <aside className="p-4 pe-0">
      <ul className="list-unstyled">
        {/* <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-light d-flex align-items-center"
                : "btn d-flex align-items-center"
            }
            to="/"
          >
            <Activity className="me-3" size={16} />
            Популярные
          </NavLink>
        </li> */}
        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-light d-flex align-items-center"
                : "btn d-flex align-items-center"
            }
            to="/"
          >
            <Clock className="me-3" size={16} />
            Свежее
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink className="btn d-flex align-items-center" to="/bookmarks">
            <Bookmark className="me-3" size={16} />
            Закладки
          </NavLink>
        </li>
        {/* <li className="mb-2">
          <NavLink className="btn d-flex align-items-center" to="/rating">
            <GraphUp className="me-3" size={16} />
            Рейтинг BLG
          </NavLink>
        </li> */}
        <li>
          <NavLink className="btn d-flex align-items-center" to="/subs">
            <Brush className="me-3" size={16} />
            Подписки
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
