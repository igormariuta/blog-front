import useSWR from "swr";
import qs from "qs";
import { fetcher } from "../../utils/fetcher";
// import PostPreview from "../../components/PostPreview/PostPreview";
import NotFound from "../NotFound/NotFound";
import PostsList from "../../components/PostsList/PostsList";

const New = () => {
  const query = qs.stringify(
    {
      populate: ["previewImage", "user.avatar", "comments"],
      sort: ["publishedAt:desc", "id"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data: posts, error } = useSWR(
    `${process.env.REACT_APP_API}/api/posts?${query}`,
    fetcher
  );

  const render = () => {
    if (posts) {
      return posts.data?.length ? (
        <PostsList posts={posts.data} />
      ) : (
        <NotFound />
      );
    } else {
      return <div className="loader"></div>;
    }
  };

  return render();
};

export default New;
