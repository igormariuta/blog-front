import cn from "classnames";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

function ArticleList() {
  return (
    <>
      <div className="article-container" style={{ marginBottom: "2rem" }}>
        <ArticlePreview />
      </div>
      <div className="article-container" style={{ marginBottom: "2rem" }}>
        <ArticlePreview />
      </div>
    </>
  );
}

export default ArticleList;
