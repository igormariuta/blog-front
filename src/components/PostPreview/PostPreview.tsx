import {
  ArrowDownShort,
  ArrowUpShort,
  Bookmark,
  Chat,
  PersonPlus,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import cn from "classnames";
import moment from "moment";

function PostPreview({ post }: any) {
  return (
    <div className="container-sm bg-white rounded-2 mb-4">
      <header className="p-4">
        <div className={"d-flex justify-content-between mb-3"}>
          <div className="d-flex align-items-center">
            <Link
              to={`/u/${post.attributes.user.data.attributes.username}`}
              className={
                "d-flex align-items-center text-decoration-none me-4 fw-500 text-dark"
              }
            >
              <span
                className="postUserAva d-block rounded-2 bg-light me-3"
                style={{
                  background: `no-repeat center url(${
                    (process.env.REACT_APP_IMG
                      ? process.env.REACT_APP_IMG
                      : "") +
                    post.attributes.user.data.attributes.avatar.data.attributes
                      .formats.thumbnail.url
                  })`,
                  backgroundSize: "cover",
                }}
              ></span>
              <span>{post.attributes.user.data.attributes.fullName}</span>
            </Link>
            <div className="text-secondary">
              {moment(post.attributes.publishedAt, "YYYYMMDD").fromNow()}
            </div>
          </div>
          <button disabled className="btn p-1 d-flex align-items-center">
            <PersonPlus size={16} />
          </button>
        </div>
        <Link
          to={`/p/${post.attributes.slug}`}
          className="d-block text-decoration-none text-dark mb-2"
        >
          <h2 className="h4">{post.attributes.title}</h2>
        </Link>
        <p className="m-0">{post.attributes.description}</p>
      </header>
      <main>
        <Link to={`/p/${post.attributes.slug}`} className="d-block bg-light">
          <img
            className="w-100"
            src={
              process.env.REACT_APP_IMG +
              post.attributes.previewImage.data.attributes.url
            }
            alt={post.attributes.title}
            loading="lazy"
          />
        </Link>
      </main>
      <footer className={"d-flex justify-content-between px-4 py-3"}>
        <div className="d-flex align-items-center">
          <button disabled className="btn p-0 d-flex align-items-center me-4">
            <Chat className="text-secondary me-2" size={16} />
            <span className="text-secondary">265</span>
          </button>
          <button disabled className="btn p-0 d-flex align-items-center me-4">
            <Bookmark className="text-secondary" size={16} />
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button disabled className="btn p-0 d-flex align-items-center me-2">
            <ArrowDownShort className="text-secondary" size={16} />
          </button>
          <span className="text-secondary fw-500">
            {post.attributes.rating}
          </span>
          <button disabled className="btn p-0 d-flex align-items-center ms-2">
            <ArrowUpShort className="text-secondary" size={16} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default PostPreview;
