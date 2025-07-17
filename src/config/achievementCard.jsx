import { Calendar } from "lucide-react";

const AchievementCard = ({
  title,
  description,
  image,
  date,
  isLeft,
  index,
}) => {
  return (
    <div
      className={`flex items-center w-full mb-16 ${isLeft ? "justify-start" : "justify-end"}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className={`
          w-full max-w-md rounded-2xl shadow-lg hover:shadow-xl border border-gray-300
          transition-all duration-500 hover:scale-105 group cursor-pointer
        `}
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="font-medium">{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-[#0B2044] transition-colors duration-300 ">
            {title}
          </h3>
          <p className="text-gray-600 ">{description}</p>
          {/* Decorative element */}
          <div className="mt-4 h-1 w-16 bg-[#0B2044] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
