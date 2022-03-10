import {
  ArrowDownShort,
  ArrowUpShort,
  Bookmark,
  Chat,
  ChatLeftDots,
  PersonPlus,
} from "react-bootstrap-icons";
import cn from "classnames";

function Article() {
  return (
    <div className="container-md bg-white rounded-2">
      <header className="container-sm p-4">
        <div className={"d-flex justify-content-between mb-3"}>
          <div className="d-flex align-items-center">
            <a
              href="/"
              className={
                "d-flex align-items-center text-decoration-none me-4 fw-500 text-dark"
              }
            >
              <span className="articleUserAva d-block rounded-2 bg-secondary me-3"></span>
              <span>Игорь Мариуца</span>
            </a>
            <div className="text-secondary">1 час</div>
          </div>
          <div className="text-secondary">1306 просмотров</div>
        </div>
        <div className="d-block text-decoration-none text-dark">
          <h2 className="h4 mb-2">
            Разработчики Genshin Impact инвестировали в создание
            экспериментального устройства для термоядерного
          </h2>
          <p className="m-0">Они подверглись атаке хакеров.</p>
        </div>
      </header>
      <main>
        <div className="bg-secondary" style={{ height: "400px" }}></div>
        <div className={"d-flex justify-content-between"}>
          <div className="container-sm p-4 pb-0">
            <p className="mb-0">
              Жан Жиро или Мёбиус сделал настолько большой вклад в искусство,
              что ещё при жизни его называли классиком и даже «папой комиксов»
              по аналогии с Джеком Кирби («Король комиксов», создал Капитана
              Америку, Фантастическую четвёрку и Людей Икс). За свою длинную
              карьеру Жиро нарисовал легендарные графические романы Arzach, The
              Airtight Garage и Incal, запустил влиятельный журнал Metal Hurlant
              (в Штатах известен как Heavy Metal), поработал над несбывшейся
              экранизацией «Дюны», фильмами «Чужой», «Трон» и «Пятый Элемент».
              Ещё Мёбиус дружил с Хаяо Миядзаки и даже назвал свою дочь в честь
              одной из его героинь — «Навсикая».
            </p>
          </div>
        </div>
      </main>
      <footer className="container-sm p-4">
        <div className={"d-flex justify-content-between mb-5"}>
          <div className="d-flex align-items-center">
            <button className="btn p-0 d-flex align-items-center me-4">
              <Chat className="text-secondary me-2" size={16} />
              <span className="text-secondary">265</span>
            </button>
            <button className="btn p-0 d-flex align-items-center me-4">
              <Bookmark className="text-secondary" size={16} />
            </button>
          </div>
          <div className="d-flex align-items-center text-secondary">
            <button className="btn p-0 d-flex align-items-center me-2">
              <ArrowDownShort className="text-secondary" size={16} />
            </button>
            <span className="text-secondary fw-500">12</span>
            <button className="btn p-0 d-flex align-items-center ms-2">
              <ArrowUpShort className="text-secondary" size={16} />
            </button>
          </div>
        </div>
        {/*  */}
        <div className="d-flex justify-content-between align-items-center">
          <div className={"d-flex align-items-center me-4 fw-500 text-dark"}>
            <span
              className="d-block rounded-2 bg-secondary me-3"
              style={{ minWidth: "35px", height: "35px" }}
            ></span>
            <span>Игорь Мариуца</span>
          </div>
          <div>
            <button className="btn btn-light">
              <ChatLeftDots />
            </button>
            <button className="btn btn-primary ms-3">Подписаться</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Article;
