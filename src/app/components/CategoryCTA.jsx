import React from 'react';
import Link from 'next/link';

export default function CategoryCTA() {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 lg:py-28 font-sans flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow with lines */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 sm:w-16 bg-orange-200"></div>
          <span className="sm: font-bold tracking-[0.15em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
            Not sure which category is right for your idea?
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-orange-200"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[42px] sm:text-[56px] lg:text-[64px] font-[800] leading-[1.1] tracking-tight text-[#061B35] mb-6 relative">
          Let’s talk before<br />
          <span className="text-[#FF5425] relative inline-block">
            you invest.
            {/* Sparkle lines SVG */}
            <svg className="absolute -right-8 -top-2 w-8 h-8 text-[#FF5425]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v6" />
              <path d="M21 7l-4.5 4.5" />
              <path d="M23 15h-6" />
            </svg>
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-[15px] sm:text-[17px] text-gray-500 font-medium leading-relaxed max-w-[400px] mb-10">
          Not sure which category is right for your idea?<br />
          Let's talk before you invest.
        </p>

        {/* Button with orange glow */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-[#FF5425]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[#FF5425]/40 blur-xl rounded-full"></div>
          
          <Link href="/contact" className="relative flex items-center justify-center gap-2 bg-[#123A7D] hover:bg-[#0C2A5C] text-white px-8 py-4 rounded-full font-semibold text-[14.5px] transition-all transform hover:-translate-y-0.5">
            Let's Talk About Your Category
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
