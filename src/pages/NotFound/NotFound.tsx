import moment from "moment";
import {
  ArrowDownShort,
  ArrowUpShort,
  BookmarkFill,
  Chat,
  EmojiFrown,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import image from "../../assets/images/not-found.jpg";

function NotFound() {
  return (
    <div className="container-sm bg-white rounded-2 mb-4">
      <header className="p-4">
        <div className={"d-flex justify-content-between mb-3"}>
          <div className="d-flex align-items-center">
            <Link
              to="/"
              className={
                "d-flex align-items-center text-decoration-none me-4 fw-500 text-dark"
              }
            >
              <span
                className="d-block rounded-2 bg-primary me-3"
                style={{
                  minWidth: "20px",
                  height: "20px",
                }}
              ></span>
              <span className="text-secondary">BG</span>
            </Link>
            <div className="text-secondary">a second ago</div>
          </div>
        </div>
        <div className="d-block text-decoration-none text-dark mb-2">
          <h2 className="h4">Not Found</h2>
        </div>
        <p className="m-0">
          The resource requested could not be found
          <EmojiFrown
            size={14}
            className="ms-2"
            style={{ verticalAlign: "baseline" }}
          />
        </p>
      </header>
      <main>
        <div className="d-block bg-light">
          <img className="w-100" src={image} alt="Not Found" loading="lazy" />
        </div>
      </main>
      <footer className={"d-flex justify-content-between px-4 py-3"}>
        <div className="d-flex align-items-center">
          <button
            disabled
            className="btn p-0 d-flex align-items-center me-4 opacity-100"
          >
            <Chat className="text-secondary me-2" size={16} />
            <span className="text-secondary">0</span>
          </button>
          <button
            disabled
            className="btn p-0 d-flex align-items-center me-4 opacity-100"
          >
            <BookmarkFill className="text-primary" size={16} />
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button
            disabled
            className="btn p-0 d-flex align-items-center me-3 opacity-100"
          >
            <ArrowDownShort className="text-secondary" size={16} />
          </button>
          <span className="text-secondary fw-500">-999</span>
          <button
            disabled
            className="btn p-0 d-flex align-items-center ms-3 opacity-100"
          >
            <ArrowUpShort className="text-secondary" size={16} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default NotFound;
