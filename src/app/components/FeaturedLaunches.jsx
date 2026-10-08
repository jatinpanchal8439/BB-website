"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function FeaturedLaunches() {
  const [activeIndex, setActiveIndex] = useState(0);

  const launches = [
    {
      title: "Blush En Bloom",
      badge: "Perfume",
      badgeColor: "bg-[#FFF0E6] text-[#FF6B35]",
      description: "A floral perfume collection with 3 scents and 5,000+ bottles sold in the first 60 days.",
      image: "/M3.png",
      href: "/case-study",
    },
    {
      title: "Biographey",
      badge: "Perfume",
      badgeColor: "bg-[#EFF6FF] text-[#3B82F6]",
      description: "Crafted a signature scent with lasting depth.",
      image: "/M2.png",
      href: "/case-study",
    },
    {
      title: "Grevety",
      badge: "Skincare",
      badgeColor: "bg-[#F0FDF4] text-[#16A34A]",
      description: "Launched a clean skincare line with strong marketplace performance.",
      image: "/M1.png",
      href: "/case-study",
    },
  ];

  // Auto-play animation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev < launches.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, [launches.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : launches.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < launches.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="featured-launches"
      className="relative bg-[#FCFBF8] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-gray-100/70"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="launches-header flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 gap-6">
          <div className="flex flex-col max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight">
              A Few Brands We&apos;re{" "}
              <span className="text-[#FF5000] relative inline-block">
                Proud Of
                <span className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-[#FF5000]/70 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base font-normal mt-3 leading-relaxed">
              Real brands. Real results. From unique ideas to successful launches across perfume, cosmetics, skincare and more.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 self-stretch md:self-auto">
            {/* View All Launches Button */}
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              View All Launches
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative w-full overflow-hidden rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-gray-100/80 bg-white">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {launches.map((launch, index) => (
              <div key={index} className="w-full shrink-0 flex flex-col md:flex-row h-full group">
                
                {/* Image Container */}
                <div className="relative w-full md:w-[45%] lg:w-1/2 aspect-[16/10] md:aspect-auto min-h-[250px] md:min-h-[400px] bg-gray-50 overflow-hidden">
                  <Image
                    src={launch.image}
                    alt={launch.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority={index === 0}
                  />
                </div>

                {/* Card Content */}
                <div className="p-8 md:p-10 lg:p-14 flex flex-col justify-center w-full md:w-[55%] lg:w-1/2 bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${launch.badgeColor}`}>
                      {launch.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
                    {launch.title}
                  </h3>
                  
                  <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed mb-10">
                    {launch.description}
                  </p>

                  <Link
                    href={launch.href}
                    className="inline-flex items-center gap-2 text-[#3B82F6] font-bold text-sm hover:underline mt-auto group/link w-fit"
                  >
                    Read the full story
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Custom Navigation (Dots & Arrows aligned horizontally) */}
        <div className="flex items-center justify-center gap-6 mt-10">
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
             {launches.map((_, idx) => (
               <div 
                 key={idx}
                 onClick={() => setActiveIndex(idx)}
                 className={`cursor-pointer transition-all duration-300 rounded-full ${
                   activeIndex === idx 
                     ? "w-7 h-2 bg-[#FF5000]" 
                     : "w-3 h-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"
                 }`}
               />
             ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2 pl-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all cursor-pointer hover:shadow-md"
                aria-label="Previous"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#FF5000] flex items-center justify-center text-white transition-all cursor-pointer shadow-sm hover:bg-[#E64800] hover:shadow-md shadow-[#FF5000]/20"
                aria-label="Next"
              >
                <ArrowRight size={18} />
              </button>
          </div>

        </div>

      </div>
    </section>
  );
}
