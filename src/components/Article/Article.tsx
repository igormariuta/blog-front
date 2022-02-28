import {
  ArrowDownShort,
  ArrowUpShort,
  Bookmark,
  Chat,
  PersonPlus,
} from "react-bootstrap-icons";
import s from "./Article.module.scss";
import cn from "classnames";

function Article() {
  return (
    <div className={cn(s.article)}>
      <div className={cn(s.articleHeader, "p-4 pb-2")}>
        <div className="d-flex align-items-center">
          <a href="/" className={cn(s.articleUser, "me-4 fw-bold text-dark")}>
            <span className={s.articleUserAva}></span>
            <span>Игорь Мариуца</span>
          </a>
          <div className="text-secondary">1 час</div>
        </div>
        <div>
          <button className="btn p-1 d-flex align-items-center">
            <PersonPlus size={16} />
          </button>
        </div>
      </div>
      <a href="/" className="d-block text-decoration-none text-dark px-4 pb-4">
        <h2 className="h4 mb-2">
          Разработчики Genshin Impact инвестировали в создание
          экспериментального устройства для термоядерного
        </h2>
        <p className="m-0">Они подверглись атаке хакеров.</p>
      </a>
      <a href="/" className={cn(s.articleImage, "d-block")}>
        {" "}
      </a>
      <div className={cn(s.articleFooter, "px-4 py-3")}>
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

export default Article;
