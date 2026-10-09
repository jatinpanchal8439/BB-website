"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProcessStep({
  number,
  titleBlack,
  titleOrange,
  description1,
  description2,
  imageSrc,
  imageRight = false,
  bgColor = "bg-[#FCFBF8]"
}) {
  const container = useRef(null);

  useGSAP(() => {
    // Text animations
    gsap.from(".step-text-anim", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    // Image floating animation
    gsap.to(".step-img-anim", {
      y: -15,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, { scope: container });

  return (
    <section ref={container} className={`py-16 md:py-24 ${bgColor} overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className={`flex flex-col ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-[32px] overflow-hidden step-img-anim shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <Image 
                src={imageSrc} 
                alt={`${titleBlack} ${titleOrange}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 max-w-xl">
            {/* Number Badge */}
            <div className="mb-6 step-text-anim">
              <div className="w-12 h-12 rounded-full bg-[#FF4D00] text-white flex items-center justify-center text-xl font-bold font-[family-name:var(--font-poppins)] shadow-[0_4px_14px_rgba(255,77,0,0.3)]">
                {number}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] mb-6 step-text-anim font-[family-name:var(--font-plus-jakarta)]">
              {titleBlack} <br />
              <span className="text-[#FF4D00]">{titleOrange}</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-[#5A5A5A] text-[15px] lg:text-base font-medium leading-[1.8] step-text-anim">
              {description1 && <p>{description1}</p>}
              {description2 && <p>{description2}</p>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
