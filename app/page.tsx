"use client";
import { useState } from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import CongratsParticles from '../components/CongratsParticles';
import CommentSection from '../components/CommentSection';
import VotingPoll from '../components/VotingPoll';
import ThankYouPage from '../components/ThankYouPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import useTypeWriter from '../components/useTypeWriter';
import image1 from '../public/image1.jpeg';
import image2 from '../public/image2.jpeg';
import bgImage from '../public/bg.jpg';
import image4 from '../public/image4.jpeg';
import React from 'react';
import { format, parseISO } from 'date-fns';
import FeaturesSection from '@/components/Features';


const SoccerPitch: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center mt-10">
      <div className="w-full max-w-4xl aspect-video bg-gray-900 relative">
        <div className="absolute inset-0 border-2 border-white rounded"></div>
        <div className="absolute inset-1/2 w-1/2 h-full border-l-2 border-white"></div>
        <div className="absolute top-1/2 left-0 right-0 mx-auto w-64 h-16 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-white text-lg font-bold text-center">
            Saint Paul College Soccer
          </span>
        </div>
        <div className="absolute top-1/4 left-0 right-0 mx-auto w-12 h-12 rounded-full border-2 border-white"></div>
        <div className="absolute bottom-1/4 left-0 right-0 mx-auto w-12 h-12 rounded-full border-2 border-white"></div>
        <div className="absolute top-0 bottom-0 left-0 w-24 h-1/2 border-2 border-white rounded-tr rounded-br"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 h-1/2 border-2 border-white rounded-tl rounded-bl"></div>
        <div className="absolute top-0 left-1/4 w-12 h-12 rounded-full bg-white animate-moveBall1"></div>
        <div className="absolute bottom-0 right-1/4 w-12 h-12 rounded-full bg-white animate-moveBall2"></div>
      </div>
    </div>
  );
};

const TeamMembers: React.FC = () => {
  const members = [
    {
      name: 'Abraham Baffoe',
      position: 'Goal Keeper',
      image: image1,
      socials: { twitter: '#', facebook: '#', instagram: '#' },
    },
    {
      name: 'Kwabena Poku',
      position: 'Midfielder',
      image: image2,
      socials: { twitter: '#', facebook: '#', instagram: '#' },
    },
    {
      name: 'Mo Khan',
      position: 'Defender',
      image: bgImage,
      socials: { twitter: '#', facebook: '#', instagram: '#' },
    },
    {
      name: 'Myo Davis',
      position: 'Striker',
      image: image2,
      socials: { twitter: '#', facebook: '#', instagram: '#' },
    },
    {
      name: 'Jared Grey',
      position: 'Left -Wing',
      image: image4,
      socials: { twitter: '#', facebook: '#', instagram: '#' },
    },
    {
      name: 'Jamal Deen',
      position: 'Right-Wing',
      image: image4,
      socials: { twitter: '#', facebook: '#', instagram: '#' },
    },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl text-center font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Team Members
          </h2>
          <p className="mt-4 text-2xl text-center leading-8 font-bold tracking-tight text-white sm:text-2xl">
            Meet Our Players
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 md:gap-x-8 md:gap-y-10 gap-y-10 md:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative rounded-lg bg-gray-800 p-6 text-center shadow-lg transition transform hover:-translate-y-1 hover:scale-105 group"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-56 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-medium text-white">{member.name}</h3>
                <p className="mt-2 text-base text-gray-300">{member.position}</p>
                <div className="mt-4 flex space-x-4">
                  <a href={member.socials.twitter} className="text-white hover:text-gray-400">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href={member.socials.facebook} className="text-white hover:text-gray-400">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href={member.socials.instagram} className="text-white hover:text-gray-400">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





const Matches: React.FC = () => {
  const matches = [
    { date: '2024-06-10T14:00:00.000Z', opponent: 'Team A', location: 'Home' },
    { date: '2024-06-17T16:00:00.000Z', opponent: 'Team B', location: 'Away' },
    { date: '2024-06-24T18:00:00.000Z', opponent: 'Team C', location: 'Home' },
    { date: '2024-06-30T20:00:00.000Z', opponent: 'Team A', location: 'Away' },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl text-center font-extrabold uppercase tracking-wide text-indigo-600">
Matches
</h2>
<p className="mt-4 text-2xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-2xl">
Upcoming Games
</p>
</div>
<div className="mt-10 flex flex-wrap justify-center gap-8">
{matches.map((match) => (
<div
           key={match.date}
           className="w-full max-w-sm rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 p-6 text-center shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
         >
<div className="flex items-center justify-between">
<div className="text-lg font-medium text-white">
{format(parseISO(match.date), 'EEEE, MMM d, yyyy')}
</div>
<div className="text-sm font-medium text-indigo-400">
{format(parseISO(match.date), 'h:mm a')}
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-base text-gray-300">
<span className="font-semibold text-white">Opponent:</span>{' '}
{match.opponent}
</div>
<div className="text-base text-gray-300">
<span className="font-semibold text-white">Location:</span>{' '}
{match.location}
</div>
</div>
<div className="mt-6 flex justify-center">
<button
               type="button"
               className="rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
             >
Get Tickets
</button>
</div>
<div className="mt-6 flex justify-center">
<a
               href="#"
               className="text-indigo-400 hover:text-indigo-300 transition duration-300"
             >
Add to Calendar
</a>
</div>
</div>
))}
</div>
</div>
</div>
);
};
const VisionMission: React.FC = () => {
return (
<div className="bg-gray-900 py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:text-center">
<h2 className="text-4xl text-center font-extrabold  uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
Vision & Mission
</h2>
<p className="mt-4 text-2xl leading-8 font-extrabold tracking-tight text-white text-center sm:text-2xl">
Our Goals
</p>
</div>
<div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-8">
<div className="rounded-lg bg-gray-800 p-6 text-center shadow-lg transition transform hover:-translate-y-1 hover:scale-105 group">
<div className="relative z-10 p-4">
<h3 className="text-lg leading-6 font-medium text-white">Vision</h3>
<p className="mt-2 text-base text-gray-300">To inspire and lead in soccer through dedication, skill, and sportsmanship.</p>
</div>
</div>
<div className="rounded-lg bg-gray-800 p-6 text-center shadow-lg transition transform hover:-translate-y-1 hover:scale-105 group opacity-100 transition-opacity duration-300">
<div className="relative z-10 p-4">
<h3 className="text-lg leading-6 font-medium text-white">Mission</h3>
<p className="mt-2 text-base text-gray-300">To develop talent, achieve competitive success, and positively impact the community.</p>
</div>
</div>
</div>
</div>
</div>
);
};
const JoinWaitlist: React.FC = () => {
const [email, setEmail] = useState('');
const [isSubmitted, setIsSubmitted] = useState(false);
const [error, setError] = useState<string | null>(null);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setError(null);
try {
  // Replace 'your-api-endpoint' with your actual API endpoint
  const response = await fetch('./thank-you/page.tsx', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (response.ok) {
    const result = await response.json();
    console.log('Successfully added to the waitlist:', result);
    setIsSubmitted(true);
    setEmail('');
  } else {
    const errorText = await response.text();
    console.error('Error adding to the waitlist:', errorText);
    setError('Failed to join the waitlist. Please try again.');
  }
} catch (error) {
  console.error('Error adding to the waitlist:', error);
  setError("An unexpected error occurred. Please try again.");
}
};
return (
  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  {!isSubmitted ? (
  <>
  <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl">
  Join Our Waitlist
  </h2>
  <p className="mt-4 text-lg leading-6 text-indigo-200">
  Be the first to know when we launch and get exclusive updates.
  </p>
  <form onSubmit={handleSubmit} className="mt-8 flex justify-center">
  <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full max-w-md px-5 py-3 border border-transparent rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
  required
  />
  <button
               type="submit"
               className="ml-4 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
             >
  Join Now
  </button>
  </form>
  </>
  ) : (
  <div className="text-center">
  <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl">
  Thank you for joining our waitlist!
  </h2>
  <p className="mt-4 text-lg leading-6 text-indigo-200">
  We will keep you updated on our progress and upcoming launch.
  </p>
  </div>
  )}
  </div>
  </div>
  );
  };

  const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-base text-gray-400">
      &copy; 2024 Saints Soccer Team. All rights reserved.
    </p>
  </div>
</footer>
);
};


