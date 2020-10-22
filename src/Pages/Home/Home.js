import React, { Fragment } from "react";
import "./Home.css";
import FrontPage from "./FrontPage";
import Sugestions from "./Sugestions";
import Header from "../../Components/Header";

const Home = () => {
  var isLogged = localStorage.getItem("isLogged");

  if (!isLogged) {
    localStorage.setItem("isLogged", "false");
    isLogged = false;
  }

  return (
    <Fragment>
      <Header isLogged={isLogged} />
      <FrontPage />
      <Sugestions isLogged={isLogged} />
    </Fragment>
  );
};

export default Home;
