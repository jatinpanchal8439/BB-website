"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesHero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate text from bottom
      gsap.fromTo(
        textRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate images staggering up
      gsap.fromTo(
        imagesRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#fffaf5] pt-10 pb-10 lg:pt-14 lg:pb-12 overflow-hidden font-sans">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-[#fbede1] rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-[20%] -mb-40 w-[500px] h-[500px] bg-[#fbede1] rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-10 right-[10%] w-[100px] h-[100px] bg-[#fbede1] rounded-full opacity-60 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
        
        {/* Left Content Area */}
        <div ref={textRef} className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4 lg:mb-6">
            <span className="w-12 h-[2px] bg-[#f55926]"></span>
            <span className="font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Industries</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[#111928] leading-[1.1] mb-6 lg:mb-8 tracking-tight">
            Industries <br />
            <span className="text-[#f55926]">We Work In.</span>
          </h2>
          
          <p className="text-[#4b5563] text-base md:text-lg lg:text-xl mb-8 lg:mb-10 max-w-[480px] leading-relaxed font-medium">
            From perfume to pet care, Banega Brand helps founders launch across India's fastest-growing product categories. Find the right category for your idea.
          </p>

          <div className="flex gap-10 md:gap-16 mb-8 lg:mb-10">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111928] mb-1 lg:mb-2 tracking-tight">10+</h3>
              <p className="text-[#6b7280] text-xs md:text-sm lg:text-base font-medium">Product Categories</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111928] mb-1 lg:mb-2 tracking-tight">500+</h3>
              <p className="text-[#6b7280] text-xs md:text-sm lg:text-base font-medium">Brands Launched</p>
            </div>
          </div>

          <button className="bg-[#f55926] hover:bg-[#df4a1a] transition-all duration-300 text-white rounded-full py-3 px-6 lg:py-4 lg:px-8 font-semibold text-base lg:text-lg flex items-center justify-between w-fit gap-4 lg:gap-6 shadow-[0_10px_30px_rgba(245,89,38,0.3)] hover:shadow-[0_15px_35px_rgba(245,89,38,0.4)] hover:-translate-y-1">
            Explore Industries 
            <span className="bg-white text-[#f55926] rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center shrink-0">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right Images Area */}
        <div className="w-full lg:w-[55%] relative h-[250px] sm:h-[350px] lg:h-[350px] flex items-center justify-center gap-2 sm:gap-3 md:gap-5 mt-6 lg:mt-0">
          
          {/* Vertical Lines Decoration */}
          <div className="absolute top-10 bottom-10 left-[30%] w-[1px] bg-orange-200/50 z-0 hidden lg:block"></div>
          <div className="absolute top-0 bottom-20 left-[55%] w-[1px] bg-orange-200/50 z-0 hidden lg:block">
            <div className="w-3 h-3 bg-[#f55926] rounded-full absolute top-[20%] -left-[5px]"></div>
          </div>
          <div className="absolute top-20 bottom-0 left-[80%] w-[1px] bg-orange-200/50 z-0 hidden lg:block"></div>

          {/* Image 1 (Perfume) */}
          <div ref={el => imagesRef.current[0] = el} className="group relative z-10 w-[22%] h-[65%] lg:h-[75%] rounded-t-full rounded-b-xl lg:rounded-b-3xl overflow-hidden shadow-lg mt-12 lg:mt-24 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <Image src="/ind1.png" alt="Perfume Industry" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* Image 2 (Cosmetics) */}
          <div ref={el => imagesRef.current[1] = el} className="group relative z-10 w-[22%] h-[75%] lg:h-[90%] rounded-t-full rounded-b-xl lg:rounded-b-3xl overflow-hidden shadow-lg mb-8 lg:mb-12 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <Image src="/ind2.png" alt="Beauty and Skincare" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* Image 3 (Pouch) */}
          <div ref={el => imagesRef.current[2] = el} className="group relative z-10 w-[22%] h-[70%] lg:h-[80%] rounded-t-full rounded-b-xl lg:rounded-b-3xl overflow-hidden shadow-lg mt-4 lg:mt-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <Image src="/ind3.png" alt="FMCG and Packaged Goods" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* Image 4 (Pills) */}
          <div ref={el => imagesRef.current[3] = el} className="group relative z-10 w-[22%] h-[60%] lg:h-[70%] rounded-t-full rounded-b-xl lg:rounded-b-3xl overflow-hidden shadow-lg mb-16 lg:mb-24 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <Image src="/ind4.png" alt="Nutraceuticals" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
