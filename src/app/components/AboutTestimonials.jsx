"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { Play, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function AboutTestimonials() {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 2.5,
      name: "Founder",
      role: "FOUNDER, KLUST",
      brand: "Beauty & Lifestyle",
      quote: "Working with BanegaBrand transformed our vision into reality. Their end-to-end support for KLUST made the entire launch process seamless and incredibly professional.",
      image: "/klust-thumbnail.jpg",
      logo: null,
      hasVideo: true
    },
    {
      id: 1,
      name: "Meherban Singh",
      role: "FOUNDER, BIOGRAPHY",
      brand: "Perfume & Fragrance",
      quote: "BanegaBrand helped us turn our idea into BIOGRAPHY - from product development to market launch. The process was smooth and truly professional.",
      image: null,
      logo: "/logos/Biography logo.png"
    },
    {
      id: 2,
      name: "Rahul Abrol",
      role: "FOUNDER, ROUGX",
      brand: "Perfume & Fragrance",
      quote: "The BanegaBrand team understood our vision and helped us launch ROUGX with the right formulation, packaging and go-to-market strategy.",
      image: "/mo2.png",
      logo: "/logos/ROUGX LOGO 1.png"
    },
    {
      id: 3,
      name: "Divya Rani",
      role: "FOUNDER, GREVETY",
      brand: "Beauty & Skincare",
      quote: "BanegaBrand made the entire journey of launching GREVETY easy and well-structured. Their guidance, product development and support were exceptional.",
      image: "/mo3.png",
      logo: "/logos/MAIN GREVETY LOGO.png"
    }
  ];

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#FCFBF8] font-sans py-12 sm:py-16 lg:py-24 overflow-hidden">
      
      {/* Background Arc Line */}
      <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none overflow-hidden">
        <div className="absolute right-[-20%] top-[10%] w-[100%] h-[80%] rounded-[100%] border-[1px] border-[#FF4D00]/20"></div>
        <div className="absolute right-[5%] top-[40%] w-2 h-2 rounded-full bg-[#FF4D00]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="w-6 sm:w-8 h-[2px] bg-[#FF4D00]"></span>
            <span className="font-bold tracking-[0.2em] sm: uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Client Voices</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#FF4D00]"></span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0B1B36] leading-[1.1] tracking-tight mb-3 sm:mb-4">
            What <span className="text-[#FF4D00]">Founders</span> Say
          </h2>
          
          <p className="text-[#6b7280] text-sm sm:text-[15px] font-medium">
            Real people. Real brands. Real results.
          </p>
        </div>

        {/* Testimonials Grid/Flex */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 sm:gap-6 pb-6 sm:pb-10 -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-[85%] sm:min-w-[70%] md:min-w-[48%] lg:min-w-[32%] snap-start bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              
              <div className="flex flex-col xl:flex-row gap-4 sm:gap-5 h-full">
                
                {/* Image and Play button */}
                {t.image && (
                  <div className="relative w-full xl:w-[45%] h-[180px] sm:h-[200px] xl:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gray-200">
                       <Image 
                         src={t.image} 
                         alt={t.name} 
                         fill 
                         sizes="(max-width: 768px) 80vw, 25vw"
                         className="object-cover" 
                         onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' }} 
                       />
                    </div>
                    {t.hasVideo && (
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 text-[#0B1B36] ml-1" fill="currentColor" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between py-1 sm:py-2">
                  <div>
                    <span className="font-bold tracking-wider uppercase mb-1.5 sm:mb-2 block text-[#FF4D00] font-[family-name:var(--font-poppins)]">
                      {t.brand}
                    </span>
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4D00]/40 fill-[#FF4D00]/40 rotate-180 mb-2 sm:mb-3" />
                    <p className="text-[#4b5563] text-xs sm:text-[13px] leading-[1.6] sm:leading-[1.7] font-medium mb-4 sm:mb-6">
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-auto pt-2 border-t border-gray-50">
                    <div>
                      <h4 className="text-[#0B1B36] font-bold text-xs sm:text-[14px]">{t.name}</h4>
                      <p className="text-[#6b7280] text-[8px] sm:text-[9px] font-semibold tracking-wider">{t.role}</p>
                    </div>
                    {/* Logo area */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                       <Image src={t.logo} alt="Brand Logo" fill className="object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-4 sm:mt-6">
          <div className="w-8 sm:w-10 h-1.5 sm:h-2 bg-[#FF4D00] rounded-full"></div>
          <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-gray-200 rounded-full"></div>
          <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-gray-200 rounded-full"></div>
          
          <div className="flex items-center gap-3 ml-4 sm:ml-6">
            <button 
              onClick={() => handleScroll('left')}
              aria-label="Previous testimonial"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0B1B36] hover:border-gray-300 transition-colors active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              aria-label="Next testimonial"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF4D00] flex items-center justify-center text-white hover:bg-[#e64500] transition-colors shadow-lg shadow-[#FF4D00]/30 active:scale-95"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
