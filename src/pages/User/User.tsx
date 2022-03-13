import { useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { slugUser } = useParams();

  // useEffect(() => {}, [user, post]);

  return (
    <div className="container-sm">
      <p>user: {slugUser}</p>
    </div>
  );
}

export default User;
