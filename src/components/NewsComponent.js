import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const newsData = [
  {
    image: "https://via.placeholder.com/300x200",
    date: "10",
    month: "April",
    heading: "Breaking News: Latest Tech Updates",
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus at ultrices mi tempus imperdiet. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ornare arcu dui vivamus arcu felis bibendum.",
  },
  {
    image: "https://via.placeholder.com/300x200",
    date: "15",
    month: "March",
    heading: "New Innovations in Artificial Intelligence",
    author: "Jane Smith",
    content: "Vestibulum morbi blandit cursus risus at ultrices. Ut tristique et egestas quis. Egestas purus viverra accumsan in nisl nisi scelerisque. Mi sit amet mauris commodo quis imperdiet. Etiam tempor orci eu lobortis. Amet mauris commodo quis imperdiet massa tincidunt nunc. Massa placerat duis ultricies lacus sed turpis.",
  },
  {
    image: "https://via.placeholder.com/300x200",
    date: "22",
    month: "February",
    heading: "The Future of Robotics",
    author: "Alice Johnson",
    content: "Consectetur adipiscing elit ut aliquam purus sit amet. Enim facilisis gravida neque convallis a cras. Cursus sit amet dictum sit amet justo donec. Purus gravida quis blandit turpis cursus in. Amet risus nullam eget felis eget nunc lobortis mattis. Et malesuada fames ac turpis egestas integer.",
  },
  {
    image: "https://via.placeholder.com/300x200",
    date: "5",
    month: "January",
    heading: "Exploring the Universe with New Technologies",
    author: "Mark Lee",
    content: "Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ornare arcu dui vivamus arcu felis bibendum. Egestas purus viverra accumsan in nisl nisi scelerisque. Mi sit amet mauris commodo quis imperdiet. Amet mauris commodo quis imperdiet massa tincidunt nunc. Massa placerat duis ultricies lacus sed turpis.",
  },
];

export default function NewsComponent() {
  return (
    <div className="py-8 my-3">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-4">Latest News</h1>
      <h4 className="text-lg text-gray-500 text-center mb-6">
        Stay updated with the latest trends and stories in technology.
      </h4>

      {/* News Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {newsData.map((news, index) => (
          <div key={index} className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Left Section: Image + Date/Month */}
            <div className="relative">
              <img src={news.image} alt={`News ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="absolute top-2 left-2 bg-black text-white p-2 rounded-md text-center">
                <span className="text-3xl">{news.date}</span>
                <div className="text-md">{news.month}</div>
              </div>
            </div>

            {/* Right Section: Heading + Author + Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">{news.heading}</h3>
              <div className="flex items-center space-x-2 text-gray-500 mt-2">
                <h4 className="text-sm">{news.author}</h4>
                <FontAwesomeIcon icon={faComment} />
                <span className="text-sm">5 Comments</span>
              </div>

              {/* Content (cropped) */}
              <p className="text-gray-700 mt-4 text-sm line-clamp-3">{news.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
