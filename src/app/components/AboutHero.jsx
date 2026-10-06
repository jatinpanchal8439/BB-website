"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Rocket, Users, MapPin, Box, BarChart3 } from "lucide-react";

export default function AboutHero() {
  return (
    <section id="about" className="relative w-full bg-[#FCFBF8] font-sans py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 right-1/4 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-[#FFF5E6] rounded-full blur-[80px] -z-0"></div>
      <div className="absolute bottom-10 left-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#FFF5E6] rounded-full blur-[100px] -z-0"></div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 lg:gap-16 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="w-full xl:w-[45%] flex flex-col pt-2 sm:pt-4 md:pt-10">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="text-[#FF4D00] font-bold tracking-widest text-xs sm:text-sm">07</span>
            <span className="w-8 sm:w-10 h-[1px] bg-[#FF4D00]"></span>
            <span className="text-[#FF4D00] font-bold tracking-widest text-xs sm:text-sm uppercase">About</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#0B1B36] leading-[1.1] sm:leading-[1.05] tracking-tight mb-4">
            About<br/>
            <span className="text-[#FF4D00]">Banega</span> Brand
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B1B36] mb-4 sm:mb-5">
            Founded by <span className="text-[#FF4D00]">Mayank Tiwari</span>
          </h2>
          
          <p className="text-[#4b5563] text-sm sm:text-base md:text-lg leading-relaxed max-w-[440px] font-medium mb-8 sm:mb-10 md:mb-12">
            Banega Brand was built to make product launches simpler for founders. Learn why Mayank Tiwari started it and how we work with entrepreneurs across India.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-8 sm:mb-10 md:mb-12 border border-[#E5E7EB] md:border-none px-3 sm:px-4 md:px-0 bg-white md:bg-transparent rounded-2xl md:rounded-none py-4 sm:py-6 md:py-0 shadow-sm md:shadow-none">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Rocket className="text-[#FF4D00] w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1.5 sm:mb-2 md:mb-3 stroke-[1.5]" />
              <span className="text-[#FF4D00] font-extrabold text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1 tracking-tight">500+</span>
              <span className="text-[#6b7280] text-[9px] sm:text-[10px] md:text-xs font-medium leading-tight">Brands<br/>Launched</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-r border-[#E5E7EB] md:border-none px-1 sm:px-2 md:px-0">
              <Users className="text-[#FF4D00] w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1.5 sm:mb-2 md:mb-3 stroke-[1.5]" />
              <span className="text-[#FF4D00] font-extrabold text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1 tracking-tight">1000+</span>
              <span className="text-[#6b7280] text-[9px] sm:text-[10px] md:text-xs font-medium leading-tight">Entrepreneurs<br/>Supported</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <MapPin className="text-[#FF4D00] w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1.5 sm:mb-2 md:mb-3 stroke-[1.5]" />
              <span className="text-[#FF4D00] font-extrabold text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1 tracking-tight">25+</span>
              <span className="text-[#6b7280] text-[9px] sm:text-[10px] md:text-xs font-medium leading-tight">Cities<br/>Across India</span>
            </div>
          </div>
          
          <button className="bg-[#0B1B36] hover:bg-[#1a2b4c] transition-colors duration-300 text-white rounded-full py-3 sm:py-3.5 pl-6 sm:pl-8 pr-2.5 sm:pr-3 font-semibold text-sm sm:text-[15px] flex items-center justify-between w-full sm:w-fit gap-4 sm:gap-6 shadow-xl">
            Get to Know Our Journey 
            <span className="bg-[#FF4D00] text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right Side: Bento Grid Collage */}
        <div className="w-full xl:w-[55%] relative h-[420px] sm:h-[540px] md:h-[650px] xl:h-[700px] max-w-[800px] mx-auto mt-4 sm:mt-8 xl:mt-0">
          
          {/* Main Founder Image (Center Right) -> Now Bottles */}
          <div className="absolute top-0 right-[10%] sm:right-[15%] w-[68%] sm:w-[65%] h-[68%] sm:h-[65%] md:w-[70%] md:h-[70%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-0">
            <Image 
              src="/about-bottles.png" 
              alt="Perfume Bottles" 
              fill 
              sizes="(max-width: 768px) 70vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          {/* Orange Box (Middle Left) */}
          <div className="absolute top-[35%] md:top-[40%] left-0 w-[48%] sm:w-[45%] md:w-[40%] aspect-[4/3] bg-[#FF4D00] rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col justify-center shadow-xl z-10 border-2 sm:border-4 border-[#FCFBF8]">
            <Box className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-2 sm:mb-3 md:mb-4 stroke-2" />
            <h3 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl mb-0.5 sm:mb-1 tracking-tight">500+</h3>
            <p className="text-white/90 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">Brands<br/>Launched</p>
            <BarChart3 className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-white/30 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-[1.5]" />
          </div>

          {/* Bottles Image (Bottom Center) -> Now Founder */}
          <div className="absolute bottom-0 left-[8%] sm:left-[10%] w-[74%] sm:w-[70%] h-[32%] md:h-[35%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-20 border-[4px] sm:border-[6px] border-[#FCFBF8] bg-white">
            <Image 
              src="/mayank.png" 
              alt="Mayank Tiwari Founder" 
              fill 
              sizes="(max-width: 768px) 70vw, 40vw"
              className="object-cover object-[center_20%]"
            />
          </div>

          {/* Stats Column (Far Right) */}
          <div className="absolute top-[8%] sm:top-[10%] right-0 w-[24%] sm:w-[22%] md:w-[15%] h-[82%] sm:h-[80%] flex flex-col justify-between z-30">
            
            {/* Stat 1 */}
            <div className="bg-[#0B1B36] rounded-xl sm:rounded-2xl aspect-[1.1] flex flex-col items-center justify-center p-1 sm:p-2 text-center shadow-lg hover:-translate-y-1 transition-transform border border-white/20 sm:border-2 sm:border-[#FCFBF8]">
              <Users className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mb-1 sm:mb-1.5 md:mb-2 stroke-[1.5]" />
              <span className="text-white font-bold text-[9px] sm:text-xs md:text-sm tracking-tight mb-0.5">1000+</span>
              <span className="text-white/70 text-[6px] sm:text-[7px] md:text-[8px] leading-tight font-medium">Entrepreneurs<br/>Supported</span>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-[#ffe8db] rounded-xl sm:rounded-2xl aspect-[1.1] flex flex-col items-center justify-center p-1 sm:p-2 text-center shadow-lg hover:-translate-y-1 transition-transform border border-white/20 sm:border-2 sm:border-[#FCFBF8]">
              <MapPin className="text-[#FF4D00] w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mb-1 sm:mb-1.5 md:mb-2 stroke-[1.5]" />
              <span className="text-[#FF4D00] font-bold text-[9px] sm:text-xs md:text-sm tracking-tight mb-0.5">25+</span>
              <span className="text-[#FF4D00]/70 text-[6px] sm:text-[7px] md:text-[8px] leading-tight font-medium">Cities<br/>Across India</span>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-[#0B1B36] rounded-xl sm:rounded-2xl aspect-[1.1] flex flex-col items-center justify-center p-1 sm:p-2 text-center shadow-lg hover:-translate-y-1 transition-transform border border-white/20 sm:border-2 sm:border-[#FCFBF8]">
              <BarChart3 className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mb-1 sm:mb-1.5 md:mb-2 stroke-[1.5]" />
              <span className="text-white font-bold text-[9px] sm:text-xs md:text-sm tracking-tight mb-0.5">500+</span>
              <span className="text-white/70 text-[6px] sm:text-[7px] md:text-[8px] leading-tight font-medium">Brands<br/>Launched</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
