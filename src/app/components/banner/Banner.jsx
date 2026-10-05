import Image from "next/image";

export default function Banner() {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none gsap-bg origin-center">
        <Image
          src="/Hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center pt-2 md:pt-4 px-6 w-full max-w-[1400px] mx-auto flex-grow mb-8 md:mb-12">

        {/* Top Tagline */}
        <p className="gsap-tagline text-[#FF4D00] font-bold text-xs tracking-[0.15em] uppercase mb-4 md:mb-6 mt-4">
          Ideas into Brands People Love
        </p>

        {/* Hero Section with Stats and Title */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full relative">

          {/* Left Stat */}
          <div className="hidden lg:flex items-center w-64 pt-8">
            <div className="flex flex-col items-start flex-grow">
              <div className="flex items-center gap-4 mb-2">
                <span className="gsap-stat-num text-5xl font-extrabold text-[#111]">200+</span>
                <div className="flex items-center gap-3">
                  <div className="gsap-dot w-1.5 h-1.5 bg-[#FF4D00] rounded-full"></div>
                  <div className="gsap-hline h-[1px] w-12 bg-gray-300"></div>
                </div>
              </div>
              <span className="gsap-stat-text text-[11px] font-bold text-gray-500 tracking-wider w-24 leading-tight">
                BRANDS LAUNCHED
              </span>
            </div>
            {/* Vertical Line */}
            <div className="gsap-vline w-[1px] h-16 bg-gray-300"></div>
          </div>

          {/* Center Heading */}
          <div className="flex-grow flex flex-col items-center relative z-10 mx-4">
            {/* SVG Orbit */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] max-w-[800px] pointer-events-none -z-10">
              <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
                <g transform="rotate(-4 400 150)">
                  <ellipse cx="400" cy="150" rx="380" ry="110" stroke="#FF4D00" strokeWidth="1.5" className="gsap-orbit-path" />
                  <circle r="10" fill="#FF4D00" className="gsap-orbit-circle">
                    <animateMotion dur="15s" repeatCount="indefinite" path="M 780 150 A 380 110 0 1 1 20 150 A 380 110 0 1 1 780 150" />
                  </circle>
                </g>
              </svg>
            </div>

            <h1 className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] font-black text-[#111] leading-[0.85] tracking-tight text-center flex flex-col items-center">
              <div className="overflow-hidden pb-1"><span className="gsap-title-word block">IDEAS INTO</span></div>
              <div className="overflow-hidden pb-1">
                <div className="gsap-title-word relative">
                  {/* Invisible placeholder to define the width based on the longest word */}
                  <span className="block text-transparent pointer-events-none select-none">EXPERIENCES</span>

                  {/* Absolute container that slides vertically */}
                  <div className="absolute top-0 left-0 w-full text-center gsap-rotating-words flex flex-col">
                    <span className="block text-[#FF4D00]">BRANDS</span>
                    <span className="block text-[#FF4D00]">PRODUCTS</span>
                    <span className="block text-[#FF4D00]">REVENUE</span>
                    <span className="block text-[#FF4D00]">EMPIRES</span>
                    <span className="block text-[#FF4D00]">EXPERIENCES</span>
                    <span className="block text-[#FF4D00]">BRANDS</span>
                  </div>
                </div>
              </div>
            </h1>
          </div>

          {/* Right Stat */}
          <div className="hidden lg:flex items-center w-64 pt-8 pl-12">
            {/* Vertical Line */}
            <div className="gsap-vline w-[1px] h-16 bg-gray-300 mr-8"></div>
            <div className="flex flex-col items-start flex-grow">
              <div className="flex items-center gap-4 mb-2">
                <span className="gsap-stat-num text-5xl font-extrabold text-[#111]">45-90</span>
                <div className="flex items-center gap-3">
                  <div className="gsap-dot w-1.5 h-1.5 bg-[#FF4D00] rounded-full"></div>
                  <div className="gsap-hline h-[1px] w-12 bg-gray-300"></div>
                </div>
              </div>
              <span className="gsap-stat-text text-[11px] font-bold text-gray-500 tracking-wider w-32 leading-tight">
                DAYS TYPICAL LAUNCH TIMELINE
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="gsap-subtitle max-w-2xl text-center text-gray-600 text-lg md:text-xl font-medium mt-4 md:mt-6 leading-relaxed">
          We help first-time founders with the product, manufacturing, branding, compliance and the launch.
        </p>

        {/* Action Buttons */}
        <div className="gsap-buttons flex flex-col sm:flex-row justify-center items-center gap-5 mt-4 md:mt-6">
          <button className="bg-[#FF4D00] hover:bg-[#E64500] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 shadow-[0_8px_20px_rgba(255,77,0,0.25)] hover:shadow-[0_10px_25px_rgba(255,77,0,0.35)] hover:-translate-y-0.5">
            Talk to Us About Your Idea
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </button>
          <button className="bg-white/50 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-300 text-gray-800 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:bg-white/80">
            See Our Work
            <div className="w-6 h-6 bg-[#FF4D00] rounded-full flex items-center justify-center text-white shadow-sm pl-0.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </>
  );
}
