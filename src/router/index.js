import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Aside from "../pages/common/aside/";
import Content from "./content";
import Nav from '../pages/common/nav/'

const App = (props) => {
  return (
    <>
      <Router>
        <Aside />
        <Content />
        <Nav />
      </Router>
    </>
  );
};

export default App;
