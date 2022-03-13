import {
  ArrowDownShort,
  ArrowUpShort,
  Bookmark,
  Chat,
  ChatLeftDots,
  PersonPlus,
} from "react-bootstrap-icons";
import cn from "classnames";
import { Link } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";

function Comments({ comments }: any) {
  const [sortedComments, setSortedComments] = useState([]);

  useEffect(() => {
    if (comments?.data?.length) {
      setSortedComments(
        comments.data.sort((a: any, b: any) =>
          new Date(a.attributes.createdAt)
            ? -1
            : new Date(b.attributes.createdAt)
            ? 1
            : 0
        )
      );

      console.log(comments, sortedComments);
    }
  }, [comments]);

  return (
    <div className="container-md bg-white rounded-2" id="comments">
      <div className="container-sm p-4 pb-0">
        <div className="d-flex align-items-center justify-content-between">
          <p className="fw-bold mb-0">{comments.data.length} Comments</p>
          <div>
            <button
              disabled
              className="btn fw-normal p-0 py-2 me-4 rounded-0 border-0"
            >
              Popular
            </button>
            <button
              className="btn fw-500 p-0 py-2 rounded-0 border-0"
              style={{
                boxShadow: "inset 0 -3px 0 0 var(--bs-primary)",
              }}
            >
              In Order
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "#eee" }}></div>
      <main className="container-sm p-4">
        {sortedComments?.map((comment: any) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </main>
    </div>
  );
}

const Comment = ({ comment }: any) => (
  <div className="comment-mb-4">
    <header className="d-flex align-items-center justify-content-between mb-2">
      <Link
        to={`/u/${comment.attributes.user.data.attributes.username}`}
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <div
          className="avatar bg-light rounded-2 me-3"
          style={{
            background: `no-repeat center url(${
              (process.env.REACT_APP_IMG ? process.env.REACT_APP_IMG : "") +
              comment.attributes.user.data.attributes.avatar.data.attributes
                .formats.thumbnail.url
            })`,
            backgroundSize: "cover",
            minWidth: "35px",
            height: "35px",
          }}
        ></div>
        <div className="d-flex flex-column">
          <div className="mb-0 fw-500">
            <small>{comment.attributes.user.data.attributes.fullName}</small>
          </div>
          <small className="text-secondary">
            {moment(comment.attributes.createdAt).fromNow()}
          </small>
        </div>
      </Link>
      <div className="d-flex align-items-center">
        <button disabled className="btn p-0 d-flex align-items-center me-3">
          <ArrowDownShort className="text-secondary" size={16} />
        </button>
        <span className="text-secondary fw-500">
          {comment.attributes.rating}
        </span>
        <button disabled className="btn p-0 d-flex align-items-center ms-3">
          <ArrowUpShort className="text-secondary" size={16} />
        </button>
      </div>
    </header>
    <main>{comment.attributes.body}</main>
  </div>
);

export default Comments;