import { useEffect } from "react";
import useSWR from "swr";
import PostPreview from "../../components/PostPreview/PostPreview";
import qs from "qs";

const New = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const query = qs.stringify(
    {
      populate: ["previewImage", "user.avatar"],
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
  //   console.log(posts, error);
  // }, [posts]);

  return (
    <>
      {posts?.data.map((post: any) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </>
  );
};

export default New;
