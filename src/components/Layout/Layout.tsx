import { Routes, Route, NavLink } from "react-router-dom";
import {
  Activity,
  Bookmark,
  Brush,
  Clock,
  GraphUp,
  List,
  Person,
  EmojiFrown,
} from "react-bootstrap-icons";
import Popular from "../../pages/Popular/Popular";
import New from "../../pages/New/New";

function Layout() {
  return (
    <>
      <header className="header fixed-top d-flex bg-primary align-items-center px-3 py-2">
        <div className="header-navigation d-flex align-items-center">
          <button className="btn p-0 me-4">
            <List size={25} />
          </button>
          <div className="me-4" style={{ fontWeight: "900", fontSize: "30px" }}>
            BG
          </div>
          <div>
            <input
              className="form-control bg-primary-gray"
              type="text"
              placeholder="Поиск"
            />
          </div>
        </div>
        <div className="header-user-menu ms-auto">
          <button className="btn p-1 d-flex align-items-center">
            <Person className="me-2" size={20} />
            Войти
          </button>
        </div>
      </header>
      <main className="main d-flex">
        <div className="sidebar">
          <aside className="p-4 pe-0">
            <ul className="list-unstyled">
              <li className="mb-2">
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
              </li>
              <li className="mb-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-light d-flex align-items-center"
                      : "btn d-flex align-items-center"
                  }
                  to="/new"
                >
                  <Clock className="me-3" size={16} />
                  Свежее
                </NavLink>
              </li>
              {/* <li className="mb-2">
              <NavLink className="btn d-flex align-items-center" to="/404">
                <ViewList className="me-3" size={16} />
                Моя лента
              </NavLink>
            </li> */}
              <li className="mb-2">
                <NavLink
                  className="btn d-flex align-items-center"
                  to="/bookmarks"
                >
                  <Bookmark className="me-3" size={16} />
                  Закладки
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink className="btn d-flex align-items-center" to="/rating">
                  <GraphUp className="me-3" size={16} />
                  Рейтинг BLG
                </NavLink>
              </li>
              <li>
                <NavLink className="btn d-flex align-items-center" to="/subs">
                  <Brush className="me-3" size={16} />
                  Подписки
                </NavLink>
              </li>
            </ul>
          </aside>
        </div>

        <div className="page p-4">
          <Routes>
            <Route path="/" element={<Popular />} />
            <Route path="new" element={<New />} />
            <Route
              path="*"
              element={
                <div className="d-flex flex-column align-items-center">
                  <h2 className="d-flex align-items-center">
                    <EmojiFrown className="me-2" size={25} />
                    Ошибка 404
                  </h2>
                  <p>
                    К сожалению, запрашиваемая страница не найдена, но есть
                    другие, тоже хорошие
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Layout;
