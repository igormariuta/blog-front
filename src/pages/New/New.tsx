import useSWR from "swr";
import ArticleList from "../../components/ArticleList/ArticleList";

const New = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { articles, error } = useSWR(
    "http://localhost:1337/api/posts",
    fetcher
  );

  return (
    <div>
      <ArticleList />
    </div>
  );
};

export default New;
