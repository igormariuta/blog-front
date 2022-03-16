import { useEffect } from "react";
import useSWR from "swr";
import PostFull from "../../components/PostFull/PostFull";
import qs from "qs";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Comments from "../../components/Comments/Comments";
import { fetcher } from "../../utils/fetcher";

function Post() {
  const { slugUser, slugPost } = useParams();

  const query = qs.stringify(
    {
      filters: {
        user: {
          username: {
            $eq: slugUser,
          },
        },
      },
      populate: ["previewImage", "user.avatar", "comments.user.avatar"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data: post, error } = useSWR(
    `${process.env.REACT_APP_API}/api/posts/${slugPost}?${query}`,
    fetcher
  );

  // useEffect(() => {
  //   console.log(post, error);
  // }, [post]);

  const render = () => {
    if (post) {
      return post.id ? (
        <>
          <PostFull post={post} user={post.attributes.user.data.attributes} />
          <Comments comments={post.attributes.comments} />
        </>
      ) : (
        <NotFound />
      );
    } else {
      return <div className="loader"></div>;
    }
  };

  return render();
  // return <></>;
}

export default Post;
