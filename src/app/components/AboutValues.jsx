import React from 'react';
import { Lightbulb, Clock, ShieldCheck, Users } from 'lucide-react';

export default function AboutValues() {
  return (
    <section className="w-full bg-[#FCFBF8] font-sans py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col">
        
        {/* Header Content */}
        <div className="flex flex-col mb-10 sm:mb-14">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <span className="text-[#FF4D00] font-bold tracking-widest text-[11px]">08</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#FF4D00]"></span>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Our Values</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0B1B36] leading-[1.1] tracking-tight mb-4 sm:mb-5">
            Values that<br/>
            <span className="text-[#FF4D00]">guide every launch</span>
          </h2>
          
          <p className="text-[#6b7280] text-sm sm:text-base md:text-[17px] leading-[1.8] max-w-[650px] font-medium">
            We built Banega Brand on principles that matter to founders: clarity, speed, honesty, and a process that feels human from day one.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Value 1 */}
          <div className="bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#FFF5E6] mb-4 sm:mb-6">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={2} />
            </div>
            <h3 className="text-[#0B1B36] font-extrabold text-lg sm:text-xl lg:text-[22px] mb-2 sm:mb-3">Clarity before complexity</h3>
            <p className="text-[#6b7280] text-xs sm:text-[14px] lg:text-[15px] leading-[1.7] font-medium">
              We explain every step in plain language so founders can make confident decisions without getting lost in jargon.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#FFF5E6] mb-4 sm:mb-6">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={2} />
            </div>
            <h3 className="text-[#0B1B36] font-extrabold text-lg sm:text-xl lg:text-[22px] mb-2 sm:mb-3">Speed without shortcuts</h3>
            <p className="text-[#6b7280] text-xs sm:text-[14px] lg:text-[15px] leading-[1.7] font-medium">
              We move fast when it matters, but we never skip the checks that protect a brand's long-term reputation.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#FFF5E6] mb-4 sm:mb-6">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={2} />
            </div>
            <h3 className="text-[#0B1B36] font-extrabold text-lg sm:text-xl lg:text-[22px] mb-2 sm:mb-3">Honest feedback first</h3>
            <p className="text-[#6b7280] text-xs sm:text-[14px] lg:text-[15px] leading-[1.7] font-medium">
              If an idea needs work, we say so early. If a spend is unnecessary, we advise founders to wait.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center bg-[#FFF5E6] mb-4 sm:mb-6">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]" strokeWidth={2} />
            </div>
            <h3 className="text-[#0B1B36] font-extrabold text-lg sm:text-xl lg:text-[22px] mb-2 sm:mb-3">Human support at every stage</h3>
            <p className="text-[#6b7280] text-xs sm:text-[14px] lg:text-[15px] leading-[1.7] font-medium">
              Founders get a clear process, transparent timelines, and people who explain what is happening and why.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
