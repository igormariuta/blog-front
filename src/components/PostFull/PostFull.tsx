import {
  ArrowDownShort,
  ArrowUpShort,
  Bookmark,
  Chat,
  ChatLeftDots,
  PersonPlus,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { useRef } from "react";

function PostFull({ post }: any) {
  return (
    <div className="container-md bg-white rounded-2 mb-4">
      <header className="container-sm p-4 pb-0">
        <div className={"d-flex justify-content-between mb-3"}>
          <div className="d-flex align-items-center">
            <Link
              to={`/u/${post.attributes.user.data.attributes.username}`}
              className={
                "d-flex align-items-center text-decoration-none me-4 fw-500 text-dark"
              }
            >
              <span
                className="d-block rounded-2 bg-light me-3"
                style={{
                  background: `no-repeat center url(${
                    (process.env.REACT_APP_IMG
                      ? process.env.REACT_APP_IMG
                      : "") +
                    post.attributes.user.data.attributes.avatar.data.attributes
                      .formats.thumbnail.url
                  })`,
                  backgroundSize: "cover",
                  minWidth: "20px",
                  height: "20px",
                }}
              ></span>
              <span className="d-flex">
                {post.attributes.user.data.attributes.fullName}
              </span>
            </Link>
            <div className="text-secondary">
              <small>{moment(post.attributes.publishedAt).fromNow()}</small>
            </div>
          </div>
          <div className="text-secondary d-none d-md-block">
            <small>{post.attributes.viewCount} views</small>
          </div>
        </div>
        <div className="d-block text-decoration-none text-dark">
          <h1 className="h4 mb-2">{post.attributes.title}</h1>
          <p className="m-0">{post.attributes.description}</p>
        </div>
      </header>
      <main>
        {post.attributes.previewImage.data ? (
          <div className="bg-light mt-4">
            <img
              className="w-100"
              src={
                (process.env.REACT_APP_IMG ? process.env.REACT_APP_IMG : "") +
                  post.attributes.previewImage.data.attributes.formats.large
                    .url ?? post.attributes.previewImage.data.attributes.url
              }
              alt={post.attributes.title}
              loading="lazy"
            />
          </div>
        ) : (
          <></>
        )}
        <div className="markdown-container container-sm p-4">
          <ReactMarkdown>{post.attributes.body}</ReactMarkdown>
        </div>
        {post.attributes.tags ? (
          <div className="container-sm px-4 mb-4 ">
            {post.attributes.tags.split(",").map((item: string, i: number) => (
              <Link
                key={i}
                to={`/tag/${item}`}
                className="me-2 text-decoration-none text-info"
              >
                #{item}
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
      </main>
      <footer className="container-sm p-4 pt-0">
        <div className={"d-flex justify-content-between mb-4"}>
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
          {/* <div className="d-flex align-items-center text-secondary">
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
        </div>
        <div className="d-flex justify-content-between  align-items-center">
          <Link
            to={`/u/${post.attributes.user.data.attributes.username}`}
            className={
              "d-flex align-items-center text-decoration-none me-4 fw-500 text-dark"
            }
          >
            <span
              className="d-block rounded-2 bg-secondary me-3"
              style={{
                minWidth: "35px",
                height: "35px",
                background: `no-repeat center url(${
                  (process.env.REACT_APP_IMG ? process.env.REACT_APP_IMG : "") +
                  post.attributes.user.data.attributes.avatar.data.attributes
                    .formats.thumbnail.url
                })`,
                backgroundSize: "cover",
              }}
            ></span>
            <span>{post.attributes.user.data.attributes.fullName}</span>
          </Link>
          <div className="d-none d-sm-flex">
            <button disabled className="btn btn-light">
              <ChatLeftDots />
            </button>
            <button disabled className="btn btn-primary ms-3">
              Follow
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PostFull;
