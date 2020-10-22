import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const Login = () => {
  var isLogged = localStorage.getItem("isLogged");

  if (!isLogged) {
    localStorage.setItem("isLogged", "false");
    isLogged = false;
  }

  return (
    <Fragment>
      <Header isLogged={isLogged} isLogin={true} />
      <h1>Aqui é o Login</h1>
      <div>
        <Link to="/IndSpace/pdc">Aqui é o perfil do produtor de conteúdo</Link>
      </div>
    </Fragment>
  );
};

export default Login;
