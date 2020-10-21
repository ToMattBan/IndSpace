import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header";

const Login = () => {
  return (
    <Fragment>
      <Header isLogin={true} />
      <h1>Aqui é o Login</h1>
      <div>
        <Link to="/IndSpace">Aqui é a home</Link>
      </div>
      <div>
        <Link to="/IndSpace/pdc">Aqui é o perfil do produtor de conteúdo</Link>
      </div>
    </Fragment>
  );
};

export default Login;
