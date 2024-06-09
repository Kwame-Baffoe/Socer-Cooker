import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faMicrophoneAlt,
  faUserCircle,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: faComments,
      title: 'Chatting Feature',
      description:
        'Stay connected with your teammates and coaches through our secure and user-friendly chat platform.',
    },
    {
      icon: faMicrophoneAlt,
      title: 'Podcast',
      description:
        'Listen to inspiring stories, expert insights, and coaching tips from industry leaders and renowned athletes.',
    },
    {
      icon: faUserCircle,
      title: 'Player Status',
      description:
        'Track your performance, progress, and stats with detailed analytics and personalized feedback.',
    },
    {
      icon: faCalendarAlt,
      title: 'Coach Booking',
      description:
        'Easily book one-on-one sessions with professional coaches to improve your skills and reach your goals.',
    },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl text-center font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Upcoming Features
          </h2>
          <p className="mt-4 text-2xl text-center leading-8 font-bold tracking-tight text-white sm:text-2xl">
            Get Ready for the Final Launch
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 p-6 text-center shadow-lg transition transform hover:-translate-y-1 hover:scale-105 group"
            >
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-4xl text-indigo-400"
                />
              </div>
              <h3 className="text-lg font-medium text-white">{feature.title}</h3>
              <div className="mt-4 bg-black bg-opacity-75 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-base text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;