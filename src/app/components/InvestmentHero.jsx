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

      // Right visual entry
      gsap.from(".bg-circle-anim", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2
      });

      gsap.from(".box-stack-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      });

      gsap.from(".float-card-anim", {
        x: 40,
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5
      });

      gsap.from(".annotation-anim", {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.2
      });

      // Subtle float
      gsap.to(".float-card-anim", {
        y: "-=8",
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.15
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="w-full bg-[#FAF8F5] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden font-sans">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[48%] flex flex-col items-start z-10">
          
          {/* Eyebrow */}
          <div className="hero-text-anim flex items-center gap-3 mb-6 mt-8 lg:mt-0">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#5A6B80] uppercase">
              Investment Guide
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-text-anim text-[42px] sm:text-[50px] lg:text-[58px] font-[800] text-[#061B35] leading-[1.08] tracking-tight mb-6">
            How Much Does<br className="hidden sm:block" />
            It Cost to Launch<br className="hidden sm:block" />
            <span className="text-[#FF5425]">a Brand in India?</span>
          </h1>

          {/* Description */}
          <p className="hero-text-anim text-gray-500 text-[15px] sm:text-[16px] font-medium leading-relaxed max-w-[420px] mb-10">
            Wondering how much you need to start a D2C brand?<br/>
            See what actually drives the cost — product, packaging,
            manufacturing, compliance, branding and launch.
          </p>

          {/* Actions */}
          <div className="hero-text-anim flex flex-col sm:flex-row items-center gap-6 mb-12 sm:mb-16 w-full sm:w-auto">
            <button className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-[#061B35] text-white px-8 py-[14px] rounded-full font-semibold text-[14.5px] hover:bg-[#0A264A] hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-900/10">
              See Investment Guide
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            
            <button className="group flex items-center justify-center gap-3 text-[#5A6B80] font-medium text-[14.5px] hover:text-[#061B35] transition-colors w-full sm:w-auto">
              <div className="w-11 h-11 rounded-full border border-orange-200 flex items-center justify-center group-hover:border-[#FF5425] group-hover:bg-orange-50 transition-colors">
                <svg className="w-[18px] h-[18px] ml-0.5 text-[#FF5425]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              Watch Overview
            </button>
          </div>

          {/* Bottom Nav (Icons) */}
          <div className="hero-text-anim w-full mt-2 lg:mt-6">
            <div className="w-full flex items-start justify-between">
              {['Product', 'Packaging', 'Manufacturing', 'Compliance', 'Branding', 'Launch'].map((name, idx) => (
                <React.Fragment key={name}>
                  <div className="nav-icon-anim flex flex-col items-center group cursor-pointer flex-1">
                    <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#FFF2E6] flex items-center justify-center group-hover:bg-[#FFD6B3] transition-colors mb-2.5 shrink-0 shadow-sm border border-orange-50/50">
                      {navIcons[idx]}
                    </div>
                    <span className="text-[10px] sm:text-[11px] lg:text-[11px] font-[600] text-[#061B35] group-hover:text-[#FF5425] transition-colors text-center w-full">
                      {name}
                    </span>
                  </div>
                  {idx < 5 && (
                    <div className="nav-icon-anim flex flex-col items-center pt-[12px] sm:pt-[15px] shrink-0">
                      <div className="h-[18px] w-px bg-gray-200"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="w-full lg:w-[50%] relative flex justify-center items-center mt-10 lg:mt-0 min-h-[500px]">
          
          {/* Background Circles */}
          <div className="bg-circle-anim absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[55%] w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] bg-[#EBDCC8] rounded-full z-0"></div>
          <div className="bg-circle-anim absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[70%] w-[250px] h-[250px] bg-[#FFF2E6] rounded-full blur-2xl z-0"></div>

          {/* Product Stack */}
          <div className="box-stack-anim relative z-10 w-[90%] sm:w-[350px] lg:w-[400px] h-[350px] lg:h-[400px] -translate-x-4 lg:-translate-x-12 translate-y-8">
            <Image 
              src="/assets/brand-cost/brand-box-stack.webp" 
              alt="Brand Packaging Boxes" 
              fill 
              className="object-contain mix-blend-multiply" 
              priority
            />
          </div>

          {/* Floating Cost Cards */}
          <div className="absolute top-4 right-0 lg:-right-8 z-20 flex flex-col gap-[14px]">
            {categories.map((cat, idx) => (
              <div 
                key={cat.name} 
                className={`float-card-anim flex items-center justify-between w-[220px] sm:w-[260px] bg-white rounded-xl px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transform ${cat.rot}`}
                style={{ marginLeft: `${idx * 16}px` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] sm:w-8 sm:h-8 rounded-[6px] bg-white border border-gray-100 flex items-center justify-center text-[#FF5425] shadow-sm">
                    {navIcons[idx]}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[12px] font-[600] text-[#061B35] leading-none">{cat.name}</span>
                    <div className="w-16 sm:w-20 h-[5px] bg-[#F1E9E3] rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF5425] rounded-full" style={{ width: cat.progress }}></div>
                    </div>
                  </div>
                </div>
                <span className="text-[#FF5425] font-[800] text-[13px] tracking-wide">₹₹₹</span>
              </div>
            ))}
          </div>

          {/* Annotations */}
          <div className="annotation-anim absolute -top-10 left-0 lg:left-4 z-30 flex flex-col items-center">
            <span className="font-caveat text-[#FF5425] text-2xl -rotate-6">From<br/>Idea</span>
            <svg className="w-8 h-8 text-[#FF5425] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>

          <div className="annotation-anim absolute -bottom-6 lg:-bottom-12 right-12 lg:right-24 z-30 flex flex-col items-center">
            <svg className="w-8 h-8 text-[#FF5425] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
            <span className="font-caveat text-[#FF5425] text-2xl rotate-3">To<br/>Launch</span>
          </div>

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
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
        .font-caveat {
          font-family: 'Caveat', cursive;
        }
      `}</style>
    </section>
  );
}
