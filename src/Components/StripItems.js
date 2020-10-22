import React from "react";
import "./custom.css";
import "../global.css";
import VideoHolder from "./VideoHolder";

const StripItems = (props) => {
  const content = props.content;
  const name = content.name;
  const items = content.items;

  return (
    <div className="c-stripItems o-wrapper o-layout--sm _pvsm">
      <h1 className="c-stripItems__Name">{name}</h1>
      <div className="o-layout--sm@tabletV _df">
        {items.map((item, key) => (
          <div key={key} className="o-layout__item _4/12">
            <VideoHolder item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StripItems;
