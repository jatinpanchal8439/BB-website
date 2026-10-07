"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustryCTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ctaRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          }
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-[#FCFBF8] font-sans border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center" ref={ctaRef}>
        
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-8 md:w-16 bg-[#ffdbcc]"></div>
          <span className="font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Not sure which category is right for your idea?</span>
          <div className="h-[1px] w-8 md:w-16 bg-[#ffdbcc]"></div>
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#111928] leading-[1.1] mb-6 tracking-tight relative inline-block">
          Let's talk before <br />
          <span className="text-[#FF4D00] relative">
            you invest.
            {/* Orange Burst Icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-12 top-0 md:-right-16 md:top-2 w-8 md:w-10">
              <path d="M5 20H15M20 5V15M30.6066 9.3934L23.5355 16.4645M9.3934 30.6066L16.4645 23.5355M35 20H25" stroke="#FF4D00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#6b7280] text-lg md:text-xl font-medium mb-10 max-w-lg mx-auto">
          Not sure which category is right for your idea?<br/> Let's talk before you invest.
        </p>

        {/* Button */}
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-3 bg-[#111928] hover:bg-[#202c42] transition-colors duration-300 text-white rounded-full py-4 px-8 font-semibold text-lg shadow-lg hover:-translate-y-1 hover:shadow-xl"
        >
          Let's Talk About Your Category
          <ArrowRight size={20} />
        </Link>
        
      </div>
    </section>
  );
}
