import { useEffect, useRef, useState } from "react";
import AchievementCard from "./achievementCard";
import achievementsData from "./achievement";

const Timeline = () => {
  const timelineRef = useRef(null);
  const [visibleDots, setVisibleDots] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleDots((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.5 },
    );

    const cards = document.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      className="bg-gradient-to-br from-background to-muted/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:px-8">
        {/* Header */}
        <div style={{ marginBottom: "7rem" }}>
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4 p-5">
            Our Achievements
          </h2>
          <p className="text-gray-700 text-center mb-6 max-w-3xl">
            ASME NIT Rourkela excels in fostering innovation and leadership
            through workshops, competitions, and expert lectures. Recognized for
            achievements in events like the Student Design Challenge and HPVC,
            the chapter addresses real-world problems with engineering
            creativity. Their STEM outreach initiatives further enhance their
            impact, solidifying their reputation for excellence in mechanical
            engineering.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          <div className="grid grid-cols-9 gap-2">
            {achievementsData.map((achievement, index) => (
              <div key={achievement.id} className="contents">
                {/* Left card */}
                <div
                  className={`col-span-4 ${index % 2 === 0 ? "flex justify-end" : ""} hidden md:flex`}
                >
                  {index % 2 === 0 && (
                    <div className="w-full max-w-md">
                      <AchievementCard
                        title={achievement.title}
                        description={achievement.description}
                        image={achievement.image}
                        date={achievement.date}
                        isLeft={true}
                        index={index}
                      />
                    </div>
                  )}
                </div>
                {/* Timeline line and dot */}
                <div className="col-span-1 hidden md:flex flex-col items-center relative">
                  {/* Vertical line */}
                  <div className="w-1 bg-gray-300 h-full absolute top-0 left-1/2 -translate-x-1/2  z-0"></div>

                  {/* Timeline dot */}
                  <div className="z-10">
                    <div
                      className={`w-4 h-4 rounded-full  border-background  bg-[#0B2044] border-2 border-white transition-all duration-500 
                        ${
                          visibleDots.has(index)
                            ? "bg-timeline-dot-active shadow-glow animate-glow-pulse"
                            : "bg-timeline-dot"
                        }
                      `}
                    ></div>
                  </div>
                </div>
                {/* Right card */}
                <div
                  className={`col-span-4 ${index % 2 !== 0 ? "flex justify-start" : ""} hidden md:flex`}
                >
                  {index % 2 !== 0 && (
                    <div className="w-full max-w-md">
                      <AchievementCard
                        title={achievement.title}
                        description={achievement.description}
                        image={achievement.image}
                        date={achievement.date}
                        isLeft={false}
                        index={index}
                      />
                    </div>
                  )}
                </div>

                <div className="col-span-9 flex justify-center md:hidden">
                  <div className="w-full max-w-md">
                    <AchievementCard
                      title={achievement.title}
                      description={achievement.description}
                      image={achievement.image}
                      date={achievement.date}
                      isLeft={true}
                      index={index}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
