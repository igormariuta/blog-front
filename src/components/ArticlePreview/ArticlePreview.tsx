import {
  ArrowDownShort,
  ArrowUpShort,
  Bookmark,
  Chat,
  PersonPlus,
} from "react-bootstrap-icons";
import cn from "classnames";
import { Link } from "react-router-dom";

function ArticlePreview() {
  return (
    <div className="bg-white rounded-2">
      <div className={"d-flex justify-content-between p-4 pb-2"}>
        <div className="d-flex align-items-center">
          <Link
            to="u/1"
            className={
              "d-flex align-items-center text-decoration-none me-4 fw-500 text-dark"
            }
          >
            <span className="articleUserAva d-block rounded-2 bg-secondary me-3"></span>
            <span>Игорь Мариуца</span>
          </Link>
          <div className="text-secondary">1 час</div>
        </div>
        <div>
          <button className="btn p-1 d-flex align-items-center">
            <PersonPlus size={16} />
          </button>
        </div>
      </div>
      <Link
        to="p/1"
        className="d-block text-decoration-none text-dark px-4 pb-4"
      >
        <h2 className="h4 mb-2">
          Разработчики Genshin Impact инвестировали в создание
          экспериментального устройства для термоядерного
        </h2>
        <p className="m-0">Они подверглись атаке хакеров.</p>
      </Link>
      <Link to="p/1" className="articleImage d-block bg-secondary">
        {" "}
      </Link>
      <div className={"d-flex justify-content-between px-4 py-3"}>
        <div className="d-flex align-items-center">
          <button className="btn p-0 d-flex align-items-center me-4">
            <Chat className="text-secondary me-2" size={16} />
            <span className="text-secondary">265</span>
          </button>
          <button className="btn p-0 d-flex align-items-center me-4">
            <Bookmark className="text-secondary" size={16} />
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn p-0 d-flex align-items-center me-2">
            <ArrowDownShort className="text-secondary" size={16} />
          </button>
          <span className="text-secondary fw-500">12</span>
          <button className="btn p-0 d-flex align-items-center ms-2">
            <ArrowUpShort className="text-secondary" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
