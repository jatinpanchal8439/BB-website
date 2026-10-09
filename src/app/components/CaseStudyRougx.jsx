"use client";
import Image from "next/image";
import { ArrowDownRight, Calendar, ShoppingCart, Star } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="relative w-full font-sans bg-[#FCFBF8] pt-0">
      
      {/* Full Width Background Area */}
      <div className="relative w-full overflow-hidden bg-[#fff8f2]">
        
        {/* Background Image: using split.jpg */}
        <div className="absolute inset-0 z-0">
           <Image 
             src="/frame-15.png" 
             alt="ROUGX Case Study Background" 
             fill 
             className="object-cover object-right md:object-right" 
             priority
           />
           {/* Gradient fade on mobile to ensure text readability */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f2] via-[#fff8f2]/95 to-transparent md:hidden"></div>
           {/* Subtle gradient for desktop left side just in case */}
           <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#fff8f2] via-[#fff8f2]/95 to-transparent w-[65%]"></div>
        </div>

        {/* Content Wrapper constrained to max-width */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-40 lg:pb-44 min-h-[550px] md:min-h-[650px] lg:min-h-[700px]">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="w-12 md:w-16 h-[2px] bg-[#f55926]"></span>
              <span className="text-[#FF4D00] font-[family-name:var(--font-poppins)] font-extrabold tracking-widest text-xs sm:text-sm md:text-base uppercase">Case Study</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-[800] text-[#111928] leading-[1.05] mb-6 md:mb-8 tracking-tight">
              From Idea <br /> to Market in <br />
              <span className="text-[#f55926]">60 Days.</span>
            </h2>
            
            <p className="text-[#4b5563] text-base sm:text-lg md:text-xl lg:text-[22px] mb-8 sm:mb-10 md:mb-12 max-w-xl leading-relaxed font-medium">
              How Banega Brand helped launch ROUGX — a premium fragrance brand loved by customers.
            </p>
            
            {/* Working CTA Button (Scrolls to Details) */}
            <a 
              href="#details"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#f55926] hover:bg-[#df4a1a] transition-all duration-300 text-white rounded-full py-3 px-5 sm:py-4 sm:px-6 md:px-8 font-semibold text-base sm:text-lg md:text-xl flex items-center justify-between w-fit gap-4 sm:gap-6 shadow-[0_10px_30px_rgba(245,89,38,0.3)] hover:-translate-y-1"
            >
              Read the Full Case Study 
              <span className="bg-white text-[#f55926] rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* Right Content Placeholder for layout balance */}
          <div className="w-full md:w-1/2 relative hidden md:flex justify-center md:justify-end z-30">
          </div>

        </div>
      </div>

      {/* Floating Stats Bar - Improved for Mobile */}
      <div className="relative -mt-16 sm:-mt-20 md:-mt-24 mx-auto w-[92%] max-w-[1200px] bg-[#fffaf5] rounded-3xl md:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-20 flex flex-col md:flex-row items-start md:items-center justify-between divide-y md:divide-y-0 md:divide-x divide-orange-100/50 border border-orange-50">
        
        <div className="flex items-center gap-4 md:gap-5 w-full md:w-1/3 py-3 md:py-4 px-2 md:px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <Calendar className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">60 Days</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">From idea to launch</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-5 w-full md:w-1/3 py-3 md:py-4 px-2 md:px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <ShoppingCart className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">Live on Amazon</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">With great initial response</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-5 w-full md:w-1/3 py-3 md:py-4 px-2 md:px-4 justify-start">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffebd9] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
            <Star className="text-[#f55926] w-6 h-6 md:w-7 md:h-7" />
          </div>
          <div>
            <p className="font-extrabold text-[#111928] text-base md:text-lg lg:text-xl">A Premium Brand</p>
            <p className="text-[#6b7280] text-[13px] md:text-sm lg:text-base font-medium mt-0.5">Loved by customers</p>
          </div>
        </div>

      </div>

      {/* Spacer to give room below the floating bar */}
      <div className="h-12 sm:h-16 md:h-24"></div>

    </section>
  );
}
