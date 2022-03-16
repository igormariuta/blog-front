import {
  ArrowDownShort,
  ArrowUpShort,
  Bookmark,
  Chat,
  PersonPlus,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import UserAvatar from "../UserAvatar/UserAvatar";

function PostPreview({ post }: any) {
  return (
    <div className="container-sm bg-white rounded-2 mb-4-nl">
      <header className="p-4 pb-0">
        <div className={"d-flex justify-content-between mb-3"}>
          <div className="d-flex align-items-center just">
            <Link
              to={`/u/${post.attributes.user.data.attributes.username}`}
              className={
                "d-flex align-items-center text-decoration-none me-4 fw-500 text-dark"
              }
            >
              <UserAvatar
                avatar={post.attributes.user.data.attributes.avatar}
              />
              <span>{post.attributes.user.data.attributes.fullName}</span>
            </Link>
            <div className="text-secondary">
              <small>{moment(post.attributes.publishedAt).fromNow()}</small>
            </div>
          </div>
          <div className="text-secondary d-none d-md-block">
            <small>{post.attributes.viewCount} views</small>
          </div>
          {/* <button disabled className="btn p-1 d-flex align-items-center">
            <PersonPlus size={16} />
          </button> */}
        </div>
        <Link
          to={`/u/${post.attributes.user.data.attributes.username}/${post.attributes.slug}`}
          className="d-block text-decoration-none text-dark mb-2"
        >
          <h2 className="h4">{post.attributes.title}</h2>
        </Link>
        <p className="m-0">{post.attributes.description}</p>
      </header>
      {post.attributes.previewImage.data ? (
        <main className="mt-4">
          <Link
            to={`/u/${post.attributes.user.data.attributes.username}/${post.attributes.slug}`}
            className="d-block bg-light opacity-100"
          >
            <img
              className="w-100"
              src={
                (process.env.REACT_APP_IMG ?? "") +
                (post.attributes.previewImage.data.attributes.formats?.medium
                  ?.url ?? post.attributes.previewImage.data.attributes.url)
              }
              alt={post.attributes.title}
              loading="lazy"
            />
          </Link>
        </main>
      ) : (
        <></>
      )}

      <footer className={"d-flex justify-content-between px-4 py-3"}>
        <div className="d-flex align-items-center">
          <button disabled className="btn p-0 d-flex align-items-center me-4">
            <Chat className="text-secondary me-2" size={16} />
            <span className="text-secondary">
              {post.attributes.comments.data.length}
            </span>
          </button>
          <button disabled className="btn p-0 d-flex align-items-center me-4">
            <Bookmark className="text-secondary" size={16} />
          </button>
        </div>
        {/* <div className="d-flex align-items-center">
          <button disabled className="btn p-0 d-flex align-items-center me-3">
            <ArrowDownShort className="text-secondary" size={16} />
          </button>
          <span className="text-secondary fw-500">
            {post.attributes.rating}
          </span>
          <button disabled className="btn p-0 d-flex align-items-center ms-3">
            <ArrowUpShort className="text-secondary" size={16} />
          </button>
        </div> */}
      </footer>
    </div>
  );
}

export default PostPreview;
