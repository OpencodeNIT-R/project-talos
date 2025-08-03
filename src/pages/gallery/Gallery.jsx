import { useState, useEffect } from "react";
import images from "../../config/gallary";
import heroImages from "../../config/gallaryPage";

const NavButton = ({ direction, onClick }) => {
  const isNext = direction === "next";
  return (
    <button
      className="absolute top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
      style={{ [isNext ? "right" : "left"]: "1rem" }}
      onClick={onClick}
      aria-label={`${isNext ? "Next" : "Previous"} slide`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            isNext ? "M8.25 4.5l7.5 7.5-7.5 7.5" : "M15.75 19.5L8.25 12l7.5-7.5"
          }
        />
      </svg>
    </button>
  );
};

const YearButton = ({ year, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-full text-sm md:text-base transition-all ${
      isSelected
        ? "bg-[#061946] text-white font-medium"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {year === "all" ? "All Years" : year}
  </button>
);

const GalleryItem = ({ image }) => (
  <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />
  </div>
);

export default function GallaryPage() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const years = ["all", ...new Set(images.map((image) => image.year))].sort();

  const galleryImages =
    selectedYear === "all"
      ? images
      : images.filter((image) => image.year === Number(selectedYear));

  return (
    <div className="w-full">
      {/* Hero Banner Carousel */}
      <div className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] w-full overflow-hidden">
        {/* Carousel Slides */}
        <div className="relative h-full w-full">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          ))}

          {/* Carousel Controls */}
          <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-4" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Year Filters and Description Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
            <div>
              <h2 className="text-black text-2xl md:text-[48px] font-bold leading-tight mb-2">
                Gallery
              </h2>
              <div className="flex flex-wrap gap-3 mt-4">
                {years.map((year) => (
                  <YearButton
                    key={year}
                    year={year}
                    isSelected={selectedYear === year}
                    onClick={() => setSelectedYear(year)}
                  />
                ))}
              </div>
            </div>
            <p className="text-black-600 md:max-w-xl text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </div>

        {/* No Images Message */}
        {galleryImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No images found for selected year.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
