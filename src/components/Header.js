import React from "react";
import sammy from "../sammy.png";
import bg from "../bg.svg";

export default function Header() {
  return (
    <div
      className="hidden lg:block"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="border-b border-gray-200">
        <div className="py-6 flex px-10">
          <div className="w-1/5 flex items-center">
            <img
              src={sammy}
              alt="Sammy Logo"
              className="max-h-full w-20 mr-4"
            />
            <h2 className="text-white font-bold tracking-wider">
              Jake's Sammy Reader
            </h2>
          </div>

          {/* =============== */}
          <div className="w-4/5 flex space-x-4">
            <button className="my-auto py-2 px-4 rounded bg-gradient-to-b from-white to-blue-100 hover:from-blue-100 hover:to-white border border-blue-300">
              Refresh
            </button>
            <button className="my-auto rounded bg-gradient-to-b from-white to-blue-100 hover:from-blue-100 hover:to-white border border-blue-300 flex justify-between">
              <span className="py-2 px-4">Mark all as read</span>
              <span
                className="p-2 inline-block border-l border-blue-300"
                role="img"
                aria-label="Down Arrow"
              >
                👇
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
