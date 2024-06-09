import React, { useEffect, useRef, useState } from 'react';

const BouncingBall: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleAnimation = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate the new position
      const newX = position.x + velocity.x;
      const newY = position.y + velocity.y;

      // Reverse the velocity if the ball hits the edges
      if (newX < 0 || newX > windowWidth - 30) {
        setVelocity((prevVelocity) => ({ ...prevVelocity, x: -prevVelocity.x }));
      }
      if (newY < 0 || newY > windowHeight - 30) {
        setVelocity((prevVelocity) => ({ ...prevVelocity, y: -prevVelocity.y }));
      }

      setPosition({ x: newX, y: newY });
      requestRef.current = requestAnimationFrame(handleAnimation);
    };

    requestRef.current = requestAnimationFrame(handleAnimation);

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position, velocity]);

  return (
    <div
      className="absolute w-8 h-8 rounded-full bg-white shadow-md"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default BouncingBall;