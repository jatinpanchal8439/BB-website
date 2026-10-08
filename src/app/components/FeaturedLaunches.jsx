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
      image: "/M3.png", 
      href: "/case-study",
    },
    {
      title: "Biographey",
      badge: "Perfume",
      badgeColor: "bg-[#EEF2FF] text-[#4A72FF]",
      description: "Crafted a signature scent with lasting depth.",
      image: "/M2.png",
      href: "/case-study",
    },
    {
      title: "Grevety",
      badge: "Skincare",
      badgeColor: "bg-[#ECFDF5] text-[#059669]",
      description: "Launched a clean skincare line with strong marketplace performance.",
      image: "/M1.png",
      href: "/case-study",
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

          <div className="flex flex-col items-start lg:items-end gap-6">
            <Link 
              href="#all-launches" 
              className="inline-flex items-center gap-2 bg-transparent border-[1.5px] border-[#4A72FF] text-[#4A72FF] hover:bg-[#4A72FF] hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 shadow-sm"
            >
              View All Launches
              <ArrowRight size={16} />
            </Link>
            
            {/* Arrows */}
            <div className="flex gap-4">
              <button 
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Previous launches"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                className="w-12 h-12 rounded-full bg-[#FFD7BA] border border-[#FFD7BA] flex items-center justify-center text-[#FF4D00] hover:bg-[#FFC099] transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Next launches"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {launches.map((launch, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-100 group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-[#F8F9FA] border-b border-gray-50 overflow-hidden">
                <Image 
                  src={launch.image} 
                  alt={launch.title} 
                  fill 
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[22px] font-black text-[#1E1E1E] tracking-tight">{launch.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${launch.badgeColor}`}>
                    {launch.badge}
                  </span>
                </div>
                
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed mb-6 flex-grow">
                  {launch.description}
                </p>
                
                <Link 
                  href={launch.href} 
                  className="inline-flex items-center gap-2 text-[#4A72FF] font-bold text-sm hover:text-[#1d4ed8] transition-colors group/link w-fit mt-auto"
                >
                  Read the story
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

