import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className="c_initialPage__Header">
        <Link to="/IndSpace">
          <div className="c_initialPage__HeaderLogo _fz30">IndSpace</div>
        </Link>
        {!props.isLogin ? (
          <Link to="/IndSpace/login">
            <div>Login</div>
          </Link>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default Header;
