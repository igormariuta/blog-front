import { useParams } from "react-router-dom";
import useSWR from "swr";
import qs from "qs";
import { fetcher } from "../../utils/fetcher";
import { useEffect } from "react";

function User() {
  const { slugUser } = useParams();

  const query = qs.stringify(
    {
      filters: {
        // user: {
        //   username: {
        //     $eq: slugUser,
        //   },
        // },
        userName: {
          $eq: slugUser,
        },
      },
      populate: ["avatar", "comments"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data: user, error } = useSWR(
    `${process.env.REACT_APP_API}/api/users?${query}`,
    fetcher
  );

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="container-sm">
      <p>user: {slugUser}</p>
    </div>
  );
}

export default User;
