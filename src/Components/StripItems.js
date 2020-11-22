import React from "react";
import "./custom.css";
import "../global.css";
import PreciousIcon from "../Images/Icons/previous.svg";
import NextIcon from "../Images/Icons/next.svg";
import VideoHolder from "./VideoHolder";

const StripItems = (props) => {
  const content = props.content;
  const name = content.name;
  const items = content.items;

  const Slide = (e, direction) => {
    var _target = e.target;

    while (!_target.getAttribute("data-carousel")) {
      _target = _target.parentElement;
    }

    var sliderNumber = _target.getAttribute("data-carousel");

    var slider = document.querySelector('[data-slide="' + sliderNumber + '"]');

    var sliderItem = slider.querySelectorAll(".c-stripItems__Item");
    var sliderItemWidth = sliderItem[0].offsetWidth;
    var numberSliders = sliderItem.length;

    var actualSlide = slider.getAttribute("data-chanel");
    actualSlide = parseInt(actualSlide);

    var screenSize = window.screen.width;

    var breakpoint =
      screenSize < 600
        ? "mobile"
        : screenSize < 900
        ? "tabletV"
        : screenSize < 1200
        ? "tabletH"
        : "laptop";

    var lastPossibleSlide =
      breakpoint === "mobile"
        ? numberSliders - 2
        : breakpoint === "tabletV"
        ? numberSliders - 3
        : numberSliders - 4;

    var newSlide;
    if (direction === "previous")
      newSlide = actualSlide - 1 < 0 ? actualSlide : actualSlide - 1;

    if (direction === "next") {
      newSlide =
        actualSlide + 1 > lastPossibleSlide ? actualSlide : actualSlide + 1;
    }

    slider.setAttribute("data-chanel", newSlide);
    slider.setAttribute(
      "style",
      "transform: translateX(-" + newSlide * sliderItemWidth + "px)"
    );
  };

  return (
    <div className="c-stripItems _pvsm">
      <h1 className="c-stripItems__Name">{name}</h1>
      <div className="_mhnxs _wsnw _ovxh _por">
        <div
          onClick={(e) => Slide(e, "previous")}
          className="c-stripItems__Slide--arrow"
          data-carousel={props.place}
        >
          <img src={PreciousIcon} alt="icon-previous" />
        </div>
        <div
          className="c-stripItems__Slide"
          data-chanel={0}
          data-slide={props.place}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="c-stripItems__Item _6/12 _4/12@tabletV _3/12@tabletH _dib"
            >
              <VideoHolder item={item} />
            </div>
          ))}
        </div>
        <div
          onClick={(e) => Slide(e, "next")}
          className="c-stripItems__Slide--arrow"
          data-carousel={props.place}
        >
          <img src={NextIcon} alt="icon-next" />
        </div>
      </div>
    </div>
  );
};

export default StripItems;
