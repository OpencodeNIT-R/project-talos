import { useState } from "react";
import EventCard from "../../components/EventCard";
import events from "../../config/events";

const Events = () => {
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { value: "all", label: "All Events" },
    { value: "upcoming", label: "Upcoming" },
    { value: "past", label: "Past Events" },
  ];

  const renderCards = () => {
    const filteredEvents =
      filter === "all" ? events : events.filter((e) => e.type === filter);

    if (filteredEvents.length === 0) {
      return (
        <div className="col-span-full flex flex-col items-center justify-center py-16">
          <div className="text-6xl mb-4">🎪</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {filter === "all" ? "No Events Yet" : `No ${filter} Events`}
          </h3>
          <p className="text-gray-500 text-center max-w-md">
            {filter === "all"
              ? "We're working on organizing amazing events. Stay tuned!"
              : `No ${filter} events found. Check out other categories or come back later.`}
          </p>

          {/* Coming Soon Card for empty state */}
          <div className="mt-8">
            <EventCard
              title="Exciting Events Coming Soon!"
              description="We're planning amazing technical workshops, competitions, and networking events. Follow us to get notified when we announce new events."
              images={[
                "https://res.cloudinary.com/dswk9scro/image/upload/v1752313324/image_urekzp.png",
              ]}
              status="upcoming"
              date="Stay Tuned"
              location="NIT Rourkela"
            />
          </div>
        </div>
      );
    }

    return (
      <>
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </>
    );
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our technical workshops, competitions, and networking
            events designed to enhance your engineering journey
          </p>
        </div>

        {/* Filter Tabs - Teams Page Style */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === option.value
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {renderCards()}
        </div>

        {/* Call to Action */}
        {events.length > 0 && (
          <div className="text-center mt-20">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Stay in the Loop
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Don't miss out on our upcoming events, workshops, and
                  exclusive opportunities. Join our community to get notified
                  first.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Subscribe to Updates
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                    Follow Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
