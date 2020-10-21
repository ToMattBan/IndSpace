import React, { Fragment } from "react";
import "./Home.css";
import FrontPage from "./FrontPage";
import Sugestions from "./Sugestions";
import Header from "./Header";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <FrontPage />
      <Sugestions />
    </Fragment>
  );
};

export default Home;
