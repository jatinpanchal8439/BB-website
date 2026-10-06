"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FileSearch, 
  Factory, 
  FlaskConical, 
  PackageCheck, 
  Settings, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import gsap from "gsap";

export default function ManufacturerProblem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation for the circular collage on the left
      gsap.from(".left-circle-group", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Milestone points pop-in
      gsap.from(".milestone-point", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.3,
        ease: "back.out(2)",
      });

      // 3. Staggered feature cards entrance
      gsap.from(".problem-feature-card", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.25,
        ease: "power2.out",
      });

      // 4. Subtle continuous floating idle animation for the overlapping perfume circle
      gsap.to(".small-overlap-circle", {
        y: "-=6",
        x: "+=3",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <FileSearch className="w-[18px] h-[18px] text-[#FF4D00]" strokeWidth={2} />,
      text: "Identify reliable manufacturers",
    },
    {
      icon: <Factory className="w-[18px] h-[18px] text-[#FF4D00]" strokeWidth={2} />,
      text: "Compare MOQ requirements",
    },
    {
      icon: <FlaskConical className="w-[18px] h-[18px] text-[#FF4D00]" strokeWidth={2} />,
      text: "Understand formulation options",
    },
    {
      icon: <PackageCheck className="w-[18px] h-[18px] text-[#FF4D00]" strokeWidth={2} />,
      text: "Coordinate sampling",
    },
    {
      icon: <Settings className="w-[18px] h-[18px] text-[#FF4D00]" strokeWidth={2} />,
      text: "Understand production requirements",
    },
    {
      icon: <ShieldCheck className="w-[18px] h-[18px] text-[#FF4D00]" strokeWidth={2} />,
      text: "Navigate quality and compliance requirements",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#FAF8F3] font-sans py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-[#EFECE5]"
    >
      {/* Background Soft Glow Highlights */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#FFF2E0]/70 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#FFF5E6]/60 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-14 lg:gap-20">
          
          {/* =========================================================
              LEFT COLUMN: Dual Circle Collage with Arc & Milestone Dots
             ========================================================= */}
          <div className="w-full xl:w-[44%] flex items-center justify-center select-none py-6 sm:py-10">
            <div className="left-circle-group relative w-[320px] sm:w-[420px] md:w-[460px] h-[340px] sm:h-[440px] md:h-[480px] flex items-center justify-center">
              
              {/* Curved Arc Line SVG (sweeping around the circle connecting 4 milestones) */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                viewBox="0 0 460 480" 
                fill="none"
              >
                {/* Left Arc Path: curves through top-left (Right Factory) and middle-left (Right Product) */}
                <path 
                  d="M 68 60 C 45 130, 48 230, 65 310" 
                  stroke="#FF4D00" 
                  strokeWidth="1.5" 
                  strokeOpacity="0.6"
                  fill="none" 
                />
                
                {/* Right Arc Path: curves through middle-right (Right Quality) and bottom-right (Right Growth) */}
                <path 
                  d="M 390 190 C 420 270, 395 380, 345 425" 
                  stroke="#FF4D00" 
                  strokeWidth="1.5" 
                  strokeOpacity="0.6"
                  fill="none" 
                />
              </svg>

              {/* ----------------------------------------------------
                  Milestone 1: Top Left -> "Right Factory"
                 ---------------------------------------------------- */}
              <div className="milestone-point absolute top-[10%] left-[8%] sm:left-[6%] flex items-center gap-2.5 z-30">
                <span className="text-[#0B1B36] font-extrabold text-[11px] sm:text-[12px] leading-tight text-right whitespace-nowrap">
                  Right<br />Factory
                </span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF4D00] rounded-full shrink-0"></span>
              </div>

              {/* ----------------------------------------------------
                  Milestone 2: Middle Left -> "Right Product"
                 ---------------------------------------------------- */}
              <div className="milestone-point absolute top-[44%] left-[2%] sm:left-[0%] flex items-center gap-2.5 z-30">
                <span className="text-[#0B1B36] font-extrabold text-[11px] sm:text-[12px] leading-tight text-right whitespace-nowrap">
                  Right<br />Product
                </span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF4D00] rounded-full shrink-0"></span>
              </div>

              {/* ----------------------------------------------------
                  Milestone 3: Middle Right -> "Right Quality"
                 ---------------------------------------------------- */}
              <div className="milestone-point absolute top-[46%] right-[2%] sm:right-[1%] flex items-center gap-2.5 z-30">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF4D00] rounded-full shrink-0"></span>
                <span className="text-[#0B1B36] font-extrabold text-[11px] sm:text-[12px] leading-tight text-left whitespace-nowrap">
                  Right<br />Quality
                </span>
              </div>

              {/* ----------------------------------------------------
                  Milestone 4: Bottom Right -> "Right Growth"
                 ---------------------------------------------------- */}
              <div className="milestone-point absolute bottom-[18%] right-[8%] sm:right-[6%] flex items-center gap-2.5 z-30">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF4D00] rounded-full shrink-0"></span>
                <span className="text-[#0B1B36] font-extrabold text-[11px] sm:text-[12px] leading-tight text-left whitespace-nowrap">
                  Right<br />Growth
                </span>
              </div>

              {/* ----------------------------------------------------
                  MAIN LARGE CIRCLE: Factory Bottling Line
                 ---------------------------------------------------- */}
              <div className="relative w-[260px] sm:w-[350px] md:w-[390px] h-[260px] sm:h-[350px] md:h-[390px] rounded-full overflow-hidden shadow-2xl z-10 bg-gray-900 ml-8 sm:ml-10">
                <Image 
                  src="/factory-filling-line.jpg" 
                  alt="Automatic perfume liquid filling factory line" 
                  fill 
                  sizes="(max-width: 768px) 70vw, 35vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* ----------------------------------------------------
                  OVERLAPPING SMALL CIRCLE: Finished Perfume on Stone
                 ---------------------------------------------------- */}
              <div className="small-overlap-circle absolute bottom-[0%] left-[0%] sm:left-[2%] w-[160px] sm:w-[220px] md:w-[245px] h-[160px] sm:h-[220px] md:h-[245px] rounded-full overflow-hidden border-[5px] sm:border-[7px] border-[#FAF8F3] shadow-[0_20px_50px_rgba(0,0,0,0.22)] z-20 bg-stone-100">
                <Image 
                  src="/perfume-on-stone.jpg" 
                  alt="Luxury amber perfume bottle on travertine stone slabs" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 22vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Header, Paragraph, 6 Cards Grid, and CTA
             ========================================================= */}
          <div className="w-full xl:w-[56%] flex flex-col">
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black leading-[1.15] tracking-tight mb-5 sm:mb-6">
              <span className="block text-[#0B1B36]">
                Finding the Right<br />Manufacturer
              </span>
              <span className="block text-[#FF4D00] mt-1">
                Shouldn't Be Your Problem
              </span>
            </h2>

            {/* Lead Copy */}
            <div className="text-[#5A687D] text-sm sm:text-base leading-[1.6] font-medium mb-6 sm:mb-8 max-w-[540px]">
              <p className="mb-3">
                Finding a manufacturer is easy. Finding the right one for your product,<br className="hidden lg:block" />
                quantity, category and budget is where things get complicated.
              </p>
              <p className="text-[#0B1B36] font-bold">
                We help you:
              </p>
            </div>

            {/* Feature Cards Grid (2 Columns x 3 Rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-[600px]">
              {features.map((item, idx) => (
                <div 
                  key={idx}
                  className="problem-feature-card bg-white rounded-2xl p-3.5 sm:p-4 border border-[#F2EFE8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 flex items-center gap-3.5 hover:-translate-y-0.5 min-h-[76px]"
                >
                  <div className="w-[38px] h-[38px] rounded-full border border-[#FF4D00]/30 bg-white shadow-sm flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[#0B1B36] font-semibold text-[12px] sm:text-[13px] leading-snug pr-1">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link 
                href="#book-call"
                className="group bg-[#0B1B36] hover:bg-[#15284B] transition-all duration-300 text-white rounded-full py-4 px-8 font-bold text-sm sm:text-[15px] inline-flex items-center justify-between sm:justify-center gap-6 shadow-xl shadow-[#0B1B36]/15 hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Tell Us What You Want To Build</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
