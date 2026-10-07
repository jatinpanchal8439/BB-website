import React from 'react';
import Image from 'next/image';

export default function FAQHero() {
  return (
    <section className="w-full bg-[#FCF8F5] pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden font-sans">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[48%] flex flex-col z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[48px] sm:text-[56px] lg:text-[68px] font-[800] leading-[1.05] tracking-tight text-[#061B35] mb-6">
            Frequently<br />
            <span className="text-[#FF5425]">Asked Questions</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-[440px]">
            Answers to the questions founders ask most – starting with just an idea, cost, timelines and how the process works.
          </p>

        </div>

        {/* Right Visual */}
        <div className="w-full lg:w-[48%] relative h-[400px] lg:h-[550px] flex justify-center items-center">
          <div className="relative w-full h-full lg:scale-125 lg:origin-center drop-shadow-2xl">
            <Image 
              src="/assets/faq-hero-visual-raw.png" 
              alt="FAQ 3D Question Mark" 
              fill 
              className="object-contain object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
