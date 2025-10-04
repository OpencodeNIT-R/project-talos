import { siteConfig } from "../config/navbarHero";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
          <div className="relative max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src={siteConfig.about.image}
                alt="About ASME NIT Rourkela"
                className="w-full h-[400px] md:h-[500px] transition-transform duration-300 hover:scale-105 object-contain"
              />
              <div className="absolute inset-0 ring-1 ring-black/10 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#021640] leading-tight tracking-tight">
              {siteConfig.about.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.about.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4 pt-4">
            <a
              href="#cards"
              role="button"
              tabIndex={0}
              className="bg-[#021640] hover:bg-[#021640]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              {siteConfig.about.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
