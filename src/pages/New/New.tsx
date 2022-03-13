import { useEffect } from "react";
import useSWR from "swr";
import PostPreview from "../../components/PostPreview/PostPreview";
import qs from "qs";
import NotFound from "../NotFound/NotFound";

const New = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

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

  // useEffect(() => {
  //   console.log("/new", posts);
  // }, [posts]);

  const render = () => {
    if (posts) {
      return posts.data?.length ? (
        posts?.data.map((post: any) => (
          <PostPreview key={post.id} post={post} />
        ))
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
