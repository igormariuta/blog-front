import qs from "qs";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import PostsList from "../../components/PostsList/PostsList";
import { fetcher } from "../../utils/fetcher";
import NotFound from "../NotFound/NotFound";

function Tag() {
  const { slugTag } = useParams();

  const query = qs.stringify(
    {
      filters: {
        tags: {
          $containsi: slugTag,
        },
      },
      populate: ["previewImage", "user.avatar", "comments"],
      sort: ["publishedAt:desc", "id"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data: posts } = useSWR(
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

  return (
    <>
      <div className="container-sm mb-4">
        <h2 className="h4 mb-0">#{slugTag}</h2>
      </div>

      {render()}
    </>
  );
}

export default Tag;
