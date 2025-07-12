import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import sponsors from "../../config/sponsors";

const SponsorsSection = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const pageIndex = useRef(0);

  const scrollToPage = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollX = container.offsetWidth * index;
    container.scrollTo({ left: scrollX, behavior: "smooth" });
  };

  const totalPages = () => {
    const container = scrollRef.current;
    if (!container) return 0;

    const fullWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;
    return Math.ceil(fullWidth / visibleWidth);
  };

  const autoScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const pages = totalPages();
    pageIndex.current = (pageIndex.current + 1) % pages;
    scrollToPage(pageIndex.current);
  };

  const handleManualScroll = (direction) => {
    const pages = totalPages();
    if (direction === "left") {
      pageIndex.current =
        pageIndex.current === 0 ? pages - 1 : pageIndex.current - 1;
    } else {
      pageIndex.current = (pageIndex.current + 1) % pages;
    }
    scrollToPage(pageIndex.current);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(autoScroll, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Our Sponsors and Partners
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          We are proudly supported by our amazing sponsors and partners.
        </p>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[15rem] h-64 bg-white flex items-center justify-center rounded transition duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer border"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="object-contain h-32"
                />
              </a>
            ))}
          </div>

          {/* Buttons below */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => handleManualScroll("left")}
              className="p-2 border rounded-full bg-white shadow hover:bg-gray-100"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              className="p-2 border rounded-full bg-white shadow hover:bg-gray-100"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
