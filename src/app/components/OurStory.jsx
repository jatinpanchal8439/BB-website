import React from 'react';
import { Lightbulb, Settings, Package, FileCheck2, Quote } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="our-story" className="relative w-full bg-[#FCFBF8] font-sans py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 lg:gap-16 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="w-full xl:w-[50%] flex flex-col pt-2 sm:pt-4 xl:pt-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-[2px] bg-[#FF4D00]"></span>
            <span className="font-bold tracking-[0.2em] sm: uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Our Story</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[#0B1B36] leading-[1.1] sm:leading-[1.05] tracking-tight mb-6 sm:mb-8">
            Why We Started<br/>
            <span className="text-[#FF4D00]">Banega Brand</span>
          </h2>
          
          <p className="text-[#4b5563] text-sm sm:text-base md:text-[17px] leading-[1.8] max-w-[540px] font-medium mb-6 sm:mb-10">
            Most founders we meet have a good product idea and no clear idea of what happens next. Who makes it? How much will it cost? What does packaging involve? Which registrations do you need? These questions come all at once, and people often give up or spend money in the wrong place.
          </p>
          
          <div className="bg-transparent border-[1.5px] border-[#FF4D00]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex items-start gap-4 sm:gap-6 mb-6 sm:mb-10 relative max-w-[540px]">
            <Quote className="text-[#FF4D00] w-8 h-8 sm:w-12 sm:h-12 fill-[#FF4D00] shrink-0 rotate-180" />
            <p className="text-[#4b5563] text-xs sm:text-[15px] md:text-base font-medium leading-[1.7] flex-1 pt-1">
              Mayank Tiwari started Banega Brand after seeing founders struggle with fragmented guidance, dishonest manufacturing promises, and wasted capital. His mission was simple: give entrepreneurs an honest, end-to-end partner who walks every step with them.
            </p>
          </div>

          <p className="text-[#4b5563] text-sm sm:text-base md:text-[17px] leading-[1.8] max-w-[540px] font-medium">
            Today we help founders with the product, manufacturing, branding, compliance and launch, and we explain each step as we go. If something isn't a good idea, we'll tell you before you spend money on it.
          </p>
        </div>

        {/* Right Side: Flow Diagram */}
        <div className="w-full xl:w-[50%] relative mt-6 xl:mt-0 xl:-mr-10">
           
           {/* Desktop Floating Layout (lg and up) */}
           <div className="hidden lg:flex relative w-full h-[800px] justify-center items-center">
             {/* SVG Connecting Lines for Desktop */}
             <svg className="absolute w-full h-full inset-0 pointer-events-none z-0" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <polygon points="0 0, 7 3.5, 0 7" fill="#FF4D00" />
                  </marker>
                </defs>
                
                {/* Path 1: Guidance to Manufacturing */}
                <path d="M 270 170 Q 430 150 430 220" fill="none" stroke="#FF4D00" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
                
                {/* Path 2: Manufacturing to Branding */}
                <path d="M 400 400 Q 300 450 250 410" fill="none" stroke="#FF4D00" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
                
                {/* Path 3: Branding to Compliance */}
                <path d="M 280 620 Q 460 620 460 670" fill="none" stroke="#FF4D00" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
             </svg>

             {/* 1. Product Guidance */}
             <div className="absolute top-[8%] left-[12%] bg-white rounded-[2.5rem] p-6 w-[180px] aspect-square flex flex-col items-center justify-center shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border-2 border-white z-10 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-[#FFF5E6] w-[60px] h-[60px] rounded-[1.2rem] flex items-center justify-center mb-5">
                  <Lightbulb className="w-8 h-8 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <span className="text-[#0B1B36] font-extrabold text-[16px] text-center leading-tight">Product<br/>Guidance</span>
             </div>

             {/* 2. Manufacturing Support */}
             <div className="absolute top-[28%] right-[10%] bg-white rounded-[2.5rem] p-6 w-[180px] aspect-square flex flex-col items-center justify-center shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border-2 border-white z-10 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-[#FFF5E6] w-[60px] h-[60px] rounded-[1.2rem] flex items-center justify-center mb-5">
                  <Settings className="w-8 h-8 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <span className="text-[#0B1B36] font-extrabold text-[16px] text-center leading-tight">Manufacturing<br/>Support</span>
             </div>

             {/* 3. Branding & Packaging */}
             <div className="absolute top-[52%] left-[5%] bg-[#FF4D00] rounded-[2.5rem] p-6 w-[230px] aspect-square flex flex-col items-center justify-center shadow-[0_20px_60px_-15px_rgba(255,77,0,0.6)] z-20 hover:-translate-y-2 transition-transform duration-300">
                <div className="border border-white/40 rounded-[1.2rem] w-[70px] h-[70px] flex items-center justify-center mb-6">
                  <Package className="w-9 h-9 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-white font-extrabold text-[20px] text-center leading-tight tracking-wide">Branding &<br/>Packaging</span>
             </div>

             {/* 4. Compliance & Launch */}
             <div className="absolute bottom-[4%] right-[15%] bg-white rounded-[2.5rem] p-6 w-[180px] aspect-square flex flex-col items-center justify-center shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border-2 border-white z-10 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-[#FFF5E6] w-[60px] h-[60px] rounded-[1.2rem] flex items-center justify-center mb-5">
                  <FileCheck2 className="w-8 h-8 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <span className="text-[#0B1B36] font-extrabold text-[16px] text-center leading-tight">Compliance<br/>& Launch</span>
             </div>
           </div>

           {/* Mobile / Tablet Responsive Grid Layout (under lg) */}
           <div className="grid lg:hidden grid-cols-2 gap-3 sm:gap-5 max-w-md mx-auto w-full py-4">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
                <div className="bg-[#FFF5E6] w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <span className="text-[#0B1B36] font-bold text-xs sm:text-base leading-tight">Product<br/>Guidance</span>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
                <div className="bg-[#FFF5E6] w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <span className="text-[#0B1B36] font-bold text-xs sm:text-base leading-tight">Manufacturing<br/>Support</span>
              </div>

              {/* Card 3 - Highlighted */}
              <div className="bg-[#FF4D00] rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_15px_40px_-15px_rgba(255,77,0,0.5)]">
                <div className="border border-white/40 rounded-xl sm:rounded-2xl w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center mb-3 sm:mb-4">
                  <Package className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-white font-extrabold text-xs sm:text-base leading-tight">Branding &<br/>Packaging</span>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
                <div className="bg-[#FFF5E6] w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <FileCheck2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <span className="text-[#0B1B36] font-bold text-xs sm:text-base leading-tight">Compliance<br/>& Launch</span>
              </div>

           </div>

        </div>
      </div>
    </section>
  );
}
