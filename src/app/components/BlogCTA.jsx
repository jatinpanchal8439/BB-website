import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function BlogCTA() {
  return (
    <section className="w-full pt-8 pb-12 sm:pt-16 sm:pb-20 lg:py-24 font-sans bg-[#FAF5EE] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[48%] flex flex-col z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1.5px] bg-[#0B1B36]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#0B1B36] text-[11px] sm:text-[13px] font-[family-name:var(--font-poppins)]">
              Blog
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[34px] xs:text-[40px] sm:text-[48px] lg:text-[54px] font-[800] text-[#0B1B36] leading-[1.08] tracking-tight mb-4 sm:mb-6">
            Practical Guides for<br />
            <span className="text-[#FF5000]">First–Time Brand Founders</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-[14px] sm:text-[16px] font-medium leading-relaxed max-w-[460px] mb-6 sm:mb-8">
            Real answers to the questions founders ask before launching a brand – manufacturers, MOQs, packaging costs, compliance and marketplace launches.
          </p>

          {/* CTA Button */}
          <Link 
            href="#all-guides" 
            className="group inline-flex items-center justify-center gap-3 bg-[#0B1B36] hover:bg-[#122A54] text-white px-7 sm:px-8 py-3.5 rounded-full font-bold text-[14px] sm:text-[14.5px] hover:-translate-y-0.5 transition-all duration-300 shadow-md w-fit cursor-pointer"
          >
            <span>Explore Our Blog</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

        {/* Right side artwork */}
        <div className="w-full lg:w-[50%] relative h-[260px] xs:h-[300px] sm:h-[380px] lg:h-[460px] flex items-center justify-center mt-4 sm:mt-6 lg:mt-0">
          <div className="relative w-full h-full drop-shadow-lg">
            <Image 
              src="/assets/blog-hero-visual.png"
              alt="Practical Guides for Brand Founders"
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
