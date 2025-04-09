import React, { useState } from "react";
// import { button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "https://via.placeholder.com/600x400",
    title: "Your Business Solution",
    subtitle: "Expert Guidance",
    description: "We provide end-to-end solutions for your business growth and success.",
  },
  {
    image: "https://via.placeholder.com/600x400",
    title: "Innovative Strategies",
    subtitle: "Tailored Services",
    description: "Unlock potential with customized strategies tailored to your needs.",
  },
];

export default function XitebHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <div className="mh-96 flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="flex gap-6">
          <a href="#" className="text-black font-medium">Home</a>
          <a href="#" className="text-black font-medium">Pages</a>
          <a href="#" className="text-black font-medium">Tracking</a>
          <a href="#" className="text-black font-medium">Services</a>
          <button className="text-black px-4 py-2 rounded-full">Get Quotes</button>
          <button variant="outline" className="text-black border-black px-4 py-2 rounded-full">Sign In</button>
        </nav>
      </div>

      {/* Slider Content */}
      <div className="flex flex-1">

        {/* Content Left */}
        <div className="w-1/2 flex flex-col justify-center p-12 bg-gray-50">
          <h1 className="text-4xl font-bold text-black mb-4">{slide.title}</h1>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">{slide.subtitle}</h2>
          <p className="text-gray-700 mb-6">{slide.description}</p>
          <button className="bg-black text-white px-6 py-3 rounded-full">Discover More</button>

          {/* Slider Controls */}
          <div className="mt-10 flex items-center gap-4">
            <button variant="outline" size="icon" onClick={prevSlide}>
              <ArrowLeft />
            </button>
            <span className="text-gray-600">
              {currentSlide + 1} / {slides.length}
            </span>
            <button variant="outline" size="icon" onClick={nextSlide}>
              <ArrowRight />
            </button>
          </div>

          {/* Image Left */}
          <div className="w-1/2 h-full">
            <img src={slide.image} alt="slide" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
