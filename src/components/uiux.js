import React from "react";
import "../styles/uiux.css";
import Cursor from "../assets/redCursor.png";

function Uiux() {
  return (
    <div>
      <div className="w-full h-[100vh] top-[90px]">
        <div className="w-full h-[100%] flex flex-col justify-center items-center  px-4 text-center">
          <div className="absolute top-20 left-20">
            <div className="isolate -space-y-px rounded-md shadow-sm">
              <div className="w-28 h-32 relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <img className="mx-auto mt-8" src={Cursor} alt="" />
              </div>
              <div className="w-28 h-32 relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <div className="w-10 h-10 border-4 rounded-full mx-auto mt-8  "></div>
              </div>
              <div className="mt-32">
                {/* <p>Let's go!</p> */}

                <button className="but2"></button>
              </div>
            </div>
          </div>
          <p className="uiux_heading">Design with me...</p>
          <div className="w-80 h-3/5  big_container ">
            <div className="w-64 h-1/2  small_container"></div>
            <button className="but">Let's go!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Uiux;
