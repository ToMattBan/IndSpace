import React, { Fragment } from "react";
import "./Home.css";
import FrontPage from "./FrontPage";
import Sugestions from "./Sugestions";

const Home = () => {
  return (
    <Fragment>
      <FrontPage />
      <Sugestions />
    </Fragment>
  );
};

export default Home;
