import { useState } from "react";
import { FaLinkedin, FaXTwitter, FaUsers, FaRocket } from "react-icons/fa6";
import { FaDraftingCompass } from "react-icons/fa";
import teamMembers from "../../config/teammate";

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
      {isLoading && <div className="absolute inset-0 shimmer rounded-xl"></div>}

      {/* Actual image */}
      <img
        src={
          hasError
            ? "https://via.placeholder.com/300x300?text=Photo+Coming+Soon"
            : src ||
              "https://via.placeholder.com/300x300?text=Photo+Coming+Soon"
        }
        alt={alt}
        className={`w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />

      {/* Gradient overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const TeamPage = () => {
  const [activeTeam, setActiveTeam] = useState("All");

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
    <section className="bg-white text-black min-h-screen">
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          background-size: 200px 100%;
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center px-4 max-w-4xl mx-auto scroll-mt-24 pt-20 lg:pt-24 pb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#021640] mb-6">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the passionate individuals driving innovation and excellence
          at ASME NIT Rourkela
        </p>
      </div>

      {/* Team Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12 px-4">
        {teams.map((team) => (
          <button
            key={team.name}
            onClick={() => setActiveTeam(team.name)}
            className={`relative px-8 py-3 rounded-full border text-base font-medium transition-all duration-300 cursor-pointer hover:shadow-lg transform hover:scale-105 overflow-hidden ${
              activeTeam === team.name
                ? "bg-[#021640] text-white border-[#021640] shadow-lg"
                : "bg-white text-[#021640] border-gray-300 hover:border-[#021640] hover:text-[#021640] hover:bg-gray-50"
            }`}
          >
            {/* Active button glow effect */}
            {activeTeam === team.name && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-[#021640]/20 rounded-full"></div>
            )}
            <span className="relative z-10">{team.name}</span>
          </button>
        ))}
      </div>

      {/* Team Description */}
      {activeTeam !== "All" && teamDescriptions[activeTeam] && (
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-[#021640] mb-4 text-center">
              About {teamDescriptions[activeTeam].title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              {teamDescriptions[activeTeam].description}
            </p>
          </div>
        </div>
      )}

      {/* Team Members Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredMembers.length > 0 ? (
          <>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-[#021640] mb-2">
                {activeTeam === "All"
                  ? "All Team Members"
                  : `${activeTeam} Members`}
              </h3>
              <div className="w-16 h-0.5 bg-[#021640] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#021640]/20 overflow-hidden animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`,
                  }}
                >
                  {/* Background gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#021640]/5 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Decorative top accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#021640] via-blue-500 to-[#021640] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Image section - no padding */}
                  <div className="relative z-10 w-full">
                    <div className="relative overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {/* Image container with enhanced styling */}
                      <TeamMemberImage src={member.img} alt={member.name} />

                      {/* Floating badge for team if showing all teams */}
                      {member.team && activeTeam === "All" && (
                        <div className="absolute top-3 right-3 bg-[#021640]/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                          {member.team}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content section with padding */}
                  <div className="relative z-10 p-6 space-y-3 flex-grow flex flex-col justify-between text-center">
                    <div>
                      <h3 className="font-bold text-xl text-[#021640] mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {member.name || "Full Name"}
                      </h3>
                      {member.title && (
                        <div className="inline-block bg-gray-100 group-hover:bg-blue-50 text-gray-700 group-hover:text-[#021640] text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300">
                          {member.title}
                        </div>
                      )}
                    </div>

                    {/* Enhanced social media section */}
                    <div className="flex justify-center items-center gap-3 pt-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#0077B5] hover:to-[#005885] text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform-gpu"
                          title={`Connect with ${member.name} on LinkedIn`}
                        >
                          <FaLinkedin
                            size={20}
                            className="transition-all duration-300 group-hover/link:scale-110"
                          />

                          {/* Ripple effect on hover */}
                          <div className="absolute inset-0 rounded-full bg-[#0077B5] opacity-0 group-hover/link:opacity-20 group-hover/link:scale-150 transition-all duration-300"></div>
                        </a>
                      )}

                      {/* Placeholder for future social media links */}
                      {!member.linkedin && (
                        <div className="text-gray-400 text-sm italic">
                          Connect soon
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                  <div
                    className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#021640] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="text-6xl text-gray-300 mb-4">👥</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                No Team Members Found
              </h3>
              <p className="text-gray-500">
                There are currently no members in the {activeTeam} team.
                {activeTeam !== "All" &&
                  " Try selecting a different team or check back later."}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamPage;
