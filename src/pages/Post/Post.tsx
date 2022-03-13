import { useEffect } from "react";
import useSWR from "swr";
import PostFull from "../../components/PostFull/PostFull";
import qs from "qs";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Comments from "../../components/Comments/Comments";

function Post() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { slugUser, slugPost } = useParams();

  const query = qs.stringify(
    {
      filters: {
        user: {
          username: {
            $eq: slugUser,
          },
        },
        slug: {
          $eq: slugPost,
        },
      },
      populate: ["previewImage", "user.avatar", "comments.user.avatar"],
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
  //   console.log(error);
  // }, [error]);

  const render = () => {
    if (posts) {
      return posts.data?.length ? (
        <>
          <PostFull post={posts.data[0]} />
          <Comments comments={posts.data[0].attributes.comments} />
        </>
      ) : (
        <NotFound />
      );
    } else {
      return <div className="loader"></div>;
    }
  };

  return render();
}

export default Post;
