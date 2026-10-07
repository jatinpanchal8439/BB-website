import React from 'react';
import { Search, Box, Rocket, TrendingUp, ChevronRight } from 'lucide-react';

export default function AboutProcess() {
  return (
    <section className="w-full bg-[#FCFBF8] font-sans py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col">
        
        {/* Header Content */}
        <div className="flex flex-col mb-10 sm:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[11px]">09</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#FF4D00]"></span>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">How We Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0B1B36] leading-[1.1] tracking-tight mb-4 sm:mb-5">
            A process that<br/>
            <span className="text-[#FF4D00]">feels like a partner</span>
          </h2>
          
          <p className="text-[#6b7280] text-sm sm:text-base md:text-[17px] leading-[1.8] max-w-[650px] font-medium">
            We break launches into clear phases so founders can understand what happens next, when decisions matter most, and how we support every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="w-full relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[50px] left-[5%] right-[5%] h-[1.5px] bg-[#FF4D00]/20 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl lg:rounded-[2rem] p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-8">
                <span className="text-[#FF4D00] font-bold text-base sm:text-lg">01</span>
                <div className="hidden lg:flex w-6 h-6 rounded-full bg-white border border-[#FF4D00] items-center justify-center absolute -right-3 top-12 z-20">
                  <ChevronRight className="w-3 h-3 text-[#FF4D00]" />
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5E6] flex items-center justify-center mb-4 sm:mb-6">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[#0B1B36] font-extrabold text-base sm:text-[18px] mb-2 sm:mb-4">Validate the idea</h3>
              <p className="text-[#6b7280] text-xs sm:text-[14px] leading-[1.7] font-medium">
                We help founders test assumptions, define the right product, and build a clear launch plan for the market.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl lg:rounded-[2rem] p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-8">
                <span className="text-[#FF4D00] font-bold text-base sm:text-lg">02</span>
                <div className="hidden lg:flex w-6 h-6 rounded-full bg-white border border-[#FF4D00] items-center justify-center absolute -right-3 top-12 z-20">
                  <ChevronRight className="w-3 h-3 text-[#FF4D00]" />
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5E6] flex items-center justify-center mb-4 sm:mb-6">
                <Box className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[#0B1B36] font-extrabold text-base sm:text-[18px] mb-2 sm:mb-4">Build the brand</h3>
              <p className="text-[#6b7280] text-xs sm:text-[14px] leading-[1.7] font-medium">
                We shape positioning, create packaging, naming, and visual identity so the brand feels polished from the start.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl lg:rounded-[2rem] p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-8">
                <span className="text-[#FF4D00] font-bold text-base sm:text-lg">03</span>
                <div className="hidden lg:flex w-6 h-6 rounded-full bg-white border border-[#FF4D00] items-center justify-center absolute -right-3 top-12 z-20">
                  <ChevronRight className="w-3 h-3 text-[#FF4D00]" />
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5E6] flex items-center justify-center mb-4 sm:mb-6">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[#0B1B36] font-extrabold text-base sm:text-[18px] mb-2 sm:mb-4">Launch with confidence</h3>
              <p className="text-[#6b7280] text-xs sm:text-[14px] leading-[1.7] font-medium">
                We handle manufacturing, compliance, and launch execution so founders can focus on growth instead of operations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl lg:rounded-[2rem] p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-8">
                <span className="text-[#FF4D00] font-bold text-base sm:text-lg">04</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF5E6] flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[#0B1B36] font-extrabold text-base sm:text-[18px] mb-2 sm:mb-4">Keep improving</h3>
              <p className="text-[#6b7280] text-xs sm:text-[14px] leading-[1.7] font-medium">
                After launch, we help founders refine the mix, respond to feedback, and build a stronger brand over time.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
