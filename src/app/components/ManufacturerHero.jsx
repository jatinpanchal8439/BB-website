"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function ManufacturerHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text entrance animations
      gsap.fromTo(".hero-badge", 
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(".hero-title-1", 
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }
      );

      gsap.fromTo(".hero-title-2", 
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(".hero-subtitle", 
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(".hero-desc", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.4, ease: "power3.out" }
      );

      gsap.fromTo(".hero-cta", 
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.5, ease: "back.out(1.7)" }
      );

      // 2. Cards entrance animations with spring bounce & continuous float chained
      gsap.fromTo(".card-1-group", 
        { scale: 0.65, y: -50, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.9, delay: 0.35, ease: "back.out(1.4)", onComplete: () => {
          gsap.to(".card-1-group", { y: "+=8", rotation: "+=0.8", duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }}
      );

      gsap.fromTo(".card-2-group", 
        { scale: 0.65, y: 50, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "back.out(1.4)", onComplete: () => {
          gsap.to(".card-2-group", { y: "-=7", rotation: "-=0.8", duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }}
      );

      gsap.fromTo(".card-3-group", 
        { scale: 0.65, x: 50, opacity: 0 },
        { scale: 1, x: 0, opacity: 1, duration: 0.9, delay: 0.65, ease: "back.out(1.4)", onComplete: () => {
          gsap.to(".card-3-group", { y: "+=9", rotation: "-=0.6", duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }}
      );

      // 3. Doodles pop-in
      gsap.fromTo(".doodle-anim", 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 0.9, stagger: 0.15, ease: "back.out(2)" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full bg-[#FAF8F3] font-sans pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#EFECE5]"
    >
      {/* Background Soft Glow Highlights matching screenshot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[600px] md:h-[800px] bg-[#FFF5E6]/75 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-0 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FFF0DB]/60 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-14">
          
          {/* =========================================================
              LEFT COLUMN: Text Content & CTA
             ========================================================= */}
          <div className="w-full xl:w-[45%] flex flex-col pt-2 sm:pt-4">
            
            {/* Top Label */}
            <div className="hero-badge flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-10 sm:w-12 h-[1.5px] bg-[#FF4D00]"></span>
              <span className="text-[#64748B] font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase">
                MANUFACTURER NETWORK
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-[1.0] tracking-tight mb-5 sm:mb-7">
              <span className="hero-title-1 block text-[#0B1B36]">
                Manufacturer
              </span>
              <span className="hero-title-2 block text-[#FF4D00]">
                Network
              </span>
            </h1>

            {/* Subheadline */}
            <h2 className="hero-subtitle text-xl sm:text-2xl md:text-[27px] font-bold text-[#0B1B36] tracking-tight mb-4">
              Find the Right Factory for Your Brand
            </h2>

            {/* Paragraph */}
            <p className="hero-desc text-[#64748B] text-base sm:text-lg leading-relaxed max-w-[450px] font-medium mb-8 sm:mb-10">
              Finding a manufacturer is easy. Finding the right one for your product, MOQ and budget isn't. See how Banega Brand's manufacturer network helps.
            </p>

            {/* CTA Button */}
            <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link 
                href="#manufacturers" 
                className="group bg-[#0B1B36] hover:bg-[#15284B] transition-all duration-300 text-white rounded-full py-4 px-8 font-bold text-[15px] sm:text-base flex items-center justify-between sm:justify-center gap-6 shadow-xl shadow-[#0B1B36]/15 hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span>Explore Manufacturer Network</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </span>
              </Link>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Exact 3 Tilted Cards Collage & Doodles
             ========================================================= */}
          <div className="w-full xl:w-[55%] relative min-h-[520px] sm:min-h-[580px] md:min-h-[640px] flex items-center justify-center mt-6 xl:mt-0 select-none">
            
            {/* Collage Canvas scaled for mobile vs desktop */}
            <div className="relative w-full max-w-[580px] h-[520px] sm:h-[580px] md:h-[620px] mx-auto scale-[0.80] min-[420px]:scale-[0.88] sm:scale-95 md:scale-100 origin-center">
              
              {/* ====================================================
                  CARD 1: Top Center (4 Filling Nozzles)
                  Orange Backdrop Tile behind it (no white border on photo!)
                  Doodle: "Right Factory" with rays + curved arrow
                 ==================================================== */}
              <div className="card-1-group absolute top-[10px] left-[130px] sm:left-[150px] w-[260px] sm:w-[280px] h-[210px] sm:h-[225px] z-20 transition-all duration-300 hover:scale-105 cursor-pointer">
                
                {/* Orange Tile Behind */}
                <div className="absolute inset-0 bg-[#FF4D00] rounded-[26px] rotate-[8deg] translate-x-1.5 translate-y-3.5 -z-10 shadow-[0_15px_35px_rgba(255,77,0,0.3)]"></div>
                
                {/* Photo Card (Borderless with rounded corners) */}
                <div className="relative w-full h-full rounded-[26px] overflow-hidden rotate-[3deg] shadow-[0_20px_45px_rgba(0,0,0,0.18)] bg-gray-900">
                  <Image 
                    src="/manufacturer-filling-nozzles.jpg" 
                    alt="Automatic 4-nozzle bottle filling machine" 
                    fill 
                    sizes="(max-width: 768px) 60vw, 32vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Doodle: "Right Factory" (Left of Card 1) */}
                <div className="doodle-anim absolute -top-10 -left-20 sm:-top-12 sm:-left-24 pointer-events-none z-30 flex flex-col items-center">
                  {/* Sunburst Rays */}
                  <svg className="w-8 h-6 mb-0.5 text-[#FF4D00]" viewBox="0 0 32 24" fill="none">
                    <line x1="6" y1="18" x2="2" y2="6" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="16" y1="20" x2="16" y2="4" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="26" y1="18" x2="30" y2="6" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  
                  {/* Handwritten Text */}
                  <span 
                    className="text-[#FF4D00] font-bold text-2xl sm:text-[26px] leading-[1.05] tracking-wide text-center"
                    style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive, sans-serif" }}
                  >
                    Right<br />Factory
                  </span>

                  {/* Curved Arrow to Photo */}
                  <svg className="w-14 h-11 text-[#FF4D00] ml-6 -mt-1" viewBox="0 0 65 48" fill="none">
                    <path 
                      d="M 8 6 Q 6 36 28 36 Q 42 36 54 28" 
                      stroke="#FF4D00" 
                      strokeWidth="2.4" 
                      strokeLinecap="round" 
                      fill="none" 
                    />
                    <path 
                      d="M 44 22 L 56 27 L 48 37" 
                      stroke="#FF4D00" 
                      strokeWidth="2.4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fill="none" 
                    />
                  </svg>
                </div>
              </div>


              {/* ====================================================
                  CARD 2: Bottom Left (Gloved Hand Holding Square Bottle)
                  Warm Amber/Gold Backdrop Tile behind it (Exact 247x287 from SS)
                  Doodle: "Your Product" with curved arrow + 3 tick marks
                 ==================================================== */}
              <div className="card-2-group absolute bottom-[15px] left-[15px] sm:left-[25px] w-[235px] sm:w-[247px] h-[270px] sm:h-[287px] z-30 transition-all duration-300 hover:scale-105 cursor-pointer">
                
                {/* Amber/Gold Tile Behind */}
                <div className="absolute inset-0 bg-[#F39200] rounded-[26px] rotate-[-13deg] -translate-x-3 translate-y-1 -z-10 shadow-[0_15px_35px_rgba(243,146,0,0.3)]"></div>
                
                {/* Photo Card (Borderless with rounded corners) */}
                <div className="relative w-full h-full rounded-[26px] overflow-hidden rotate-[-7deg] shadow-[0_20px_45px_rgba(0,0,0,0.18)] bg-gray-900">
                  <Image 
                    src="/manufacturer-hand-filling.jpg" 
                    alt="Perfume bottle being hand filled" 
                    fill 
                    sizes="(max-width: 768px) 60vw, 30vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Doodle: 3 Tick Marks / / / above Card 2 */}
                <div className="doodle-anim absolute -top-12 right-2 pointer-events-none z-30">
                  <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                    <line x1="8" y1="8" x2="18" y2="4" stroke="#0B1B36" strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="4" y1="16" x2="14" y2="12" stroke="#0B1B36" strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="2" y1="24" x2="12" y2="20" stroke="#0B1B36" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Doodle: "Your Product" (Bottom Left of Card 2) */}
                <div className="doodle-anim absolute -bottom-5 -left-16 sm:-left-20 pointer-events-none z-30 flex flex-col items-center">
                  <span 
                    className="text-[#0B1B36] font-bold text-2xl sm:text-[26px] leading-[1.05] tracking-wide text-center"
                    style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive, sans-serif" }}
                  >
                    Your<br />Product
                  </span>

                  {/* Curved Arrow pointing up to bottle */}
                  <svg className="w-14 h-12 text-[#0B1B36] ml-4 -mt-1" viewBox="0 0 55 45" fill="none">
                    <path 
                      d="M 12 8 Q 8 36 30 36 Q 44 36 42 22" 
                      stroke="#0B1B36" 
                      strokeWidth="2.4" 
                      strokeLinecap="round" 
                      fill="none" 
                    />
                    <path 
                      d="M 33 26 L 42 20 L 48 29" 
                      stroke="#0B1B36" 
                      strokeWidth="2.4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fill="none" 
                    />
                  </svg>
                </div>
              </div>


              {/* ====================================================
                  CARD 3: Right (Factory Conveyor Belt Bottling)
                  Soft Periwinkle Blue Backdrop Tile behind it
                  Doodle: "Your Brand" with curved arrow
                 ==================================================== */}
              <div className="card-3-group absolute top-[150px] sm:top-[160px] right-[5px] sm:right-[15px] w-[235px] sm:w-[250px] h-[285px] sm:h-[305px] z-20 transition-all duration-300 hover:scale-105 cursor-pointer">
                
                {/* Soft Blue Tile Behind */}
                <div className="absolute inset-0 bg-[#7B9DF8] rounded-[26px] rotate-[11deg] translate-x-3 -translate-y-1 -z-10 shadow-[0_15px_35px_rgba(123,157,248,0.3)]"></div>
                
                {/* Photo Card (Borderless with rounded corners) */}
                <div className="relative w-full h-full rounded-[26px] overflow-hidden rotate-[5deg] shadow-[0_20px_45px_rgba(0,0,0,0.18)] bg-gray-900">
                  <Image 
                    src="/manufacturer-bottles-conveyor.jpg" 
                    alt="Perfume bottle assembly conveyor belt" 
                    fill 
                    sizes="(max-width: 768px) 60vw, 30vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Doodle: "Your Brand" (Top Right of Card 3) */}
                <div className="doodle-anim absolute -top-14 sm:-top-16 right-2 sm:right-6 pointer-events-none z-30 flex flex-col items-center">
                  <span 
                    className="text-[#0B1B36] font-bold text-2xl sm:text-[26px] leading-[1.05] tracking-wide text-center"
                    style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive, sans-serif" }}
                  >
                    Your<br />Brand
                  </span>

                  {/* Curved Arrow pointing down into card */}
                  <svg className="w-13 h-11 text-[#0B1B36] mr-4 -mt-1" viewBox="0 0 55 45" fill="none">
                    <path 
                      d="M 38 6 Q 42 24 22 28 Q 14 30 14 36" 
                      stroke="#0B1B36" 
                      strokeWidth="2.4" 
                      strokeLinecap="round" 
                      fill="none" 
                    />
                    <path 
                      d="M 18 27 L 13 36 L 24 38" 
                      stroke="#0B1B36" 
                      strokeWidth="2.4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fill="none" 
                    />
                  </svg>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
