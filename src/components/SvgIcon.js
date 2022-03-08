import React from "react";
import WorkSvg from "./SVGComponents/WorkSvg";
import PlaySvg from "./SVGComponents/PlaySvg";
import StudySvg from "./SVGComponents/StudySvg";
import ExerciseSvg from "./SVGComponents/ExerciseSvg";
import SocialSvg from "./SVGComponents/SocialSvg";
import SelfcareSvg from "./SVGComponents/SelfcareSvg";

function SvgIcon(props) {
  const title = props.title;

  return (
    <div className="">
      {title === "Work" ? (
        <div className="w-full flex justify-end bg-primary-LightRed rounded-lg">
          <WorkSvg />
        </div>
      ) : title === "Play" ? (
        <div className="w-full flex justify-end bg-primary-SoftBlue rounded-lg">
          <PlaySvg />
        </div>
      ) : title === "Study" ? (
        <div className="w-full flex justify-end bg-primary-Light rounded-lg">
          <StudySvg />
        </div>
      ) : title === "Exercise" ? (
        <div className="w-full flex justify-end bg-primary-LimeGreen rounded-lg">
          <ExerciseSvg />
        </div>
      ) : title === "Social" ? (
        <div className="w-full flex justify-end bg-primary-Violet rounded-lg">
          <SocialSvg />
        </div>
      ) : title === "Self Care" ? (
        <div className="w-full flex justify-end bg-primary-SoftOrange rounded-lg">
          <SelfcareSvg />
        </div>
      ) : null}
    </div>
  );
}

export default SvgIcon;
