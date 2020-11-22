import React from "react";
import StripItems from "../../Components/StripItems";
import "./Home.css";
import { sugestions, sugestionLogged } from "../../Data/mock.js";

const Sugestions = (props) => {
  return (
    <div className="_phxxs _phsm@tabletV _ph@tabletH _phlg@laptop _phxxl@desktop">
      {props.isLogged === "true" &&
        sugestionLogged.map((item, key) => (
          <StripItems content={item} key={key} place={key} />
        ))}

      {sugestions.map((item, key) => (
        <StripItems content={item} key={key} place={key} />
      ))}
    </div>
  );
};

export default Sugestions;
