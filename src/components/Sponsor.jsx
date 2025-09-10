import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import sponsors from "../config/sponsors";
import "./sponsor.css";

const SponsorsSection = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndex = useRef(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else if (window.innerWidth >= 640) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;

    const itemWidth = containerRef.current.scrollWidth / sponsors.length;
    const scrollPosition = itemWidth * itemsToShow * index;

    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const getTotalPages = () => {
    return Math.ceil(sponsors.length / itemsToShow);
  };

  const goToNext = () => {
    const totalPages = getTotalPages();
    currentIndex.current = (currentIndex.current + 1) % totalPages;
    scrollToIndex(currentIndex.current);
  };

  const goToPrevious = () => {
    const totalPages = getTotalPages();
    currentIndex.current =
      currentIndex.current === 0 ? totalPages - 1 : currentIndex.current - 1;
    scrollToIndex(currentIndex.current);
  };

  useEffect(() => {
    if (isPaused) return;

    const autoPlay = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(autoPlay);
  }, [isPaused, itemsToShow]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handlePrevClick = () => {
    goToPrevious();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 200);
  };

  const handleNextClick = () => {
    goToNext();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 200);
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-50 rounded-full opacity-40 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proudly supported by amazing organizations who believe in our
            mission and help us drive innovation forward.
          </p>
        </div>

        {/* Sponsors Carousel */}
        <div
          className="relative px-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth gap-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="h-64 bg-gradient-to-br from-white to-gray-50/50 flex items-center justify-center rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 p-12 group">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-32 max-w-full object-contain transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
