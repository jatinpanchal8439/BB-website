import React from 'react';
import Link from 'next/link';

export default function ResourcesCTA() {
  return (
    <section className="w-full bg-[#FCF8F5] py-20 lg:py-28 font-sans flex flex-col items-center">
      
      <div className="flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-[44px] sm:text-[56px] lg:text-[68px] font-[800] leading-[1.05] tracking-tight text-[#061B35] mb-4 text-center relative">
          Have a<br />
          <span className="text-[#FF5425] relative inline-block">
            Similar Question?
            {/* Sparkle lines SVG */}
            <svg className="absolute -right-10 -top-2 w-10 h-10 text-[#FF5425]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v6" />
              <path d="M21 7l-4.5 4.5" />
              <path d="M23 15h-6" />
            </svg>
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-[15px] sm:text-[17px] text-gray-500 font-medium leading-relaxed mb-10 text-center">
          We help you decide where to start.
        </p>

        {/* Talk to Us Button */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-blue-900/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80%] h-full bg-blue-900/20 blur-xl rounded-full"></div>
          
          <Link href="/contact" className="relative flex items-center justify-center gap-2 bg-[#123A7D] hover:bg-[#0C2A5C] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/20">
            Talk to Us
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
