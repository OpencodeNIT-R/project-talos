import teamMembers from "../config/teammate";
import { FaLinkedin } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TeamSlider = () => {
  const navigate = useNavigate();

  const uniqueTeamMembers = Array.from(
    new Map(teamMembers.map((member) => [member.name, member])).values(),
  );

  // Show only first 8 members for landing page
  const displayMembers = uniqueTeamMembers.slice(0, 8);

  const viewFullTeam = () => {
    navigate("/team");
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#021640] leading-tight tracking-tight">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Meet our amazing team members who drive innovation and excellence
              in mechanical engineering through their dedication and expertise.
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={viewFullTeam}
              className="bg-[#021640] hover:bg-[#021640]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              View all Team Members
            </button>
          </div>
        </div>

        {/* Team Carousel */}
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
          className="team-swiper"
        >
          {displayMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 hover:border-[#021640]/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={
                      member.img ||
                      "https://via.placeholder.com/300x300?text=Photo+Coming+Soon"
                    }
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-black/10"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-[#021640] leading-tight">
                      {member.name || "Full Name"}
                    </h3>
                    {member.title && (
                      <p className="text-sm font-medium text-gray-600">
                        {member.title}
                      </p>
                    )}
                    {member.team && (
                      <p className="text-sm text-gray-500">{member.team}</p>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-start pt-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#021640] text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                      >
                        <FaLinkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#021640] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Styles */}
        <style jsx global>{`
          .team-swiper .swiper-pagination {
            position: relative !important;
            margin-top: 2rem;
          }

          .team-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #e5e7eb;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .team-swiper .swiper-pagination-bullet-active {
            background: #021640;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </section>
  );
};

export default TeamSlider;
