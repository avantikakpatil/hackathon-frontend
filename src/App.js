import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen">
     <div className="background-video-container">
  <video autoPlay loop muted className="background-video">
    <source src="/-b972-4385-b947-78b4967cb57b.mp4" type="video/mp4" />
  </video>
  <div className="video-overlay"></div>
</div>

      {/* Top Navigation Bar */}
      <header className="main-header">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 ml-14">
          <img 
            src="/logodb-PhotoRoom 1.png" 
            alt="DecodeBlock" 
            className="header-logo"
          />
          <button>
            <img 
              src="/Component 20.png" 
              alt="Sign In" 
              className="sign-in-btn mr-20"
            />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content-wrapper w-full pt-5">
        <div className="relative z-10 container mx-auto py-4 px-4 text-white flex justify-between items-center">
          {/* Left Section (Logo) */}
          <div className="flex items-center space-x-2 px-0 ml-20">
            <img 
              src="/Frame 1000006378.png" 
              alt="HackIndia" 
              className="hackindia-small-logo"
            />
          </div>

          <nav className="main-nav flex justify-between items-center mx-auto ml-20">
            {[
              { src: "/Component 8.png", alt: "Overview" },
              { src: "/Component 36.png", alt: "Create Team" },
              { src: "/Component 29.png", alt: "Prize" },
              { src: "/Component 33.png", alt: "FAQs" },
              { src: "/Component 32.png", alt: "Judging and Rules" },
              { src: "/Component 35.png", alt: "Resources" }
            ].map((item, index) => (
              <button key={index} className="nav-button hover:brightness-150 transition duration-300">
                <img src={item.src} alt={item.alt} />
              </button>
            ))}
          </nav>
        </div>

        <main className="flex flex-col items-center justify-center text-center px-2 py-8">
          <img 
            src="/singularityNET.png" 
            alt="SingularityNET" 
            className="singularity-logo w-[300px] h-[90px] flex justify-center items-center pb-4"
          />

<div className="mb-6 pb-1">
  <div className="ml-[-270px]">
    <img
      src="/HackIndia2025.png" 
      alt="HackIndia2025 Logo"
      className="hackindia-logo"
    />
  </div>
  {/* Remove or reduce this empty div if it's causing spacing issues */}
  {/* <div className="mb-1 pb-1"></div> */}
  <img
    src="/India’s Biggest Web3 & AI Hackathon.png"
    alt="India's Biggest Web3 & AI Hackathon"
    className="hackathon-tagline"
  />
</div>

          <div className="flex justify-center mb-10">
            <div className="date-container flex justify-center">
              <img
                src="/February 28 - September 28.png"
                alt="Hackathon Date"
                className="hackathon-date"
              />
            </div>
          </div>

          <div className="flex justify-center items-center space-x-8 mb-16 flex-wrap">
            <div className="flex items-center">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-vtf">150+</span>
              <span className="text-white ml-2 text-[25px] font-vtf">Prize Pool</span>
            </div>

            <div className="divider-vertical mx-4 hidden sm:block"></div>

            <div className="flex items-center">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-vtf">150+</span>
              <span className="text-white ml-2 text-[25px] font-vtf">Universities</span>
            </div>

            <div className="divider-vertical mx-4 hidden sm:block"></div>

            <div className="flex items-center">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-vtf">25,000+</span>
              <span className="text-white ml-2 text-[25px] font-vtf">Students</span>
            </div>
          </div>

          <button className="register-btn-container w-[177px] h-[59px] mb-5">
            <img 
              src="/Component 17.png" 
              alt="Register Button" 
              className="w-full h-full object-contain"
            />
          </button>
        </main>
      </div>

      <div className="sponsors-scroll bg-gray-100 py-1 overflow-hidden relative w-full">
        <div className="flex space-x-5 animate-scroll">
          {/* Sponsor logos */}
          <img src="/2 3255.png" alt="Sponsor 3255" className="h-12 m-2 flex-shrink-0" />
          <img src="/1 780.png" alt="Sponsor 780" className="h-12 m-2 flex-shrink-0" />
          <img src="/1 781.png" alt="Sponsor 781" className="h-12 m-2 flex-shrink-0" />
          <img src="/2 3256.png" alt="Sponsor 3256" className="h-12 m-2 flex-shrink-0" />

          {/* Duplicate images for seamless infinite scrolling */}
          <img src="/2 3255.png" alt="Sponsor 3255" className="h-12 m-2 flex-shrink-0" />
          <img src="/1 780.png" alt="Sponsor 780" className="h-12 m-2 flex-shrink-0" />
          <img src="/1 781.png" alt="Sponsor 781" className="h-12 m-2 flex-shrink-0" />
          <img src="/2 3256.png" alt="Sponsor 3256" className="h-12 m-2 flex-shrink-0" />
        </div>
      </div>

      <div className="stats-section bg-purple-1500 text-white">
        {/* Stats & Video Section */}
        <div className="container mx-auto py-16 px-4 flex flex-wrap items-center pl-0 ml-0">
          <div className="w-full md:w-1/3 pr-4 md:pr-8">
            {/* Lightning Effect */}
            <div className="lightning-container mb-11 pl-0 ml-0 mt-14">
              <img src="/Untitled design (96) 1.png" alt="Lightning effect" className="w-48 lightning" />
            </div>
            
            {/* Stats */}
            <div className="stats-grid">
              <div className="mb-8">
                <h3 className="text-6xl font-bold text-white">
                  150<span className="text-4xl">+</span>
                </h3>
                <p className="text-white text-xl tracking-wider">Universities participating</p>
              </div>

              <div className="flex flex-wrap w-full">
                <div className="w-1/3 mb-8 pr-2">
                  <h3 className="text-6xl font-bold text-white">
                    72<span className="text-4xl">+</span>
                  </h3>
                  <p className="text-white text-xl tracking-wider">Judges</p>
                </div>

                <div className="w-1/3 mb-8 px-2">
                  <h3 className="text-6xl font-bold text-white">
                    21
                  </h3>
                  <p className="text-white text-xl tracking-wider">Hackathons</p>
                </div>

                <div className="w-1/3 mb-8 pl-2">
                  <h3 className="text-6xl font-bold text-white">
                    36<span className="text-4xl">+</span>
                  </h3>
                  <p className="text-white text-xl tracking-wider">Great Speakers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            {/* Video Container */}
            <div className="video-iframe-container">
              <iframe 
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/gi1kkMbfNAE"
                title="HackIndia 2024 Finals - Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="sponsors-section">
        <div className="sponsors-container">
          <img src="Frame 1000006391.png" alt="Sponsor Frame" className="sponsors-frame" />
        </div>
      </div>

      <div className="footer-section">
        <footer className="footer-container">
          {/* Footer Image */}
          <div>
            <img
              src="/Group 1000006140.png"
              alt="Footer Graphic"
              className="footer-graphic"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;