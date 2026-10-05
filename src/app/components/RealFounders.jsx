"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Zap, ArrowRight, TrendingUp, Trophy, BarChart3, Droplet, Sparkles, Leaf, Pill } from "lucide-react";

export default function RealFounders() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All", icon: null },
    { name: "Perfume", icon: Droplet },
    { name: "Beauty & Skincare", icon: Sparkles },
    { name: "Ayurveda", icon: Leaf },
    { name: "Nutraceuticals", icon: Pill },
  ];

  const brands = [
    {
      name: "BLUSH EN BLOOM",
      category: "Beauty & Skincare",
      image: "/mo1.png",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Launch"],
      callout: { text: "Now on Amazon Best Sellers", icon: TrendingUp },
    },
    {
      name: "BIOGRAOPHEY",
      category: "Perfume",
      image: "/mo2.png",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Branding"],
      callout: { text: "Tripled revenue in 3 months", icon: BarChart3 },
    },
    {
      name: "GREVETY",
      category: "Ayurveda",
      image: "/mo3.png",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Launch"],
      callout: { text: "Now on Amazon Best Sellers", icon: Trophy },
    },
    {
      name: "DREFOR",
      category: "Perfume",
      image: "/mo4.png",
      tag: "Live in 60 days",
      chips: ["Formulation", "Packaging", "Launch"],
      callout: { text: "50K+ units sold in 90 days", icon: BarChart3 },
    },
    {
      name: "108 LUXURY",
      category: "Nutraceuticals",
      image: "/mo1.png", // Reusing image for demo
      tag: "Live in 60 days",
      chips: ["Formulation", "Launch"],
      callout: { text: "Top rated on marketplaces", icon: TrendingUp },
    }
  ];

  const filteredBrands = activeFilter === "All" 
    ? brands 
    : brands.filter(brand => brand.category === activeFilter);

  return (
    <section className="w-full bg-[#FCFBF8] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-[1px] bg-gray-400"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#333] uppercase">Brands We&apos;ve Helped</span>
          <div className="w-16 h-[1px] bg-gray-400"></div>
        </div>

        <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-black text-[#111] leading-[1.05] tracking-tight text-center mb-6">
          Real Founders.<br />
          <span className="text-[#FF4D00]">Real Launches.</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-500 font-medium text-center mb-12">
          From idea to market — explore the brands we&apos;ve helped build.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.name
                  ? "bg-[#FF4D00] text-white shadow-lg shadow-orange-500/30"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              {filter.icon && <filter.icon className="w-4 h-4" strokeWidth={2.5} />}
              {filter.name}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filteredBrands.map((brand, index) => (
            <div key={index} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              
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
                
                {/* Live Tag */}
                <div className="inline-flex items-center gap-1.5 bg-[#FFF0E8] text-[#FF4D00] px-3 py-1.5 rounded-full text-[11px] font-bold w-fit mb-5">
                  <Zap className="w-3.5 h-3.5 fill-[#FF4D00]" />
                  {brand.tag}
                </div>

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
                    <button className="w-8 h-8 rounded-full bg-[#19194d] flex items-center justify-center group-hover:bg-[#FF4D00] transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
