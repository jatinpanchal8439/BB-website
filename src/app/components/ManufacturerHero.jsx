"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full font-sans overflow-hidden bg-[#FAF8F3]">
      
      {/* FULL WIDTH BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image 
          src="/assets/manufacturer-hero-bg.jpg" 
          alt="Manufacturer Network Background" 
          fill 
          className="object-cover object-center lg:object-right" 
          priority
        />
        {/* Subtle gradient overlays to ensure text readability on mobile/tablet */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3] via-[#FAF8F3]/80 to-transparent lg:hidden w-3/4"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3]/40 to-transparent lg:hidden"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col pt-16 lg:pt-32 pb-16 lg:pb-32 min-h-[500px] sm:min-h-[600px] lg:min-h-[750px] justify-center">
        
        {/* =========================================================
            LEFT COLUMN: Text Content & CTA (Background spans right)
           ========================================================= */}
        <div className="w-full lg:w-[50%] flex flex-col">
          
          {/* Top Label */}
          <div className="hero-badge flex items-center gap-3 mb-6 sm:mb-8 mt-4 lg:mt-0">
            <span className="w-10 sm:w-12 h-[1.5px] bg-[#FF4D00]"></span>
            <span className="font-extrabold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)] text-xs sm:text-sm">
              MANUFACTURER NETWORK
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-[900] leading-[1.05] tracking-tight mb-5 sm:mb-6">
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
          <p className="hero-desc text-[#64748B] text-base sm:text-[17px] leading-relaxed max-w-[480px] font-medium mb-8 sm:mb-10 drop-shadow-sm">
            Finding a manufacturer is easy. Finding the right one for your product, MOQ and budget isn't. See how Banega Brand's manufacturer network helps.
          </p>

          {/* CTA Button */}
          <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="#manufacturers" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('manufacturers')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-[#0B1B36] hover:bg-[#15284B] transition-all duration-300 text-white rounded-full py-[16px] px-8 font-bold text-[15px] sm:text-[15px] flex items-center justify-between sm:justify-center gap-6 shadow-xl shadow-[#0B1B36]/15 hover:shadow-2xl hover:-translate-y-0.5 w-fit"
            >
              <span>Explore Manufacturer Network</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                <ArrowRight size={20} strokeWidth={2.5} />
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
