import React from "react";

const clientLogos = [
  "https://via.placeholder.com/150x100", // Logo 1
  "https://via.placeholder.com/150x100", // Logo 2
  "https://via.placeholder.com/150x100", // Logo 3
  "https://via.placeholder.com/150x100", // Logo 4
  "https://via.placeholder.com/150x100", // Logo 5
  "https://via.placeholder.com/150x100", // Logo 6
];

export default function ClientLogos() {
  return (
    <div className="py-8 my-3">
      {/* Logos Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {clientLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="w-32 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
