"use client";
import React from 'react';
import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 font-sans bg-cover bg-right lg:bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/assets/contact-hero-full-bg.png')" }}>
      
      {/* Background mask to hide baked-in text and ensure HTML text is legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EBE1] via-[#F3EBE1]/95 to-[#F3EBE1]/90 lg:bg-gradient-to-r lg:from-[#F3EBE1] lg:via-[#F3EBE1]/95 lg:to-transparent w-full lg:w-[65%]"></div>

      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-10 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="text-[12px] sm:text-[13px] font-bold text-gray-500 uppercase tracking-wider">
              Book a Call
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] xs:text-[36px] sm:text-[48px] lg:text-[60px] font-[800] text-[#061B35] leading-[1.12] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6">
            Start Your Brand<br />
            <span className="text-[#FF5425]">With Banega Brand</span>
          </h1>

          {/* Description */}
          <p className="text-[#3b4754] text-[15px] sm:text-[17px] lg:text-[18px] font-medium leading-relaxed max-w-[480px] mb-8 sm:mb-10">
            Book a free first call with Banega Brand. Tell us about your product idea and we&apos;ll help you figure out the next step.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center gap-4 bg-[#0B1B36] text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] hover:bg-[#122a52] hover:-translate-y-1 transition-all shadow-xl shadow-blue-900/10 w-full sm:w-max cursor-pointer"
          >
            <span>Book a free call</span>
            <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>

        {/* Right side is intentionally empty so the background image shows through on desktop */}
        <div className="hidden lg:block w-[50%] h-[400px]"></div>

      </div>
    </section>
  );
}
