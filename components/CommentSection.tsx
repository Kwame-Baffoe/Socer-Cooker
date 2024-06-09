import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-tsparticles';
import particlesConfig from './particlesConfig';

const CommentSection: React.FC = () => {
  const [comment, setComment] = useState<string>('');
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setHeight(containerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sendEmail = async (message: string) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setMessageSent(true);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      sendEmail(comment);
      setComment('');
    }
  };

  return (
    <div className="comment-section-container">
      <div className="relative">
        <div ref={containerRef} style={{ height: `${height}px` }}>
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <form onSubmit={handleCommentSubmit} className="flex items-center mb-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full sm:w-3/4 p-3 rounded-md bg-gradient-to-r from-gray-700 to-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 shadow-md"
              placeholder="Share your thoughts..."
              rows={3}
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
          {messageSent && (
            <div className="p-4 bg-green-800 text-white rounded-md shadow-md">
              Thank you for your message!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
