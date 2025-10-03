import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import EventCard from "../../components/EventCard";
import events from "../../config/events";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Events = () => {
  const [filter, setFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filterOptions = [
    { value: "all", label: "All Events" },
    { value: "upcoming", label: "Upcoming" },
    { value: "past", label: "Past Events" },
  ];

  const renderCards = () => {
    const filteredEvents =
      filter === "all" ? events : events.filter((e) => e.type === filter);

    if (filteredEvents.length === 0) {
      return (
        <>
          {/* Mobile Empty State */}
          <div className="md:hidden flex flex-col items-center justify-center py-20">
            <div className="text-8xl mb-6">🎪</div>
            <h3 className="text-3xl font-bold text-[#021640] mb-4 text-center">
              {filter === "all" ? "No Events Yet" : `No ${filter} Events`}
            </h3>
            <p className="text-lg text-gray-600 text-center max-w-md mb-8">
              {filter === "all"
                ? "We're working on organizing amazing events. Stay tuned for exciting announcements!"
                : `No ${filter} events found. Check out other categories or come back later for updates.`}
            </p>

            {/* Coming Soon Card for empty state */}
            <div className="w-full max-w-md">
              <EventCard
                title="Exciting Events Coming Soon!"
                description="We're planning amazing technical workshops, competitions, and networking events. Follow us to get notified when we announce new events."
                images={[
                  "https://res.cloudinary.com/dswk9scro/image/upload/v1752313324/image_urekzp.png",
                ]}
                status="upcoming"
                date="Stay Tuned"
                location="NIT Rourkela"
              />
            </div>
          </div>

          {/* Desktop Empty State */}
          <div className="hidden md:block col-span-full">
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-8xl mb-6">🎪</div>
              <h3 className="text-3xl font-bold text-[#021640] mb-4">
                {filter === "all" ? "No Events Yet" : `No ${filter} Events`}
              </h3>
              <p className="text-lg text-gray-600 text-center max-w-md mb-8">
                {filter === "all"
                  ? "We're working on organizing amazing events. Stay tuned for exciting announcements!"
                  : `No ${filter} events found. Check out other categories or come back later for updates.`}
              </p>

              {/* Coming Soon Card for empty state */}
              <div className="w-full max-w-md">
                <EventCard
                  title="Exciting Events Coming Soon!"
                  description="We're planning amazing technical workshops, competitions, and networking events. Follow us to get notified when we announce new events."
                  images={[
                    "https://res.cloudinary.com/dswk9scro/image/upload/v1752313324/image_urekzp.png",
                  ]}
                  status="upcoming"
                  date="Stay Tuned"
                  location="NIT Rourkela"
                />
              </div>
            </div>
          </div>
        </>
      );
    }

    return { filteredEvents };
  };

  return (
    <section className="relative bg-white min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 pt-[80px] pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 pt-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#021640] leading-tight tracking-tight">
              Our Events
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Discover our technical workshops, competitions, and networking
              events designed to enhance your engineering journey and foster
              innovation.
            </p>
          </div>
        </div>

        {/* Filter - Desktop Buttons & Mobile Dropdown */}
        <div className="mb-16">
          {/* Desktop Filter Buttons */}
          <div className="hidden md:flex justify-center flex-wrap gap-4">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-8 py-3 rounded-lg border-2 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  filter === option.value
                    ? "bg-[#021640] text-white border-[#021640] shadow-lg"
                    : "bg-white text-[#021640] border-[#021640] hover:bg-[#021640] hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown Filter */}
          <div className="md:hidden flex justify-center">
            <div className="relative w-full max-w-xs">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-6 py-3 bg-white border-2 border-[#021640] text-[#021640] rounded-lg font-semibold text-base flex items-center justify-between transition-all duration-300 hover:bg-[#021640] hover:text-white"
              >
                <span>
                  {filterOptions.find((opt) => opt.value === filter)?.label}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#021640] rounded-lg shadow-lg z-10 overflow-hidden">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilter(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-6 py-3 text-left text-base font-medium transition-all duration-200 hover:bg-[#021640] hover:text-white ${
                        filter === option.value
                          ? "bg-[#021640] text-white"
                          : "text-[#021640] border-b border-gray-200 last:border-b-0"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Events - Mobile Carousel & Desktop Grid */}
        {(() => {
          const result = renderCards();

          // If no events, show empty state
          if (!result.filteredEvents) {
            return result;
          }

          const { filteredEvents } = result;

          return (
            <>
              {/* Mobile Carousel */}
              <div className="md:hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  breakpoints={{
                    480: {
                      slidesPerView: 1.1,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                  }}
                  loop={filteredEvents.length > 1}
                  className="events-mobile-swiper"
                >
                  {filteredEvents.map((event, index) => (
                    <SwiperSlide key={index}>
                      <EventCard {...event} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredEvents.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </>
          );
        })()}
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .events-mobile-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }

        .events-mobile-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .events-mobile-swiper .swiper-pagination-bullet-active {
          background: #021640;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Events;
