import { useState } from "react";
import EventCard from "../../components/EventCard";

const Events = () => {
  const [filter, setFilter] = useState("all");

  const events = [
    {
      title: "AI Workshop",
      date: "2025-07-10",
      description: "Intro to AI, ML, and real-world applications.",
      image: "/images/ai.jpg",
      type: "past",
    },
    {
      title: "Autonomous Bot Hackathon",
      date: "2025-08-01",
      description: "Build bots and compete in challenges.",
      image: "/images/bot.jpg",
      type: "upcoming",
    },
    {
      title: "CAD Design Contest",
      date: "2025-06-20",
      description: "Show off your SolidWorks skills.",
      image: "/images/cad.jpg",
      type: "past",
    },
  ];

  const renderCards = () => {
    const filteredEvents =
      filter === "all" ? events : events.filter((e) => e.type === filter);

    return (
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No events found.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="px-4 md:px-12 py-8">
      <img
        src="https://res.cloudinary.com/dswk9scro/image/upload/v1752312233/image_1_nydvj8.png"
        alt="events"
        className="mx-auto my-12 w-full max-w-xl rounded-xl shadow-md object-cover"
      />
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#0B2044]">
          Our Organised Events
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["all", "past", "upcoming"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded transition ${
                filter === type
                  ? "bg-[#0B2044] text-white"
                  : "border border-[#0B2044] text-[#0B2044]"
              }`}
            >
              {type === "all"
                ? "View All"
                : type.charAt(0).toUpperCase() + type.slice(1) + " Events"}
            </button>
          ))}
        </div>
      </div>

      {renderCards()}
    </div>
  );
};

export default Events;
