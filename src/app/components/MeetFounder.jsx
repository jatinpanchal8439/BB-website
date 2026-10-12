import React from 'react';
import Image from 'next/image';
import { Rocket, Trophy, AlertTriangle, Quote } from 'lucide-react';

export default function MeetFounder() {
  return (
    <section id="meet-founder" className="relative w-full bg-[#FCFBF8] font-sans py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10 lg:mb-16">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4">
            <span className="w-6 sm:w-10 h-[1.5px] bg-[#FF4D00]"></span>
            <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#6B7280] font-[family-name:var(--font-poppins)]">
              Meet The Founder
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-[#0B1B36] leading-[1.1] tracking-tight mb-2.5 sm:mb-4">
            Meet <span className="text-[#FF4D00]">Mayank</span>
          </h2>
          
          <p className="text-[#4b5563] text-[12px] min-[380px]:text-[12.5px] sm:text-base leading-[1.65] max-w-[340px] sm:max-w-[620px] font-normal sm:font-medium">
            Banega Brand is founded by Mayank Tiwari, an entrepreneur who has been through the real process of building and launching brands in India.
          </p>
        </div>

        <div className="w-full flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Side: Founder Image */}
          <div className="w-full xl:w-[44%] relative flex justify-center items-end">
            {/* Soft Organic Curved Background Shapes (matches reference screenshot) */}
            <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
              <div 
                className="absolute left-[-12%] sm:left-[-8%] bottom-[6%] w-[85%] sm:w-[80%] h-[60%] sm:h-[65%] bg-[#FCECDC] opacity-85"
                style={{ borderRadius: '65% 35% 70% 30% / 50% 65% 35% 50%' }}
              />
              <div 
                className="absolute right-[-12%] sm:right-[-8%] bottom-[10%] w-[90%] sm:w-[85%] h-[55%] sm:h-[60%] bg-[#FCE3D0] opacity-75"
                style={{ borderRadius: '35% 65% 30% 70% / 65% 45% 55% 35%' }}
              />
            </div>
            
            <div className="relative w-full max-w-[340px] min-[390px]:max-w-[370px] sm:max-w-[440px] xl:max-w-[480px] h-[380px] min-[390px]:h-[420px] sm:h-[480px] md:h-[540px] xl:h-[620px] overflow-hidden">
              <Image 
                src="/founder-new.png" 
                alt="Mayank Tiwari - Founder" 
                fill
                sizes="(max-width: 768px) 370px, (max-width: 1280px) 480px, 520px"
                className="object-cover object-top drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
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
