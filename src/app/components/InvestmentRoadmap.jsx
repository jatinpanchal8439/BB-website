"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InvestmentRoadmap() {
  const sectionRef = useRef(null);
  
  const steps = [
    {
      num: "01", title: "Product", 
      desc: "Formulation,\ndevelopment\nand sampling.",
      color: "#F69D3D", bgColor: "#FFF2E6", image: "/assets/brand-cost/product-flask.webp",
      yOffset: 120
    },
    {
      num: "02", title: "Packaging", 
      desc: "Bottle, container, label,\nbox\nand other packaging\nelements.",
      color: "#FF4D6D", bgColor: "#FFE5EB", image: "/assets/brand-cost/packaging-box.webp",
      yOffset: 40
    },
    {
      num: "03", title: "Manufacturing", 
      desc: "MOQ and production\nquantity.",
      color: "#6B46C1", bgColor: "#EFEBFA", image: "/assets/brand-cost/manufacturing-gears.webp",
      yOffset: 90
    },
    {
      num: "04", title: "Compliance", 
      desc: "Category-specific\nregistrations and\nrequirements.",
      color: "#38A169", bgColor: "#E6F6ED", image: "/assets/brand-cost/compliance-document.webp",
      yOffset: 20
    },
    {
      num: "05", title: "Branding", 
      desc: "Name, identity and\npackaging design.",
      color: "#E53E3E", bgColor: "#FDEDED", image: "/assets/brand-cost/branding-bulb.webp",
      yOffset: 60
    },
    {
      num: "06", title: "Launch", 
      desc: "Marketplace\nsetup,\nwebsite and\nmarketing.",
      color: "#3182CE", bgColor: "#EBF8FF", image: "/assets/brand-cost/launch-laptop.webp",
      yOffset: 0
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".brand-cost-header h2", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".brand-cost-header",
          start: "top 80%",
        }
      });
      
      gsap.from(".brand-cost-header p", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".brand-cost-header",
          start: "top 80%",
        }
      });

      // Desktop Timeline Path Draw
      gsap.fromTo(".timeline-svg-wrapper",
        { width: "0%" },
        {
          width: "100%",
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".brand-cost-timeline",
            start: "top 70%",
          }
        }
      );
      
      // Mobile Timeline Path Draw
      gsap.fromTo(".mobile-timeline-svg-wrapper",
        { height: "0%" },
        {
          height: "100%",
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".mobile-timeline-container",
            start: "top 80%",
          }
        }
      );

      // Stagger Steps
      gsap.from(".step-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".brand-cost-timeline",
          start: "top 65%",
        }
      });
      
      // Mobile Stagger Steps
      gsap.from(".mobile-step-item", {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".mobile-timeline-container",
          start: "top 75%",
        }
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="brand-cost-section w-full bg-[#FAF8F5] py-20 lg:py-28 font-sans overflow-hidden">
      <div className="brand-cost-container max-w-[1300px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="brand-cost-header mb-16 lg:mb-24">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold text-[#0B1B36] leading-[1.05] tracking-tight mb-4">
            How Much Does It <br />
            <span className="text-[#FF4D00]">Take to Build a Brand?</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-[19px] font-medium leading-relaxed mt-5">
            There isn't one fixed number for every brand.<br />
            Your investment depends on:
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="brand-cost-timeline hidden lg:block relative w-full h-[550px]">
          
          {/* SVG Background Wavy Line */}
          <div className="absolute left-0 right-0 z-0 pointer-events-none" style={{ top: '168px', height: '120px' }}>
            <div className="timeline-svg-wrapper w-full h-full overflow-hidden">
              <svg viewBox="0 0 100 120" preserveAspectRatio="none" className="w-[1200px] sm:w-[100vw] lg:w-[1300px] max-w-none h-full overflow-visible">
                <defs>
                  <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="8.33%" stopColor="#F69D3D" />
                    <stop offset="25%" stopColor="#FF4D6D" />
                    <stop offset="41.66%" stopColor="#6B46C1" />
                    <stop offset="58.33%" stopColor="#38A169" />
                    <stop offset="75%" stopColor="#E53E3E" />
                    <stop offset="91.66%" stopColor="#3182CE" />
                  </linearGradient>
                </defs>
                <path 
                  d="M 0 140 C 4 140, 4 120, 8.33 120 C 16.66 120, 16.66 40, 25 40 C 33.33 40, 33.33 90, 41.66 90 C 50 90, 50 20, 58.33 20 C 66.66 20, 66.66 60, 75 60 C 83.33 60, 83.33 0, 91.66 0 C 96 0, 100 -20, 100 -20" 
                  stroke="url(#timeline-gradient)" 
                  strokeWidth="2" 
                  fill="none" 
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="relative w-full h-full grid grid-cols-6 z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="step-item relative flex flex-col items-center w-full"
                style={{ top: `${step.yOffset}px` }}
              >
                {/* Colored Oval & Image */}
                <div className="relative w-full h-32 flex items-end justify-center mb-[14px]">
                  {/* Oval */}
                  <div className="absolute bottom-0 w-28 h-10 rounded-[50%] shadow-sm opacity-90 blur-[2px]" style={{ backgroundColor: step.bgColor }}></div>
                  {/* Image */}
                  <div className="relative z-10 h-[110%] w-[110%] flex justify-center items-end drop-shadow-xl hover:-translate-y-2 transition-transform duration-300">
                     <Image src={step.image} alt={step.title} fill className="object-contain object-bottom" />
                  </div>
                </div>

                {/* Gap with Wavy Line Dot */}
                <div className="relative w-full h-12 flex justify-center items-center">
                  <div className="absolute top-0 bottom-0 border-l-[1.5px] border-dashed border-gray-400 z-0"></div>
                  <div className="relative z-20 w-[10px] h-[10px] rounded-full shadow-sm" style={{ backgroundColor: step.color }}></div>
                </div>

                {/* Number Circle */}
                <div 
                  className="w-[34px] h-[34px] rounded-full flex items-center justify-center font-bold text-white text-[13px] z-10 mb-4 mt-2 shadow-md"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </div>

                {/* Title & Description */}
                <h3 className="text-[#0B1B36] font-extrabold text-[15px] mb-2 leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-[12px] font-medium leading-relaxed px-2 text-center whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="mobile-timeline-container lg:hidden relative flex flex-col gap-10 mt-12 w-full max-w-[500px] mx-auto">
          {/* Vertical SVG Path */}
          <div className="absolute top-0 bottom-0 left-[21px] w-[20px] pointer-events-none z-0">
            <div className="mobile-timeline-svg-wrapper w-full h-full overflow-hidden">
               <svg viewBox="0 0 20 1000" preserveAspectRatio="none" className="w-full h-[1500px] max-h-none overflow-visible">
                 <defs>
                   <linearGradient id="mobile-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#F69D3D" />
                     <stop offset="20%" stopColor="#FF4D6D" />
                     <stop offset="40%" stopColor="#6B46C1" />
                     <stop offset="60%" stopColor="#38A169" />
                     <stop offset="80%" stopColor="#E53E3E" />
                     <stop offset="100%" stopColor="#3182CE" />
                   </linearGradient>
                 </defs>
                 <path 
                   d="M 10 0 L 10 1000" 
                   stroke="url(#mobile-gradient)" 
                   strokeWidth="2" 
                   fill="none" 
                   vectorEffect="non-scaling-stroke"
                 />
               </svg>
            </div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="mobile-step-item relative flex items-start gap-6 z-10">
              
              {/* Number Circle on the line */}
              <div 
                className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-md mt-6"
                style={{ backgroundColor: step.color }}
              >
                {step.num}
              </div>

              {/* Content Card */}
              <div className="flex flex-col bg-white rounded-2xl p-6 shadow-sm shadow-gray-200/50 border border-gray-100 flex-grow relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ backgroundColor: step.color }}></div>
                
                <h3 className="text-[#0B1B36] font-bold text-[19px] mb-2 relative z-10">{step.title}</h3>
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed mb-6 relative z-10 max-w-[200px] whitespace-pre-line">
                  {step.desc}
                </p>
                
                {/* Image */}
                <div className="relative w-full h-32 flex items-end justify-end mt-auto z-10">
                   <div className="relative w-28 h-full drop-shadow-xl">
                      <Image src={step.image} alt={step.title} fill className="object-contain object-right-bottom" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
