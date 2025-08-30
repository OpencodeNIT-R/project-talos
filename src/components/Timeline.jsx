import { useEffect, useRef, useState } from "react";
import AchievementCard from "./AchievementCard";
import achievementsData from "../config/achievement";
import { Sparkles } from "lucide-react";

const Timeline = () => {
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const [visibleDots, setVisibleDots] = useState(new Set());
  const [visibleLines, setVisibleLines] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check if it's mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // On mobile, make everything visible immediately without animations
      const allIndices = achievementsData.map((_, index) => index);
      setVisibleDots(new Set(allIndices));
      setVisibleLines(new Set(allIndices));
      setScrollProgress(1);
      return; // Exit early for mobile
    }

    // Desktop scroll animations
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate when the timeline section enters the viewport
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Start animation when section is 20% visible from bottom
        const startPoint = windowHeight - windowHeight * 0.2;
        const endPoint = -sectionHeight + windowHeight * 0.8;

        // Calculate progress (0 to 1)
        let progress = 0;
        if (sectionTop <= startPoint && sectionTop >= endPoint) {
          progress = (startPoint - sectionTop) / (startPoint - endPoint);
        } else if (sectionTop < endPoint) {
          progress = 1;
        }

        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    // Intersection Observer for individual cards and dots
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-timeline-index") || "0",
            );

            // Add minimal staggered effect
            setTimeout(() => {
              setVisibleDots((prev) => new Set([...prev, index]));
              setVisibleLines((prev) => new Set([...prev, index]));
            }, index * 50);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    // Observe timeline items after DOM is ready
    const observeItems = () => {
      const items = document.querySelectorAll("[data-timeline-index]");
      items.forEach((item) => observer.observe(item));
    };

    // Delay to ensure DOM is ready
    setTimeout(observeItems, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="achievements"
      className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Add custom CSS animations */}
      <style>{`
        .timeline-line-animated {
          transition: height 0.3s ease-out;
        }
        
        .timeline-dot-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
      `}</style>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={containerRef}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2044] mb-6">
            Excellence Through Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our remarkable journey of achievements spanning over a
            decade of engineering excellence, innovation, and competitive
            success in mechanical engineering challenges worldwide.
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Main Timeline Container */}
          <div className="relative">
            {/* Background Timeline Line */}
            <div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gray-200 rounded-full"
              style={{ height: "100%" }}
            ></div>

            {/* Animated Progress Line */}
            <div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-[#0B2044] to-[#51B8F2] rounded-full timeline-line-animated"
              style={{
                height: `${scrollProgress * 100}%`,
                marginLeft: "-1px",
                boxShadow: "0 0 10px rgba(81, 184, 242, 0.4)",
                zIndex: 10,
              }}
            />

            {/* Mobile Timeline Line - Continuous */}
            <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-[#0B2044] to-[#51B8F2] rounded-full z-0" />

            {/* Timeline Items */}
            <div className="space-y-16 md:space-y-20">
              {achievementsData
                .sort((a, b) => parseInt(b.year) - parseInt(a.year))
                .map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className="relative"
                    data-timeline-index={index}
                  >
                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                      <div className="flex items-center">
                        {/* Left Side Content */}
                        <div className="w-1/2 pr-8">
                          {index % 2 === 0 && (
                            <div className="text-right">
                              <AchievementCard
                                title={achievement.title}
                                description={achievement.description}
                                year={achievement.year}
                                isLeft={true}
                                index={index}
                                images={achievement.images}
                              />
                            </div>
                          )}
                        </div>

                        {/* Center Timeline Dot */}
                        <div className="w-16 flex justify-center relative z-20">
                          <div className="relative">
                            {/* Connecting Line */}
                            <div
                              className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#0B2044] to-[#51B8F2] transition-all duration-700 ${
                                visibleLines.has(index)
                                  ? "opacity-100 w-8"
                                  : "opacity-0 w-0"
                              } ${index % 2 === 0 ? "right-8" : "left-8"}`}
                            />

                            {/* Pulsing Ring */}
                            <div
                              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[#51B8F2] transition-all duration-700 ${
                                visibleDots.has(index)
                                  ? "scale-100 opacity-50 timeline-dot-pulse"
                                  : "scale-0 opacity-0"
                              }`}
                            />

                            {/* Main Timeline Dot */}
                            <div
                              className={`relative w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-700 ${
                                visibleDots.has(index)
                                  ? "bg-gradient-to-br from-[#0B2044] to-[#51B8F2] scale-110"
                                  : "bg-gray-300 scale-75"
                              }`}
                            >
                              {/* Inner Sparkle */}
                              <div
                                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                                  visibleDots.has(index)
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              >
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                              </div>
                            </div>

                            {/* Year Badge */}
                            <div
                              className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-[#0B2044] text-xs font-bold px-3 py-1 rounded-full shadow-md border border-gray-100 transition-all duration-200 ${
                                visibleDots.has(index)
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 translate-y-4"
                              }`}
                            >
                              {achievement.year}
                            </div>
                          </div>
                        </div>

                        {/* Right Side Content */}
                        <div className="w-1/2 pl-8">
                          {index % 2 !== 0 && (
                            <div className="text-left">
                              <AchievementCard
                                title={achievement.title}
                                description={achievement.description}
                                year={achievement.year}
                                isLeft={false}
                                index={index}
                                images={achievement.images}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden relative pl-8">
                      {/* Mobile Dot - Static, no animation */}
                      <div className="absolute left-6 top-6 z-20 transform -translate-x-1/2">
                        <div className="w-4 h-4 rounded-full border-2 border-white shadow-md bg-gradient-to-br from-[#0B2044] to-[#51B8F2]" />
                      </div>

                      {/* Mobile Card */}
                      <div className="ml-4">
                        <AchievementCard
                          title={achievement.title}
                          description={achievement.description}
                          year={achievement.year}
                          isLeft={true}
                          index={index}
                          images={achievement.images}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
