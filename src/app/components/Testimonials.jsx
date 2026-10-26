"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(() => {
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
      image: "/videos/blush-en-bloom-thumb.jpg",
      objectPosition: "object-center",
      badgeText: "Perfume Launch",
      badgeBg: "bg-[#FFF0E6]",
      badgeTextCol: "text-[#FF4D00]",
      accentCol: "#FF4D00",
      quote: "A grand event, a little luxury, a new chapter. Launching BLUSH EN BLOOM with Banega Brand was truly magical — from product development to an unforgettable launch event.",
      name: "Blush En Bloom",
      role: "Grand Launch, BLUSH EN BLOOM",
      logo: "/logos/Blush en Bloom Logo.png",
      videoUrl: "/videos/blush-en-bloom-testimonial.mp4",
      caseStudyUrl: "/case-study/blush-en-bloom"
    },
    {
      image: "/videos/paroha-thumb.jpg",
      objectPosition: "object-center",
      badgeText: "Clinical Skincare",
      badgeBg: "bg-[#FFF0E6]",
      badgeTextCol: "text-[#FF4D00]",
      accentCol: "#FF4D00",
      quote: "We planned the vision, but Banega Brand executed it to perfection. From product development to the grand launch, their dedicated team delivered a true 10/10 experience.",
      name: "Mohan Paroha",
      role: "Founder, CONTEMPRORY",
      logo: "/logos/Contempory logo clean.png",
      videoUrl: "/videos/paroha-testimonial.mp4",
      caseStudyUrl: "/case-study/contemprory"
    },
    {
      image: "/rougx-founders.png",
      badgeText: "Perfume & Fragrance",
      badgeBg: "bg-[#EEF5FF]",
      badgeTextCol: "text-[#3B82F6]",
      accentCol: "#3B82F6",
      quote: "The BanegaBrand team understood our vision and helped us launch ROUGX with the right formulation, packaging and go-to-market strategy.",
      name: "Swapnil R Srivastava",
      role: "Founder, ROUGX",
      logo: "/logos/ROUGX LOGO 1.png",
      videoUrl: "/videos/speach-for-bb.mp4",
      caseStudyUrl: "/case-study/rougx"
    },
    {
      image: "/klust-thumb.jpg",
      badgeText: "Beauty & Lifestyle",
      badgeBg: "bg-[#FFF0E6]",
      badgeTextCol: "text-[#FF4D00]",
      accentCol: "#FF4D00",
      quote: "Working with BanegaBrand transformed our vision into reality. Their end-to-end support for KLUST made the entire launch process seamless and incredibly professional.",
      name: "Kangna Sharma",
      role: "Founder, KLUST",
      logo: null,
      videoUrl: "/klust-testimonial.mp4"
    },
    {
      image: "/videos/contemprory-launch-thumb.jpg",
      objectPosition: "object-center",
      badgeText: "Brand Launch",
      badgeBg: "bg-[#EEF2FF]",
      badgeTextCol: "text-[#4F46E5]",
      accentCol: "#4F46E5",
      quote: "The grand launch of CONTEMPRORY organized by Banega Brand was an electrifying success. The creators, the energy, and the seamless execution were truly unforgettable.",
      name: "CONTEMPRORY Launch Event",
      role: "Grand Launch, CONTEMPRORY",
      logo: "/logos/Contempory logo clean.png",
      videoUrl: "/videos/contemprory-launch-testimonial.mp4",
      caseStudyUrl: "/case-study/contemprory"
    },
    {
      image: "/biography-founders.png",
      badgeText: "Perfume & Fragrance",
      badgeBg: "bg-[#FFF0E6]",
      badgeTextCol: "text-[#FF6A2A]",
      accentCol: "#FF6A2A",
      quote: "BanegaBrand helped us turn our idea into BIOGRAPHY — from product development to market launch. The process was smooth and truly professional.",
      name: "Meherban Singh",
      role: "Founder, BIOGRAPHY",
      logo: "/logos/Biography logo.png",
      videoUrl: null,
      caseStudyUrl: "/case-study/biographey"
    },
    {
      image: "/grevety-founders.png",
      badgeText: "Beauty & Skincare",
      badgeBg: "bg-[#EAFBF0]",
      badgeTextCol: "text-[#10B981]",
      accentCol: "#10B981",
      quote: "BanegaBrand made the entire journey of launching GREVETY easy and well-structured. Their guidance, product development and support were exceptional.",
      name: "Divya Rani",
      role: "Founder, GREVETY",
      logo: "/logos/MAIN GREVETY LOGO.png",
      videoUrl: null
    }
  ];

  const scrollDirection = (dir) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.offsetWidth || 380;
      const gap = 20;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (dir === 'right') {
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft <= 20) {
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        }
      }
    }
  };

  const scrollToIndex = (idx) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.offsetWidth || 380;
      const gap = 20;
      scrollContainerRef.current.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
      setActiveIndex(idx);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.offsetWidth || 380;
      const gap = 20;
      const newIndex = Math.round(scrollContainerRef.current.scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(testimonials.length - 1, Math.max(0, newIndex)));
    }
  };

  // Auto-slideshow functionality
  useEffect(() => {
    if (isPaused || playingIndex !== null) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.offsetWidth || 380;
      const gap = 20;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        setActiveIndex(0);
      } else {
        container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, playingIndex]);

  return (
    <section ref={sectionRef} className="relative bg-[#FCFBF8] pt-12 sm:pt-16 lg:pt-22 pb-14 sm:pb-18 lg:pb-22 overflow-hidden border-t border-gray-100 font-sans">
      
      {/* Top right decorative curve with orange dot */}
      <div className="absolute top-0 right-0 w-[450px] h-[380px] pointer-events-none overflow-hidden -z-0">
        <svg className="w-full h-full" viewBox="0 0 450 380" fill="none">
          <path d="M450 40 C320 40 230 130 205 380" stroke="#FF5425" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="210" cy="250" r="4.5" fill="#FF5425" />
        </svg>
      </div>

      {/* Bottom left subtle warm blob */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none bg-[#FFF2E8] rounded-tr-full opacity-60 -z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 sm:gap-4 mb-3 gsap-testimonial-header">
            <div className="w-8 sm:w-12 h-[1.5px] bg-[#FFBCA0]"></div>
            <span className="font-bold tracking-[0.2em] uppercase text-[#FF4D00] text-xs sm:text-[13px] font-[family-name:var(--font-poppins)]">
              CLIENT VOICES
            </span>
            <div className="w-8 sm:w-12 h-[1.5px] bg-[#FFBCA0]"></div>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-[#0B1B36] leading-[1.1] tracking-tight mb-3 gsap-testimonial-header font-[family-name:var(--font-plus-jakarta)]">
            What <span className="text-[#FF4D00] relative inline-block">
              Founders
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF4D00]" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C25 3 75 3 98 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span> Say
          </h2>
          
          {/* Subtitle */}
          <p className="text-[#64748B] text-xs sm:text-sm md:text-base font-medium gsap-testimonial-header">
            Real people. Real brands. Real results.
          </p>
        </div>

        {/* MOBILE VIEW: Vertically Stacked Cards (matching mobile screenshot) */}
        <div className="flex flex-col gap-4 lg:hidden w-full max-w-lg mx-auto">
          {testimonials.map((test, index) => (
            <div 
              key={`mobile-${index}`} 
              className="gsap-testimonial-card bg-white rounded-2xl p-3 min-[380px]:p-3.5 sm:p-4 flex flex-row gap-3 min-[380px]:gap-3.5 shadow-[0_3px_18px_-4px_rgba(0,0,0,0.06)] border border-[#F0ECE6] w-full items-stretch"
            >
              {/* Left Column: Square Thumbnail Image / Video */}
              <div 
                className={`w-[115px] min-[380px]:w-[125px] sm:w-[145px] shrink-0 relative rounded-xl overflow-hidden bg-[#F7F5F2] self-stretch min-h-[145px] sm:min-h-[165px] ${test.videoUrl ? 'cursor-pointer group' : ''}`}
                onClick={() => {
                  if (test.videoUrl && playingIndex !== `mobile-${index}`) {
                    setPlayingIndex(`mobile-${index}`);
                  }
                }}
              >
                {playingIndex === `mobile-${index}` && test.videoUrl ? (
                  <video 
                    src={test.videoUrl} 
                    poster={test.image}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <>
                    <Image 
                      src={test.image} 
                      alt={test.name} 
                      fill 
                      sizes="(max-width: 640px) 140px, 160px"
                      className={`object-cover ${test.objectPosition || 'object-top'} transition-transform duration-500 ${test.videoUrl ? 'group-hover:scale-105' : ''}`}
                    />
                    {test.videoUrl && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/30">
                        <div className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                          <svg className="w-3.5 h-3.5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Right Column: Text Content */}
              <div className="flex flex-col flex-1 justify-between min-w-0 py-0.5">
                <div>
                  {/* Badge */}
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[8.5px] min-[380px]:text-[9px] sm:text-[9.5px] font-semibold mb-1 ${test.badgeBg} ${test.badgeTextCol}`}>
                    {test.badgeText}
                  </span>
                  
                  {/* Quote SVG */}
                  <svg 
                    className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5 mb-0.5 opacity-75" 
                    style={{ color: test.accentCol }}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  {/* Quote text */}
                  <p className="text-[#333333] text-[10.5px] min-[380px]:text-[11px] sm:text-[12px] leading-[1.5] font-normal line-clamp-4 mb-2">
                    {test.quote}
                  </p>
                </div>
                
                {/* Footer divider + founder name & brand logo */}
                <div className="pt-1.5">
                  <div 
                    className="w-5 sm:w-6 h-[1.5px] mb-1.5" 
                    style={{ backgroundColor: test.accentCol }}
                  ></div>
                  <div className="flex justify-between items-end gap-1.5">
                    <div className="flex flex-col min-w-0 flex-1">
                      <h4 className="text-[12px] min-[380px]:text-[12.5px] font-bold text-[#1E1E1E] leading-tight truncate">{test.name}</h4>
                      <span className="text-[7.5px] min-[380px]:text-[8.5px] font-medium text-gray-400 uppercase tracking-tight min-[380px]:tracking-normal mt-0.5 leading-tight whitespace-normal">{test.role}</span>
                      {test.caseStudyUrl && (
                        <Link 
                          href={test.caseStudyUrl}
                          className="text-[8px] min-[380px]:text-[8.5px] font-bold text-[#FF4D00] hover:underline flex items-center gap-0.5 mt-0.5"
                        >
                          View Case Study →
                        </Link>
                      )}
                    </div>
                    {test.logo && (
                      <div className="relative w-11 min-[380px]:w-13 h-5 min-[380px]:h-6 shrink-0 opacity-80 mix-blend-multiply">
                        <Image src={test.logo} alt="Brand Logo" fill sizes="52px" className="object-contain object-right-bottom" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW: Horizontal Carousel with 3 cards visible + Navigation */}
        <div 
          className="hidden lg:block w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-3 px-1 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((test, index) => (
              <div 
                key={`desktop-${index}`} 
                className="gsap-testimonial-card w-[calc((100%-40px)/3)] min-w-[calc((100%-40px)/3)] max-w-[calc((100%-40px)/3)] snap-start bg-white rounded-3xl p-4.5 xl:p-5 flex flex-row gap-4 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] border border-[#F0ECE6] hover:shadow-lg transition-all duration-300 items-stretch shrink-0"
              >
                {/* Left Column: Image / Video */}
                <div 
                  className={`w-[145px] xl:w-[160px] shrink-0 relative rounded-2xl overflow-hidden bg-[#F7F5F2] self-stretch min-h-[185px] ${test.videoUrl ? 'cursor-pointer group' : ''}`}
                  onClick={() => {
                    if (test.videoUrl && playingIndex !== `desktop-${index}`) {
                      setPlayingIndex(`desktop-${index}`);
                    }
                  }}
                >
                  {playingIndex === `desktop-${index}` && test.videoUrl ? (
                    <video 
                      src={test.videoUrl} 
                      poster={test.image}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <>
                      <Image 
                        src={test.image} 
                        alt={test.name} 
                        fill 
                        sizes="180px"
                        className={`object-cover ${test.objectPosition || 'object-top'} transition-transform duration-500 ${test.videoUrl ? 'group-hover:scale-105' : ''}`}
                      />
                      {test.videoUrl && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/30">
                          <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Right Column: Text Content */}
                <div className="flex flex-col flex-1 justify-between min-w-0 py-0.5">
                  <div>
                    {/* Badge */}
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold mb-1.5 ${test.badgeBg} ${test.badgeTextCol}`}>
                      {test.badgeText}
                    </span>
                    
                    {/* Quote SVG */}
                    <svg 
                      className="w-5 h-5 mb-1 opacity-75" 
                      style={{ color: test.accentCol }}
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    {/* Quote text */}
                    <p className="text-[#333333] text-[12.5px] leading-[1.6] font-normal line-clamp-4 mb-2">
                      {test.quote}
                    </p>
                  </div>
                  
                  {/* Footer divider + founder name & brand logo */}
                  <div className="pt-2">
                    <div 
                      className="w-6 h-[1.5px] mb-2" 
                      style={{ backgroundColor: test.accentCol }}
                    ></div>
                    <div className="flex justify-between items-end gap-2">
                      <div className="flex flex-col min-w-0 flex-1">
                        <h4 className="text-[13.5px] font-bold text-[#1E1E1E] leading-tight truncate">{test.name}</h4>
                        <span className="text-[9px] min-[1400px]:text-[9.5px] font-medium text-gray-400 uppercase tracking-normal min-[1400px]:tracking-wide mt-0.5 leading-tight whitespace-normal">{test.role}</span>
                        {test.caseStudyUrl && (
                          <Link 
                            href={test.caseStudyUrl}
                            className="text-[9.5px] font-bold text-[#FF4D00] hover:underline flex items-center gap-1 mt-1"
                          >
                            View Case Study →
                          </Link>
                        )}
                      </div>
                      {test.logo && (
                        <div className="relative w-14 h-7 shrink-0 opacity-80 mix-blend-multiply">
                          <Image src={test.logo} alt="Brand Logo" fill sizes="60px" className="object-contain object-right-bottom" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation: Center Dots + Right Arrow Buttons */}
          <div className="flex items-center justify-between mt-10 px-2">
            <div className="w-24"></div>

            {/* Center Dots */}
            <div className="flex items-center justify-center gap-2 mx-auto">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === idx 
                      ? 'w-6 h-1.5 bg-[#FF4D00]' 
                      : 'w-2 h-1.5 bg-[#FFD6C0] hover:bg-[#FFB48A]'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow Buttons */}
            <div className="flex items-center gap-2.5">
              <button 
                onClick={() => scrollDirection('left')}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:border-gray-400 hover:text-black transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => scrollDirection('right')}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-[#FF4D00] flex items-center justify-center text-white hover:bg-[#E64500] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
