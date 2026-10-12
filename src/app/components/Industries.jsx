"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Perfume &\nFragrance",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5A19]">
          <path d="M7 10h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" />
          <path d="M10 10V6" />
          <path d="M8 6h4" />
          <circle cx="3" cy="5" r="0.8" fill="currentColor" />
          <circle cx="5" cy="3" r="0.8" fill="currentColor" />
          <circle cx="6" cy="6" r="0.8" fill="currentColor" />
        </svg>
      ),
      iconBg: "bg-[#FFF0E6]",
      arrowColor: "text-[#FF5A19]",
      image: "/industry1.png",
      backdropColor: "bg-[#FFE7DB]"
    },
    {
      title: "Beauty &\nSkincare",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A72FF]">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      iconBg: "bg-[#EEF2FF]",
      arrowColor: "text-[#4A72FF]",
      image: "/industry2.png",
      backdropColor: "bg-[#DEEDFF]"
    },
    {
      title: "Ayurveda &\nWellness",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#16A34A]">
          <path d="M7 20h10" />
          <path d="M10 20c5.5-2.5.8-6.4 3-10" />
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4.1 5.5.8z" />
          <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.4 1.7-4.6-2.7.2-4.2 1.1-4.9 2z" />
        </svg>
      ),
      iconBg: "bg-[#E8F8EE]",
      arrowColor: "text-[#16A34A]",
      image: "/industry4.png", // Mortar, pestle & herbs
      backdropColor: "bg-[#E0F3E4]"
    },
    {
      title: "Nutraceuticals",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5A19]">
          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
          <path d="m8.5 8.5 7 7" />
        </svg>
      ),
      iconBg: "bg-[#FFF0E6]",
      arrowColor: "text-[#FF5A19]",
      image: "/industry3.png", // Amber bottle & capsules
      backdropColor: "bg-[#E4F3DE]"
    }
  ];

  return (
    <section className="relative bg-[#FCFBF8] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-gray-100 font-sans">
      
      {/* Background Corner Peach Waves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-[380px] h-[240px] pointer-events-none">
          <svg viewBox="0 0 380 240" fill="none" className="w-full h-full">
            <path d="M 0,80 C 100,80 180,130 260,240 L 0,240 Z" fill="#FFEEDB" opacity="0.7" />
          </svg>
        </div>

        <div className="absolute -bottom-10 -right-10 w-[360px] h-[220px] pointer-events-none">
          <svg viewBox="0 0 360 220" fill="none" className="w-full h-full">
            <path d="M 140,220 C 200,160 270,130 360,120 L 360,220 Z" fill="#FFF0E3" opacity="0.7" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10 flex flex-col xl:flex-row items-center xl:items-start gap-10">
        
        {/* Left Content Area */}
        <div className="w-full xl:w-[28%] flex flex-col items-start pt-2">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] text-xs sm:text-sm font-[family-name:var(--font-poppins)]">Industries</span>
            <div className="h-[1.5px] w-10 bg-[#FF5A19]/35"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E1E1E] leading-[1.08] tracking-tight mb-4 sm:mb-6">
            Build a Brand<br />
            in <span className="text-[#FF5A19]">Your Industry</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed mb-6 sm:mb-8 max-w-sm">
            We help entrepreneurs and businesses launch successful brands across high-growth categories.
          </p>

          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#FF5A19] hover:bg-[#E64500] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md shadow-[#FF5A19]/25 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer active:scale-95"
          >
            Talk to Our Experts
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right Cards Area: 2x2 grid on mobile/tablet, 4 columns on desktop */}
        <div className="w-full xl:w-[72%]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 min-[380px]:gap-3.5 sm:gap-5 pb-4">
            {industries.map((industry, index) => (
              <Link 
                href="/industries"
                key={index}
                className="w-full h-[320px] min-[380px]:h-[335px] sm:h-[400px] lg:h-[420px] bg-white rounded-[24px] min-[380px]:rounded-[26px] sm:rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group flex flex-col border border-[#F2ECE4]"
              >
                {/* Top Text Section */}
                <div className="p-3.5 min-[380px]:p-4 sm:p-5 relative z-20 flex-shrink-0">
                  <div className={`w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 rounded-full ${industry.iconBg} flex items-center justify-center mb-2.5 sm:mb-3`}>
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-[13px] min-[380px]:text-[14px] sm:text-base font-bold text-[#1E1E1E] leading-snug tracking-tight whitespace-pre-line mb-1.5 sm:mb-2">
                    {industry.title}
                  </h3>
                  
                  <ArrowRight size={16} className={`${industry.arrowColor} transition-transform group-hover:translate-x-1.5 w-4 h-4`} />
                </div>
                
                {/* Bottom Image Section with Arched Dome Backdrop */}
                <div className="absolute inset-x-0 bottom-0 top-[105px] min-[380px]:top-[115px] sm:top-[140px] z-10 overflow-hidden rounded-b-[24px] min-[380px]:rounded-b-[26px] sm:rounded-b-3xl pointer-events-none">
                  {/* Colored Arched Dome Backdrop */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[86%] h-[92%] rounded-t-full ${industry.backdropColor} transition-transform duration-500 group-hover:scale-105 pointer-events-none`}></div>
                  
                  {/* Product Transparent Image */}
                  <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                    <Image 
                      src={industry.image} 
                      alt={industry.title.replace('\n', ' ')}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-contain object-bottom scale-[1.04] transition-transform duration-500 group-hover:scale-[1.1] relative z-10 origin-bottom"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
