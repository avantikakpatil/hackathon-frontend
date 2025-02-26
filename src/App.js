import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen">
      {/* Background Video */}
      <div className="background-video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/b972-4385-b947-78b4967cb57b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Top Navigation Bar */}
      <header 
  className="border-b-2"
  style={{ 
    width: '100%', 
    height: '100%', 
    background: '#000000E5', 
    borderBottom: '2px solid #B026FF80' 
  }}
>
  <div className="container mx-auto flex justify-between items-center py-3 px-4">
    <img 
      src="/logodb-PhotoRoom 1.png" 
      alt="DecodeBlock" 
      className="h-12" 
      style={{width: '240px',
        height: '40px',
        top: '18px',
        left: '79px'
        }}
    />
    <button>
      <img 
        src="/Component 20.png" 
        alt="Sign In" 
        className="object-contain"
        style={{ width: '150px', height: '53px' }} 
      />
    </button>
  </div>
</header>


      {/* Main Content */}
      <div className="relative w-full pt-5">
        <div className="relative z-10 container mx-auto py-4 px-4 text-white flex justify-between items-center">
          {/* Left Section (Logo) */}
          <div className="flex items-center space-x-2 px-2">
          <img 
    src="/Frame 1000006378.png" 
    alt="HackIndia" 
    className="object-contain"
    style={{ width: '183px', height: '38px', top:'123px', left:'99px', gap:'9px' }}
  />
          </div>

          <nav 
  className="flex justify-between items-center mx-auto"
  style={{
    height: '60px',
    top: '114px',
    left: '300px',
    gap: '10px',
    borderRadius: '10px',
    borderWidth: '1px',
    padding: '12px 30px',
    border: '1px solid #DFDFDF1A',
    background: '#28083A',
    boxShadow: '0px 1px 4px 0px #D9D9D94D'
  }}
>
  {[
    { src: "/Component 8.png", alt: "Overview" },
    { src: "/Component 36.png", alt: "Create Team" },
    { src: "/Component 29.png", alt: "Prize" },
    { src: "/Component 33.png", alt: "FAQs" },
    { src: "/Component 32.png", alt: "Judging and Rules" },
    { src: "/Component 35.png", alt: "Resources" }  ].map((item, index) => (
    <button key={index} className="hover:brightness-150 transition duration-300">
      <img src={item.src} alt={item.alt}  />
    </button>
  ))}
</nav>


        </div>

        <main className="container mx-auto px-4 py-8 pt-2 text-center mb-16">
  <div className="flex justify-center items-center pt-3 pb-4">
    <img 
      src="/singularityNET.png" 
      alt="SingularityNET" 
      className="object-contain"
      style={{ width: '279.93px', height: '76px' }}
    />
  </div>



          <div className="mb-6 pb-5">
          <img
    src="/HackIndia2025.png" 
    alt="HackIndia2025 Logo"
    className="hackindia-logo"
  />
            <div className="flex justify-center pt-2">
  <img
    src="/India’s Biggest Web3 & AI Hackathon.png"
    alt="India’s Biggest Web3 & AI Hackathon"
    className="hackathon-tagline"
  />
</div>

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

          <div className="flex justify-center items-center space-x-8 mb-16">
            <div className="flex items-center">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-vtf">150+</span>
              <span className="text-white ml-2 text-[25px] font-vtf">Prize Pool</span>
            </div>

            <div className="divider-vertical mx-4"></div>

            <div className="flex items-center">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-vtf">150+</span>
              <span className="text-white ml-2 text-[25px] font-vtf">Universities</span>
            </div>

            <div className="divider-vertical mx-4"></div>

            <div className="flex items-center">
              <span className="text-hackIndia-orange font-bold text-[25px] leading-[36.88px] tracking-[3%] font-VTF Justina GEO">25,000+</span>
              <span className="text-white ml-2 text-[25px] font-VTF Justina GEO">Students</span>
            </div>
          </div>

          <button 
  className="relative text-white text-lg font-bold px-6 py-3"
  style={{
    background: "black",
    border: "2px solid #B026FF",
    position: "relative",
    clipPath: "polygon(0% 0%, 95% 0%, 100% 20%, 100% 100%, 5% 100%, 0% 80%)",
    boxShadow: "0px 0px 8px #B026FF",
  }}
>
  Register now!
</button>
        </main>
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