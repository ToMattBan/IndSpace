import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Pdc = () => {
  return (
    <Fragment>
      <h1>Aqui é o perfil do produtor de conteúdo</h1>
      <div>
        <Link to="/IndSpace">Aqui é a home</Link>
      </div>
      <div>
        <Link to="/IndSpace/login">Aqui é o login</Link>
      </div>
    </Fragment>
  );
};

export default Pdc;
