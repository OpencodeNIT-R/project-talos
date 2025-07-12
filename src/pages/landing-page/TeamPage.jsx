import React from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import container from "../../assets/Frame 142.png";

const TeamPage = ({ teamMembers = [] }) => {
  return (
    <section className="bg-white text-black">
      {/* Top Banner Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <img
          src={container}
          alt="Team Cover"
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      {/* Heading & Description */}
      <div className="text-center py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#021640] mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-700 text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Image box with border */}
            <div className="w-full max-w-xs border rounded-md overflow-hidden shadow">
              <img
                src={
                  member.img || "https://via.placeholder.com/300x250?text=Photo"
                }
                alt={member.name}
                className="w-full h-60 object-cover"
              />
            </div>

            {/* Text below image */}
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
