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

function Layout() {
  const [sidebarVis, setSidebarVis] = useState(true);
  const changeSidebarVis = () => setSidebarVis((state) => !state);

  return (
    <>
      <Header changeSidebarVis={changeSidebarVis} />
      <main className="main d-flex">
        <div className={`sidebar ${sidebarVis ? "" : "sidebar--hide"}`}>
          <Sidebar />
        </div>
        <div className={`page p-4 ${sidebarVis ? "" : "page--fullWidth"} `}>
          <Routes>
            {/* <Route path="/" element={<Popular />} /> */}
            <Route path="/" element={<New />} />
            <Route path="/p/:post" element={<Post />} />
            <Route path="/u/:user" element={<User />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Layout;
