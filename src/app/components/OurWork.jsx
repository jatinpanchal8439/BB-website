"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: "700" });

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function OurWork() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
    });

    // Animate texts
    tl.from(".ow-text", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Animate marketplace cards
    tl.from(".ow-card", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Animate main combined image
    tl.from(".ow-main-img", {
      scale: 0.95,
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.6");

  }, { scope: container });

  return (
    <section ref={container} id="our-work" className="w-full bg-[#FCFBF8] pt-10 pb-20 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Column - Content */}
        <div className="flex flex-col z-10 relative pt-2">
          
          {/* Eyebrow */}
          <div className="ow-text flex items-center gap-4 mb-6">
            <span className="font-bold tracking-[0.15em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Our Work</span>
            <div className="w-12 h-[1px] bg-gray-400"></div>
          </div>

          {/* Main Heading */}
          <h2 className="ow-text text-[3.5rem] md:text-[5rem] lg:text-[72px] xl:text-[80px] font-black text-[#111] leading-[1.05] tracking-tight mb-6 relative z-10 w-full">
            Brands We&apos;ve <br />
            <span className="text-[#FF4D00]">Helped</span> Bring <br />
            <span className="relative inline-block">
              to Life
              {/* Orange dash accents near heading */}
              <div className="absolute top-[20%] -right-16 w-12 h-12 hidden md:block">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="4" strokeLinecap="round">
                  <line x1="6" y1="4" x2="10" y2="10" />
                  <line x1="6" y1="16" x2="12" y2="12" />
                </svg>
              </div>
            </span>
          </h2>

          {/* Subtitles */}
          <div className="ow-text flex flex-col gap-4 mb-8 max-w-xl">
            <p className="text-[18px] md:text-[22px] text-gray-800 font-medium leading-snug">
              Every brand here started as one founder&apos;s idea.<br/>Here&apos;s what happened next.
            </p>
            <p className="text-[13px] md:text-[15px] text-gray-600 font-medium leading-relaxed max-w-[90%]">
              Real founders, real launches. See the brands Banega Brand has helped build, manufacture and take to market on 
              <strong className="text-gray-900 font-bold"> Amazon</strong>, 
              <strong className="text-gray-900 font-bold"> Flipkart</strong> and 
              <strong className="text-gray-900 font-bold"> Nykaa</strong>.
            </p>
          </div>

          {/* Marketplace Cards - STRICT 3-COLUMN GRID */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-2 w-full max-w-[650px]">
            {/* Amazon */}
            <div className="ow-card bg-[#FFF1B8] rounded-3xl p-4 sm:p-5 flex flex-col shadow-sm border border-[#F5E6A3] transition-transform hover:-translate-y-1 duration-300">
              <div className="h-6 sm:h-8 mb-4 relative w-full max-w-[90px]">
                <Image src="/ama.png" alt="Amazon" fill className="object-contain object-left" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#111] leading-none mb-1 tracking-tight">100+</h3>
              <p className="text-[10px] sm:text-[11px] font-medium text-[#4A4A4A] leading-tight">Brands Launched</p>
            </div>

            {/* Flipkart */}
            <div className="ow-card bg-[#2863B8] rounded-3xl p-4 sm:p-5 flex flex-col shadow-sm transition-transform hover:-translate-y-1 duration-300">
              <div className="h-6 sm:h-8 mb-4 relative w-full max-w-[90px]">
                <Image src="/flip.png" alt="Flipkart" fill className="object-contain object-left" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white leading-none mb-1 tracking-tight">50+</h3>
              <p className="text-[10px] sm:text-[11px] font-medium text-blue-100 leading-tight">Brands Launched</p>
            </div>

            {/* Nykaa */}
            <div className="ow-card bg-[#FFC5C2] rounded-3xl p-4 sm:p-5 flex flex-col shadow-sm border border-[#FBC5C5] transition-transform hover:-translate-y-1 duration-300">
              <div className="h-6 sm:h-8 mb-4 relative w-full max-w-[90px]">
                <Image src="/nyka.png" alt="Nykaa" fill className="object-contain object-left" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#111] leading-none mb-1 tracking-tight">30+</h3>
              <p className="text-[10px] sm:text-[11px] font-medium text-[#4A4A4A] leading-tight">Brands Launched</p>
            </div>
          </div>

        </div>

        {/* Right Column - Visual */}
        <div className="relative w-full flex items-center justify-center pt-10 lg:pt-0 ow-main-img lg:pl-10">
           <Image 
             src="/assets/group153.png" 
             alt="Idea to Build to Launch Process" 
             width={900}
             height={1100}
             className="w-full max-w-[650px] lg:max-w-[100%] h-auto object-contain drop-shadow-sm transform lg:scale-[1.15] lg:origin-center"
             priority
           />
        </div>

      </div>
    </section>
  );
}
