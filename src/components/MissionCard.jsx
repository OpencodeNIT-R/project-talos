export default function MissionCard({ title, description, index }) {
  return (
    <div className="relative bg-[#0A1440] text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 group overflow-hidden transform hover:-translate-y-1">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/3 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left min-h-[280px]">
        {/* Icon or Number */}
        <div className="mb-6">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
            <span className="text-2xl font-bold text-white">
              {(index + 1).toString().padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Title */}
        <h4 className="font-bold text-2xl mb-4 leading-tight text-white group-hover:text-white/95 transition-colors duration-300">
          {title}
        </h4>

        {/* Description */}
        <p className="text-white/80 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>

        {/* Hover Effect Arrow */}
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center text-white/90 text-sm font-medium">
            <span className="mr-2">Learn More</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