const RootLayout = () => {
  const typedText = useTypeWriter('Welcome to the Pre-launch', 100);
  return (
  <ClerkProvider>
  <CongratsParticles />
  <NavBar />

  <div className="relative text-white min-h-screen bg-gradient-to-b from-gray-900 to-black">
    {/* Hero Section */}
    <div className="relative isolate px-6 pt-5 lg:px-8">
      <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
             {typedText}
            </span>
            
            <span className="animate-bounce">⚽</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 italic">
            Slogan: Saints are <span className="text-indigo-500">cooking</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our vision is to inspire and lead in soccer through dedication, skill, and sportsmanship.
            
            Our mission is to develop talent, achieve competitive success, and positively impact the community through teamwork and integrity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <SignedOut>
              <SignInButton mode="modal" onSignIn={() => window.location.href= "./thank-you"}>
                <button
                  type="button"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition duration-200 ease-in-out"
                >
                  Register Now
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-between text-sm text-gray-400">
            <div>
              <span className="font-semibold text-white">Special Guest:</span>{' '}
              Abraham Baffoe
            </div>
            <div>
              <span className="font-semibold text-white">Date:</span>{' '}
              June 07<sup>th</sup> 2024
            </div>
          </div>
          <div className="mt-20 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>


    {/* Vision & Mission Section */}
    <VisionMission />

    {/* Team Members Section */}
    <TeamMembers />

    {/* Matches Section */}
    <Matches />

    <FeaturesSection />

    {/* Comment Section */}
    <div className="bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommentSection />
      </div>
    </div>

    {/* Join Waitlist Section */}
    <JoinWaitlist />

    {/* Voting Poll */}
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VotingPoll />
      </div>
    </div>

    {/* Soccer Pitch */}
    <SoccerPitch />

  <main>
    {/* Footer */}
    <Footer />
  </main>
  </div>
</ClerkProvider>

);
};
export default RootLayout;