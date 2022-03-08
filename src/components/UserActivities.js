import React, { useState } from "react";
import SvgIcon from "./SvgIcon";

function UserActivities(props) {
  const time = props.time;

  const [data, setData] = useState([
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ]);

  return (
    <>
      {data.map((datas) => {
        return (
          <div className="m-4 flex flex-col">
            <SvgIcon title={datas.title} />
            <div className=" p-4 bg-neutral-200 rounded-lg relative -mt-7 hover:bg-neutral-300 hover:cursor-pointer">
              <div className="flex justify-between">
                <p className="text-base text-white font-lg">{datas.title}</p>
                <span className="text-gray-400 font-bold text-sm hover:text-white hover:cursor-pointer ">
                  ...
                </span>
              </div>
              <div className="flex justify-between md:flex-col">
                <p className="text-4xl text-gray-300 md:pt-2 md:pb-2">
                  {datas.timeframes[time].current}hrs
                </p>
                <p className="text-gray-400 md:text-xs">
                  Last Week - {datas.timeframes[time].previous}hrs
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UserActivities;
