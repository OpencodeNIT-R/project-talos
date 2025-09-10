import { useState } from "react";
import { FaLinkedin, FaXTwitter, FaUsers, FaRocket } from "react-icons/fa6";
import { FaDraftingCompass } from "react-icons/fa";
import teamMembers from "../../config/teammate";

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
      <div className="flex justify-center flex-wrap gap-3 mb-12 px-4">
        {teams.map((team) => (
          <button
            key={team.name}
            onClick={() => setActiveTeam(team.name)}
            className={`px-6 py-3 rounded-full border text-base font-medium transition-all duration-300 cursor-pointer hover:shadow-md ${
              activeTeam === team.name
                ? "bg-[#021640] text-white border-[#021640] shadow-md"
                : "bg-white text-[#021640] border-gray-300 hover:border-[#021640] hover:text-[#021640]"
            }`}
          >
            {team.name}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-full max-w-xs mb-4">
                    <div className="overflow-hidden rounded-lg shadow-sm">
                      <img
                        src={
                          member.img ||
                          "https://via.placeholder.com/300x300?text=Photo+Coming+Soon"
                        }
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-[#021640]">
                      {member.name || "Full Name"}
                    </h3>
                    {member.title && (
                      <p className="text-sm font-medium text-gray-600">
                        {member.title}
                      </p>
                    )}
                    {member.team && activeTeam === "All" && (
                      <p className="text-sm text-gray-500">{member.team}</p>
                    )}

                    <div className="flex justify-center pt-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-[#021640] transition-colors duration-200"
                        >
                          <FaLinkedin size={18} />
                        </a>
                      )}
                    </div>
                  </div>
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
