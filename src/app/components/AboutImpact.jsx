import React from 'react';
import { BarChart3, Package, Users, Award } from 'lucide-react';

export default function AboutImpact() {
  return (
    <section className="w-full bg-[#FCFBF8] font-sans py-12 sm:py-16 lg:py-24 border-t border-[#f0eee4]">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center text-center">
        
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <span className="w-6 sm:w-8 h-[2px] bg-[#FF4D00]"></span>
          <span className="text-[#6b7280] font-bold tracking-[0.2em] text-xs sm:text-[12px] uppercase">Our Impact</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0B1B36] leading-[1.1] tracking-tight mb-4 sm:mb-6">
          Numbers That <span className="text-[#FF4D00]">Build Trust</span>
        </h2>
        
        <p className="text-[#6b7280] text-sm sm:text-base md:text-[17px] leading-[1.8] max-w-[600px] font-medium mb-10 sm:mb-16">
          Real outcomes, real founders, real growth. Here's what we've achieved together with our clients.
        </p>

        {/* Stats Grid - 2 cols on mobile, 4 cols on desktop */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center px-2 sm:px-4">
            <div className="bg-[#FFF5E6] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-6">
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF4D00]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#FF4D00] font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">₹100Cr+</h3>
            <p className="text-[#0B1B36] font-bold text-xs sm:text-sm lg:text-[15px] mb-1 sm:mb-2">Cumulative Client GMV</p>
            <p className="text-[#6b7280] text-[11px] sm:text-xs lg:text-[13px] leading-[1.5] sm:leading-[1.6] max-w-[220px]">
              Helping founders turn ideas into revenue-generating brands.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center px-2 sm:px-4">
            <div className="bg-[#FFF5E6] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-6">
              <Package className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF4D00]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#FF4D00] font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">120+</h3>
            <p className="text-[#0B1B36] font-bold text-xs sm:text-sm lg:text-[15px] mb-1 sm:mb-2">Unique Products</p>
            <p className="text-[#6b7280] text-[11px] sm:text-xs lg:text-[13px] leading-[1.5] sm:leading-[1.6] max-w-[220px]">
              From concept to market, across multiple categories.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center px-2 sm:px-4">
            <div className="bg-[#FFF5E6] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF4D00]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#FF4D00] font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">5,000+</h3>
            <p className="text-[#0B1B36] font-bold text-xs sm:text-sm lg:text-[15px] mb-1 sm:mb-2">Strategy Hours</p>
            <p className="text-[#6b7280] text-[11px] sm:text-xs lg:text-[13px] leading-[1.5] sm:leading-[1.6] max-w-[220px]">
              Hands-on guidance to help founders make smarter decisions.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center px-2 sm:px-4">
            <div className="bg-[#FFF5E6] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-6">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF4D00]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#FF4D00] font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">100+</h3>
            <p className="text-[#0B1B36] font-bold text-xs sm:text-sm lg:text-[15px] mb-1 sm:mb-2">Founders & Brands</p>
            <p className="text-[#6b7280] text-[11px] sm:text-xs lg:text-[13px] leading-[1.5] sm:leading-[1.6] max-w-[220px]">
              Trusted by ambitious entrepreneurs across India.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
