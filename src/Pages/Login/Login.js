import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
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
