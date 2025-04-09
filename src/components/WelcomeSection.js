import React from "react";

export default function WelcomeSection() {
  return (
    <div className="flex max-h-96 my-3">
      {/* Left Image */}
      <div className="w-1/2">
        <img
          src="https://via.placeholder.com/600x800"
          alt="welcome section"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="max-h-96 w-1/2 flex flex-col justify-center items-center p-12 bg-gray-100 text-center">
        <img
          src="https://via.placeholder.com/200x100"
          alt="Banner Image"
          className="mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          We are dedicated to delivering innovative and effective solutions for your business.
        </p>
        <button className="bg-white text-blue-400 px-6 py-3 uppercase">
          More About Us
        </button>
      </div>
    </div>
  );
}
