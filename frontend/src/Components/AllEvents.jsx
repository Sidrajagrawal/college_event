import React from "react";

const AllEvents = ({ events }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br  py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
           All Events
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No events created yet. Start by adding one!
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-3xl font-bold text-pink-600 mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold text-2xl"> Date:</span> {event.date}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-2xl"> Time:</span> {event.time}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-2xl"> Venue:</span> {event.venue}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-2xl"> Fee:</span> ₹{event.fee}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-2xl"> Slots:</span> {event.slots}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-2xl"> Contact:</span>{" "}
                  {event.contact}
                </p>
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllEvents;
