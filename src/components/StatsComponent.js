import React from "react";

export default function StatsComponent() {
  const stats = [
    {
      number: 150,
      text: "Delivered Packages",
    },
    {
      number: 50,
      text: "Countries Covered",
    },
    {
      number: 200,
      text: "Tons of Goods",
    },
    {
      number: 500,
      text: "Satisfied Clients",
    },
  ];

  return (
    <div className="flex justify-center gap-3 py-8 my-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xs h-32"
        >
          {/* Stats Row with Number and Text */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Number and Text in the Same Row */}
            <div className="flex items-center justify-center space-x-2 w-full relative z-10">
              {/* Number */}
              <span className="text-2xl font-bold text-indigo-900">
                {stat.number}
              </span>

              {/* Text - One Word per Line */}
              <span className="text-sm font-bold text-indigo-900 w-16 text-center break-words">
                {stat.text}
              </span>
            </div>

            {/* Shaded Background Behind Both Number and Text */}
            <div className="absolute inset-0 text-gray-200 text-center text-5xl font-bold rounded-lg">
              {stat.number}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
