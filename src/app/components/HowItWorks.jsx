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
    // Safe animation: immediateRender: false prevents elements from being hidden as blank space
    gsap.from(".how-title", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
        once: true,
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      immediateRender: false,
      clearProps: "all",
    });

    gsap.from(".how-step-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
        once: true,
      },
      y: 25,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      immediateRender: false,
      clearProps: "all",
    });
  }, { scope: container });

  const steps = [
    {
      number: "01",
      title: "Idea",
      description: "Understand your vision and find the right opportunity.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4D00]">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
      colorType: "orange",
      accentColor: "#FF4D00",
      iconBg: "bg-[#FFEFE7]",
      arrowColor: "text-[#FF4D00]"
    },
    {
      number: "02",
      title: "Product",
      description: "Define the right category, product direction and formulation.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A72FF]">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      colorType: "blue",
      accentColor: "#4A72FF",
      iconBg: "bg-[#EEF4FF]",
      arrowColor: "text-[#4A72FF]"
    },
    {
      number: "03",
      title: "Brand",
      description: "Create a brand identity with naming, packaging and positioning.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4D00]">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <circle cx="7" cy="7" r="2" />
        </svg>
      ),
      colorType: "orange",
      accentColor: "#FF4D00",
      iconBg: "bg-[#FFEFE7]",
      arrowColor: "text-[#FF4D00]"
    },
    {
      number: "04",
      title: "Get Ready",
      description: "Handle registrations, licenses and all required documentation.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A72FF]">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 3v5h5" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
      colorType: "blue",
      accentColor: "#4A72FF",
      iconBg: "bg-[#EEF4FF]",
      arrowColor: "text-[#4A72FF]"
    },
    {
      number: "05",
      title: "Launch",
      description: "Get your brand ready for marketplaces, D2C and other sales channels.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4D00]">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      colorType: "orange",
      accentColor: "#FF4D00",
      iconBg: "bg-[#FFEFE7]",
      arrowColor: "text-[#FF4D00]"
    },
    {
      number: "06",
      title: "Grow",
      description: "Support your next phase with market insights and growth strategies.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A72FF]">
          <rect x="4" y="14" width="4" height="6" rx="1" />
          <rect x="10" y="10" width="4" height="10" rx="1" />
          <rect x="16" y="5" width="4" height="15" rx="1" />
        </svg>
      ),
      colorType: "blue",
      accentColor: "#4A72FF",
      iconBg: "bg-[#EEF4FF]",
      arrowColor: "text-[#4A72FF]"
    },
  ];

  return (
    <section id="how-it-works" ref={container} className="relative bg-[#FCFBF8] py-14 sm:py-18 md:py-22 lg:py-24 overflow-hidden border-t border-gray-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 how-title">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">How It Works</span>
            <div className="h-[1px] w-10 sm:w-12 bg-gray-300"></div>
          </div>
          
          <h2 className="text-[28px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.12] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6">
            Here&apos;s What the<br />
            Journey <span className="text-[#FF4D00]">Looks Like</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl mb-4 sm:mb-6">
            From idea to market, we handle the key steps so you can focus on building a successful brand.
          </p>
        </div>

        {/* MOBILE VIEW: 2-Column Grid with Connecting Line & Dot (Exact structure from user screenshot) */}
        <div className="grid lg:hidden grid-cols-2 gap-3 min-[380px]:gap-3.5 sm:gap-5 relative z-10">
          {steps.map((step, index) => {
            const isLeftColumn = index % 2 === 0;

            return (
              <Link
                href="/our-process"
                key={step.number}
                className="how-step-card bg-white rounded-2xl p-3.5 min-[380px]:p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col justify-between min-h-[175px] sm:min-h-[210px] relative active:opacity-80 transition-opacity"
              >
                {/* Top Row: Icon and Number */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center ${step.iconBg}`}>
                    {step.icon}
                  </div>
                  <span className="text-[#FF4D00] font-bold text-sm sm:text-lg">{step.number}</span>
                </div>

                {/* Title & Arrow Button */}
                <div className="mb-2 sm:mb-3">
                  <div className="flex justify-between items-center relative">
                    <h3 className="text-[14px] sm:text-lg font-bold text-[#18181B] leading-tight">{step.title}</h3>
                    
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 relative z-10">
                      <ArrowRight size={12} className={`sm:w-3.5 sm:h-3.5 ${step.arrowColor}`} />
                    </div>

                    {/* Connecting line on mobile from left card to right card with dot - spans gap cleanly outside card */}
                    {isLeftColumn && (
                      <div className="lg:hidden absolute top-1/2 -translate-y-1/2 left-[calc(100%+14px)] min-[380px]:left-[calc(100%+16px)] sm:left-[calc(100%+20px)] w-[12px] min-[380px]:w-[14px] sm:w-[20px] h-[1.5px] bg-[#FF4D00] pointer-events-none">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF4D00]"></div>
                      </div>
                    )}
                  </div>

                  {/* Accent Underline */}
                  <div
                    className="w-5 sm:w-7 h-[2.5px] mt-1.5 sm:mt-2 rounded-full"
                    style={{ backgroundColor: step.accentColor }}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[11px] sm:text-[13px] font-normal leading-relaxed">
                  {step.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Mobile Centered CTA Button */}
        <div className="flex lg:hidden justify-center mt-8 w-full relative z-10">
          <Link
            href="/our-process"
            className="inline-flex items-center gap-2 bg-white border border-[#4A72FF] text-[#4A72FF] hover:bg-[#4A72FF] hover:text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>See How It Works</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* DESKTOP VIEW: Single-Row 6-Column Connected Timeline (Matching Figma design) */}
        <div className="hidden lg:block relative mt-12 mb-4">
          <div className="w-full relative">

            {/* Connecting Line with Dots (spans across all 6 columns) */}
            <div className="absolute top-10 -left-6 -right-6 h-[1px] -z-10 pointer-events-none">
              <svg 
                className="absolute top-1/2 -translate-y-[20px] left-0 w-full h-[180px] overflow-visible pointer-events-none" 
                viewBox="0 0 1400 180" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M 50 170 Q 0 170 0 95 Q 0 20 50 20 L 1350 20 Q 1400 20 1400 95 Q 1400 170 1350 170" 
                  stroke="#FF4D00" 
                  strokeWidth="1.3" 
                  strokeOpacity="0.45" 
                  fill="none" 
                />
              </svg>
              
              {/* Alternating dots on the line between items */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[16.66%] w-2 h-2 -ml-1 rounded-full bg-[#FF4D00]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[33.33%] w-2 h-2 -ml-1 rounded-full bg-[#4A72FF]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-2 h-2 -ml-1 rounded-full bg-[#FF4D00]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[66.66%] w-2 h-2 -ml-1 rounded-full bg-[#4A72FF]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[83.33%] w-2 h-2 -ml-1 rounded-full bg-[#FF4D00]"></div>
            </div>

            {/* 6 Steps Grid on Desktop */}
            <div className="grid grid-cols-6 gap-4 xl:gap-6 relative z-10 w-full">
              {steps.map((step, index) => {
                const isOrange = step.colorType === 'orange';
                const bgClass = isOrange ? 'bg-[#FFF2E8]' : 'bg-[#EEF2FF]';
                const textClass = isOrange ? 'text-[#FF4D00]' : 'text-[#4A72FF]';

                return (
                  <div key={index} className="flex flex-col items-start group relative how-step pr-2">
                    {/* Icon & Number Badge */}
                    <div className="relative mb-5 sm:mb-6">
                      <div className={`w-20 h-20 rounded-full ${bgClass} flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[0_0_0_6px_#FCFBF8]`}>
                        {step.icon}
                      </div>
                      <div className={`absolute -top-1 -right-4 w-7 h-7 rounded-full flex items-center justify-center ${bgClass} text-xs font-black ${textClass} border-[3px] border-[#FCFBF8]`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-left h-full flex flex-col w-full">
                      <h3 className="text-base sm:text-lg font-bold text-[#1E1E1E] mb-1.5 sm:mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-xs font-medium leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {index === 0 && (
                        <div className="mt-auto pt-2">
                          <Link
                            href="/our-process"
                            className="inline-flex items-center gap-2 bg-white border border-[#4A72FF] text-[#4A72FF] hover:bg-[#4A72FF] hover:text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors duration-300 shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
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

          </div>
        </div>

      </div>
    </section>
  );
}
