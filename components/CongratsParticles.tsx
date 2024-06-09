import React, { useEffect, useState, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, Container } from 'tsparticles-engine';

const CongratsParticles: React.FC = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const handleBounce = () => {
      setShowParticles(true);
      setTimeout(() => {
        setShowParticles(false);
      }, 10000); // Hide particles after 10 seconds
    };

    // Trigger particles on page load
    handleBounce();

    window.addEventListener('click', handleBounce);

    return () => {
      window.removeEventListener('click', handleBounce);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  if (!showParticles) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'],
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onHover: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
      className="absolute inset-0 z-50"
    />
  );
};

export default CongratsParticles;