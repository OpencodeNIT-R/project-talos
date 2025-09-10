import { useState, useEffect } from "react";
import teamMembers from "../config/teammate";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router";

const TeamSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [activeTeam, setActiveTeam] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScreenResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1200) {
        setCardsPerView(4);
      } else if (screenWidth >= 850) {
        setCardsPerView(3);
      } else if (screenWidth >= 500) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  const uniqueTeamMembers = Array.from(
    new Map(teamMembers.map((member) => [member.name, member])).values(),
  );

  const teams = [
    "All",
    "Executive Body",
    "Team Bluebird",
    "Team Bluestreak",
    "Team Blueprint",
  ];

  const filteredTeamMembers =
    activeTeam === "All"
      ? uniqueTeamMembers
      : uniqueTeamMembers.filter((member) => member.team === activeTeam);

  const maxSlideIndex = Math.max(0, filteredTeamMembers.length - cardsPerView);

  const showNextMembers = () => {
    setCurrentSlideIndex((currentIndex) => {
      if (currentIndex >= maxSlideIndex) {
        return 0;
      }

      const remainingCards = maxSlideIndex - currentIndex;
      const cardsToMove = Math.min(cardsPerView, remainingCards);

      return currentIndex + cardsToMove;
    });
  };

  const showPreviousMembers = () => {
    setCurrentSlideIndex((currentIndex) => {
      if (currentIndex <= 0) {
        return maxSlideIndex;
      }

      return Math.max(0, currentIndex - cardsPerView);
    });
  };

  const viewFullTeam = () => {
    navigate("/Team");
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-[#00163A] text-white px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2 ml-4 sm:ml-12">Our team</h2>
          <p className="text-xl text-gray-300 ml-4 sm:ml-12">
            Meet Our Amazing Team Members
          </p>

          {/* Team Filter Buttons */}
          <div className="flex justify-start flex-wrap gap-2 sm:gap-4 mt-6 mb-6 ml-4 sm:ml-12">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setActiveTeam(team)}
                className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full border text-sm sm:text-lg font-medium transition cursor-pointer hover:bg-white hover:text-[#00163A] ${
                  activeTeam === team
                    ? "bg-white text-[#00163A]"
                    : "bg-transparent text-white border-white"
                }`}
              >
                {team}
              </button>
            ))}
          </div>

          <button
            onClick={viewFullTeam}
            className="mt-4 border border-white text-white py-2 px-4 ml-4 sm:ml-12 rounded hover:bg-white hover:text-[#00163A] transition-all duration-300 cursor-pointer"
          >
            View all team members
          </button>
        </div>

        <div className="relative">
          <button
            onClick={showPreviousMembers}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:shadow-lg hover:scale-110 cursor-pointer transition-all duration-200"
            aria-label="View previous team members"
          >
            <ArrowLeft className="w-6 h-6" color="#00163A" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlideIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {filteredTeamMembers.map((teamMember, memberIndex) => (
                <div
                  key={`team-member-${memberIndex}`}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-[#00163A] rounded-lg hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={teamMember.img}
                        alt={`${teamMember.name} - ${teamMember.title}`}
                        className="w-full h-72 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="mt-3 px-2">
                      <p className="font-semibold text-white mb-1 text-lg">
                        {teamMember.name}
                      </p>
                      <p className="text-base text-gray-300 mb-1">
                        {teamMember.title}
                      </p>
                      <p className="text-base text-gray-300">
                        {teamMember.team}
                      </p>
                      <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                        {teamMember.description}
                      </p>

                      <div className="flex gap-3 mt-3 text-white text-lg">
                        {teamMember.linkedin && (
                          <a
                            href={teamMember.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 hover:scale-110 cursor-pointer transition-all duration-200"
                            aria-label={`Visit ${teamMember.name}'s LinkedIn profile`}
                          >
                            <FaLinkedin />
                          </a>
                        )}
                        {teamMember.twitter && (
                          <a
                            href={teamMember.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 hover:scale-110 cursor-pointer transition-all duration-200"
                            aria-label={`Visit ${teamMember.name}'s Twitter profile`}
                          >
                            <FaXTwitter />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={showNextMembers}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:shadow-lg hover:scale-110 cursor-pointer transition-all duration-200"
            aria-label="View next team members"
          >
            <ArrowRight className="w-6 h-6" color="#00163A" />
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-1 ml-4 sm:ml-12">
            Join Us Today!
          </h3>
          <p className="text-base text-gray-300 mb-3 ml-4 sm:ml-12">
            Ready to be part of our amazing team? We're always looking for
            talented individuals who share our passion.
          </p>
          <button className="border border-white text-white py-2 px-4 ml-4 sm:ml-12 rounded hover:bg-white hover:text-[#00163A] transition-all duration-300 cursor-pointer">
            Apply here
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
