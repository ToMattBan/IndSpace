import React, { Fragment } from "react";
import Header from "../../Components/Header";

const Pdc = () => {
  var isLogged = localStorage.getItem("isLogged");

  if (!isLogged) {
    localStorage.setItem("isLogged", "false");
    isLogged = false;
  }

  return (
    <Fragment>
      <Header isLogged={isLogged} />
      <h1>Aqui é o perfil do produtor de conteúdo</h1>
    </Fragment>
  );
};

export default Pdc;
