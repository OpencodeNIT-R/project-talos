import { useNavigate } from "react-router-dom";
import achievementsData from "../config/achievement";

export default function Achievements() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#021640] leading-tight tracking-tight">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              ASME NIT Rourkela excels in fostering innovation and leadership
              through workshops, competitions, and expert lectures. Recognized
              for achievements in events like the Student Design Challenge and
              HPVC, the chapter addresses real-world problems with engineering
              creativity. Their STEM outreach initiatives further enhance their
              impact, solidifying their reputation for excellence in mechanical
              engineering.
            </p>
          </div>

          <div className="pt-8">
            <button
              className="bg-[#021640] hover:bg-[#021640]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              onClick={() => navigate("/achievements")}
            >
              View all Achievements
            </button>
          </div>
        </div>

        {/* Achievements Grid - Simple Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData
            .filter((item) => item.id <= 6)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 hover:border-[#021640]/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-block px-3 py-1 bg-[#021640]/10 text-[#021640] rounded-full text-sm font-semibold">
                      {item.year}
                    </div>
                    <div className="w-2 h-2 bg-[#021640] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="font-bold text-lg text-[#021640] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Simple accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#021640] to-blue-500 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
