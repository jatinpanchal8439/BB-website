"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Rocket, Users, MapPin } from "lucide-react";
import gsap from "gsap";

export default function ManufacturerHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full font-sans overflow-hidden bg-[#FAF8F3]">
      
      {/* Background image on desktop */}
      <div className="absolute inset-0 z-0 w-full h-full hidden lg:block">
        <Image 
          src="/assets/manufacturer-hero-bg.jpg" 
          alt="Manufacturer Network Background" 
          fill 
          className="object-cover object-center lg:object-right" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3] via-[#FAF8F3]/90 to-transparent w-[55%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col pt-8 sm:pt-14 lg:pt-28 pb-4 sm:pb-8 lg:pb-24 justify-center">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="w-full lg:w-[50%] flex flex-col">
          
          {/* Top Label */}
          <div className="hero-badge flex items-center gap-3 mb-4 sm:mb-6 mt-2 lg:mt-0">
            <span className="w-8 sm:w-10 h-[2px] bg-[#FF4D00]"></span>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)] text-[11px] sm:text-xs">
              Manufacturer Network
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[40px] xs:text-[46px] sm:text-[58px] lg:text-[76px] font-[900] leading-[1.05] tracking-tight mb-3 sm:mb-4">
            <span className="hero-title-1 block text-[#0B1B36]">
              Manufacturer
            </span>
            <span className="hero-title-2 block text-[#FF4D00]">
              Network
            </span>
          </h1>

          {/* Subheadline */}
          <h2 className="hero-subtitle text-[18px] xs:text-[20px] sm:text-2xl font-bold text-[#0B1B36] tracking-tight mb-3 sm:mb-4">
            Find the Right Factory for Your Brand
          </h2>

          {/* Paragraph */}
          <p className="hero-desc text-[#64748B] text-[13px] sm:text-[16px] leading-relaxed max-w-[460px] font-medium mb-5 sm:mb-6">
            Finding a manufacturer is easy. Finding the right one for your product, MOQ and budget isn't. See how Banega Brand's manufacturer network helps.
          </p>

          {/* Stats Row (3 Columns) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-2 pb-4 sm:pb-6 w-full max-w-[480px]">
            <div className="flex flex-col items-start">
              <div className="w-8 h-8 rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF4D00] mb-1.5 sm:mb-2">
                <Rocket size={16} strokeWidth={2.2} />
              </div>
              <span className="text-[17px] sm:text-[22px] font-black text-[#FF4D00] leading-tight">500+</span>
              <span className="text-[10px] sm:text-[12px] text-gray-500 font-medium leading-tight mt-0.5">Brands<br />Launched</span>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-8 h-8 rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF4D00] mb-1.5 sm:mb-2">
                <Users size={16} strokeWidth={2.2} />
              </div>
              <span className="text-[17px] sm:text-[22px] font-black text-[#FF4D00] leading-tight">1000+</span>
              <span className="text-[10px] sm:text-[12px] text-gray-500 font-medium leading-tight mt-0.5">Entrepreneurs<br />Supported</span>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-8 h-8 rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF4D00] mb-1.5 sm:mb-2">
                <MapPin size={16} strokeWidth={2.2} />
              </div>
              <span className="text-[17px] sm:text-[22px] font-black text-[#FF4D00] leading-tight">25+</span>
              <span className="text-[10px] sm:text-[12px] text-gray-500 font-medium leading-tight mt-0.5">Cities<br />Across India</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
