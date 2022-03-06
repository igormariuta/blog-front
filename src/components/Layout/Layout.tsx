import { Routes, Route, NavLink } from "react-router-dom";
import cn from "classnames";
//
import Sidebar from "./Sidebar";
import Header from "./Header";
//
import Popular from "../../pages/Popular/Popular";
import New from "../../pages/New/New";
import Error404 from "../../pages/Error404/Error";
import { useState } from "react";

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
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Layout;
