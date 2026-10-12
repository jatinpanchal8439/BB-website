"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  useGSAP(() => {
    // Safe animation: immediateRender: false prevents elements from ever being stuck hidden as white space
    gsap.from(".gsap-testimonial-header", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
        once: true,
      },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      immediateRender: false,
      clearProps: "all",
    });

    gsap.from(".gsap-testimonial-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
        once: true,
      },
      y: 25,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      immediateRender: false,
      clearProps: "all",
    });
  }, { scope: sectionRef });

  const testimonials = [
    {
      image: "/klust-thumb.jpg",
      badgeText: "Beauty & Lifestyle",
      badgeColor: "bg-[#FFF2E8] text-[#FF4D00]",
      quoteColor: "text-[#FF4D00]",
      lineColor: "bg-[#FF4D00]",
      quote: "Working with BanegaBrand transformed our vision into reality. Their end-to-end support for KLUST made the entire launch process seamless and incredibly professional.",
      name: "Kangna Sharma",
      role: "Founder, KLUST",
      logo: null,
      videoUrl: "/klust-testimonial.mp4"
    },
    {
      image: null, // No image as requested: "dusre pr biography umsi image add mt krna"
      badgeText: "Perfume & Fragrance",
      badgeColor: "bg-[#EEF2FF] text-[#4A72FF]",
      quoteColor: "text-[#4A72FF]",
      lineColor: "bg-[#4A72FF]",
      quote: "BanegaBrand helped us turn our idea into BIOGRAPHY — from product development to market launch. The process was smooth and truly professional.",
      name: "Meherban Singh",
      role: "Founder, BIOGRAPHY",
      logo: "/logos/Biography logo.png",
      videoUrl: null
    },
    {
      image: "/videos/rougx-thumb.jpg",
      badgeText: "Perfume & Fragrance",
      badgeColor: "bg-[#ECFDF5] text-[#059669]",
      quoteColor: "text-[#059669]",
      lineColor: "bg-[#059669]",
      quote: "The BanegaBrand team understood our vision and helped us launch ROUGX with the right formulation, packaging and go-to-market strategy.",
      name: "Rahul Abrol",
      role: "Founder, ROUGX",
      logo: "/logos/ROUGX LOGO 1.png",
      videoUrl: "/videos/speach-for-bb.mp4"
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-[#FCFBF8] pt-14 sm:pt-18 lg:pt-22 pb-14 sm:pt-18 lg:pb-22 overflow-hidden border-t border-gray-100">
      
      {/* Decorative Background Lines */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-40 -z-0">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 0 C200 0 0 200 0 400" stroke="#FF4D00" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="380" cy="120" r="4" fill="#FF4D00" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none bg-[#FFF2E8] rounded-tr-full opacity-60 -z-0"></div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-4 mb-4 gsap-testimonial-header">
            <div className="w-8 h-[1px] bg-[#FF4D00]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Client Voices</span>
            <div className="w-8 h-[1px] bg-[#FF4D00]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] tracking-tight mb-4 gsap-testimonial-header">
            What <span className="text-[#FF4D00] relative">
              Founders
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF4D00] opacity-80 rounded-full" style={{ borderRadius: '50% 50% 50% 50% / 10% 10% 90% 90%' }}></div>
            </span> Say
          </h2>
          
          <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-medium gsap-testimonial-header">
            Real people. Real brands. Real results.
          </p>
        </div>

        {/* Testimonials Static Grid: Stacked vertically on mobile, 3-columns on desktop */}
        <div className="flex flex-col gap-3.5 sm:gap-5 lg:grid lg:grid-cols-3 lg:gap-6 w-full max-w-7xl mx-auto items-stretch">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className={`gsap-testimonial-card bg-white rounded-2xl sm:rounded-3xl p-3 min-[380px]:p-3.5 sm:p-5 flex ${test.image ? 'flex-row gap-3 sm:gap-4' : 'flex-col justify-between'} shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] border border-[#F2ECE4] hover:shadow-lg transition-all duration-300 w-full min-h-[140px] sm:min-h-[200px]`}
            >
              {/* Left Video Thumbnail or Inline Video (if image exists) */}
              {test.image && (
                <div 
                  className={`relative w-[92px] min-[380px]:w-[102px] sm:w-[135px] lg:w-[145px] shrink-0 self-stretch min-h-[125px] min-[380px]:min-h-[135px] sm:min-h-[180px] rounded-[14px] sm:rounded-2xl overflow-hidden transition-all duration-300 ${test.videoUrl ? 'cursor-pointer group' : ''}`}
                  onClick={() => {
                    if (test.videoUrl && playingIndex !== index) {
                      setPlayingIndex(index);
                    }
                  }}
                >
                  {playingIndex === index && test.videoUrl ? (
                    <video 
                      src={test.videoUrl} 
                      poster={test.image}
                      className="w-full h-full object-cover object-top scale-[1.05]"
                      controls
                      autoPlay
                    />
                  ) : (
                    <>
                      <Image 
                        src={test.image} 
                        alt={test.name} 
                        fill 
                        sizes="(max-width: 768px) 110px, (max-width: 1200px) 150px, 200px"
                        className={`object-cover object-top transition-transform duration-500 ${test.videoUrl ? 'group-hover:scale-105' : ''}`}
                      />
                      {test.videoUrl && (
                        <div className="absolute inset-0 bg-black/15 flex items-center justify-center transition-colors group-hover:bg-black/25">
                          <div className="w-7 h-7 min-[380px]:w-8 min-[380px]:h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-3.5 h-3.5 min-[380px]:w-4 min-[380px]:h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Text Content */}
              <div className="flex flex-col py-0.5 flex-grow min-w-0 justify-between">
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[8.5px] min-[380px]:text-[9px] sm:text-[10px] font-semibold mb-1 ${test.badgeColor}`}>
                    {test.badgeText}
                  </span>
                  
                  <div className={`text-lg min-[380px]:text-xl sm:text-2xl font-serif leading-none mb-0.5 sm:mb-1 opacity-60 select-none ${test.quoteColor}`}>
                    “
                  </div>
                  
                  <p className={`text-[#2B2B2B] ${test.image ? 'text-[10.5px] min-[380px]:text-[11.5px] sm:text-[13px] leading-[1.45] sm:leading-[1.55]' : 'text-xs sm:text-[13.5px] leading-[1.65]'} font-normal mb-2 sm:mb-2.5`}>
                    {test.quote}
                  </p>
                </div>
                
                <div className="pt-1.5 sm:pt-2">
                  <div className={`w-5 sm:w-8 h-[1.5px] mb-1.5 sm:mb-2 ${test.lineColor}`}></div>
                  <div className="flex justify-between items-end gap-2">
                    <div className="flex flex-col min-w-0">
                      <h4 className="text-[12px] min-[380px]:text-[12.5px] sm:text-sm font-bold text-[#1E1E1E] leading-tight truncate">{test.name}</h4>
                      <span className="text-[8.5px] min-[380px]:text-[9px] sm:text-[9.5px] font-medium text-gray-400 uppercase tracking-wider mt-0.5 truncate">{test.role}</span>
                    </div>
                    {test.logo && (
                      <div className="relative w-12 min-[380px]:w-14 sm:w-16 h-5 min-[380px]:h-6 sm:h-7 shrink-0 opacity-80 mix-blend-multiply">
                        <Image src={test.logo} alt="Brand Logo" fill sizes="64px" className="object-contain object-right-bottom" />
                      </div>
                    )}
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
