import { useEffect } from "react";
import useSWR from "swr";
import PostFull from "../../components/PostFull/PostFull";
import qs from "qs";
import { useParams } from "react-router-dom";

function Post() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { slug } = useParams();

  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["previewImage", "user.avatar"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data: posts, error } = useSWR(
    `${process.env.REACT_APP_API}/posts?${query}`,
    fetcher
  );

  // useEffect(() => {
  //   console.log(error);
  // }, [error]);

  return posts?.data?.length ? (
    <PostFull className="mb-4" post={posts?.data[0]} />
  ) : (
    <></>
  );

  // return <></>;
}

export default Post;
