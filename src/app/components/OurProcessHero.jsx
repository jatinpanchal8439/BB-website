"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function OurProcessHero() {
  const container = useRef(null);

  useGSAP(() => {
    // Text animations
    gsap.from(".how-animate-text", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    // Image slight zoom on scroll (desktop only)
    gsap.to(".how-bg-image", {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      scale: 1.05,
      ease: "none"
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full overflow-hidden bg-[#F8F4EE] border-t border-gray-100/50"
    >
      {/* Desktop Layout — full section with background 3D Image */}
      <div className="hidden lg:flex relative w-full min-h-[85vh] items-center">
        {/* Background 3D Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image 
            src="/how-it-works-3d.png" 
            alt="Ascending Growth Path" 
            fill 
            className="how-bg-image object-cover object-right lg:object-center opacity-90"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 lg:py-32">
          <div className="max-w-2xl">
            
            {/* Subtitle — orange */}
            <div className="flex items-center gap-3 mb-6 how-animate-text">
              <div className="h-[2px] w-8 bg-[#FF4D00]"></div>
              <span className="text-[#FF4D00] text-[13px] font-bold tracking-[0.15em] uppercase">How It Works</span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-[2.5rem] md:text-5xl lg:text-[4.5rem] font-black text-[#1E1E1E] leading-[1.05] tracking-tight mb-6 how-animate-text font-[family-name:var(--font-plus-jakarta)]">
              Here's What the<br />
              <span className="text-[#FF4D00]">Journey Looks Like</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-10 how-animate-text">
              From idea to market, we handle the key steps so you can focus on building a successful brand.
            </p>

            {/* CTA Button */}
            <div className="how-animate-text">
              <Link
                href="#what-we-do"
                className="inline-flex items-center gap-3 bg-[#FF4D00] text-white hover:bg-[#E64500] px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_8px_20px_rgba(255,77,0,0.25)] hover:shadow-[0_12px_25px_rgba(255,77,0,0.35)] hover:-translate-y-1 cursor-pointer group"
              >
                See The Process
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
        
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EE] via-[#F8F4EE]/80 to-transparent w-[60%] z-[5] pointer-events-none"></div>
      </div>

      {/* Mobile Layout — text on top, full-width image below */}
      <div className="lg:hidden flex flex-col pt-10 pb-0">
        {/* Text Content */}
        <div className="px-6 flex flex-col items-start mb-8">
          {/* Subtitle — orange */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#FF4D00]"></div>
            <span className="text-[#FF4D00] text-[12px] font-bold tracking-[0.15em] uppercase">How It Works</span>
          </div>

          {/* Main Title */}
          <h2 className="text-[34px] xs:text-[40px] font-black text-[#1E1E1E] leading-[1.08] tracking-tight mb-4 font-[family-name:var(--font-plus-jakarta)]">
            Here's What the<br />
            <span className="text-[#FF4D00]">Journey Looks Like</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[15px] font-medium leading-relaxed max-w-[460px] mb-6">
            From idea to market, we handle the key steps so you can focus on building a successful brand.
          </p>

          {/* CTA Button */}
          <Link
            href="#what-we-do"
            className="inline-flex items-center gap-3 bg-[#FF4D00] text-white hover:bg-[#E64500] px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_8px_20px_rgba(255,77,0,0.25)] cursor-pointer group"
          >
            See The Process
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Full-width edge-to-edge image below */}
        <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px]">
          <Image 
            src="/how-it-works-3d.png" 
            alt="Ascending Growth Path" 
            fill 
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>

    </section>
  );
}
