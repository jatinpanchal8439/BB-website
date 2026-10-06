"use client";
import React, { useRef, useState } from "react";
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : launches.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < launches.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      className="relative bg-[#FCFBF8] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-gray-100/70"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 relative z-10">
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

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2.5 mt-1">
              <button
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all cursor-pointer hover:shadow"
                aria-label="Previous launches"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFA066] hover:bg-[#FF8A44] flex items-center justify-center text-white transition-all cursor-pointer shadow-sm shadow-[#FFA066]/30 hover:shadow"
                aria-label="Next launches"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {launches.map((launch, index) => (
            <div
              key={index}
              className="launch-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-100/80 group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] bg-gray-50 overflow-hidden">
                <Image
                  src={launch.image}
                  alt={launch.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#0F172A] tracking-tight">
                    {launch.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${launch.badgeColor}`}
                  >
                    {launch.badge}
                  </span>
                </div>

                <p className="text-gray-500 text-xs sm:text-[13px] font-normal leading-relaxed mb-6 flex-grow">
                  {launch.description}
                </p>

                <Link
                  href={launch.href}
                  className="inline-flex items-center gap-1.5 text-[#3B82F6] font-semibold text-xs sm:text-sm hover:underline mt-auto group/link"
                >
                  Read the story
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

