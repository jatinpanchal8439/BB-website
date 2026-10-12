"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="bg-[#FCFBF8] py-8 sm:py-16 md:py-20 lg:py-24 w-full border-b border-gray-200/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-8 md:px-12 flex flex-col items-center">
        
        {/* 3 Stats in a single row across all screen sizes */}
        <div className="w-full flex flex-row items-start justify-center gap-1 sm:gap-4 md:gap-0">
          
          {/* Stat 1 */}
          <div className="flex-1 min-w-0 flex flex-col items-center text-center px-1 sm:px-4">
            <h2 className="text-2xl min-[360px]:text-[1.75rem] min-[400px]:text-3xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] leading-none font-black text-[#FF4D00] tracking-tight mb-1.5 sm:mb-2 flex items-center justify-center whitespace-nowrap">
              <CountUp end={200} duration={2.5} enableScrollSpy scrollSpyOnce>
                {({ countUpRef }) => <span ref={countUpRef}>200</span>}
              </CountUp>+
            </h2>
            <p className="text-[#1E1E1E] text-[11px] min-[380px]:text-xs sm:text-base md:text-lg font-medium leading-tight sm:leading-snug">
              Brands Launched
            </p>
          </div>

          {/* Vertical Divider 1 */}
          <div className="w-[1px] self-stretch min-h-[50px] sm:min-h-[80px] bg-gray-200 flex-shrink-0 my-1"></div>

          {/* Stat 2 */}
          <div className="flex-1 min-w-0 flex flex-col items-center text-center px-1 sm:px-4">
            <h2 className="text-2xl min-[360px]:text-[1.75rem] min-[400px]:text-3xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] leading-none font-black text-[#10449A] tracking-tight mb-1.5 sm:mb-2 flex items-center justify-center whitespace-nowrap">
              <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce>
                {({ countUpRef }) => <span ref={countUpRef}>100</span>}
              </CountUp>+
            </h2>
            <p className="text-[#1E1E1E] text-[11px] min-[380px]:text-xs sm:text-base md:text-lg font-medium leading-tight sm:leading-snug">
              Manufacturing Partners
            </p>
          </div>

          {/* Vertical Divider 2 */}
          <div className="w-[1px] self-stretch min-h-[50px] sm:min-h-[80px] bg-gray-200 flex-shrink-0 my-1"></div>

          {/* Stat 3 */}
          <div className="flex-1 min-w-0 flex flex-col items-center text-center px-1 sm:px-4">
            <h2 className="text-2xl min-[360px]:text-[1.75rem] min-[400px]:text-3xl sm:text-4xl md:text-[3.75rem] lg:text-[4.5rem] leading-none font-black text-[#FF4D00] tracking-tight mb-1.5 sm:mb-2 flex items-center justify-center whitespace-nowrap">
              <CountUp end={45} duration={2.5} enableScrollSpy scrollSpyOnce>
                {({ countUpRef }) => <span ref={countUpRef}>45</span>}
              </CountUp>–<CountUp end={90} duration={2.5} enableScrollSpy scrollSpyOnce>
                {({ countUpRef }) => <span ref={countUpRef}>90</span>}
              </CountUp>
            </h2>
            <p className="text-[#1E1E1E] text-[11px] min-[380px]:text-xs sm:text-base md:text-lg font-medium leading-tight sm:leading-snug">
              Days Typical Launch Timeline
            </p>
          </div>
          
        </div>

        {/* Centered CTA below stats */}
        <div className="mt-5 sm:mt-10 md:mt-12 w-full flex justify-center">
          <Link 
            href="#brands" 
            className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-[#10449A] hover:bg-[#0b3378] text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow active:scale-95 whitespace-nowrap"
          >
            <span>See the Brands</span>
            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
