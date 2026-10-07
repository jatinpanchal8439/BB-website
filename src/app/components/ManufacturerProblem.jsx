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
      id="manufacturers"
      className="relative w-full bg-[#FAF8F3] font-sans py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-[#EFECE5]"
    >
      {/* Background Soft Glow Highlights */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#FFF2E0]/70 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#FFF5E6]/60 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-14 lg:gap-20">
          
          {/* =========================================================
              LEFT COLUMN: Dual Circle Collage Image (Group 113)
             ========================================================= */}
          <div className="w-full xl:w-[44%] flex items-center justify-center select-none py-6 sm:py-10">
            <div className="left-circle-group relative w-full max-w-[400px] sm:max-w-[500px] xl:max-w-[550px] aspect-square flex items-center justify-center">
              <Image 
                src="/assets/manufacturer-collage.png" 
                alt="Finding the right manufacturer" 
                fill 
                className="object-contain"
                priority
              />
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
                href="/contact"
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
