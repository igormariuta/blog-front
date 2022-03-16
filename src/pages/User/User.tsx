import { useParams } from "react-router-dom";
import useSWR from "swr";
import qs from "qs";
import { fetcher } from "../../utils/fetcher";
import { useEffect } from "react";
import NotFound from "../NotFound/NotFound";
import UserFull from "../../components/UserFull/UserFull";

function User() {
  const { slugUser } = useParams();

  const { data: user } = useSWR(
    `${process.env.REACT_APP_API}/api/users/${slugUser}`,
    fetcher
  );

  const render = () => {
    if (user) {
      return user.id ? <UserFull user={user} /> : <NotFound />;
    } else {
      return <div className="loader"></div>;
    }
  };

  return render();
}

export default User;
