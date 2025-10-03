import Button from "./shared/Button";
import { siteConfig } from "../config/navbarHero";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white min-h-[80vh] pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[130px] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23021640' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#021640]/10 text-[#021640] rounded-full text-sm font-medium tracking-wide uppercase mt-10">
              {siteConfig.hero.title}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#021640] leading-tight tracking-tight">
              {siteConfig.hero.subtitle}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4 pt-4">
            <Button className="bg-[#021640] hover:bg-[#021640]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg">
              {siteConfig.hero.primaryButton}
            </Button>
            <a
              href="#about"
              role="button"
              tabIndex={0}
              className="px-8 py-4 text-[#021640] font-semibold text-lg border-2 border-[#021640] rounded-lg transition-all duration-300 hover:bg-[#021640] hover:text-white"
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
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-black/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
