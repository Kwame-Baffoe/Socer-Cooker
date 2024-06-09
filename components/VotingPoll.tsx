'use client';

import React, { useState, useEffect } from 'react';

interface VotingData {
  [key: string]: number;
}

const VotingPoll: React.FC = () => {
  const [votes, setVotes] = useState<VotingData>({
    option1: 0,
    option2: 0,
    option3: 0,
  });
  const [userVoted, setUserVoted] = useState<string | null>(null);

  useEffect(() => {
    const storedVote = localStorage.getItem('userVote');
    setUserVoted(storedVote);

    const storedVotes = localStorage.getItem('votes');
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  const handleVote = (option: string) => {
    if (userVoted) return; // User has already voted

    const updatedVotes = {
      ...votes,
      [option]: votes[option] + 1,
    };

    setVotes(updatedVotes);
    setUserVoted(option);
    localStorage.setItem('userVote', option);
  };

  const getProgressBarWidth = (option: string) => {
    const optionVotes = votes[option];
    const percentage = totalVotes > 0 ? (optionVotes / totalVotes) * 100 : 0;
    return `${percentage}%`;
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg mt-10 shadow-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Let us Vote on Mascot
      </h2>
      <div className="mt-4 space-y-4">
        <div
           className={`bg-blue-500 text-white rounded-lg p-4 cursor-pointer transition duration-300 ${
            (userVoted === 'option1' || userVoted !== null) && 'opacity-50 cursor-not-allowed'
          }`}
          onClick={() => handleVote('option1')}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Hawk</span>
            <span className="text-2xl font-bold">{votes.option1}</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
            <div
              className="bg-blue-700 h-4 rounded-full"
              style={{ width: getProgressBarWidth('option1') }}
            ></div>
          </div>
        </div>
        <div
          className={`bg-green-500 text-white rounded-lg p-4 cursor-pointer transition duration-300 ${
            userVoted === 'option2' || userVoted !== null
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-green-600'
          }`}
          onClick={() => handleVote('option2')}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Lion</span>
            <span className="text-2xl font-bold">{votes.option2}</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
            <div
              className="bg-green-700 h-4 rounded-full"
              style={{ width: getProgressBarWidth('option2') }}
            ></div>
          </div>
        </div>
        <div
           className={`bg-blue-500 text-white rounded-lg p-4 cursor-pointer transition duration-300 ${
            userVoted === 'option1' || userVoted !== null
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-600'
          }`}
          onClick={() => handleVote('option1')}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Falcon</span>
            <span className="text-2xl font-bold">{votes.option3}</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
            <div
              className="bg-red-700 h-4 rounded-full"
              style={{ width: getProgressBarWidth('option3') }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingPoll;