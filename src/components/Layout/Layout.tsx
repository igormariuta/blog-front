import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Routing from "../Routing/Routing";

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
          <Routing />
        </div>
      </main>
    </>
  );
}

export default Layout;
