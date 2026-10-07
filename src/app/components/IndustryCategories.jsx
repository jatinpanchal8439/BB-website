"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustryCategories() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".header-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      title: "Perfume &\nFragrance",
      desc: "From fragrance selection to bottle, packaging and launch.",
      image: "/cat1.png",
      dot: false,
      link: "/industries/perfume"
    },
    {
      title: "Beauty &\nSkincare",
      desc: "Formulation, packaging and brand development for beauty-focused products.",
      image: "/cat2.png",
      dot: true,
      link: "/industries/beauty"
    },
    {
      title: "Ayurveda &\nWellness",
      desc: "Traditional wellness categories with modern product and brand positioning.",
      image: "/cat3.png",
      dot: false,
      link: "/industries/ayurveda"
    },
    {
      title: "Nutraceuticals",
      desc: "From product development and compliance to packaging and launch.",
      image: "/cat4.png",
      dot: true,
      link: "/industries/nutraceuticals"
    }
  ];

  return (
    <section id="categories" ref={sectionRef} className="py-24 bg-[#FCFBF8] font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="header-anim flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 md:w-16 bg-[#ffdbcc]"></div>
            <span className="font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">What can we help you build?</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#ffdbcc]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111928] leading-[1.15] tracking-tight">
            Different categories<br />
            need <span className="text-[#FF4D00]">different approaches.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-12 relative z-10">
          {categories.map((cat, idx) => (
            <Link
              href={cat.link}
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="flex flex-col group block cursor-pointer"
            >
              {/* Image Container Area */}
              <div className="relative w-full aspect-[4/5] mb-4 md:mb-6">
                
                {/* The actual cropped image */}
                <div className={`absolute bottom-0 w-full h-full rounded-t-full overflow-hidden bg-white z-10 border border-gray-100/50 shadow-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-md`}>
                  <Image 
                    src={cat.image} 
                    alt={cat.title.replace('\n', ' ')} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Orange Dot */}
                {cat.dot && (
                  <div className="absolute -left-2 md:-left-3 top-2 md:top-4 w-4 h-4 md:w-6 md:h-6 bg-[#FF4D00] rounded-full z-0"></div>
                )}
              </div>

              {/* Text Content */}
              <h3 className="text-base md:text-[22px] font-bold text-[#111928] mb-2 md:mb-3 whitespace-pre-line leading-tight group-hover:text-[#FF4D00] transition-colors">
                {cat.title}
              </h3>
              <p className="text-[#6b7280] text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow">
                {cat.desc}
              </p>

              {/* Arrow Button */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#fceee6] flex items-center justify-center mt-auto transition-colors group-hover:bg-[#FF4D00]">
                <ArrowRight size={16} className="text-[#111928] group-hover:text-white transition-colors" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
