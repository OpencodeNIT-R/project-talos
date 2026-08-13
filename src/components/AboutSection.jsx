import { siteConfig } from "../config/navbarHero";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white dark:bg-slate-900 px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
          <div className="relative max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src={siteConfig.about.image}
                alt="About ASME NIT Rourkela"
                loading="lazy"
                decoding="async"
                className="w-full h-[280px] sm:h-[400px] md:h-[500px] transition-transform duration-300 hover:scale-105 object-cover"
              />

              <div className="absolute inset-0 ring-1 ring-black/10 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#021640] dark:text-white leading-tight tracking-wide [text-wrap:balance]">
              {siteConfig.about.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 [text-wrap:pretty] px-2 sm:px-0">
              {siteConfig.about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
