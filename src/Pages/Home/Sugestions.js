import React from "react";
import StripItems from "../../Components/StripItems";
import "./Home.css";
import { sugestions, sugestionLogged } from "../../Data/mock.js";

const Sugestions = (props) => {
  return (
    <div>
      {props.isLogged === "true" &&
        sugestionLogged.map((item, key) => (
          <StripItems content={item} key={key} />
        ))}

      {sugestions.map((item, key) => (
        <StripItems key={key} content={item} />
      ))}
    </div>
  );
};

export default Sugestions;
