import moment from "moment";
import {
  ArrowDownShort,
  ArrowUpShort,
  Bookmark,
  BookmarkFill,
  Chat,
  EmojiFrown,
  Eye,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import image from "../../assets/images/not-found.jpg";

function NotFound() {
  return (
    <div className="container-sm bg-white rounded-2 mb-4">
      <header className="p-4">
        <div className="d-block text-decoration-none text-dark mb-2">
          <h2 className="h4 mb-0">Not Found</h2>
        </div>
        <p className="m-0">
          The requested resource is not found{" "}
          <EmojiFrown size={14} style={{ verticalAlign: "baseline" }} />
        </p>
        <p className="mb-0">
          But don't worry, you can find plenty of other things on our{" "}
          <Link to="/" className="text-decoration-none text-secondary">
            homepage
          </Link>
        </p>
      </header>
      <main>
        <div className="d-block bg-light">
          <img className="w-100" src={image} alt="Not Found" loading="lazy" />
        </div>
      </main>
      <footer className={"d-flex justify-content-between px-4 py-3"}>
        <div className="d-flex align-items-center">
          <div className="fw-500 p-0 d-flex align-items-center me-4">
            <Eye className="text-secondary me-2" size={16} />
            <span className="text-secondary">0</span>
          </div>
          <div className="fw-500 p-0 d-flex align-items-center me-4">
            <Chat className="text-secondary me-2" size={16} />
            <span className="text-secondary">0</span>
          </div>
          <div className="fw-500 p-0 d-flex align-items-center me-4 opacity-100">
            <Bookmark className="text-secondary" size={16} />
          </div>
        </div>

        <div className="d-flex align-items-center"></div>

        {/* <div className="d-flex align-items-center">
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
        </div> */}
      </footer>
    </div>
  );
}

export default NotFound;
