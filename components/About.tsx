import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-10">
      <div className="max-w-4xl w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-white bg-opacity-30 rounded-full flex items-center justify-center shadow-lg mb-4">
              <img src="/path/to/image.jpg" alt="Team Member" className="w-36 h-36 rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-white">John Doe</h2>
            <p className="text-white text-center">Lead Developer</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-white bg-opacity-30 rounded-full flex items-center justify-center shadow-lg mb-4">
              <img src="/path/to/image.jpg" alt="Team Member" className="w-36 h-36 rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-white">Jane Smith</h2>
            <p className="text-white text-center">Product Manager</p>
          </div>
          <div className="col-span-1 md:col-span-2 mt-8">
            <p className="text-white text-lg text-center">
              We are a team of passionate developers and designers dedicated to building amazing products that make a difference. Our mission is to create innovative solutions that meet the needs of our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
