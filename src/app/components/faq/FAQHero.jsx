import React from 'react';
import Image from 'next/image';

export default function FAQHero() {
  return (
    <section className="w-full bg-[#FCF8F5] pt-8 pb-10 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 overflow-hidden font-sans">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[48%] flex flex-col z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1.5px] bg-[#061B35]/70"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#061B35] text-[11px] sm:text-[13px] font-[family-name:var(--font-poppins)]">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] xs:text-[46px] sm:text-[56px] lg:text-[68px] font-[800] leading-[1.05] tracking-tight text-[#061B35] mb-4 sm:mb-6">
            Frequently<br />
            <span className="text-[#FF5425]">
              Asked<br className="sm:hidden" /> Questions
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-[14px] sm:text-[17px] font-medium leading-relaxed max-w-[440px]">
            Answers to the questions founders ask most – starting with just an idea, cost, timelines and how the process works.
          </p>

        </div>

        {/* Right Visual */}
        <div className="w-full lg:w-[48%] relative h-[280px] xs:h-[320px] sm:h-[400px] lg:h-[550px] flex justify-center items-center mt-4 sm:mt-6 lg:mt-0">
          <div className="relative w-full h-full lg:scale-125 lg:origin-center drop-shadow-xl">
            <Image 
              src="/assets/faq-hero-visual-raw.png" 
              alt="FAQ 3D Question Mark" 
              fill 
              priority
              className="object-contain object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
