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

    // Animate images
    tl.from(".ow-img-wrapper", {
      scale: 0.8,
      opacity: 0,
      rotation: (i) => (i % 2 === 0 ? -10 : 10), // Random rotation start
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.5)",
    }, "-=0.8");

    // Animate dashed lines
    tl.fromTo(".ow-dash-path", 
      { strokeDasharray: 500, strokeDashoffset: 500 },
      { strokeDashoffset: 0, duration: 1.5, stagger: 0.3, ease: "power2.inOut" },
      "-=0.6"
    );

    // Animate handwriting and accents
    tl.from(".ow-accent", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(2)",
    }, "-=1");

  }, { scope: container });

  return (
    <section ref={container} id="our-work" className="w-full bg-[#FCFBF8] py-20 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Column - Content */}
        <div className="flex flex-col z-10 relative pt-10">
          
          {/* Eyebrow */}
          <div className="ow-text flex items-center gap-4 mb-6">
            <span className="text-[11px] font-bold tracking-[0.15em] text-[#333] uppercase">Our Work</span>
            <div className="w-12 h-[1px] bg-gray-400"></div>
          </div>

          {/* Main Heading */}
          <h2 className="ow-text text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-black text-[#111] leading-[1.05] tracking-tight mb-6 relative">
            Brands We&apos;ve <br />
            <span className="text-[#FF4D00]">Helped</span> Bring <br />
            to Life
            
            {/* Orange dash accents near heading */}
            <div className="absolute top-[60%] -right-8 w-8 h-8 ow-accent hidden md:block">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round">
                <line x1="4" y1="4" x2="10" y2="10" />
                <line x1="4" y1="14" x2="12" y2="12" />
              </svg>
            </div>
          </h2>

          {/* Subtitles */}
          <div className="ow-text flex flex-col gap-4 mb-10 max-w-lg">
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-snug">
              Every brand here started as one founder&apos;s idea.<br/>Here&apos;s what happened next.
            </p>
            <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
              Real founders, real launches. See the brands Banega Brand has helped build, manufacture and take to market on 
              <strong className="text-gray-800 font-bold"> Amazon</strong>, 
              <strong className="text-gray-800 font-bold"> Flipkart</strong> and 
              <strong className="text-gray-800 font-bold"> Nykaa</strong>.
            </p>
          </div>

          {/* Marketplace Cards */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-4">
            {/* Amazon */}
            <div className="ow-card bg-[#FFF1B8] rounded-3xl p-5 sm:p-6 flex flex-col min-w-[150px] flex-1 shadow-sm border border-[#F5E6A3] transition-transform hover:-translate-y-1 duration-300">
              <div className="h-8 sm:h-10 mb-4 relative w-[120px]">
                <Image src="/ama.png" alt="Amazon" fill className="object-contain object-left" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#111] mb-1 tracking-tight">100+</h3>
              <p className="text-[11px] sm:text-xs font-medium text-[#4A4A4A]">Brands Launched</p>
            </div>

            {/* Flipkart */}
            <div className="ow-card bg-[#2863B8] rounded-3xl p-5 sm:p-6 flex flex-col min-w-[150px] flex-1 shadow-sm transition-transform hover:-translate-y-1 duration-300">
              <div className="h-8 sm:h-10 mb-4 relative w-[120px]">
                <Image src="/flip.png" alt="Flipkart" fill className="object-contain object-left" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">50+</h3>
              <p className="text-[11px] sm:text-xs font-medium text-blue-100">Brands Launched</p>
            </div>

            {/* Nykaa */}
            <div className="ow-card bg-[#FFC5C2] rounded-3xl p-5 sm:p-6 flex flex-col min-w-[150px] flex-1 shadow-sm border border-[#FBC5C5] transition-transform hover:-translate-y-1 duration-300">
              <div className="h-8 sm:h-10 mb-4 relative w-[120px]">
                <Image src="/nyka.png" alt="Nykaa" fill className="object-contain object-left" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#111] mb-1 tracking-tight">30+</h3>
              <p className="text-[11px] sm:text-xs font-medium text-[#4A4A4A]">Brands Launched</p>
            </div>
          </div>

        </div>

        {/* Right Column - Images and Connections */}
        <div className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center pt-10 lg:pt-0">
          
          {/* Path 1: Idea to Build */}
          <div className="absolute top-[28%] left-[45%] w-[120px] h-[80px] z-10 ow-accent pointer-events-none hidden sm:block">
            <svg viewBox="0 0 120 80" className="w-full h-full overflow-visible">
              <path className="ow-dash-path" d="M10,70 Q60,-20 110,20" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="6,6" strokeLinecap="round" />
              {/* Arrowhead */}
              <path d="M100,10 L110,20 L100,30" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Path 2: Build to Launch */}
          <div className="absolute top-[52%] left-[25%] w-[80px] h-[120px] z-10 ow-accent pointer-events-none hidden sm:block">
            <svg viewBox="0 0 80 120" className="w-full h-full overflow-visible">
              <path className="ow-dash-path" d="M70,10 Q-20,60 70,110" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="6,6" strokeLinecap="round" />
              {/* Arrowhead */}
              <path d="M60,100 L70,110 L60,120" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Image 1: Idea */}
          <div className="absolute top-[5%] left-[5%] sm:left-[10%] w-[240px] sm:w-[280px] z-20 ow-img-wrapper" style={{ transform: "rotate(-6deg)" }}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#D6C58B]">
              <Image src="/m1.png" alt="Idea Stage" fill className="object-cover" />
            </div>
            {/* Handwriting Label */}
            <div className="absolute -top-12 -left-6 ow-accent flex items-center gap-2">
              <span className={`${caveat.className} text-4xl text-[#111] -rotate-12`}>Idea</span>
              <svg width="24" height="24" viewBox="0 0 24 24" className="-rotate-12">
                <path d="M4 12 L12 4 M12 4 L20 12" stroke="#FF4D00" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Image 2: Build */}
          <div className="absolute top-[32%] right-[5%] sm:right-[2%] w-[240px] sm:w-[280px] z-30 ow-img-wrapper" style={{ transform: "rotate(4deg)" }}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#EAE0D7]">
              <Image src="/m2.png" alt="Build Stage" fill className="object-cover" />
            </div>
            {/* Handwriting Label */}
            <div className="absolute -top-12 right-0 ow-accent flex items-center gap-2">
              <span className={`${caveat.className} text-4xl text-[#111] rotate-12`}>Build</span>
              <svg width="24" height="24" viewBox="0 0 24 24" className="rotate-45">
                <path d="M4 12 L12 4 M12 4 L20 12" stroke="#FF4D00" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Image 3: Launch */}
          <div className="absolute bottom-[5%] left-[10%] sm:left-[20%] w-[250px] sm:w-[300px] z-40 ow-img-wrapper" style={{ transform: "rotate(-4deg)" }}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#D8B998]">
              <Image src="/m3.png" alt="Launch Stage" fill className="object-cover" />
            </div>
            {/* Handwriting Label */}
            <div className="absolute top-0 -left-20 ow-accent flex items-center gap-2">
              <span className={`${caveat.className} text-4xl text-[#111] -rotate-12`}>Launch</span>
              <svg width="24" height="24" viewBox="0 0 24 24" className="-rotate-12 mt-8">
                <path d="M4 20 L12 12 M12 12 L20 20" stroke="#FF4D00" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
