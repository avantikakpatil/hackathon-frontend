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

        <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-8">
  <div className="flex justify-center items-center pt-3 pb-4">
    <img 
      src="/singularityNET.png" 
      alt="SingularityNET" 
      className="object-contain w-[280px] h-[76px]"
    />
  </div>

  <div className="mb-6 pb-5">
  <div className="ml-[15px]">
    <img
      src="/HackIndia2025.png" 
      alt="HackIndia2025 Logo"
      className="hackindia-logo"
    />
    </div>
    <div className="mb-6 pb-5"></div>
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

  <button className="w-[177px] h-[59px]">
    <img 
      src="/Component 17.png" 
      alt="Register Button" 
      className="w-full h-full object-contain"
    />
  </button>
</main>

      </div>
    


      <div className="bg-gray-100 py-1 overflow-hidden relative w-full">
  <div className="flex space-x-5 animate-scroll">
    {/* Add specified images */}
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



<div className="bg-purple-1500 text-white">
      {/* Stats & Video Section */}
      <div className="container mx-auto py-16 px-4 flex flex-wrap items-center pl-0 ml-0">
        <div className="w-full md:w-1/3 pr-4 md:pr-8">
          {/* Lightning Effect */}
          <div className="mb-11 pl-0 ml-0">
          <img src="/Untitled design (96) 1.png" alt="Lightning effect" className="w-48" />
          </div>
          
          {/* Stats */}
<div 
  className="absolute flex flex-wrap gap-5"
  style={{
    width: "657px",
    height: "228px",
    top: "1144px",
    left: "95px",
    gap: "20px"
  }}
>
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
  <div 
    className="absolute w-[641px] h-[351px] top-[1019px] left-[734px] rounded-lg overflow-hidden shadow-lg"
    >
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
      
      {/* Sponsors Section */}
<div 
  className="absolute bg-gray-100 w-full flex items-center py-2 mt-5"
  style={{
    height: "90px",
    top: "1510px",
    left: "1px"
  }}
>
  <div 
    className="container mx-auto flex justify-around items-center flex-wrap"
    style={{
      width: "1282px",
      height: "100px",
      top: "-4px",
      left: "82px",
      gap: "60px"
    }}
  >
    <img src="Frame 1000006391.png" alt="Sponsor Frame" className="w-[1282px] h-[100px]" />
    
  </div>

  <div>
  <footer className="bg-purple-900 text-white py-12 border-t border-purple-800 mt-5">
  <div className="container mx-auto px-4">
    {/* Footer content will go here */}
  </div>
</footer>
</div>
  
</div>

</div>

</div>

    

  );
}

export default App;