import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, MapPin, AlertCircle } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HackathonsPage = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchHackathons = async () => {
      try {
        // In a real app, you would fetch this from your API
        // const response = await fetch('/api/hackathons');
        // const data = await response.json();
        
        // Simulated data with provided images and details
        setTimeout(() => {
          const mockData = [
            {
              id: 1,
              title: 'Code & Create 2023',
              date: '15-17 Dec 2023',
              time: '48 Hours',
              location: 'Tech Hub, Silicon Valley',
              participants: 150,
              description: 'Join 48 hours of intense coding to build innovative solutions for real-world problems. Win prizes worth $10,000!',
              type: 'hackathon',
              registrationLink: '#',
              image: 'https://images.unsplash.com/photo-1640163561346-7778a2edf353?w=1170&auto=format&fit=crop&q=80',
              tags: ['Beginner Friendly', 'Mentorship', 'Prizes']
            },
            {
              id: 2,
              title: 'Web Dev Masterclass',
              date: '5 Jan 2024',
              time: '10:00 AM - 4:00 PM',
              location: 'Online',
              participants: 200,
              description: 'Master modern web development with hands-on workshops on React, Node.js, and cloud deployment.',
              type: 'webinar',
              registrationLink: '#',
              image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1170&auto=format&fit=crop&q=80',
              tags: ['Workshop', 'Live Coding', 'Q&A']
            },
            {
              id: 3,
              title: 'Startup Weekend',
              date: '12-14 Jan 2024',
              time: '72 Hours',
              location: 'Innovation Center',
              participants: 80,
              description: 'Turn your ideas into reality. Build a startup in 54 hours with mentors from top tech companies.',
              type: 'hackathon',
              registrationLink: '#',
              image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1170&auto=format&fit=crop&q=80',
              tags: ['Startup', 'Pitching', 'Networking']
            },
            {
              id: 4,
              title: 'AI & ML Bootcamp',
              date: '20 Jan 2024',
              time: '9:00 AM - 6:00 PM',
              location: 'Tech Conference Hall',
              participants: 120,
              description: 'Learn the fundamentals of Artificial Intelligence and Machine Learning with hands-on projects.',
              type: 'workshop',
              registrationLink: '#',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1170&auto=format&fit=crop&q=80',
              tags: ['AI/ML', 'Hands-on', 'Certification']
            },
            {
              id: 5,
              title: 'Women in Tech Hackathon',
              date: '27-28 Jan 2024',
              time: '24 Hours',
              location: 'Women Tech Center',
              participants: 100,
              description: 'An empowering hackathon for women in technology to collaborate and build innovative solutions.',
              type: 'hackathon',
              registrationLink: '#',
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1170&auto=format&fit=crop&q=80',
              tags: ['Women in Tech', 'Mentorship', 'Prizes']
            },
            {
              id: 6,
              title: 'Blockchain Revolution',
              date: '3-4 Feb 2024',
              time: '36 Hours',
              location: 'Blockchain Hub',
              participants: 90,
              description: 'Explore the world of blockchain, smart contracts, and decentralized applications.',
              type: 'hackathon',
              registrationLink: '#',
              image: 'https://plus.unsplash.com/premium_photo-1664299935896-8b7638a6f105?w=1170&auto=format&fit=crop&q=80',
              tags: ['Blockchain', 'Web3', 'Cryptocurrency']
            }
          ];
          setHackathons(mockData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load hackathons. Please try again later.');
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-40 bg-gray-100 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Upcoming Hackathons & Webinars</h2>
        
        {hackathons.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No upcoming hackathons or webinars at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="px-4 py-6">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              initialSlide={0}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]}
              className="px-2"
            >
              {hackathons.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-100 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1"
              >
                <div className="h-36 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <Calendar className="text-blue-500 mr-1" size={14} />
                      <span className="text-gray-600 text-xs">{event.date}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      event.type === 'hackathon' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-semibold mb-1.5 text-gray-800 line-clamp-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-1.5 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Clock className="mr-1.5 text-gray-400" size={12} />
                      <span className="truncate">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1.5 text-gray-400" size={12} />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1.5 text-gray-400" size={12} />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex flex-wrap gap-1.5 mb-3">
                    {event.tags?.map((tag, index) => (
                      <span key={index} className="text-[10px] bg-gray-50 text-gray-500 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={event.registrationLink}
                    className="mt-auto inline-block w-full text-center px-4 py-1.5 text-sm bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-md hover:opacity-90 transition-opacity"
                  >
                    {event.type === 'hackathon' ? 'Register for Hackathon' : 'Register Now'}
                  </a>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default HackathonsPage;
