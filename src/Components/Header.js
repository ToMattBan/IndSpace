import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./custom.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className="c_Header">
        <Link to="/IndSpace">
          <div className="_fz30">IndSpace</div>
        </Link>

        {!props.isLogged ||
          (props.isLogged === "false" && (
            <Link to="/IndSpace/login">
              <div>Login</div>
            </Link>
          ))}
      </div>
    </Fragment>
  );
};

export default Header;
