import { Routes, Route, NavLink } from "react-router-dom";

// pages
import New from "../../pages/New/New";
import Popular from "../../pages/Popular/Popular";
import Post from "../../pages/Post/Post";
import User from "../../pages/User/User";
import Bookmarks from "../../pages/Bookmarks/Bookmarks";
import Tag from "../../pages/Tag/Tag";
import NotFound from "../../pages/NotFound/NotFound";

const Routing = () => (
  <Routes>
    <Route path="/" element={<New />} />
    <Route path="/popular" element={<Popular />} />
    <Route path="/bookmarks" element={<Bookmarks />} />
    <Route path="/u/:slugUser" element={<User />} />
    <Route path="/u/:slugUser/:slugPost" element={<Post />} />
    <Route path="/tag/:slugTag" element={<Tag />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Routing;
