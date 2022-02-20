import { List, Person } from "react-bootstrap-icons";

function App() {
  return (
    <div>
      <header className="header bg-secondary px-3 py-2 d-flex align-items-center">
        <div className="header-navigation d-flex align-items-center">
          <button className="btn p-0 me-3">
            <List color="#222" size={25} />
          </button>
          {/*  */}
          <div className="fs-4 me-3" style={{ fontWeight: "900" }}>
            BLG
          </div>
          {/*  */}
          <div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="Поиск"
            />
          </div>
        </div>
        <div className="header-user-menu ms-auto">
          <button className="btn p-1 d-flex align-items-center">
            <Person className="me-2" color="#222" size={22} />
            Войти
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
