import React from "react";
import "./custom.css";
import "../global.css";
import VideoHolder from "./VideoHolder";

const StripItems = (props) => {
  const content = props.content;
  const name = content.name;
  const items = content.items;

  return (
    <div className="c-stripItems o-wrapper _pvsm">
      <h1 className="c-stripItems__Name">{name}</h1>
      <div className="o-layout--sm _df _jcc">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 3 ? "_dn _db@tabletV" : ""
            } o-layout__item _3/12 _4/12@tabletV`}
          >
            <VideoHolder item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StripItems;
