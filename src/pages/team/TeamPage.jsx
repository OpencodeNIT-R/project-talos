import { useState } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import teamMembers from "../../config/teammate";

const TeamPage = () => {
  const [activeTeam, setActiveTeam] = useState("All");

  const teams = ["All", "Team 1", "Team 2", "Team 3", "Team 4"];

  const filteredMembers =
    activeTeam === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.team === activeTeam);

  return (
    <section className="bg-white text-black">
      <div className="text-center px-4 max-w-4xl mx-auto scroll-mt-24 pt-20 lg:pt-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#021640] mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-700 pb-6 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {teams.map((team) => (
          <button
            key={team}
            onClick={() => setActiveTeam(team)}
            className={`px-4 py-2 rounded-full border text-lg font-medium transition ${
              activeTeam === team
                ? "bg-[#021640] text-white"
                : "bg-white text-[#021640] border-gray-300"
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs border rounded-md overflow-hidden shadow">
              <img
                src={
                  member.img || "https://via.placeholder.com/300x250?text=Photo"
                }
                alt={member.name}
                className="w-full h-60 object-cover"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-bold">{member.name || "Full name"}</h3>
              <p className="text-sm text-gray-600">
                {member.title || "Job title"}
              </p>
              <div className="flex justify-center space-x-3 mt-2">
                <a
                  href={member.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-700"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={member.twitter || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-500"
                >
                  <FaXTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
