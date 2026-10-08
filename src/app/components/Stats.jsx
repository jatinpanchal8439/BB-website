"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="bg-[#FCFBF8] py-24 w-full border-b border-gray-200/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-0">
          
          {/* Stat 1 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-[4.5rem] leading-none font-bold text-[#FF4D00] tracking-tight mb-2 flex items-center justify-center">
              <CountUp end={200} duration={2.5} enableScrollSpy scrollSpyOnce />+
            </h2>
            <p className="text-[#1E1E1E] text-lg font-medium">
              Brands Launched
            </p>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:block w-[1px] h-24 bg-gray-200 mt-4"></div>

          {/* Stat 2 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-[4.5rem] leading-none font-bold text-[#1D4ED8] tracking-tight mb-2 flex items-center justify-center">
              <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce />+
            </h2>
            <p className="text-[#1E1E1E] text-lg font-medium">
              Manufacturing Partners
            </p>
            <div className="mt-8">
              <Link 
                href="#brands" 
                className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 shadow-sm hover:shadow"
              >
                See Your Brand
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block w-[1px] h-24 bg-gray-200 mt-4"></div>

          {/* Stat 3 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-[4.5rem] leading-none font-bold text-[#FF4D00] tracking-tight mb-2 flex items-center justify-center">
              <CountUp end={45} duration={2.5} enableScrollSpy scrollSpyOnce />–<CountUp end={90} duration={2.5} enableScrollSpy scrollSpyOnce />
            </h2>
            <p className="text-[#1E1E1E] text-lg font-medium">
              Days Typical Launch Timeline
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}
