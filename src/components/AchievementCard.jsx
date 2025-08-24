import { Calendar, Award, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const AchievementCard = ({ title, description, year, isLeft, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if it's mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // On mobile, make cards visible immediately without animations
      setIsVisible(true);
      return;
    }

    // Desktop animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const cardElement = document.querySelector(`[data-card-index="${index}"]`);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      className={`w-full ${isLeft ? "text-left" : "text-right"}`}
      data-index={index}
      data-card-index={index}
    >
      <div
        className={`
          max-w-md mx-auto rounded-xl shadow-lg border border-gray-100
          transition-all duration-700 group cursor-pointer relative overflow-hidden
          bg-white transform-gpu
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          hover:scale-105 hover:shadow-2xl hover:border-[#51B8F2]
          ${isLeft ? "ml-0" : "mr-0"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2044]/5 via-transparent to-[#51B8F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Top accent line with animation */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B2044] to-[#51B8F2] transition-all duration-500 group-hover:h-2">
          <div className="h-full w-0 bg-gradient-to-r from-[#51B8F2] to-[#0B2044] transition-all duration-700 group-hover:w-full"></div>
        </div>

        <div className="relative p-6 pt-8">
          {/* Year badge with enhanced styling */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-[#0B2044] text-sm font-semibold bg-[#51B8F2]/10 px-3 py-1.5 rounded-full">
              <Calendar className="h-4 w-4 mr-2 text-[#51B8F2]" />
              <span className="uppercase tracking-wide">{year}</span>
            </div>
            <div
              className={`transition-all duration-300 ${
                isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
              }`}
            >
              <Award className="h-5 w-5 text-[#51B8F2]" />
            </div>
          </div>

          {/* Title with enhanced typography */}
          <h3 className="text-xl font-bold mb-4 text-[#0B2044] group-hover:text-[#51B8F2] transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Description with better spacing */}
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            {description}
          </p>

          {/* Enhanced progress bar with icon */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0B2044] to-[#51B8F2] rounded-full transition-all duration-700 group-hover:w-full w-0"></div>
              </div>
            </div>
            <TrendingUp
              className={`ml-3 h-4 w-4 text-[#51B8F2] transition-all duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#51B8F2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#0B2044] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
