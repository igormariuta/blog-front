import { Routes, Route, NavLink, Link } from "react-router-dom";
import {
  Activity,
  Bookmark,
  Brush,
  CalendarDate,
  CalendarEvent,
  Clock,
  Envelope,
  GraphUp,
  InfoCircle,
} from "react-bootstrap-icons";

import cn from "classnames";
import moment from "moment";

function Sidebar() {
  return (
    <aside className="d-flex flex-column p-4">
      <ul className="list-unstyled">
        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-white d-flex align-items-center"
                : "btn  d-flex align-items-center"
            }
            to="/"
          >
            <Clock className="me-3" size={16} />
            <span>New</span>
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-white d-flex align-items-center"
                : "btn d-flex align-items-center"
            }
            to="/popular"
          >
            <Activity className="me-3" size={16} />
            <span>Popular</span>
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-white d-flex align-items-center"
                : "btn d-flex align-items-center"
            }
            to="/bookmarks"
          >
            <Bookmark className="me-3" size={16} />
            <span>Bookmarks</span>
          </NavLink>
        </li>
      </ul>
      <footer className="mt-auto">
        <div className="hide-m">
          <Link className="text-secondary text-decoration-none" to="/about">
            <small>About</small>
          </Link>
        </div>

        <div className="show-m">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-white d-flex align-items-center"
                : "btn btn-light d-flex align-items-center"
            }
            to="/about"
          >
            <InfoCircle className="me-3" size={16} />
          </NavLink>
        </div>

        <div className="hide-m d-flex flex-column">
          <div
            className="my-2 w-100"
            style={{ height: "1px", background: "#e2e2e2" }}
          ></div>
          {/* <CalendarEvent className="text-secondary me-2" size={13} /> */}
          <small className="text-info">&copy; Копирайт, все дела</small>
        </div>
      </footer>
    </aside>
  );
}

export default Sidebar;
