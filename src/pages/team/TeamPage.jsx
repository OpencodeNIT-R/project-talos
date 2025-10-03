import { useState } from "react";
import {
  FaLinkedin,
  FaXTwitter,
  FaUsers,
  FaRocket,
  FaChevronDown,
} from "react-icons/fa6";
import { FaDraftingCompass } from "react-icons/fa";
import teamMembers from "../../config/teammate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Enhanced Image Component with loading states
const TeamMemberImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-xl"></div>
      )}

      {/* Actual image */}
      <img
        src={
          hasError
            ? "https://via.placeholder.com/300x300?text=Photo+Coming+Soon"
            : src ||
              "https://via.placeholder.com/300x300?text=Photo+Coming+Soon"
        }
        alt={alt}
        className={`w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

const TeamPage = () => {
  const [activeTeam, setActiveTeam] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const teams = [
    { name: "All" },
    { name: "Executive Body" },
    { name: "Team Bluebird" },
    { name: "Team Bluestreak" },
    { name: "Team Blueprint" },
  ];

  const teamDescriptions = {
    "Executive Body": {
      title: "Executive Body",
      description:
        "The Executive Body is the core leadership team of the ASME Student Section, responsible for planning, organizing, and executing all technical, professional, and outreach activities. It ensures coordination among members, represents the section, and drives initiatives that promote engineering knowledge and collaboration.",
    },
    "Team Bluestreak": {
      title: "Team Bluestreak",
      description:
        "Bluestreak, a team within ASME at NIT Rourkela, is a dedicated team focused on research, analysis, and innovation. They specialize in designing human-powered vehicles from scratch, incorporating indigenous elements. Bluestreak actively participates in the eHPV competition at ASME Efest, showcasing their commitment to pushing the boundaries of human-powered vehicle design and contributing to the advancement of sustainable transportation solutions.",
    },
    "Team Bluebird": {
      title: "Team Bluebird",
      description:
        "Bluebird, a team from ASME NIT Rourkela, specializes in CAD modeling and coding for virtual competitions. Their expertise extends to designing vehicles for diverse challenges, including autonomous vehicle competitions, lunar lander simulations, and ocean cleanup missions. Through innovation and technical prowess, Team Bluebird consistently participates in and excels at a variety of virtual events, showcasing their commitment to engineering excellence and problem-solving in the digital realm.",
    },
    "Team Blueprint": {
      title: "Team Blueprint",
      description:
        "Team Blueprint, a team of ASME NIT Rourkela, engages in research, innovation, and design. They utilize CAD software to create diverse models, subsequently manufacturing them through 3D printing technology. The team actively participates in the IAM3D competition as part of ASME Efest, showcasing their skills and expertise in engineering and design within the ASME community.",
    },
  };

  const filteredMembers =
    activeTeam === "All"
      ? Array.from(new Map(teamMembers.map((m) => [m.name, m])).values())
      : teamMembers.filter((member) => member.team === activeTeam);

  return (
    <section className="relative bg-white min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 pt-[80px] pb-16 sm:pb-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#021640] leading-tight tracking-tight">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Discover the passionate individuals driving innovation and
              excellence at ASME NIT Rourkela through their dedication and
              expertise.
            </p>
          </div>
        </div>

        {/* Team Filter - Desktop Buttons & Mobile Dropdown */}
        <div className="mb-16">
          {/* Desktop Filter Buttons */}
          <div className="hidden md:flex justify-center flex-wrap gap-4">
            {teams.map((team) => (
              <button
                key={team.name}
                onClick={() => setActiveTeam(team.name)}
                className={`px-8 py-3 rounded-lg border-2 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  activeTeam === team.name
                    ? "bg-[#021640] text-white border-[#021640] shadow-lg"
                    : "bg-white text-[#021640] border-[#021640] hover:bg-[#021640] hover:text-white"
                }`}
              >
                {team.name}
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
                <span>{activeTeam}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#021640] rounded-lg shadow-lg z-10 overflow-hidden">
                  {teams.map((team) => (
                    <button
                      key={team.name}
                      onClick={() => {
                        setActiveTeam(team.name);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-6 py-3 text-left text-base font-medium transition-all duration-200 hover:bg-[#021640] hover:text-white ${
                        activeTeam === team.name
                          ? "bg-[#021640] text-white"
                          : "text-[#021640] border-b border-gray-200 last:border-b-0"
                      }`}
                    >
                      {team.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Team Description */}
        {activeTeam !== "All" && teamDescriptions[activeTeam] && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold text-[#021640] mb-6 text-center">
                About {teamDescriptions[activeTeam].title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {teamDescriptions[activeTeam].description}
              </p>
            </div>
          </div>
        )}

        {/* Team Members - Mobile Carousel & Desktop Grid */}
        {filteredMembers.length > 0 ? (
          <>
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
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
                  480: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                loop={filteredMembers.length > 1}
                className="team-mobile-swiper"
              >
                {filteredMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white border border-gray-200 hover:border-[#021640]/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden h-full">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <TeamMemberImage src={member.img} alt={member.name} />
                        <div className="absolute inset-0 ring-1 ring-black/10"></div>

                        {/* Team badge for "All" view */}
                        {member.team && activeTeam === "All" && (
                          <div className="absolute top-3 right-3 bg-[#021640]/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                            {member.team}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <div className="text-center">
                          <h3 className="font-bold text-lg text-[#021640] leading-tight mb-2">
                            {member.name || "Full Name"}
                          </h3>
                          {member.title && (
                            <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                              {member.title}
                            </p>
                          )}
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center pt-2">
                          {member.linkedin ? (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#021640] text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                              title={`Connect with ${member.name} on LinkedIn`}
                            >
                              <FaLinkedin size={16} />
                            </a>
                          ) : (
                            <div className="text-gray-400 text-sm italic">
                              Connect soon
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Accent line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#021640] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 hover:border-[#021640]/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <TeamMemberImage src={member.img} alt={member.name} />
                    <div className="absolute inset-0 ring-1 ring-black/10"></div>

                    {/* Team badge for "All" view */}
                    {member.team && activeTeam === "All" && (
                      <div className="absolute top-3 right-3 bg-[#021640]/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                        {member.team}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <h3 className="font-bold text-lg text-[#021640] leading-tight mb-2">
                        {member.name || "Full Name"}
                      </h3>
                      {member.title && (
                        <p className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                          {member.title}
                        </p>
                      )}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center pt-2">
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-[#021640] text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                          title={`Connect with ${member.name} on LinkedIn`}
                        >
                          <FaLinkedin size={16} />
                        </a>
                      ) : (
                        <div className="text-gray-400 text-sm italic">
                          Connect soon
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#021640] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="text-6xl text-gray-300 mb-6">👥</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                No Team Members Found
              </h3>
              <p className="text-lg text-gray-500">
                There are currently no members in the {activeTeam} team.
                {activeTeam !== "All" &&
                  " Try selecting a different team or check back later."}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .team-mobile-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }

        .team-mobile-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .team-mobile-swiper .swiper-pagination-bullet-active {
          background: #021640;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default TeamPage;
