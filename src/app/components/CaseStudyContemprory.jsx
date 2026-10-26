"use client";
import React from "react";
import Image from "next/image";
import { ArrowDownRight, Calendar, Sparkles, Star } from "lucide-react";

export default function CaseStudyContemprory() {
  return (
    <section className="relative w-full font-sans bg-[#FCFBF8] pt-0">
      
      {/* Full Width Background Area */}
      <div className="relative w-full overflow-hidden bg-[#fffaf5]">
        
        {/* Background Banner Image for Desktop: Frame_102.webp */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image 
            src="/Frame_102.webp" 
            alt="CONTEMPRORY Clinical Skincare Hero Banner" 
            fill 
            className="object-cover object-right" 
            priority
          />
          {/* Left subtle gradient for 100% crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF8] via-[#FFFBF8]/95 to-transparent w-[60%] lg:w-[52%]"></div>
          {/* Bottom subtle blend into floating stats bar */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FFFBF8] to-transparent"></div>
        </div>

        {/* Content Wrapper constrained to max-width */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-28 sm:pb-32 md:pb-40 lg:pb-44 min-h-[550px] md:min-h-[650px] lg:min-h-[720px]">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <span className="w-10 sm:w-12 md:w-16 h-[2px] bg-[#f55926]"></span>
              <span className="text-[#FF4D00] font-[family-name:var(--font-poppins)] font-extrabold tracking-widest text-xs sm:text-sm md:text-base uppercase">Case Study</span>
              <span className="bg-[#FFF0E6] text-[#FF4D00] text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider">Clinical Skincare</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-[800] text-[#111928] leading-[1.05] mb-4 sm:mb-6 md:mb-8 tracking-tight">
              From Idea <br /> to Grand Launch in <br />
              <span className="text-[#f55926]">60 Days.</span>
            </h1>
            
            <p className="text-[#4b5563] text-sm sm:text-lg md:text-xl lg:text-[22px] mb-6 sm:mb-8 md:mb-10 max-w-xl leading-relaxed font-medium">
              How Banega Brand partnered with Paroha Life Sciences to build CONTEMPRORY — a next-generation clinical skincare brand with premium formulations, dermatological care, and an unforgettable creator grand launch.
            </p>

            {/* Mobile Visual Card - Frame_102.webp showcase */}
            <div className="md:hidden w-[calc(100%+2rem)] -mx-4 sm:w-full sm:mx-0 overflow-hidden relative rounded-2xl shadow-md border border-orange-100/80 bg-white mb-6">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/Frame_102.webp"
                  alt="CONTEMPRORY Clinical Skincare - Blue PDRN"
                  fill
                  className="object-cover object-right"
                  priority
                />
              </div>
            </div>

            {/* Working CTA Button (Scrolls to Details) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              <a 
                href="#details"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#f55926] hover:bg-[#df4a1a] transition-all duration-300 text-white rounded-full py-3 px-5 sm:py-4 sm:px-6 md:px-8 font-semibold text-sm sm:text-base md:text-xl flex items-center justify-between w-fit gap-3 sm:gap-4 md:gap-6 shadow-[0_10px_30px_rgba(245,89,38,0.3)] hover:-translate-y-1"
              >
                Read the Full Case Study 
                <span className="bg-white text-[#f55926] rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                  <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                </span>
              </a>

              {/* Founder Mini Pill */}
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-full border border-orange-100 shadow-sm">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-orange-200 shrink-0">
                  <Image 
                    src="/videos/paroha-thumb.jpg" 
                    alt="Mohan Paroha" 
                    fill 
                    className="object-cover object-center" 
                  />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#111928] leading-tight">Mohan Paroha</p>
                  <p className="text-[9.5px] sm:text-[10px] text-gray-500 font-medium uppercase tracking-wide">Founder, CONTEMPRORY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Placeholder for layout balance: lets the models & products shine */}
          <div className="w-full md:w-1/2 relative hidden md:flex justify-center md:justify-end z-20">
          </div>

        </div>
      </div>

      {/* Floating Stats Bar */}
      <div className="relative -mt-16 sm:-mt-20 md:-mt-24 mx-auto w-[92%] max-w-[1200px] bg-[#fffaf5] rounded-3xl md:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-20 flex flex-col md:flex-row items-start md:items-center justify-between divide-y md:divide-y-0 md:divide-x divide-orange-100/50 border border-orange-50">
        
        <div className="flex items-center gap-4 md:gap-5 w-full md:w-1/3 py-3 md:py-4 px-2 md:px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <Calendar className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">60 Days</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">From formulation to launch</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-5 w-full md:w-1/3 py-3 md:py-4 px-2 md:px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <Sparkles className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">Grand Brand Launch</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">50+ Creators & Celebs attended</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-5 w-full md:w-1/3 py-3 md:py-4 px-2 md:px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <Star className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">10/10 Experience</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">End-to-end execution praise</p>
          </div>
        </div>

      </div>

      {/* Spacer to give room below the floating bar */}
      <div className="h-12 sm:h-16 md:h-24"></div>

    </section>
  );
}
