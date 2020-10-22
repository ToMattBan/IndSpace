import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./custom.css";

const VideoHolder = (props) => {
  const itemName = props.item.name;
  const image = props.item.image;
  const link = props.item.link;

  return (
    <Fragment>
      <Link to={link}>
        <img src={image} />
        <div>{itemName}</div>
      </Link>
    </Fragment>
  );
};

export default VideoHolder;
