import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function TalkBeforeInvest() {
  return (
    <section className="w-full bg-[#FAF8F5] py-16 md:py-24 font-sans border-t border-gray-200/50">
      <div className="max-w-[800px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Top Label */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <div className="h-[1px] w-8 sm:w-16 bg-[#FF4D00]/30"></div>
          <span className="text-[#FF4D00] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]">
            Not sure which category is right for your idea?
          </span>
          <div className="h-[1px] w-8 sm:w-16 bg-[#FF4D00]/30"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-extrabold text-[#0B1B36] leading-[1.05] tracking-tight mb-6">
          Let's talk before <br />
          <span className="text-[#FF4D00] relative inline-block">
            you invest.
            {/* Spark Icon */}
            <svg className="absolute -top-4 -right-10 w-8 h-8 sm:w-12 sm:h-12 text-[#FF4D00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v3" />
              <path d="M18.36 5.64l-2.12 2.12" />
              <path d="M21 12h-3" />
            </svg>
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-base sm:text-lg mb-10 max-w-md mx-auto font-medium leading-relaxed">
          Not sure which category is right for your idea? Let's talk before you invest.
        </p>

        {/* Button */}
        <button className="bg-[#123E84] hover:bg-[#0B2554] transition-colors duration-300 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-[15px] shadow-lg shadow-[#123E84]/20 hover:-translate-y-0.5">
          Let's Talk About Your Category
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
}
