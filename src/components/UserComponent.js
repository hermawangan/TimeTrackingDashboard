import React, { useState } from "react";
import UserActivities from "./UserActivities";
import image from "../image-jeremy.png";

function UserComponent() {
  const [name, setName] = useState("daily");
  const [active, setActive] = useState("Daily");

  const clickHandler = (e) => {
    setName(e.target.name);
    setActive(e.target.id);
  };

  return (
    <div className="grid md:grid-cols-3 md:h-screen gap-x-5 bg-neutral-100 h-full pb-10 ">
      <div className="flex flex-col  md:col-span-1  p-4 md:pl-20 justify-center ">
        <div className="flex justify-center items-center  bg-neutral-300 rounded-lg h-32 relative z-10 md:flex-col md:items-start md:h-72 md:pl-4">
          <img
            src={image}
            alt="usePhoto"
            className="w-1/6 border-2 border-white mr-2 rounded-full md:w-1/4 md:mb-6"
          />
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Report for</span>
            <span className="lg:text-4xl md:text-2xl text-4xl text-white">
              Jeremy <span className="md:block">Robson</span>{" "}
            </span>
          </div>
        </div>
        <div
          id="btn-container"
          className="flex justify-evenly items-center h-24 rounded-lg bg-neutral-200 text-gray-500 relative -z-1 -mt-4 md:flex-col md:justify-center md:items-start md:p-4 md:h-32"
        >
          <button
            id="Daily"
            name="daily"
            onClick={clickHandler}
            className={`${
              active === "Daily" ? "active" : null
            }  hover:text-white md:mt-4`}
          >
            Daily
          </button>
          <button
            id="Weekly"
            name="weekly"
            onClick={clickHandler}
            className={`${
              active === "Weekly" ? "active" : null
            }  hover:text-white md:mt-4`}
          >
            Weekly
          </button>
          <button
            id="Monthly"
            name="monthly"
            onClick={clickHandler}
            className={`${
              active === "Monthly" ? "active" : null
            }  hover:text-white md:mt-4`}
          >
            Monthly
          </button>
        </div>
      </div>
      <div className=" grid md:col-span-2">
        <div className="grid md:grid-cols-3 md:place-content-center">
          <UserActivities time={name} />
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
