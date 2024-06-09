// components/ThankYouPage.tsx
import React from 'react';
import VotingPoll from './VotingPoll';

const ThankYouPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Thank you for registering!</h2>
      <p className="mb-6 text-gray-300">We appreciate your interest in our team. Please take a moment to vote for your favorite mascot.</p>
      <VotingPoll />
    </div>
  );
};

export default ThankYouPage;