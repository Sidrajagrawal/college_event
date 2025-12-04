import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AllEvents from "./AllEvents";

export default function EventForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    venue: "",
    fee: "",
    contact: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const [events, setEvents] = useState([]); // store all events

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, formData]); // add new event to array
    console.log("Event Created:", formData);
    setFormData({
      name: "",
      date: "",
      time: "",
      venue: "",
      fee: "",
      contact: "",
      slots: "",
      description: "",
    }); // reset form
    console.log("All Events:", events);
  };
  return (
    <>
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-amber-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-purple-700"> Create New Event</h2>
        <p className="mt-2 text-gray-600">Fill in the details to set up your event.</p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-6 sm:grid-cols-2"
        >
          {[
            { label: "Event Name", name: "name", type: "text" },
            { label: "Date", name: "date", type: "date" },
            { label: "Time", name: "time", type: "time" },
            { label: "Venue", name: "venue", type: "text" },
            { label: "Registration Fee (₹)", name: "fee", type: "number" },
            { label: "Contact Person Info", name: "contact", type: "text", placeholder: "Name, Phone or Email" },
            {label:"slots", name:"slots", type:"number"}
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Event Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-start">
            <button
              type="submit"
              className="rounded bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-pink-700 transition"
            >
              Create Event
            </button>
          </div>

        </form>
        
      </div>
    </section>
    <AllEvents events={events} />
    </>
  );
}
