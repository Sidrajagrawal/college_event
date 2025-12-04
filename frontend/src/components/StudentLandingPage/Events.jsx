import React from 'react';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2023',
      date: '15 Dec 2023',
      time: '09:00 AM - 05:00 PM',
      location: 'Main Auditorium',
      attendees: 150,
      description: 'Annual technology conference featuring industry leaders and workshops.'
    },
    {
      id: 2,
      title: 'Coding Bootcamp',
      date: '20 Dec 2023',
      time: '10:00 AM - 04:00 PM',
      location: 'Computer Lab 3',
      attendees: 30,
      description: 'Hands-on coding workshop for beginners to advanced developers.'
    },
    {
      id: 3,
      title: 'Alumni Meet',
      date: '05 Jan 2024',
      time: '02:00 PM - 06:00 PM',
      location: 'Convocation Hall',
      attendees: 200,
      description: 'Networking event with successful alumni from various industries.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-blue-500 mr-2" />
                  <span className="text-gray-600">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{event.attendees} attendees</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
