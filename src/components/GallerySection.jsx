import images from "../config/gallary";
import { useNavigate } from "react-router";

export default function GallerySection() {
  const navigate = useNavigate();

  const getRandomImages = () => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  const randomImages = getRandomImages();

  const viewFullGallery = () => {
    navigate("/gallery");
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#021640] leading-tight tracking-tight">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Explore our vibrant moments captured through stunning visuals that
              showcase our activities, achievements, and memorable experiences.
            </p>
          </div>

          <div className="pt-8">
            <button
              onClick={viewFullGallery}
              className="bg-[#021640] hover:bg-[#021640]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              View Full Gallery
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200 hover:border-[#021640]/30"
              onClick={viewFullGallery}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-black/10"></div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#021640]/0 group-hover:bg-[#021640]/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View Image
                  </div>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#021640] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
