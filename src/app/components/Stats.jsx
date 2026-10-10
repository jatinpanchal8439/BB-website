"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="bg-[#FCFBF8] py-10 sm:py-16 md:py-20 lg:py-24 w-full border-b border-gray-200/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col items-center">
        
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-6 sm:gap-8 md:gap-0">
          
          {/* Stat 1 */}
          <div className="flex-1 w-full flex flex-col items-center text-center px-2 sm:px-4">
            <h2 className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] leading-none font-black text-[#FF4D00] tracking-tight mb-2 flex items-center justify-center">
              <CountUp end={200} duration={2.5} enableScrollSpy scrollSpyOnce />+
            </h2>
            <p className="text-[#1E1E1E] text-sm sm:text-base md:text-lg font-medium leading-snug">
              Brands Launched
            </p>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block w-[1px] h-24 bg-gray-200 mt-4"></div>
          <div className="block md:hidden w-12 h-[1px] bg-gray-200/80 my-1"></div>

          {/* Stat 2 */}
          <div className="flex-1 w-full flex flex-col items-center text-center px-2 sm:px-4">
            <h2 className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] leading-none font-black text-[#1D4ED8] tracking-tight mb-2 flex items-center justify-center">
              <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce />+
            </h2>
            <p className="text-[#1E1E1E] text-sm sm:text-base md:text-lg font-medium leading-snug">
              Manufacturing Partners
            </p>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block w-[1px] h-24 bg-gray-200 mt-4"></div>
          <div className="block md:hidden w-12 h-[1px] bg-gray-200/80 my-1"></div>

          {/* Stat 3 */}
          <div className="flex-1 w-full flex flex-col items-center text-center px-2 sm:px-4">
            <h2 className="text-3xl sm:text-4xl md:text-[3.75rem] lg:text-[4.5rem] leading-none font-black text-[#FF4D00] tracking-tight mb-2 flex items-center justify-center whitespace-nowrap">
              <CountUp end={45} duration={2.5} enableScrollSpy scrollSpyOnce />–<CountUp end={90} duration={2.5} enableScrollSpy scrollSpyOnce />
            </h2>
            <p className="text-[#1E1E1E] text-sm sm:text-base md:text-lg font-medium max-w-[200px] sm:max-w-none mx-auto leading-snug">
              Days Typical Launch Timeline
            </p>
          </div>
          
        </div>

        {/* Centered CTA below all stats */}
        <div className="mt-8 sm:mt-12 w-full flex justify-center">
          <Link 
            href="#our-work" 
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#1D4ED8] hover:bg-[#1e40af] text-white px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow active:scale-95 whitespace-nowrap"
          >
            <span>See Your Brand</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
