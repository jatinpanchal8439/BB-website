"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HowItWorks() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".how-title", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".how-step", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, { scope: container });
  const steps = [
    {
      number: "01",
      title: "Idea",
      description: "Understand your vision and find the right opportunity.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4D00]">
          <path d="M3 14c0-5 4-9 9-9s9 4 9 9" />
          <path d="M12 14V5" />
          <path d="M12 14L6 7" />
          <path d="M12 14l6-7" />
          <path d="M6 18h12" />
        </svg>
      ),
      colorType: "orange",
    },
    {
      number: "02",
      title: "Product",
      description: "Define the right category, product direction and formulation.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A72FF]">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      colorType: "blue",
    },
    {
      number: "03",
      title: "Brand",
      description: "Create a brand identity with naming, packaging and positioning.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4D00]">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <circle cx="7" cy="7" r="2" />
        </svg>
      ),
      colorType: "orange",
    },
    {
      number: "04",
      title: "Get Ready",
      description: "Handle registrations, licenses and all required documentation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A72FF]">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 3v5h5" />
          <circle cx="15.5" cy="16.5" r="4.5" fill="white" />
          <path d="M13.5 16.5l1.5 1.5 3-3" />
          <path d="M8 13h2" />
          <path d="M8 17h2" />
          <path d="M8 9h2" />
        </svg>
      ),
      colorType: "blue",
    },
    {
      number: "05",
      title: "Launch",
      description: "Get your brand ready for marketplaces, D2C and other sales channels.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4D00]">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      colorType: "orange",
    },
    {
      number: "06",
      title: "Grow",
      description: "Support your next phase with market insights and growth strategies.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A72FF]">
          <rect x="4" y="15" width="4" height="5" rx="1" />
          <rect x="10" y="11" width="4" height="9" rx="1" />
          <rect x="16" y="6" width="4" height="14" rx="1" />
        </svg>
      ),
      colorType: "blue",
    },
  ];

  return (
    <section id="how-it-works" ref={container} className="relative bg-[#FCFBF8] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 sm:mb-16 md:mb-20 how-title">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">How It Works</span>
            <div className="h-[1px] w-10 sm:w-12 bg-gray-300"></div>
          </div>
          
          <h2 className="text-[28px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.12] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6">
            Here&apos;s What the<br />
            Journey <span className="text-[#FF4D00]">Looks Like</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl mb-6 sm:mb-10">
            From idea to market, we handle the key steps so you can focus on building a successful brand.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative mt-8 sm:mt-14 mb-6">
          
          <div className="relative w-full">
            <div className="relative w-full">

              {/* Connecting Line with Dots (Desktop Only) */}
              <div className="hidden xl:block absolute top-10 -left-4 w-[calc(100%+2rem)] h-[1px] -z-10 pointer-events-none">
                {/* The swooping curved SVG line */}
                <svg className="absolute top-1/2 -translate-y-[20px] left-0 w-full h-[180px] overflow-visible pointer-events-none" viewBox="0 0 1400 180" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M 50 170 Q 0 170 0 95 Q 0 20 50 20 L 1350 20 Q 1400 20 1400 95 Q 1400 170 1350 170" 
                    stroke="#FF4D00" 
                    strokeWidth="1.2" 
                    strokeOpacity="0.5" 
                    fill="none" 
                  />
                </svg>
                
                {/* Small dots on the line between items */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[16.5%] w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[32.6%] w-1.5 h-1.5 rounded-full bg-[#4A72FF]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[49%] w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[65.4%] w-1.5 h-1.5 rounded-full bg-[#4A72FF]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[81.7%] w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-y-12 sm:gap-y-16 gap-x-4 sm:gap-x-6 relative z-10 w-full max-w-[220px] sm:max-w-none mx-auto sm:mx-0">
                {steps.map((step, index) => {
                  const isOrange = step.colorType === 'orange';
                  const bgClass = isOrange ? 'bg-[#FFF2E8]' : 'bg-[#EEF2FF]';
                  const textClass = isOrange ? 'text-[#FF4D00]' : 'text-[#4A72FF]';

                  return (
                    <div key={index} className="flex flex-col items-center sm:items-start group relative how-step sm:pr-2">
                      {/* Icon & Number */}
                      <div className="relative mb-4 sm:mb-6">
                        <div className={`w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full ${bgClass} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_0_6px_#FCFBF8]`}>
                          {step.icon}
                        </div>
                        {/* Number Badge */}
                        <div className={`absolute -top-1 -right-3 sm:-right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center ${bgClass} text-xs font-black ${textClass} border-[3px] border-[#FCFBF8]`}>
                          {step.number}
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="text-left h-full flex flex-col w-full">
                        <h3 className="text-base sm:text-lg font-bold text-[#1E1E1E] mb-1.5 sm:mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-[13px] sm:text-xs font-medium leading-relaxed sm:pr-2 mb-0 sm:mb-4">
                          {step.description}
                        </p>
                        
                        {/* Mobile Vertical Timeline Line */}
                        {index < steps.length - 1 && (
                          <div className="flex sm:hidden flex-col items-center absolute left-1/2 -translate-x-1/2 top-[100%] h-12 w-[1.5px] z-0">
                            <div className={`w-[1.5px] h-1/2 ${isOrange ? 'bg-[#FF4D00]/40' : 'bg-[#4A72FF]/40'}`}></div>
                            <div className={`w-[7px] h-[7px] rounded-full shrink-0 ${isOrange ? 'bg-[#FF4D00]' : 'bg-[#4A72FF]'}`}></div>
                            <div className={`w-[1.5px] h-1/2 ${isOrange ? 'bg-[#FF4D00]/40' : 'bg-[#4A72FF]/40'}`}></div>
                          </div>
                        )}
                        
                        {index === 0 && (
                          <div className="hidden xl:block mt-auto pt-3">
                            <Link
                              href="/our-process"
                              className="inline-flex items-center gap-2 sm:gap-3 bg-white border border-[#4A72FF] text-[#4A72FF] hover:bg-[#4A72FF] hover:text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-semibold transition-colors duration-300 shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
                            >
                              <span>See How It Works</span>
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile/Tablet Centered CTA */}
              <div className="flex xl:hidden justify-center mt-10 w-full relative z-10">
                <Link
                  href="/our-process"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-white border border-[#4A72FF] text-[#4A72FF] hover:bg-[#4A72FF] hover:text-white px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
                >
                  <span>See How It Works</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
