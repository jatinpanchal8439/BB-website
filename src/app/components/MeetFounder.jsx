import React from 'react';
import Image from 'next/image';
import { Rocket, Trophy, AlertTriangle, Quote } from 'lucide-react';

export default function MeetFounder() {
  return (
    <section className="relative w-full bg-[#FCFBF8] font-sans py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <span className="w-8 sm:w-10 h-[2px] bg-[#FF4D00]"></span>
            <span className="font-bold tracking-[0.2em] sm: uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Meet The Founder</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[#0B1B36] leading-[1.1] sm:leading-[1.05] tracking-tight mb-4 sm:mb-6">
            Meet <span className="text-[#FF4D00]">Mayank</span>
          </h2>
          
          <p className="text-[#4b5563] text-sm sm:text-base md:text-[17px] leading-[1.8] max-w-[680px] font-medium">
            Banega Brand is founded by Mayank Tiwari, an entrepreneur who has been through the real process of building and launching brands in India.
          </p>
        </div>

        <div className="w-full flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Side: Founder Image */}
          <div className="w-full xl:w-[42%] relative flex justify-center xl:justify-start items-end h-[340px] sm:h-[440px] md:h-[500px] xl:h-[650px] overflow-hidden rounded-3xl">
            {/* Beige Blob Background */}
            <div 
              className="absolute left-[-10%] sm:left-[-15%] bottom-[0%] w-[120%] sm:w-[130%] h-[80%] bg-[#FFF5E6] -z-10"
              style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
            ></div>
            
            <div className="relative w-full max-w-[500px] h-full flex items-end justify-center">
              <Image 
                src="/founder-new.png" 
                alt="Mayank Tiwari - Founder" 
                fill
                sizes="(max-width: 768px) 90vw, 42vw"
                className="object-cover object-top scale-[1.35] origin-top drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
          </div>

          {/* Right Side: Cards Grid */}
          <div className="w-full xl:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:py-10">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-5">
                <div className="bg-[#FFF5E6] w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <h3 className="text-[#0B1B36] font-extrabold text-sm sm:text-[16px] leading-tight">Where I Started</h3>
              </div>
              <p className="text-[#6b7280] text-xs sm:text-[14px] leading-[1.8] font-medium">
                I started Banega Brand because I saw how difficult it is for founders to turn a product idea into a real brand. There was no clear guidance, everything felt scattered, and most people ended up wasting time and money.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-5">
                <div className="bg-[#FFF5E6] w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <h3 className="text-[#0B1B36] font-extrabold text-sm sm:text-[16px] leading-tight">One Brand I'm Proud Of</h3>
              </div>
              <p className="text-[#6b7280] text-xs sm:text-[14px] leading-[1.8] font-medium">
                I'm proud of the brands we've helped launch from scratch - seeing an idea turn into a real product, reach customers, and grow in the market is always special. Every founder's success reminds me why we do this.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-5">
                <div className="bg-[#FFF5E6] w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={2} />
                </div>
                <h3 className="text-[#0B1B36] font-extrabold text-sm sm:text-[16px] leading-tight">A Common Mistake</h3>
              </div>
              <p className="text-[#6b7280] text-xs sm:text-[14px] leading-[1.8] font-medium">
                Most founders spend money on packaging or manufacturing without validating their idea first. This often leads to unnecessary costs. I always advise founders to test, get feedback, and plan properly before investing.
              </p>
            </div>

            {/* Card 4 - Highlighted */}
            <div className="bg-[#FFF5E6] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_15px_40px_-15px_rgba(255,77,0,0.15)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF4D00] fill-[#FF4D00] rotate-180" />
                </div>
                <h3 className="text-[#FF4D00] font-extrabold text-sm sm:text-[16px] leading-tight">My Advice to You</h3>
              </div>
              <p className="text-[#8c5035] text-xs sm:text-[14px] leading-[1.8] font-semibold">
                If you have a product idea, don't get overwhelmed. Take the right guidance, understand the process, and move step by step. You don't have to figure it all out alone - that's what we're here for.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
