import { useState, useEffect, useCallback, useMemo } from "react";
import images from "../../config/gallary";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Image as ImageIcon,
} from "lucide-react";

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  // Slide Images for top hero (uses first 6 images from dataset)
  const heroSlides = useMemo(
    () => images.slice(0, Math.min(images.length, 6)),
    [],
  );

  // Auto Hero Slider (5s interval)
  useEffect(() => {
    if (heroSlides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Build sorted years list (numeric years sorted, then string years)
  const years = useMemo(() => {
    const allYears = Array.from(new Set(images.map((img) => img.year)));
    const numericYears = allYears
      .filter((y) => typeof y === "number")
      .sort((a, b) => b - a);
    const stringYears = allYears
      .filter((y) => typeof y === "string" && y !== "all")
      .sort();
    return ["all", ...numericYears, ...stringYears];
  }, []);

  // Filtered gallery images for grid
  const galleryImages = useMemo(() => {
    if (selectedYear === "all") return images;
    if (typeof selectedYear === "string" && isNaN(Number(selectedYear))) {
      return images.filter((img) => img.year === selectedYear);
    }
    return images.filter((img) => img.year === Number(selectedYear));
  }, [selectedYear]);

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Lightbox Controls
  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null || galleryImages.length === 0) return;
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  }, [lightboxIndex, galleryImages.length]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null || galleryImages.length === 0) return;
    setLightboxIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  }, [lightboxIndex, galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextLightbox, prevLightbox]);

  return (
    <div className="w-full dark:bg-slate-900 bg-white min-h-screen transition-colors duration-300">
      {/* Clean Large Hero Photo (Textless, clearly visible like Achievement section) */}
      <div className="relative h-[300px] sm:h-[380px] md:h-[460px] w-full overflow-hidden bg-slate-900">
        <div className="relative h-full w-full">
          {heroSlides.map((slide, index) => {
            const isSlideFailed = failedImages[slide.id];
            return (
              <div
                key={slide.id || index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {!isSlideFailed ? (
                  <img
                    src={slide.src}
                    alt={slide.alt || `Hero Slide ${index + 1}`}
                    onError={() => handleImageError(slide.id)}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    {...(index === 0 ? { fetchpriority: "high" } : {})}
                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400">
                    <ImageIcon className="w-12 h-12 opacity-40" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Minimal Bottom Slide Indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center gap-3 px-4">
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
                )
              }
              className="p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/80 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
              }
              className="p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Gallery Container */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header & Controls Section */}
        <div className="mb-10 space-y-6">
          {/* Title & Description Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-[#021640] dark:text-white text-4xl md:text-5xl font-bold leading-tight">
                Gallery
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 md:max-w-2xl text-base md:text-lg leading-relaxed">
              Step into our visual storybook — where every image captures a
              moment, every frame holds a memory, and every detail speaks of the
              journey we’ve lived and the beauty we’ve created.
            </p>
          </div>

          {/* Clean Controls Bar (Filter Pills) */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-slate-800">
            {/* Year Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {years.map((year) => {
                const isSelected = selectedYear === year;
                const label =
                  year === "all"
                    ? "All"
                    : typeof year === "string"
                      ? year.charAt(0).toUpperCase() + year.slice(1)
                      : String(year);
                return (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#061946] dark:bg-[#0F2A5F] dark:text-white text-white shadow-md scale-[1.02]"
                        : "bg-gray-100 dark:bg-slate-800 dark:text-slate-200 text-gray-700 hover:bg-gray-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gallery Grid - Fixed to 3 per row on desktop */}
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, index) => {
              const isFailed = failedImages[image.id];

              return (
                <div
                  key={image.id || index}
                  onClick={() => !isFailed && openLightbox(index)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 aspect-[4/3] w-full border border-gray-200/80 dark:border-slate-700/60"
                >
                  {!isFailed ? (
                    <>
                      <img
                        src={image.src}
                        alt={image.alt || `Gallery Image ${index + 1}`}
                        onError={() => handleImageError(image.id)}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Subtle Hover Overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="p-3.5 rounded-full bg-white/20 dark:bg-black/40 text-white backdrop-blur-md border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-slate-100 dark:bg-slate-800 text-gray-400 dark:text-slate-500">
                      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                      <span className="text-xs font-medium text-center line-clamp-1">
                        {image.alt || `Image ${index + 1}`}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-slate-400 text-lg">
              No images found for selected year.
            </p>
          </div>
        )}
      </div>

      {/* Clean Interactive Lightbox Modal */}
      {lightboxIndex !== null && galleryImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-between"
          onClick={closeLightbox}
        >
          {/* Header */}
          <div
            className="w-full px-6 py-4 flex items-center justify-between z-30 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-sm font-semibold text-gray-300">
              {lightboxIndex + 1} of {galleryImages.length}
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Main Photo */}
          <div
            className="relative flex-1 flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prevLightbox}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-sm z-20"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative max-w-5xl max-h-[82vh] flex items-center justify-center">
              <img
                src={galleryImages[lightboxIndex]?.src}
                alt={`Gallery Image ${lightboxIndex + 1}`}
                className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            <button
              onClick={nextLightbox}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-sm z-20"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer */}
          <div className="w-full py-4 text-center text-xs text-gray-400 z-30">
            Press Esc to exit
          </div>
        </div>
      )}
    </div>
  );
}
