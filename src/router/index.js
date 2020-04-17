import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Aside from "../pages/common/aside/aside";
import Content from "./content";

const App = (props) => {
  return (
    <>
      <Router>
        <Aside />
        <Content />
      </Router>
    </>
  );
};

export default App;
