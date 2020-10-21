import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <h1>Aqui é a HOME</h1>
      <div>
        <Link to="/IndSpace/login">Aqui é o login</Link>
      </div>
      <div>
        <Link to="/IndSpace/pdc">Aqui é o perfil do produtor de conteúdo</Link>
      </div>
    </Fragment>
  );
};

export default Home;
