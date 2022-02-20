import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
