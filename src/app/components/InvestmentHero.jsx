"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function InvestmentHero() {
  const heroRef = useRef(null);

  // Card Data
  const categories = [
    { name: "Product", progress: "40%", rot: "-rotate-3" },
    { name: "Packaging", progress: "60%", rot: "rotate-1" },
    { name: "Manufacturing", progress: "30%", rot: "rotate-2" }, 
    { name: "Compliance", progress: "75%", rot: "rotate-3" },
    { name: "Branding", progress: "50%", rot: "rotate-[6deg]" },
    { name: "Launch", progress: "85%", rot: "rotate-[8deg]" } 
  ];

  // Specific SVGs matching the prompt
  const navIcons = [
    <svg key={1} className="w-[20px] h-[20px] text-[#FF5425]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 22.08V12" /></svg>,
    <svg key={2} className="w-[20px] h-[20px] text-[#FF5425]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M16 9v-2a4 4 0 0 0-8 0v2" /><path strokeLinecap="round" strokeLinejoin="round" d="M5 9h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6v3H9z" /></svg>,
    <svg key={3} className="w-[20px] h-[20px] text-[#FF5425]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7l5 4 5-4 5 4v10" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16" /><path d="M12 16h.01M16 16h.01M8 16h.01" strokeWidth={2} strokeLinecap="round"/></svg>,
    <svg key={4} className="w-[20px] h-[20px] text-[#FF5425]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" /></svg>,
    <svg key={5} className="w-[20px] h-[20px] text-[#FF5425]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M3 11v2a2 2 0 0 0 2 2h3l4 4h2V5h-2l-4 4H5a2 2 0 0 0-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17.5 8.5c1 1.5 1 4 0 5.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.5 5.5c2 3.5 2 7.5 0 11" /></svg>,
    <svg key={6} className="w-[20px] h-[20px] text-[#FF5425]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-4.65 9.19 9.19 0 0 0 6.27-2.31c2.1-2.1 2.73-6 2.73-6s-3.9.63-6 2.73A9.19 9.19 0 0 0 9.7 15a5.4 5.4 0 0 0-4.65 1z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9a1 1 0 1 0-2-2 1 1 0 0 0 2 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l4 4" /></svg>
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Left content entry
      gsap.from(".hero-text-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

      gsap.from(".nav-icon-anim", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.5)",
        delay: 0.4
      });

      // Right visual entry (single image)
      gsap.from(".hero-img-anim", {
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="w-full bg-[#FAF8F5] pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[45%] flex flex-col items-start z-10">
          
          {/* Eyebrow */}
          <div className="hero-text-anim flex items-center gap-3 mb-6 mt-8 lg:mt-0">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)] text-sm">
              Investment Guide
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-text-anim text-[42px] sm:text-[50px] lg:text-[64px] font-[800] text-[#061B35] leading-[1.08] tracking-tight mb-6">
            How Much Does<br className="hidden sm:block" />
            It Cost to Launch<br className="hidden sm:block" />
            <span className="text-[#FF5425]">a Brand in India?</span>
          </h1>

          {/* Description */}
          <p className="hero-text-anim text-gray-500 text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-[460px] mb-10">
            Wondering how much you need to start a D2C brand?<br/>
            See what actually drives the cost — product, packaging,
            manufacturing, compliance, branding and launch.
          </p>

          {/* Actions */}
          <div className="hero-text-anim flex flex-col sm:flex-row items-center gap-6 mb-12 sm:mb-16 w-full sm:w-auto">
            <button 
              onClick={() => {
                const el = document.getElementById('investment-guide');
                if(el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-[#061B35] text-white px-8 py-[16px] rounded-full font-semibold text-[15px] hover:bg-[#0A264A] hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-900/10"
            >
              See Investment Guide
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            
            <button className="group flex items-center justify-center gap-3 text-[#5A6B80] font-medium text-[15px] hover:text-[#061B35] transition-colors w-full sm:w-auto">
              <div className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center group-hover:border-[#FF5425] group-hover:bg-orange-50 transition-colors">
                <svg className="w-[20px] h-[20px] ml-0.5 text-[#FF5425]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              Watch Overview
            </button>
          </div>

          {/* Bottom Nav (Icons) */}
          <div className="hero-text-anim w-full mt-2 lg:mt-6">
            <div className="w-full flex items-start justify-between gap-2">
              {['Product', 'Packaging', 'Manufacturing', 'Compliance', 'Branding', 'Launch'].map((name, idx) => (
                <React.Fragment key={name}>
                  <div className="nav-icon-anim flex flex-col items-center group cursor-pointer flex-1">
                    <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#FFF2E6] flex items-center justify-center group-hover:bg-[#FFD6B3] transition-colors mb-3 shrink-0 shadow-sm border border-orange-50/50">
                      {navIcons[idx]}
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-[600] text-[#061B35] group-hover:text-[#FF5425] transition-colors text-center w-full">
                      {name}
                    </span>
                  </div>
                  {idx < 5 && (
                    <div className="nav-icon-anim flex flex-col items-center pt-[18px] sm:pt-[24px] shrink-0">
                      <div className="h-[20px] w-px bg-gray-200"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT VISUAL - FULL WIDTH ON RIGHT SIDE */}
        <div className="hero-img-anim w-full lg:w-[55%] relative flex justify-center items-center mt-12 lg:mt-0 lg:pl-4 z-0">
          <Image 
             src="/assets/group151.png" 
            alt="Cost Breakdown of Launching a Brand" 
            width={5086} 
            height={2709} 
            className="w-full h-auto object-contain drop-shadow-sm" 
            priority
          />
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
