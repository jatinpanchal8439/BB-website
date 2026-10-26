"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowDownRight, Calendar, ShoppingCart, Star, Play, X, Sparkles } from "lucide-react";

export default function CaseStudy() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  return (
    <section className="relative w-full font-sans bg-[#FCFBF8] pt-0">
      
      {/* Full Width Background Area */}
      <div className="relative w-full overflow-hidden bg-[#fff8f2]">
        
        {/* Background Image: using split.jpg for Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
           <Image 
             src="/assets/case-study-split.jpg" 
             alt="Case Study Background" 
             fill 
             className="object-cover object-center" 
             priority
           />
           {/* Subtle gradient for desktop left side just in case */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f2] via-[#fff8f2]/80 to-transparent w-1/2"></div>
        </div>

        {/* Content Wrapper constrained to max-width */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-16 pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-24 md:pb-40 lg:pb-44 min-h-[auto] md:min-h-[650px] lg:min-h-[700px]">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <span className="w-8 sm:w-12 md:w-16 h-[2px] bg-[#f55926]"></span>
              <span className="text-[#FF4D00] font-[family-name:var(--font-poppins)] font-extrabold tracking-widest text-[11px] sm:text-sm md:text-base uppercase">Case Study</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-[800] text-[#111928] leading-[1.08] mb-4 sm:mb-6 md:mb-8 tracking-tight">
              From Idea <br /> to Market in <br />
              <span className="text-[#f55926]">60 Days.</span>
            </h2>
            
            <p className="text-[#4b5563] text-sm sm:text-lg md:text-xl lg:text-[22px] mb-6 sm:mb-10 md:mb-12 max-w-xl leading-relaxed font-normal sm:font-medium">
              How Banega Brand helped launch Blush En Bloom — a premium fragrance brand loved by customers.
            </p>

            {/* Mobile Visual Card - Full width edge-to-edge matching user screenshot */}
            <div className="md:hidden w-[calc(100%+2rem)] -mx-4 sm:w-full sm:mx-0 overflow-hidden relative shadow-md border-y border-[#fed7aa]/60 bg-gradient-to-b from-[#FFF0E5] to-[#FFCFAC] mb-6">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/assets/case-study-blush-mobile.png"
                  alt="Blush en Bloom - Launched in 60 Days"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Bottom stats pill docked edge-to-edge at bottom of card */}
              <div className="w-full bg-white/95 backdrop-blur-sm p-3 grid grid-cols-3 divide-x divide-orange-100 border-t border-orange-100 shadow-sm z-10">
                <div className="flex items-center gap-1.5 px-1.5">
                  <div className="w-6 h-6 rounded-md bg-[#ffebd9] flex items-center justify-center shrink-0">
                    <Calendar className="text-[#f55926] w-3 h-3" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-extrabold text-[#111928] text-[9.5px] leading-tight truncate">60 Days</p>
                    <p className="text-[#6b7280] text-[7.5px] leading-tight truncate">From idea to launch</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-1.5">
                  <div className="w-6 h-6 rounded-md bg-[#ffebd9] flex items-center justify-center shrink-0">
                    <ShoppingCart className="text-[#f55926] w-3 h-3" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-extrabold text-[#111928] text-[9.5px] leading-tight truncate">Live on Amazon</p>
                    <p className="text-[#6b7280] text-[7.5px] leading-tight truncate">With great response</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-1.5">
                  <div className="w-6 h-6 rounded-md bg-[#ffebd9] flex items-center justify-center shrink-0">
                    <Star className="text-[#f55926] w-3 h-3" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-extrabold text-[#111928] text-[9.5px] leading-tight truncate">A Premium Brand</p>
                    <p className="text-[#6b7280] text-[7.5px] leading-tight truncate">Loved by customers</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <a 
                href="#details"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#f55926] hover:bg-[#df4a1a] transition-all duration-300 text-white rounded-full py-3 px-5 sm:py-4 sm:px-6 md:px-8 font-semibold text-sm sm:text-lg md:text-xl flex items-center justify-between w-fit gap-4 sm:gap-6 shadow-[0_10px_30px_rgba(245,89,38,0.3)] hover:-translate-y-1"
              >
                Read the Full Case Study 
                <span className="bg-white text-[#f55926] rounded-full w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                  <ArrowDownRight className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={2.5} />
                </span>
              </a>

              {/* Watch Video Button */}
              <button 
                onClick={() => setActiveVideoModal({ url: "/videos/blush-en-bloom-testimonial.mp4", title: "Blush En Bloom Grand Launch Event" })}
                className="bg-white hover:bg-orange-50 text-[#111928] hover:text-[#f55926] transition-all duration-300 rounded-full py-3 px-5 sm:py-4 sm:px-6 font-semibold text-sm sm:text-base flex items-center gap-2.5 sm:gap-3 border border-orange-200/80 shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-1"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f55926] flex items-center justify-center shrink-0">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white ml-0.5" />
                </div>
                <span>Watch Testimonial Video</span>
              </button>
            </div>
          </div>

          {/* Right Content: Floating Video Card Badge */}
          <div className="w-full md:w-1/2 relative hidden md:flex justify-center md:justify-end z-30">
            <div 
              onClick={() => setActiveVideoModal({ url: "/videos/blush-en-bloom-testimonial.mp4", title: "Blush En Bloom Grand Launch Event" })}
              className="group cursor-pointer bg-white/95 backdrop-blur-md rounded-3xl p-4 border border-orange-200/60 shadow-[0_20px_50px_rgba(245,89,38,0.15)] hover:shadow-[0_25px_60px_rgba(245,89,38,0.25)] transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-4 max-w-sm mr-4"
            >
              <div className="relative w-20 h-28 rounded-2xl overflow-hidden shrink-0 border border-orange-100 shadow-inner">
                <Image 
                  src="/videos/blush-en-bloom-thumb.jpg" 
                  alt="Blush En Bloom Video Thumbnail" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 flex items-center justify-center transition-colors">
                  <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-[#f55926] fill-[#f55926] ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#f55926]" />
                  <span className="text-[10px] font-bold text-[#f55926] uppercase tracking-wider">Video Testimonial</span>
                </div>
                <h4 className="font-bold text-[#111928] text-sm leading-snug line-clamp-2">
                  Blush En Bloom Grand Launch
                </h4>
                <p className="text-[#6b7280] text-xs mt-1">Watch real launch affair →</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Stats Bar - Desktop only */}
      <div className="hidden md:flex relative -mt-16 sm:-mt-20 md:-mt-24 mx-auto w-[92%] max-w-[1200px] bg-[#fffaf5] rounded-3xl md:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-20 items-center justify-between divide-x divide-orange-100/50 border border-orange-50">
        
        <div className="flex items-center gap-4 md:gap-5 w-1/3 py-4 px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <Calendar className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">60 Days</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">From idea to launch</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-5 w-1/3 py-4 px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <ShoppingCart className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">Live on Amazon</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">With great initial response</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-5 w-1/3 py-4 px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <Star className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">A Premium Brand</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">Loved by customers</p>
          </div>
        </div>

      </div>

      {/* Spacer to give room below the floating bar on desktop */}
      <div className="hidden md:block h-12 sm:h-16 md:h-24"></div>

      {/* Video Modal Popup */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="relative w-full max-w-sm sm:max-w-md bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3.5 bg-neutral-900 border-b border-neutral-800">
              <span className="text-white text-xs sm:text-sm font-semibold truncate pr-2">
                {activeVideoModal.title}
              </span>
              <button 
                onClick={() => setActiveVideoModal(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative aspect-[9/16] max-h-[75vh] w-full bg-black flex items-center justify-center">
              <video 
                src={activeVideoModal.url}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
