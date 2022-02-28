import cn from "classnames";
import Article from "../Article/Article";
// import s from "./ArticleList.module.scss";

function ArticleList() {
  return (
    <>
      <div className="article-container" style={{ marginBottom: "2rem" }}>
        <Article />
      </div>
      <div className="article-container" style={{ marginBottom: "2rem" }}>
        <Article />
      </div>
    </>
  );
}

export default ArticleList;
