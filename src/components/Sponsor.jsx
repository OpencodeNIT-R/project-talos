import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import sponsors from "../config/sponsors";
import "./sponsor.css";

const SponsorsSection = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const pageIndex = useRef(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToPage = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / sponsors.length;
    const scrollX = cardWidth * visibleCount * index;
    container.scrollTo({ left: scrollX, behavior: "smooth" });
  };

  const totalPages = () => {
    return Math.ceil(sponsors.length / visibleCount);
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
    const autoScroll = () => {
      const container = scrollRef.current;
      if (!container) return;

      const pages = totalPages();
      pageIndex.current = (pageIndex.current + 1) % pages;
      scrollToPage(pageIndex.current);
    };

    let interval;
    if (!isHovered) {
      interval = setInterval(autoScroll, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered, visibleCount]);

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-0">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Our Sponsors and Partners
          </h2>
          <p className="text-gray-700 text-lg">
            We are proudly supported by our amazing sponsors and partners.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => handleManualScroll("left")}
            className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-3 bg-[#00163A] rounded-full p-2 sm:p-2.5 shadow z-10 cursor-pointer hover:bg-[#2563eb]"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Sponsor Scroll Area */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth hide-scrollbar"
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-2 box-border"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="h-64 bg-white flex items-center justify-center rounded-xl transition duration-300 transform hover:shadow-xl cursor-pointer border-2">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="object-contain h-32 "
                  />
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => handleManualScroll("right")}
            className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-3 bg-[#00163A] cursor-pointer rounded-full p-2 sm:p-2.5 shadow z-10 hover:bg-[#2563eb]"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
