"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";

function TopSection() {
  const words = ["BRANDS", "PRODUCTS", "REVENUE", "EMPIRES", "EXPERIENCES"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-transparent flex flex-col items-center pt-2 z-10 overflow-hidden">
      {/* Small orange top text */}
      <div className="text-[#F35D18] text-[11px] font-bold tracking-[0.15em] uppercase mb-6 z-10 mt-2 md:mt-2">
        Ideas into brands people love
      </div>

      {/* Title & Stats Wrapper */}
      <div className="relative w-full flex justify-center items-center ">
        
        {/* Left Side stat */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-4 xl:left-[4%] items-center z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <span className="text-[32px] xl:text-[40px] font-black text-[#0f0f0f] leading-none">200+</span>
              <span className="w-2 h-2 rounded-full bg-[#F35D18] shrink-0"></span>
              <span className="w-6 xl:w-8 h-[1px] bg-[#d1d1d1] shrink-0"></span>
            </div>
            <div className="text-[9px] xl:text-[10px] text-[#555] font-bold leading-snug mt-1 w-20 uppercase tracking-wider">
              BRANDS<br/>LAUNCHED
            </div>
          </div>
          <div className="w-[1px] h-[45px] xl:h-[52px] bg-[#d1d1d1] ml-4 xl:ml-8"></div>
        </div>

        {/* Main Title Area */}
        <div className="relative flex flex-col items-center w-full max-w-[650px] xl:max-w-[850px]">
          {/* SVG for Orbit */}
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[130%] pointer-events-none z-0">
            <svg viewBox="0 0 1000 300" className="w-full h-full text-[#F35D18] overflow-visible">
              <g transform="rotate(-3 500 150)">
                {/* Orbit Path */}
                <path 
                  id="orbitPath" 
                  d="M 940,150 a 440,105 0 0,1 -880,0 a 440,105 0 0,1 880,0" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                />
                
                {/* Right Big Dot */}
                <circle r="12" fill="currentColor">
                  <animateMotion dur="12s" repeatCount="indefinite">
                    <mpath href="#orbitPath" />
                  </animateMotion>
                </circle>
                
                {/* Left Small Dot */}
                <circle r="4" fill="currentColor">
                  <animateMotion dur="12s" repeatCount="indefinite" begin="-6s">
                    <mpath href="#orbitPath" />
                  </animateMotion>
                </circle>
              </g>
            </svg>
          </div>

          <h1 className="font-black text-[#0f0f0f] tracking-tighter z-10 text-center uppercase flex flex-col items-center gap-1 leading-none">
            <span className="text-[65px] lg:text-[75px] xl:text-[110px]">IDEAS INTO</span>
            
            {/* Animated Rotating Words */}
            <div className="relative inline-flex flex-col items-center justify-center overflow-hidden">
              {/* Invisible widest word to maintain layout width */}
              <span className="text-[#F35D18] text-[75px] lg:text-[85px] xl:text-[125px] opacity-0 pointer-events-none select-none">
                EXPERIENCES
              </span>
              
              {words.map((word, i) => (
                <span
                  key={word}
                  className={`absolute text-[#F35D18] text-[75px] lg:text-[85px] xl:text-[125px] transition-all duration-700 ease-in-out ${
                    i === index 
                      ? "opacity-100 translate-y-0" 
                      : i === (index - 1 + words.length) % words.length
                        ? "opacity-0 -translate-y-[120%]" 
                        : "opacity-0 translate-y-[120%]"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>
        </div>

        {/* Right Side stat */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-4 xl:right-[4%] items-center flex-row-reverse z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <span className="text-[32px] xl:text-[40px] font-black text-[#0f0f0f] leading-none">45–90</span>
              <span className="w-2 h-2 rounded-full bg-[#F35D18] shrink-0"></span>
              <span className="w-6 xl:w-8 h-[1px] bg-[#d1d1d1] shrink-0"></span>
            </div>
            <div className="text-[9px] xl:text-[10px] text-[#555] font-bold leading-snug mt-1 w-28 uppercase tracking-wider">
              DAYS TYPICAL<br/>LAUNCH TIMELINE
            </div>
          </div>
          <div className="w-[1px] h-[45px] xl:h-[52px] bg-[#d1d1d1] mr-4 xl:mr-8"></div>
        </div>

      </div>

      {/* Subtitle */}
      <p className="text-[17px] md:text-[18px] text-[#444] font-medium text-center max-w-[600px] mb-8 mt-6 z-10 leading-snug px-6">
        We help first-time founders with the product, manufacturing, branding, compliance and the launch.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10 pb-4">
        <button 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#F35D18] hover:bg-[#d94f12] text-white px-7 py-3 rounded-md font-bold flex items-center gap-2 transition-colors text-[14px]"
        >
          Talk to Us About Your Idea
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19L19 5M19 5v10M19 5H9"/></svg>
        </button>
        <Link href="/work" className="bg-transparent border border-[#F35D18] text-[#F35D18] hover:bg-[#F35D18]/5 px-7 py-3 rounded-md font-bold flex items-center gap-2 transition-colors text-[14px]">
          See Our Work
          <div className="w-5 h-5 rounded-full bg-[#F35D18] text-white flex items-center justify-center ml-1">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
          </div>
        </Link>
      </div>
    </section>
  )
}

function BottomCard({ image, number, title }) {
  return (
    <div className="bg-[#F8F6F2] rounded-xl flex flex-col aspect-square shadow-sm overflow-hidden">
      <div className="relative w-full flex-1 bg-[#e8e8e8]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 flex justify-between items-end shrink-0">
        <div>
          <div className="text-[10px] font-extrabold text-[#333] mb-1 leading-none">{number}</div>
          <div className="font-extrabold text-[12px] xl:text-[13px] leading-[1.2] text-[#111] whitespace-pre-line tracking-tight">
            {title}
          </div>
        </div>
        <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center shrink-0 text-[#111]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  )
}

function BottomSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-transparent z-0 -mt-16 lg:-mt-24 pointer-events-none">
      {/* Background Image */}
      <Image 
        src="/bg.png" 
        alt="Background" 
        fill 
        className="object-cover object-bottom" 
        priority 
      />
      
      {/* Overlay Content Container */}
      <div className="absolute inset-0 max-w-[1300px] mx-auto w-full pointer-events-none hidden md:block">
        
        {/* Floating Text Left */}
        <div className="absolute top-[34%] left-[36%] z-10">
          <p className="text-[#1f1f1f] font-semibold tracking-widest text-[13px] leading-relaxed uppercase">
            Your<br/>Idea<br/>Here
          </p>
          <div className="w-6 h-[1px] bg-[#1f1f1f] mt-2"></div>
        </div>

        {/* Floating Text Right */}
        <div className="absolute top-[34%] right-[31%] z-10">
          <p className="text-[#1f1f1f] font-semibold tracking-widest text-[13px] leading-relaxed uppercase">
            A Real<br/>Brand<br/>Tomorrow
          </p>
          <div className="w-6 h-[1px] bg-[#1f1f1f] mt-2"></div>
        </div>

        {/* Cards Row */}
        <div className="absolute bottom-18 w-full px-6 flex justify-between items-end pointer-events-auto">
          
          {/* Left Cards */}
          <div className="flex gap-6 w-[38%]">
            <div className="flex-1">
              <BottomCard image="/new-card-1.png" number="01" title={"PRODUCT\nDEVELOPMENT"} />
            </div>
            <div className="flex-1">
              <BottomCard image="/card-2.png" number="02" title={"BRAND\nBUILDING"} />
            </div>
          </div>
          
          {/* Right Cards */}
          <div className="flex gap-6 w-[38%]">
            <div className="flex-1">
              <BottomCard image="/card-3.png" number="03" title={"COMPLIANCE\n& MANUFACTURING"} />
            </div>
            <div className="flex-1">
              <BottomCard image="/card-4.png" number="04" title={"LAUNCH\n& GROW"} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function HomeClient() {
  return (
    <div className="bg-[#FCFAF6] font-sans selection:bg-[#F35D18] selection:text-white  ">
      <TopSection />
      <BottomSection />
    </div>
  );
}
