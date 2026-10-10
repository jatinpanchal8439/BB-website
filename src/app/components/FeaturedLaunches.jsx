"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function FeaturedLaunches() {
  const launches = [
    {
      title: "Blush En Bloom",
      badge: "Perfume",
      badgeColor: "bg-[#FFF2E8] text-[#FF4D00]",
      description: "A floral perfume collection with 3 scents and 5,000+ bottles sold in the first 60 days.",
      image: "/blush-en-bloom-screenshot.png", 
      href: "/case-study/blush-en-bloom",
    },
    {
      title: "ROUGX",
      badge: "Perfume",
      badgeColor: "bg-[#FEE2E2] text-[#DC2626]",
      description: "Luxury fragrances that define you. Crafted with rare ingredients and timeless elegance.",
      image: "/blush-en-bloom-screenshot-2.png",
      href: "/case-study/rougx",
    },
    {
      title: "Biographey",
      badge: "Perfume",
      badgeColor: "bg-[#EEF2FF] text-[#4A72FF]",
      description: "Crafted a signature scent with lasting depth.",
      image: "/biographey-screenshot.png",
      href: "/case-study/biographey",
    },
  ];

  return (
    <section className="relative bg-[#FCFBF8] py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      
      {/* Bottom Right Decorative Blob */}
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#FFEED9] opacity-60 blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          
          <div className="flex flex-col max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FF4D00] text-[13px] font-bold tracking-[0.2em] uppercase">Featured Launches</span>
              <div className="h-[1px] w-12 bg-[#FF4D00] opacity-30"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] tracking-tight mb-6">
              A Few Brands We&apos;re{" "}
              <span className="text-[#FF4D00] relative inline-block">
                Proud Of
                <div className="absolute bottom-2 left-0 w-full h-[6px] bg-[#FF4D00] opacity-30"></div>
              </span>
            </h2>
            
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
              Real brands. Real results. From unique ideas to successful launches across perfume, cosmetics, skincare and more.
            </p>
          </div>
        </div>

        {/* Cards Grid / Mobile Carousel */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {launches.map((launch, index) => (
            <Link 
              href={launch.href}
              key={index} 
              className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-auto md:h-full border border-gray-100 group block cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-[#F8F9FA] border-b border-gray-50 overflow-hidden">
                <Image 
                  src={launch.image} 
                  alt={launch.title} 
                  fill 
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[20px] md:text-[22px] font-black text-[#1E1E1E] tracking-tight">{launch.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-[10px] md:text-[11px] font-bold ${launch.badgeColor}`}>
                    {launch.badge}
                  </span>
                </div>
                
                <p className="text-gray-500 text-[12px] md:text-[13px] font-medium leading-relaxed mb-6 flex-grow">
                  {launch.description}
                </p>
                
                <div 
                  className="inline-flex items-center gap-2 text-[#4A72FF] font-bold text-sm hover:text-[#1d4ed8] transition-colors group-hover:text-[#1d4ed8] w-fit mt-auto"
                >
                  Read the story
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}

