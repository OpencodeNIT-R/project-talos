import React, { useState } from "react";
import teamMembers from "../../config/teammate";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < teamMembers.length - visibleCount)
      setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="bg-[#00163A] text-white px-4 sm:px-6 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Our team</h2>
          <p className="text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="mt-4 border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-[#00163A] transition">
            View all team members
          </button>
        </div>

        <div className="relative">
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
                width: `${(teamMembers.length / visibleCount) * 100}%`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-72 min-w-full sm:min-w-1/2 lg:min-w-72 bg-[#00163A] rounded-lg flex-shrink-0"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <div className="mt-3">
                    <p className="font-semibold text-white">{member.name}</p>
                    <p className="text-sm text-gray-300">{member.title}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      {member.description}
                    </p>
                    <div className="flex gap-3 mt-3 text-white text-lg">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 cursor-pointer"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 cursor-pointer"
                      >
                        <FaXTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 right-4 flex items-center gap-3 z-10">
            <button
              onClick={prevSlide}
              className="bg-white text-[#00163A] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-[#00163A] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
            >
              {">"}
            </button>
          </div>

          <div className="absolute -bottom-6 left-2 flex gap-2">
            {Array.from({
              length: Math.ceil(teamMembers.length / visibleCount),
            }).map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === Math.floor(currentIndex / visibleCount)
                    ? "bg-white"
                    : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-xl font-bold mb-1">Join Us Today!</h3>
          <p className="text-base text-gray-300 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-[#00163A] transition">
            Apply here
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
