"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, SprayCan, Beaker, Leaf, Pill } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Perfume &\nFragrance",
      icon: <SprayCan size={20} className="text-[#FF5A19]" />,
      iconBg: "bg-[#FFF0E6]",
      arrowColor: "text-[#FF5A19]",
      image: "/industry1.png",
      backdropColor: "bg-[#FFE4D6]"
    },
    {
      title: "Beauty &\nSkincare",
      icon: <Beaker size={20} className="text-[#4A72FF]" />,
      iconBg: "bg-[#EEF2FF]",
      arrowColor: "text-[#4A72FF]",
      image: "/industry2.png",
      backdropColor: "bg-[#D8EAFF]"
    },
    {
      title: "Ayurveda &\nWellness",
      icon: <Leaf size={20} className="text-[#16A34A]" />,
      iconBg: "bg-[#E8F8EE]",
      arrowColor: "text-[#16A34A]",
      image: "/industry4.png", // Mortar, pestle & herbs
      backdropColor: "bg-[#DCF0DC]"
    },
    {
      title: "Nutraceuticals",
      icon: <Pill size={20} className="text-[#FF5A19]" />,
      iconBg: "bg-[#FFF0E6]",
      arrowColor: "text-[#FF5A19]",
      image: "/industry3.png", // Amber bottle & capsules
      backdropColor: "bg-[#E2F2DC]"
    }
  ];

  return (
    <section className="relative bg-[#FBF8F2] py-20 sm:py-24 overflow-hidden border-t border-gray-100/70 font-sans">
      
      {/* Background Corner Peach Waves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Bottom Left Peach Wave */}
        <div className="absolute -bottom-10 -left-10 w-[380px] h-[240px] pointer-events-none">
          <svg viewBox="0 0 380 240" fill="none" className="w-full h-full">
            <path d="M 0,80 C 100,80 180,130 260,240 L 0,240 Z" fill="#FFEEDB" />
          </svg>
        </div>

        {/* Bottom Right Peach Wave */}
        <div className="absolute -bottom-10 -right-10 w-[360px] h-[220px] pointer-events-none">
          <svg viewBox="0 0 360 220" fill="none" className="w-full h-full">
            <path d="M 140,220 C 200,160 270,130 360,120 L 360,220 Z" fill="#FFF0E3" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col xl:flex-row items-center xl:items-start gap-10">
        
        {/* Left Content Area */}
        <div className="w-full xl:w-[28%] flex flex-col items-start pt-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Industries</span>
            <div className="h-[1.5px] w-10 bg-[#FF5A19]/35"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] leading-[1.08] tracking-tight mb-6">
            Build a Brand<br />
            in <span className="text-[#FF5A19]">Your Industry</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-sm">
            We help entrepreneurs and businesses launch successful brands across high-growth categories.
          </p>

          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#FF5A19] hover:bg-[#E64500] text-white px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md shadow-[#FF5A19]/25 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            Talk to Our Experts
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right Cards Area */}
        <div className="w-full xl:w-[72%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pb-4">
            {industries.map((industry, index) => (
              <Link 
                href="/industries"
                key={index}
                className="w-full h-[420px] bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group flex flex-col border border-gray-100"
              >
                {/* Top Text Section */}
                <div className="p-5 relative z-20 flex-shrink-0">
                  <div className={`w-11 h-11 rounded-full ${industry.iconBg} flex items-center justify-center mb-3.5 border border-white shadow-2xs`}>
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-[15px] font-bold text-[#1E1E1E] leading-snug whitespace-pre-line mb-2">
                    {industry.title}
                  </h3>
                  
                  <ArrowRight size={17} className={`${industry.arrowColor} transition-transform group-hover:translate-x-1`} />
                </div>
                
                {/* Bottom Image Section with Curved Arch Backdrop */}
                <div className="absolute inset-0 top-[110px] z-0 overflow-hidden rounded-b-3xl">
                  {/* Colored Curved Backdrop Arch/Circle */}
                  <div className={`absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[118%] aspect-square rounded-full ${industry.backdropColor} transition-transform duration-500 group-hover:scale-105 pointer-events-none`}></div>
                  
                  {/* Product Transparent Image */}
                  <Image 
                    src={industry.image} 
                    alt={industry.title.replace('\n', ' ')}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 relative z-10"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
