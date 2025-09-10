import { useNavigate } from "react-router-dom";
import MissionCard from "./MissionCard";
import { siteConfig } from "../config/navbarHero";

export default function MissionSection() {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate("/applications");
  };

  return (
    <section
      id="cards"
      className="w-full bg-white py-20 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-50 rounded-full opacity-40 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Driving Innovation Forward
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the core values and principles that guide our engineering
            community toward innovation, collaboration, and excellence in
            technology.
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.missions.map(({ title, description }, index) => (
            <div key={index} className="flex justify-center">
              <MissionCard
                title={title}
                description={description}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Matching Card Colors */}
        <div className="text-center mt-20">
          <div className="relative bg-[#ffffff] text-white rounded-2xl p-10 shadow-lg border-2 border-gray-800">
            {/* Decorative Elements - White with opacity */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full opacity-50"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full opacity-50"></div>

            <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#0A1440] mb-4">
                Ready to Join Our Mission?
              </h3>
              <p className="text-[#0A1440] mb-8 text-base leading-relaxed max-w-2xl mx-auto">
                Be part of a community that's shaping the future of technology
                and innovation. Connect with like-minded engineers and make an
                impact.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleJoinUs}
                  className="px-10 py-4 bg-[#0A1440] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
