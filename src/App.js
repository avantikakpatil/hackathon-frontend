import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Add a useEffect to handle responsive navigation for touch devices
  useEffect(() => {
    const navContainer = document.querySelector('.main-nav');
    if (navContainer) {
      // Add touch support for mobile scrolling of nav items
      let isDown = false;
      let startX;
      let scrollLeft;

      navContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - navContainer.offsetLeft;
        scrollLeft = navContainer.scrollLeft;
      });

      navContainer.addEventListener('mouseleave', () => {
        isDown = false;
      });

      navContainer.addEventListener('mouseup', () => {
        isDown = false;
      });

      navContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - navContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        navContainer.scrollLeft = scrollLeft - walk;
      });

      // Touch events for mobile
      navContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - navContainer.offsetLeft;
        scrollLeft = navContainer.scrollLeft;
      });

      navContainer.addEventListener('touchend', () => {
        isDown = false;
      });

      navContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - navContainer.offsetLeft;
        const walk = (x - startX) * 2;
        navContainer.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);

  return (
    <div className="App min-h-screen">
     <div className="background-video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/-b972-4385-b947-78b4967cb57b.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
     </div>

      {/* Top Navigation Bar */}
      <header className="main-header">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <img 
            src="/logodb-PhotoRoom 1.png" 
            alt="DecodeBlock" 
            className="header-logo"
          />
          <button>
            <img 
              src="/Component 20.png" 
              alt="Sign In" 
              className="sign-in-btn"
            />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content-wrapper w-full pt-5">
        <div className="relative z-10 container mx-auto py-4 px-4 text-white flex flex-wrap justify-center">
          {/* Left Section (Logo) */}
          <div className="flex items-center space-x-2 px-0 mb-4 md:mb-0">
            <img 
              src="/Frame 1000006378.png" 
              alt="HackIndia" 
              className="hackindia-small-logo"
            />
          </div>

          <nav className="main-nav flex items-center mx-auto">
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
            className="singularity-logo w-auto h-auto flex justify-center items-center pb-4"
          />

          <div className="mb-6 pb-1">
            <div className="text-center">
              <img
                src="/HackIndia2025.png" 
                alt="HackIndia2025 Logo"
                className="hackindia-logo"
              />
            </div>
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

          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-16">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-vtf">150+</span>
              <span className="text-white ml-2 text-[25px] font-vtf">Prize Pool</span>
            </div>

            <div className="divider-vertical mx-4 hidden md:block"></div>

            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-vtf">150+</span>
              <span className="text-white ml-2 text-[25px] font-vtf">Universities</span>
            </div>

            <div className="divider-vertical mx-4 hidden md:block"></div>

            <div className="flex items-center">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-vtf">25,000+</span>
              <span className="text-white ml-2 text-[25px] font-vtf">Students</span>
            </div>
          </div>

          <button className="register-btn-container w-auto h-auto mb-5">
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
          <img src="/2 3255.png" alt="Sponsor 3255" className="h-8 sm:h-12 m-2 flex-shrink-0" />
          <img src="/1 780.png" alt="Sponsor 780" className="h-8 sm:h-12 m-2 flex-shrink-0" />
          <img src="/1 781.png" alt="Sponsor 781" className="h-8 sm:h-12 m-2 flex-shrink-0" />
          <img src="/2 3256.png" alt="Sponsor 3256" className="h-8 sm:h-12 m-2 flex-shrink-0" />

          {/* Duplicate images for seamless infinite scrolling */}
          <img src="/2 3255.png" alt="Sponsor 3255" className="h-8 sm:h-12 m-2 flex-shrink-0" />
          <img src="/1 780.png" alt="Sponsor 780" className="h-8 sm:h-12 m-2 flex-shrink-0" />
          <img src="/1 781.png" alt="Sponsor 781" className="h-8 sm:h-12 m-2 flex-shrink-0" />
          <img src="/2 3256.png" alt="Sponsor 3256" className="h-8 sm:h-12 m-2 flex-shrink-0" />
        </div>
      </div>

      <div className="stats-section bg-purple-1500 text-white py-12 md:py-20 relative">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row relative">
      {/* Stats Column - Positioned precisely on desktop */}
      <div className="w-full md:w-1/2 relative">
        <div 
          className="lightning-container mb-6 md:mb-0 md:absolute hidden sm:block"
          style={{
            width: "273px",
            height: "70px",
            left: "-60px"
          }}
        >
          <img 
            src="/Untitled design (96) 1.png" 
            alt="Lightning effect" 
            className="w-full h-full object-contain md:w-[273px] md:h-[70px]"
          />
        </div>
        
        {/* Stats Grid with responsive adjustments */}
        <div className="stats-grid md:absolute md:mt-0 mt-10 mx-auto md:mx-0" 
             style={{
               width: '100%', 
               maxWidth: '657px', 
               height: 'auto',
               left: '0px', 
               top: '107px'
             }}>
          {/* Main stat */}
          <div className="mb-8 text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-bold text-white">
              150<span className="text-2xl md:text-4xl">+</span>
            </h3>
            <p className="text-white text-lg md:text-xl tracking-wider">Universities participating</p>
          </div>

          {/* Three smaller stats with specified gap */}
          <div className="flex flex-wrap w-full justify-center md:justify-start" style={{gap: '20px'}}>
            <div className="w-full sm:w-auto mb-8 text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-bold text-white">
                72<span className="text-2xl md:text-4xl">+</span>
              </h3>
              <p className="text-white text-lg md:text-xl tracking-wider">Judges</p>
            </div>

            <div className="w-full sm:w-auto mb-8 text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-bold text-white">
                21
              </h3>
              <p className="text-white text-lg md:text-xl tracking-wider">Hackathons</p>
            </div>

            <div className="w-full sm:w-auto mb-8 text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-bold text-white">
                36<span className="text-2xl md:text-4xl">+</span>
              </h3>
              <p className="text-white text-lg md:text-xl tracking-wider">Great Speakers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Container with responsive dimensions */}
      <div className="w-full md:w-1/2 mt-96 sm:mt-80 md:mt-0">
        <div className="video-iframe-container relative md:absolute mx-auto md:mx-0" 
             style={{
               width: '100%',
               maxWidth: '641px', 
               height: '0',
               paddingBottom: '56.25%', /* 16:9 aspect ratio */
               top: '0px', 
               right: '0px'
             }}>
          <iframe 
            className="absolute top-0 left-0 w-full h-full rounded-lg"
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
</div>
      {/* Sponsors Section */}
      <div className="sponsors-section mt-20 md:mt-40 lg:mt-60">
        <div className="sponsors-container px-4">
          <img src="Frame 1000006391.png" alt="Sponsor Frame" className="sponsors-frame" />
        </div>
      </div>

      <div className="footer-section mt-10 md:mt-20">
        <footer className="footer-container px-4">
          {/* Footer Image */}
          <div className="flex justify-center">
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