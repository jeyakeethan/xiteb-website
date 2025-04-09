import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const clientData = [
  {
    image: "https://via.placeholder.com/150x100",
    name: "Image 1",
    description: "Client 1 provides the best logistics solutions."
  },
  {
    image: "https://via.placeholder.com/150x100",
    name: "Image 2",
    description: "Client 2 offers affordable and reliable services."
  },
  {
    image: "https://via.placeholder.com/150x100",
    name: "Image 3",
    description: "Client 3 specializes in quick and efficient logistics."
  },
  {
    image: "https://via.placeholder.com/150x100",
    name: "Image 4",
    description: "Client 4 is known for customer satisfaction and reliability."
  },
];

const reasonsData = [
  { title: "Reliable", description: "We deliver on time every time." },
  { title: "Affordable", description: "Our solutions are cost-effective." },
  { title: "Expertise", description: "Our team has years of experience." },
  { title: "Customer Support", description: "We offer 24/7 support for all your needs." },
];

export default function TestimonialsAndReasons() {
  const [currentClient, setCurrentClient] = useState(0);
  const [expandedReason, setExpandedReason] = useState(null);

  const goToNextClient = () => {
    setCurrentClient((prev) => (prev + 1) % clientData.length);
  };

  const goToPrevClient = () => {
    setCurrentClient((prev) => (prev - 1 + clientData.length) % clientData.length);
  };

  return (
    <div className="flex flex-col max-h-96 sm:flex-row justify-between py-8 my-3">
      {/* Left Column - Testimonials */}
      <div className="flex flex-col items-start w-full sm:w-1/2">
        <h1 className="text-3xl font-bold text-black mb-4">Trusted Clients</h1>
        <h3 className="text-lg text-gray-500 mb-4">{clientData[currentClient].description}</h3>

        {/* Client Slider */}
        <div className="relative w-full h-full">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center">
              <img
                src={clientData[currentClient].image}
                alt={clientData[currentClient].name}
                className="w-40 h-28 object-cover rounded-md"
              />
            </div>
          </div>
          {/* Slider Buttons - Bottom Left */}
          <div className="absolute bottom-0 left-0 flex justify-start w-full px-4 py-4">
            <button onClick={goToPrevClient} className="text-gray-500 mr-2 text-lg">
              <ChevronLeft size={20} />
            </button>
            <button onClick={goToNextClient} className="text-gray-500 ml-2 text-lg">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Why Choose Us */}
      <div className="flex flex-col items-start w-full sm:w-1/2 mt-8 sm:mt-0">
        <h1 className="text-3xl font-bold text-black mb-4">Why Choose Us</h1>
        <h3 className="text-md text-gray-500 mb-4">Here are the top reasons why our clients choose us as their preferred logistics partner.</h3>

        <div className="space-y-4 w-full">
          {reasonsData.map((reason, index) => (
            <div key={index}>
              {/* Reason with + sign button */}
              <div className="flex items-center justify-between border-b-2 border-gray-100 py-2">
                <div className="text-lg font-bold text-black">{reason.title}</div>
                <button
                  onClick={() => setExpandedReason(expandedReason === index ? null : index)}
                  className="text-black text-xl"
                >
                  +
                </button>
              </div>

              {/* Expanded description */}
              {expandedReason === index && (
                <div className="text-gray-700 mt-2 text-sm">{reason.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
