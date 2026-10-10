import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TalkBeforeInvest() {
  return (
    <section id="contact" className="w-full bg-[#FAF8F5] py-12 sm:py-16 md:py-24 font-sans border-t border-gray-200/50">
      <div className="max-w-[800px] mx-auto px-5 sm:px-6 flex flex-col items-center text-center">
        
        {/* Top Label */}
        <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="h-[1px] w-6 sm:w-16 bg-[#FF4D00]/30"></div>
          <span className="text-[11px] sm:text-sm font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#FF4D00] font-[family-name:var(--font-poppins)]">
            Not sure which category is right for your idea?
          </span>
          <div className="h-[1px] w-6 sm:w-16 bg-[#FF4D00]/30"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[2.25rem] sm:text-[3.5rem] md:text-[5rem] font-extrabold text-[#0B1B36] leading-[1.08] sm:leading-[1.05] tracking-tight mb-4 sm:mb-6">
          Let&apos;s talk before <br />
          <span className="text-[#FF4D00] relative inline-block">
            you invest.
            {/* Spark Icon */}
            <svg className="absolute -top-3 -right-6 sm:-top-4 sm:-right-10 w-6 h-6 sm:w-10 sm:h-12 text-[#FF4D00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v3" />
              <path d="M18.36 5.64l-2.12 2.12" />
              <path d="M21 12h-3" />
            </svg>
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-md mx-auto font-medium leading-relaxed">
          Not sure which category is right for your idea? Let&apos;s talk before you invest.
        </p>

        {/* Button */}
        <Link 
          href="/contact" 
          className="w-full sm:w-auto bg-[#123E84] hover:bg-[#0B2554] transition-colors duration-300 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-3 text-[14px] sm:text-[15px] shadow-lg shadow-[#123E84]/20 hover:-translate-y-0.5"
        >
          <span>Let&apos;s Talk About Your Category</span>
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}
