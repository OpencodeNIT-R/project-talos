import Button from "./shared/Button";
import { siteConfig } from "../config/navbarHero";

import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const handleJoinUs = () => {
    navigate("/applications");
  };

  return (
    <section className="relative bg-gradient-to-b dark:from-slate-900 dark:to-slate-900 from-gray-50 to-white min-h-[80vh] pt-[70px] sm:pt-[90px] md:pt-[100px] lg:pt-[130px] px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23021640' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block px-4 py-1.5 sm:py-2 dark:text-gray-100 dark:bg-slate-800 bg-[#021640]/10 text-[#021640] rounded-full text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mt-4 sm:mt-6">
              {siteConfig.hero.title}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold dark:text-white text-[#021640] leading-tight tracking-tight max-w-3xl mx-auto lg:mx-0 [text-wrap:balance]">
              {siteConfig.hero.subtitle}
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-gray-600 leading-relaxed md:leading-normal max-w-2xl mx-auto lg:mx-0 text-center lg:text-left [text-wrap:pretty] px-2 sm:px-0">
              {siteConfig.hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
            <button
              onClick={handleJoinUs}
              className="cursor-pointer bg-[#0A1440] text-xl text-white dark:bg-blue-800 dark:hover:bg-blue-600/90 font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {siteConfig.hero.primaryButton || "Join Us"}
            </button>
            <a
              href="#about"
              role="button"
              tabIndex={0}
              className="cursor-pointer px-8 py-4 dark:text-white dark:border-white text-[#021640] font-semibold text-lg border-2 border-[#021640] rounded-lg transition-all duration-300 hover:bg-[#021640] dark:hover:bg-slate-900/90 hover:text-white text-center"
            >
              {siteConfig.hero.secondaryLink}
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src={siteConfig.hero.image}
                alt="ASME NIT Rourkela - Engineering Excellence"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[540px] object-cover transition-transform duration-300 hover:scale-105"
              />

              <div className="absolute inset-0 ring-1 ring-black/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
