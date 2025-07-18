import { useState, useEffect } from "react";
import teamMembers from "../config/teammate";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  useEffect(() => {
    const handleResize = () => {
      const count = getVisibleCount();
      setVisibleCount(count);
      const maxIndex = Math.max(0, teamMembers.length - count);
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, teamMembers.length - visibleCount);
    setCurrentIndex((prev) => Math.min(prev + visibleCount, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  return (
    <section className="bg-[#00163A] text-white px-4 sm:px-6 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2 ml-3">Our team</h2>
          <p className="text-xl text-gray-300 ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="mt-4 border border-white text-white py-2 px-4 ml-3 rounded hover:bg-white hover:text-[#00163A] transition cursor-pointer">
            View all team members
          </button>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-3 z-10 p-1.5 sm:p-2 border-2 rounded-full bg-white border-gray-300 shadow-lg hover:bg-gray-100 flex items-center justify-center cursor-pointer"
            aria-label="Previous"
          >
            <ArrowLeft className="w-6 h-6" color="#00163A" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-3 z-10 p-1.5 sm:p-2 border-2 rounded-full bg-white border-gray-300 shadow-lg hover:bg-gray-100 flex items-center justify-center cursor-pointer"
            aria-label="Next"
          >
            <ArrowRight className=" w-5 h-5 sm:w-6 sm:h-6" color="#00163A" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 box-border w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  <div className="bg-[#00163A] rounded-lg">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-68 object-cover rounded-lg"
                    />
                    <div className="mt-3 px-2">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-1 ml-3">Join Us Today!</h3>
          <p className="text-base text-gray-300 mb-3 ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="border border-white text-white py-2 px-4 ml-3 rounded hover:bg-white hover:text-[#00163A] transition cursor-pointer">
            Apply here
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
