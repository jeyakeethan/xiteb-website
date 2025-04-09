import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Memoized Component for Each Block (Image + Text)
const SliderBlock = React.memo(({ image, heading, description }) => (
  <div className="flex w-full max-w-full">

    {/* Left Column (Image) */}
    <div className="w-1/2">
      <img
        src={image}
        alt="Image"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Column (Text and Button) */}
    <div className="w-1/2 flex flex-col justify-center items-center p-8 text-center">
      {/* Heading */}
      <h3 className="text-xl font-semibold text-gray-700 mb-4">{heading}</h3>
      <p className="text-2x1 text-gray-700 mb-6">{description}</p>
      <button className="bg-black text-white px-6 py-3 rounded-full flex items-center">
        <span>Read More</span>
        <ChevronRight className="ml-2" />
      </button>
    </div>
  </div>
));

export default function OurServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://via.placeholder.com/600x400",
      heading: "Real Solution, Real Fast",
      description: "We provide fast and effective logistics solutions to streamline your operations.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      heading: "Best Global Logistics Solution",
      description: "Our global network ensures seamless and efficient logistics services worldwide.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      heading: "Fast Delivery & Safe Transit",
      description: "Trust us with your logistics needs to ensure timely and secure deliveries.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      heading: "24/7 Tracking and Support",
      description: "Get real-time updates and support anytime, anywhere, for peace of mind.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      heading: "Sustainable Solutions",
      description: "We prioritize eco-friendly solutions to help your business reduce its carbon footprint.",
    },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gray-100 my-3">
      {/* Headings - Outside of the content blocks */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Real Solution, Real Fast</h3>
        <h1 className="text-4xl font-bold text-orange-600 mb-6">Best Global Logistics Solution</h1>
      </div>

      {/* Displaying Content in Rows - Limit to two blocks per row */}
      <div className="flex max-h-96">
        {/* First Row */}
        <SliderBlock
          image={slides[currentSlide].image}
          heading={slides[currentSlide].heading}
          description={slides[currentSlide].description}
        />
        <SliderBlock
          image={slides[(currentSlide + 1) % slides.length].image}
          heading={slides[(currentSlide + 1) % slides.length].heading}
          description={slides[(currentSlide + 1) % slides.length].description}
        />
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-4 left-4 text-lg font-semibold text-gray-700">
        Logistics Transport Solution
      </div>
      <div className="absolute bottom-4 right-4 flex items-center">
        <button onClick={goToPrevSlide} className="text-gray-500 mr-2">
          <ChevronLeft size={24} />
        </button>
        <button onClick={goToNextSlide} className="text-gray-500">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-orange-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
