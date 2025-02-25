import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen">
      {/* Background Video */}
      <div className="background-video-container">
        <video 
          autoPlay 
          loop 
          muted 
          className="background-video"
        >
          <source src="C:\Users\Avantika Patil\Downloads\-b972-4385-b947-78b4967cb57b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Top Navigation Bar */}
      <header className="border-b border-purple-800">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <div>
            <img src="/images/decodeblock-logo.png" alt="DecodeBlock" className="h-8" />
          </div>
          <button className="sign-in-button px-6 py-2 text-white">
            Sign in
          </button>
        </div>
      </header>

      <div className="relative w-full">
        <div className="relative z-10 container mx-auto py-4 px-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo Section */}
              <div className="flex items-center space-x-2">
                <div className="bg-hackIndia-orange h-10 w-10 flex items-center justify-center rounded-md">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-white font-bold text-xl tracking-wider">HACKINDIA</span>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="nav-container mt- mb-6">
            <nav className="nav-buttons-container">
              <button className="purple-button">
                Overview
              </button>
              <button className="purple-button">
                Create Team
              </button>
              <button className="purple-button">
                Prizes & Sponsors
              </button>
              <button className="purple-button">
                FAQs
              </button>
              <button className="purple-button">
                Judging & Rules
              </button>
              <button className="purple-button">
                Resources
              </button>
            </nav>
          </div>

          {/* Hero Section */}
          <main className="container mx-auto px-4 py-8 text-center mb-16">
            <div className="flex justify-center mb-12">
              <img
                src="/images/singularitynet-logo.png"
                alt="SingularityNET"
                className="h-16"
              />
            </div>

            <div className="mb-6">
              <h1 className="text-6xl font-bold mb-4">
                <span className="text-hackIndia-orange">Ha</span>
                <span className="text-white " >ckIndia</span>
                <span className="text-white">2025</span>
              </h1>
              <p className="text-white text-xl mb-8">
                India's Biggest Web3 & AI Hackathon
              </p>
            </div>

            <div className="flex justify-center mb-10">
              <div className="date-container py-3 px-8">
                <p className="text-white text-lg">February 28 - September 28</p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-8 mb-16">
              <div className="flex items-center">
                <span className="text-hackIndia-orange font-bold text-2xl">$150+</span>
                <span className="text-white ml-2">Prize Pool</span>
              </div>
              
              <div className="divider-vertical mx-4"></div>
              
              <div className="flex items-center">
                <span className="text-hackIndia-orange font-bold text-2xl">150+</span>
                <span className="text-white ml-2">University</span>
              </div>
              
              <div className="divider-vertical mx-4"></div>
              
              <div className="flex items-center">
                <span className="text-hackIndia-orange font-bold text-2xl">25,000+</span>
                <span className="text-white ml-2">Students</span>
              </div>
            </div>

            <button className="register-button font-bold">
              Register now!
            </button>
          </main>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto flex justify-around flex-wrap">
          {Array.from({ length: 12 }).map((_, index) => (
            <img
              key={index}
              src={`/images/sponsors/sponsor${index + 1}.png`}
              alt={`Sponsor ${index + 1}`}
              className="h-12 m-2"
            />
          ))}
        </div>
      </div>

      {/* Stats & Video Section */}
      <div className="container mx-auto py-16 px-4 flex flex-wrap">
        <div className="w-full md:w-1/3 pr-8">
          {/* Stats */}
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-white flex items-baseline">
              150+
            </h3>
            <p className="text-white text-lg">Universities participating</p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-white flex items-baseline">
              72+
            </h3>
            <p className="text-white text-lg">Judges</p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-white flex items-baseline">
              21
            </h3>
            <p className="text-white text-lg">Hackathons</p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-5xl font-bold text-white flex items-baseline">
              36+
            </h3>
            <p className="text-white text-lg">Great Speakers</p>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          {/* Video */}
          <div className="video-container relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/video-thumbnail.jpg"
              alt="HackIndia Video"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Sponsors */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto flex justify-around flex-wrap">
          <img src="/images/singularitynet-logo.png" alt="SingularityNET" className="h-8 m-2" />
          <img src="/images/rair-protocol.png" alt="RAIR Protocol" className="h-8 m-2" />
          <img src="/images/stratis.png" alt="Stratis" className="h-8 m-2" />
          <img src="/images/sharp-economy.png" alt="Sharp Economy" className="h-8 m-2" />
          <img src="/images/csharp-tv.png" alt="CSHARP.TV" className="h-8 m-2" />
          <img src="/images/beyond-the-code.png" alt="Beyond The Code" className="h-8 m-2" />
        </div>
      </div>
    </div>
  );
}

export default App;