import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#0B1B36] font-sans py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col">
        
        {/* Header Content */}
        <div className="flex flex-col mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[11px]">11</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#FF4D00]"></span>
            <span className="text-[#FF4D00] font-bold tracking-[0.2em] text-[11px] uppercase">Ready To Launch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight mb-4 sm:mb-5">
            Ready to<br/>
            <span className="text-[#FF4D00]">launch your brand?</span>
          </h2>
          
          <p className="text-gray-300 text-sm sm:text-base md:text-[17px] leading-[1.8] max-w-[650px] font-medium">
            Whether you have a product idea, a prototype, or a brand already growing, we can help you move faster with more confidence.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Card */}
          <div className="bg-[#142646] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/5 flex flex-col">
            <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl leading-snug mb-4 sm:mb-6 max-w-[400px]">
              Let's turn your idea into a brand that launches with confidence.
            </h3>
            
            <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-[1.7] font-medium mb-8 sm:mb-10 max-w-[400px]">
              Book a call to discuss your product, timeline, budget, and goals. We'll share a clear next step and help you understand what it takes to get to market.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-auto">
              <a 
                href="#book-call"
                className="bg-[#FF4D00] hover:bg-[#e64500] transition-colors duration-300 text-white rounded-full py-3.5 sm:py-4 px-6 sm:px-8 font-semibold text-sm sm:text-[15px] flex items-center justify-center sm:justify-between shadow-lg shadow-[#FF4D00]/20 w-full sm:w-auto"
              >
                <span>Book a Call</span>
                <ArrowRight size={18} strokeWidth={2.5} className="ml-3 sm:ml-4" />
              </a>
              <span className="text-gray-400 text-xs sm:text-sm font-medium text-center sm:text-left">30-minute call</span>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#142646] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/5 flex flex-col justify-center">
            <h3 className="text-white font-extrabold text-lg sm:text-xl mb-6 sm:mb-8">What you'll get</h3>
            
            <ul className="flex flex-col gap-4 sm:gap-6">
              <li className="flex gap-3 sm:gap-4">
                <div className="bg-white rounded-full p-[2px] mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D00] fill-white" strokeWidth={2.5} />
                </div>
                <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-[1.6] font-medium">
                  A clear view of your launch timeline and milestones
                </p>
              </li>
              
              <li className="flex gap-3 sm:gap-4">
                <div className="bg-white rounded-full p-[2px] mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D00] fill-white" strokeWidth={2.5} />
                </div>
                <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-[1.6] font-medium">
                  Honest feedback on your product, positioning, and budget
                </p>
              </li>
              
              <li className="flex gap-3 sm:gap-4">
                <div className="bg-white rounded-full p-[2px] mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D00] fill-white" strokeWidth={2.5} />
                </div>
                <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-[1.6] font-medium">
                  A partner who can help with manufacturing, branding, and launch
                </p>
              </li>

              <li className="flex gap-3 sm:gap-4">
                <div className="bg-white rounded-full p-[2px] mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4D00] fill-white" strokeWidth={2.5} />
                </div>
                <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-[1.6] font-medium">
                  A process designed to reduce uncertainty and wasted spend
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
