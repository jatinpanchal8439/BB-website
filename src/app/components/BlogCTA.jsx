import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogCTA() {
  return (
    <section 
      className="w-full pt-28 pb-16 lg:pt-36 lg:pb-24 font-sans bg-cover bg-right lg:bg-center bg-no-repeat relative overflow-hidden" 
      style={{ backgroundImage: "url('/assets/blog-hero-full-bg.png')" }}
    >
      {/* Background mask to ensure HTML text on left is sharp and legible across all viewports */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EE] via-[#FAF5EE]/95 to-transparent w-full lg:w-[62%] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[48%] flex flex-col">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#FF5000]"></div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#FF5000] uppercase">
              Blog
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] sm:text-[48px] lg:text-[54px] font-[800] text-[#0B1B36] leading-[1.08] tracking-tight mb-6">
            Practical Guides for<br />
            <span className="text-[#FF5000]">First–Time Brand Founders</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-[15px] sm:text-[16px] font-medium leading-relaxed max-w-[460px] mb-10">
            Real answers to the questions founders ask before launching a brand – manufacturers, MOQs, packaging costs, compliance and marketplace launches.
          </p>

          {/* CTA Button */}
          <Link 
            href="#all-guides" 
            className="group flex items-center justify-center gap-3 bg-[#0B1B36] hover:bg-[#122A54] text-white px-8 py-3.5 rounded-full font-bold text-[14.5px] hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-blue-900/15 w-max cursor-pointer"
          >
            <span>Explore Our Blog</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

        {/* Right side spacer for background image artwork */}
        <div className="hidden lg:block w-[50%] h-[360px] lg:h-[460px]"></div>

      </div>
    </section>
  );
}
