"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    // Animate headers
    tl.from(".gsap-testimonial-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Animate cards
    tl.from(".gsap-testimonial-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    }, "-=0.4");
    
    // Animate controls
    tl.from(".gsap-testimonial-controls", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.2");

  }, { scope: sectionRef });

  const testimonials = [
    {
      image: "/P1.png",
      badgeText: "Perfume & Fragrance",
      badgeColor: "bg-[#FFF2E8] text-[#FF4D00]",
      quoteColor: "text-[#FF4D00]",
      quote: "BanegaBrand helped us turn our idea into BIOGRAPHY — from product development to market launch. The process was smooth and truly professional.",
      name: "Meherban Singh",
      role: "Founder, BIOGRAPHY",
      logo: "/logos/Biography logo.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      image: "/P2.png",
      badgeText: "Perfume & Fragrance",
      badgeColor: "bg-[#EEF2FF] text-[#4A72FF]",
      quoteColor: "text-[#4A72FF]",
      quote: "The BanegaBrand team understood our vision and helped us launch ROUGX with the right formulation, packaging and go-to-market strategy.",
      name: "Rahul Abrol",
      role: "Founder, ROUGX",
      logo: "/logos/ROUGX LOGO 1.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      image: "/P3.png",
      badgeText: "Beauty & Skincare",
      badgeColor: "bg-[#ECFDF5] text-[#059669]",
      quoteColor: "text-[#059669]",
      quote: "BanegaBrand made the entire journey of launching GREVETY easy and well-structured. Their guidance, product development and support were exceptional.",
      name: "Divya Rani",
      role: "Founder, GREVETY",
      logo: "/logos/MAIN GREVETY LOGO.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      image: "/P1.png",
      badgeText: "Nutraceuticals",
      badgeColor: "bg-[#F3E8FF] text-[#9333EA]",
      quoteColor: "text-[#9333EA]",
      quote: "BanegaBrand's expertise helped us formulate and launch our supplement line in record time. Their go-to-market strategy was flawless.",
      name: "Sandeep Kumar",
      role: "Founder, VITALITY",
      logo: null,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      image: "/P2.png",
      badgeText: "Ayurveda",
      badgeColor: "bg-[#FEF3C7] text-[#D97706]",
      quoteColor: "text-[#D97706]",
      quote: "Creating an authentic Ayurvedic brand is tough, but BanegaBrand provided the right sourcing and packaging solutions to make us stand out.",
      name: "Amit Sharma",
      role: "Founder, VEDA",
      logo: null,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-[#FCFBF8] py-24 overflow-hidden border-t border-gray-100">
      
      {/* Decorative Background Lines */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-40 -z-0">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 0 C200 0 0 200 0 400" stroke="#FF4D00" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="380" cy="120" r="4" fill="#FF4D00" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none bg-[#FFF2E8] rounded-tr-full opacity-60 -z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4 gsap-testimonial-header">
            <div className="w-8 h-[1px] bg-[#FF4D00]"></div>
            <span className="text-[#FF4D00] text-xs font-bold tracking-[0.2em] uppercase">Client Voices</span>
            <div className="w-8 h-[1px] bg-[#FF4D00]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.1] tracking-tight mb-5 gsap-testimonial-header">
            What <span className="text-[#FF4D00] relative">
              Founders
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF4D00] opacity-80 rounded-full" style={{ borderRadius: '50% 50% 50% 50% / 10% 10% 90% 90%' }}></div>
            </span> Say
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl font-medium gsap-testimonial-header">
            Real people. Real brands. Real results.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 mb-12 snap-x snap-mandatory scroll-smooth hide-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}} />
          
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="gsap-testimonial-card min-w-[100%] md:min-w-[calc(50%-12px)] xl:min-w-[calc(33.333%-16px)] snap-center bg-white rounded-3xl p-4 flex gap-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Left Video Thumbnail */}
              <div 
                className="relative w-[150px] flex-shrink-0 h-full min-h-[220px] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setActiveVideo(test.videoUrl)}
              >
                <Image 
                  src={test.image} 
                  alt={test.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-5 h-5 text-gray-800 ml-1 fill-gray-800" />
                </div>
              </div>

              {/* Right Text Content */}
              <div className="flex flex-col py-1 pr-2">
                <span className={`w-max px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${test.badgeColor}`}>
                  {test.badgeText}
                </span>
                
                <div className={`text-4xl font-serif leading-none mb-1 opacity-50 ${test.quoteColor}`}>
                  "
                </div>
                
                <p className="text-[#1E1E1E] text-[13px] leading-[1.6] font-medium mb-5 flex-grow">
                  {test.quote}
                </p>
                
                <div className="mt-auto">
                  <div className={`w-8 h-[2px] mb-3 ${test.quoteColor.replace('text-', 'bg-')}`}></div>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <h4 className="text-sm font-black text-[#1E1E1E]">{test.name}</h4>
                      <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-0.5">{test.role}</span>
                    </div>
                    {test.logo && (
                      <div className="relative w-16 h-8 opacity-80 mix-blend-multiply">
                        <Image src={test.logo} alt="Brand Logo" fill className="object-contain object-right-bottom" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls Section */}
        <div className="flex justify-between items-center gsap-testimonial-controls">
          <div className="hidden lg:block w-32"></div> {/* Spacer for centering */}
          
          {/* Pagination Dots (Visual only for now, since it's a native scroller) */}
          <div className="flex gap-2 mx-auto">
            <div className="w-8 h-2 rounded-full bg-[#FF4D00]"></div>
            <div className="w-4 h-2 rounded-full bg-gray-200"></div>
            <div className="w-4 h-2 rounded-full bg-gray-200"></div>
            <div className="w-4 h-2 rounded-full bg-gray-200"></div>
          </div>
          
          {/* Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-300 transition-all shadow-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-11 h-11 rounded-full bg-[#FF4D00] border border-[#FF4D00] flex items-center justify-center text-white hover:bg-[#e64500] transition-all shadow-md"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
            >
              <X size={20} />
            </button>
            {/* Embedded Video */}
            <iframe 
              src={activeVideo} 
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture" 
              allowFullScreen 
            />
          </div>
        </div>
      )}
    </section>
  );
}
