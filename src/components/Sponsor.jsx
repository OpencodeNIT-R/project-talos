import sponsors from "../config/sponsors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SponsorsSection = () => {
  return (
    <section className="relative bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-50 rounded-full opacity-40 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#021640] leading-tight tracking-tight">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Proudly supported by amazing organizations who believe in our
              mission and help us drive innovation forward.
            </p>
          </div>
        </div>

        {/* Sponsors Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          className="sponsors-swiper"
        >
          {sponsors.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="h-64 bg-gradient-to-br from-white to-gray-50/50 flex items-center justify-center rounded-2xl border border-gray-200 hover:border-[#021640]/30 hover:shadow-lg transition-all duration-300 p-12 group-hover:-translate-y-1">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-32 max-w-full object-contain transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                  />

                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#021640] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Styles */}
        <style jsx global>{`
          .sponsors-swiper .swiper-pagination {
            position: relative !important;
            margin-top: 2rem;
          }

          .sponsors-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #e5e7eb;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .sponsors-swiper .swiper-pagination-bullet-active {
            background: #021640;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </section>
  );
};

export default SponsorsSection;
