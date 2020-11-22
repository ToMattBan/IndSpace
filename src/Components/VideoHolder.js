import React from "react";
import { Link } from "react-router-dom";
import "./custom.css";

const VideoHolder = (props) => {
  const itemName = props.item.name;
  const image = props.item.image;
  const link = props.item.link;

  return (
    <div className="_phxs">
      <Link to={link}>
        <img src={image} alt={`cover ${itemName}`} />
        <div>{itemName}</div>
      </Link>
    </div>
  );
};

export default VideoHolder;
