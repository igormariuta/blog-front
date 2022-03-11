import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

// pages
import Error404 from "../../pages/Error404/Error";
import New from "../../pages/New/New";
import Popular from "../../pages/Popular/Popular";
import Post from "../../pages/Post/Post";
import User from "../../pages/User/User";
import Bookmarks from "../../pages/Bookmarks/Bookmarks";
import Tag from "../../pages/Tag/Tag";

function Layout() {
  const [sidebarVis, setSidebarVis] = useState(true);
  const changeSidebarVis = () => setSidebarVis((state) => !state);

  return (
    <>
      <Header changeSidebarVis={changeSidebarVis} />
      <main className="main d-flex">
        <div className={`sidebar ${sidebarVis ? "" : "sidebar--toggle"}`}>
          <Sidebar />
        </div>
        <div className={`page p-4 ${sidebarVis ? "" : "page--fullWidth"} `}>
          <Routes>
            <Route path="/" element={<New />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/p/:slug" element={<Post />} />
            <Route path="/u/:slug" element={<User />} />
            <Route path="/tag/:slug" element={<Tag />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Layout;
