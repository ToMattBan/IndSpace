import React, { Fragment } from "react";
import "./Home.css";
import FrontPage from "./FrontPage";
import Sugestions from "./Sugestions";
import Header from "../../Components/Header";

const Home = () => {
  var isLogged = localStorage.getItem("isLogged");
  console.log(isLogged);
  if (isLogged === null || isLogged === "false") {
    localStorage.setItem("isLogged", "false");
    isLogged = "false";
  }

  console.log(isLogged);

  return (
    <Fragment>
      <Header isLogged={isLogged} />
      <FrontPage />
      <Sugestions isLogged={isLogged} />
    </Fragment>
  );
};

export default Home;
