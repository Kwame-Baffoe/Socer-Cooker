"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VotingOption {
  id: string;
  name: string;
  color: string;
}

const votingOptions: VotingOption[] = [
  { id: 'option1', name: 'Hawk', color: 'bg-blue-500' },
  { id: 'option2', name: 'Polar Bear', color: 'bg-green-500' },
  { id: 'option3', name: 'Falcon', color: 'bg-purple-500' },
];

const VotingPoll: React.FC = () => {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [userVoted, setUserVoted] = useState<string | null>(null);

  useEffect(() => {
    const storedVote = localStorage.getItem('userVote');
    setUserVoted(storedVote);

    const storedVotes = localStorage.getItem('votes');
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes));
    } else {
      const initialVotes = votingOptions.reduce((acc, option) => {
        acc[option.id] = 0;
        return acc;
      }, {} as Record<string, number>);
      setVotes(initialVotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  const handleVote = (optionId: string) => {
    if (userVoted) return;

    const updatedVotes = {
      ...votes,
      [optionId]: (votes[optionId] || 0) + 1,
    };

    setVotes(updatedVotes);
    setUserVoted(optionId);
    localStorage.setItem('userVote', optionId);

    // Console log when vote is cast
    console.log(`Vote cast for ${optionId}. Updated votes:`, updatedVotes);
  };

  const getProgressBarWidth = (optionId: string) => {
    const optionVotes = votes[optionId] || 0;
    return totalVotes > 0 ? (optionVotes / totalVotes) * 100 : 0;
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-200 dark:text-white">
        Vote for Our New Mascot
      </h1>
      <div className="space-y-6">
        {votingOptions.map((option) => (
          <motion.div
            key={option.id}
            className={`${option.color} rounded-lg p-6 shadow-lg`}
            whileHover={{ scale: userVoted ? 1 : 1.02 }}
            whileTap={{ scale: userVoted ? 1 : 0.98 }}
          >
            <button
              className="w-full text-left"
              onClick={() => handleVote(option.id)}
              disabled={!!userVoted}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-semibold text-white">
                  {option.name}
                </span>
                <span className="text-2xl font-bold text-white">
                  {votes[option.id] || 0}
                </span>
              </div>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-6 overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${getProgressBarWidth(option.id)}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {userVoted === option.id && (
                <div className="mt-2 text-white font-semibold">
                  ✓ You voted for this option
                </div>
              )}
            </button>
          </motion.div>
        ))}
      </div>
      {userVoted && (
        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Thank you for voting! The results are displayed above.
        </p>
      )}
      {!userVoted && (
        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Click on an option to cast your vote. You can only vote once.
        </p>
      )}
    </section>
  );
};

export default VotingPoll;