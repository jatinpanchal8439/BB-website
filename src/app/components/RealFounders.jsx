"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowRight, TrendingUp, Trophy, BarChart3, Droplet, Sparkles, Leaf, Pill, Flower2 } from "lucide-react";

export default function RealFounders() {
  const [activeFilter, setActiveFilter] = useState("All");

  const SprayIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11h10v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V11z" />
      <path d="M6 11V8a3 3 0 0 1 6 0v3" />
      <path d="M9 4V2" />
      <path d="M17 6h3" />
      <path d="M16 3l2-1" />
      <path d="M16 9l2 1" />
    </svg>
  );

  const LeafIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 4 13C4 7 10 3 20 3c0 10-4 16-9 17Z" />
      <path d="M4 21c3.5-3.5 6-8 7-13" />
    </svg>
  );

  const PillIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );

  const filters = [
    { name: "All", icon: null },
    { name: "Perfume", icon: SprayIcon, category: "Perfume" },
    { name: "Beauty & Skincare", icon: Flower2, category: "Beauty & Skincare" },
    { name: "Ayurveda", icon: LeafIcon, category: "Ayurveda" },
    { name: "Nutraceuticals", icon: PillIcon, category: "Nutraceuticals" },
  ];

  const brands = [
    {
      name: "CONTEMPRORY",
      category: "Beauty & Skincare",
      image: "/videos/paroha-thumb.jpg",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Launch"],
      callout: { text: "Grand Launch with 50+ Creators", icon: Sparkles },
      link: "/case-study/contemprory",
    },
    {
      name: "BLUSH EN BLOOM",
      category: "Perfume",
      image: "/mo1.png",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Launch"],
      callout: { text: "Now on Amazon Best Sellers", icon: TrendingUp },
      link: "/case-study/blush-en-bloom",
    },
    {
      name: "BIOGRAOPHEY",
      category: "Perfume",
      image: "/mo2.png",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Branding"],
      callout: { text: "Tripled revenue in 3 months", icon: BarChart3 },
      link: "/case-study/biographey",
    },
    {
      name: "GREVETY",
      category: "Beauty & Skincare",
      image: "/mo3.png",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Launch"],
      callout: { text: "Now on Amazon Best Sellers", icon: Trophy },
      link: "/case-study/grevety",
    },
    {
      name: "DREFOR",
      category: "Perfume",
      image: "/mo4.png",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Launch"],
      callout: { text: "50K+ units sold in 90 days", icon: BarChart3 },
      link: "/case-study/drefor",
    },
  ];

  const filteredBrands = activeFilter === "All" 
    ? brands 
    : brands.filter(brand => {
        const selected = filters.find(f => f.name === activeFilter);
        return brand.category === (selected?.category || activeFilter);
      });

  return (
    <section className="w-full bg-[#FCFBF8] py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col items-center">
        
        {/* Header Badge */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-8 sm:w-16 h-[1px] bg-gray-300"></div>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#18181B] whitespace-nowrap font-[family-name:var(--font-poppins)]">
            Brands We&apos;ve Helped
          </span>
          <div className="w-8 sm:w-16 h-[1px] bg-gray-300"></div>
        </div>

        <h2 className="text-[2.2rem] xs:text-[2.6rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-black text-[#111] leading-[1.06] tracking-tight text-center mb-3 sm:mb-4">
          Real Founders.<br />
          <span className="text-[#FF4D00]">Real Launches.</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 font-normal sm:font-medium text-center mb-6 sm:mb-10 max-w-xl px-2">
          From idea to market — explore the brands we&apos;ve helped build.
        </p>

        {/* Filters - Horizontal scrollable single-row without scrollbar */}
        <div className="w-full max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1 mb-8 sm:mb-14">
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-3 px-3 sm:px-0 min-w-max mx-auto">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`flex items-center gap-1.5 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
                  activeFilter === filter.name
                    ? "bg-[#FF4D00] text-white shadow-md shadow-orange-500/25"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                {filter.icon && <filter.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-current" />}
                <span>{filter.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filteredBrands.map((brand, index) => (
            <Link 
              href={brand.link || "/case-study"}
              key={index} 
              className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-[#19194d] mb-4 tracking-tight uppercase">
                  {brand.name}
                </h3>
                


                {/* Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {brand.chips.map((chip, i) => (
                    <span key={i} className="bg-gray-50 text-gray-500 px-3 py-1 rounded-full text-[10px] font-semibold border border-gray-100">
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {/* Callout */}
                  <div className="bg-[#FFF8F5] border border-[#FFE8DF] rounded-xl p-3 flex items-center gap-2 mb-4">
                    <brand.callout.icon className="w-4 h-4 text-[#FF4D00]" strokeWidth={2.5} />
                    <span className="text-xs font-bold text-[#FF4D00]">
                      {brand.callout.text}
                    </span>
                  </div>

                  {/* Footer / Read case study */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
                    <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                      Read case study
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#19194d] flex items-center justify-center group-hover:bg-[#FF4D00] transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
