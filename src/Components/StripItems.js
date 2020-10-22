import React, { Fragment } from "react";
import "./custom.css";

const StripItems = (props) => {
  const content = props.content;

  return (
    <Fragment>
      <h1>{content.name}</h1>
    </Fragment>
  );
};

export default StripItems;
