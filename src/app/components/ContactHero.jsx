import React from 'react';
import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className="w-full py-24 lg:py-32 font-sans bg-cover bg-right lg:bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/assets/contact-hero-full-bg.png')" }}>
      
      {/* Background mask to hide baked-in text and ensure HTML text is legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F3EBE1] via-[#F3EBE1]/95 to-transparent w-full lg:w-[65%]"></div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="text-[12px] font-bold text-gray-500">
              Book a Call
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[44px] sm:text-[52px] lg:text-[60px] font-[800] text-[#061B35] leading-[1.1] tracking-tight mb-6">
            Start Your Brand<br />
            <span className="text-[#FF5425]">With Banega Brand</span>
          </h1>

          {/* Description */}
          <p className="text-[#3b4754] text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-[480px] mb-10">
            Book a free first call with Banega Brand. Tell us about your product idea and we'll help you figure out the next step.
          </p>

          {/* CTA Button */}
          <button className="group flex items-center justify-center gap-4 bg-[#0B1B36] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#122a52] hover:-translate-y-1 transition-all shadow-xl shadow-blue-900/10 w-max">
            <span>Book a free call</span>
            <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>

        {/* Right side is intentionally empty so the background image shows through */}
        <div className="hidden lg:block w-[50%] h-[400px]"></div>

      </div>
    </section>
  );
}
