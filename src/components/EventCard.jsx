import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const EventCard = ({ title, description, images, date, location, status }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-change image every 3 seconds (paused on hover)
  useEffect(() => {
    if (!images || images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, isHovered]);

  const goToNextImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const goToPrevImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1,
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "upcoming":
        return "bg-blue-50 text-blue-600 border-blue-200";
      case "ongoing":
        return "bg-green-50 text-green-600 border-green-200";
      case "completed":
        return "bg-gray-50 text-gray-600 border-gray-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 max-w-sm w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative">
        <div className="w-full h-48 relative overflow-hidden">
          {images && images.length > 0 ? (
            <>
              <img
                src={images[currentImageIndex]}
                alt={`${title} image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Navigation Controls (show on hover if multiple images) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-1.5 rounded-full shadow-md opacity-0 hover:opacity-100 transition-all duration-300"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft size={10} />
                  </button>

                  <button
                    onClick={goToNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-1.5 rounded-full shadow-md opacity-0 hover:opacity-100 transition-all duration-300"
                    aria-label="Next image"
                  >
                    <FaChevronRight size={10} />
                  </button>
                </>
              )}

              {/* Status Badge */}
              {status && (
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}
                  >
                    {status}
                  </span>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl text-gray-400 mb-1">📸</div>
                <p className="text-gray-500 text-xs">No image</p>
              </div>
            </div>
          )}
        </div>

        {/* Image Indicators */}
        {images && images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToImage(idx)}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                  idx === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#0B2044] mb-2 line-clamp-2">
          {title || "Event Title"}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description || "Event description will be displayed here."}
        </p>

        {/* Event Meta Information */}
        <div className="space-y-2 mb-4">
          {date && (
            <div className="flex items-center text-xs text-gray-500">
              <FaCalendar className="w-3 h-3 mr-2" />
              <span>{date}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center text-xs text-gray-500">
              <FaMapMarkerAlt className="w-3 h-3 mr-2" />
              <span>{location}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button className="w-full px-4 py-2 bg-[#0B2044] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
