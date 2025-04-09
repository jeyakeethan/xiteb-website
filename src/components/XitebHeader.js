import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample slide data
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

// Static navLinks object
const navLinks = {
  Home: [],
  Pages: [
    { title: "Subpage 1", url: "/subpage-1" },
    { title: "Subpage 2", url: "/subpage-2" },
  ],
  Tracking: [],
  Services: [],
};

export default function XitebHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <div className="mh-96 flex flex-col">
      {/* Top Header */}
      <div className="flex mb-5 items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="flex gap-6 relative">
          <ul className="flex gap-6 h-full">
            {/* Iterate over the navLinks object */}
            {Object.keys(navLinks).map((linkKey) => (
              <li key={linkKey} className="relative">
                <button
                  className="block text-black font-bold font-medium flex items-center justify-center"
                  onClick={() => navLinks[linkKey].length > 0 && setIsDropdownOpen(!isDropdownOpen)}
                >
                  {linkKey} {navLinks[linkKey].length > 0 && '↓'}
                </button>

                {navLinks[linkKey].length > 0 && isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
                    {navLinks[linkKey].map((subpage, idx) => (
                      <li key={idx}>
                        <a
                          href={subpage.url}
                          className="block px-4 py-2 text-black hover:bg-gray-100">
                          {subpage.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <button className="text-black px-6 py-2 bg-orange-400 text-white">Get Quotes</button>
          <button variant="outline" className="text-white bg-gray-600 border-black px-6 py-2">Sign In</button>
        </nav>
      </div>

      {/* Slider Content */}
      <div className="flex flex-1">

        {/* Content Left */}
        <div className="w-1/2 flex flex-col justify-center p-12 bg-gray-50">
          <h1 className="text-4xl font-bold text-black mb-4">{slide.title}</h1>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">{slide.subtitle}</h2>
          <p className="text-gray-700 mb-6">{slide.description}</p>
          <button className="bg-orange-400 text-white px-6 py-3">Discover More</button>

          {/* Slider Controls at Left Bottom */}
          <div className="relative -bottom-8 -left-4 flex items-center gap-4">
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
        </div>

        {/* Image Right */}
        <div className="w-1/2 h-full">
          <img src={slide.image} alt="Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
