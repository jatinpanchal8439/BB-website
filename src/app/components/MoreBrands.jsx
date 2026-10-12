import React from "react";
import Image from "next/image";

export default function MoreBrands() {
  // Ordered to match user screenshot (3 cols on mobile)
  const logos = [
    "BELLMONTAE LOGO clean.png",
    "108_luxury_clean.png",
    "GenZ Obsession logo.png",
    "ROUGX LOGO 1.png",
    "Contempory logo clean.png",
    "ZYNX PERFUME clean.png",
    "Biography logo.png",
    "Blush en Bloom Logo.png",
    "APETOME FINAL LOGO.png",
    "DREFOR LOGO.png",
    "Tuesday london logo clean.png",
    "ESSAENCE logo 2.png",
    "MAIN GREVETY LOGO.png",
  ];

  return (
    <section className="w-full bg-[#FEFCF7] py-14 sm:py-20 relative overflow-hidden">

      {/* Abstract Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0">
          <path d="M-80 100 C 80 200, 20 450, -60 800" stroke="#FF4D00" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.3" />
          <circle cx="95" cy="295" r="8" fill="#FF4D00" opacity="0.5" />
          <path d="M-40 520 Q 60 640 120 820 L -40 820 Z" fill="#FFEDE0" opacity="0.4" />
          <path d="M1350 250 C 1430 150, 1520 350, 1480 800" stroke="#FF4D00" strokeWidth="1.2" opacity="0.3" />
          <circle cx="1358" cy="510" r="8" fill="#FF4D00" opacity="0.5" />
          <path d="M1480 680 Q 1580 560 1600 820 L 1480 820 Z" fill="#FFEDE0" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col items-center relative z-10">

        {/* Top Badge matching user screenshot */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 h-[1.5px] bg-[#FF4D00]/30"></div>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
            TRUSTED BY
          </span>
          <div className="w-8 sm:w-12 h-[1.5px] bg-[#FF4D00]/30"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[2.2rem] xs:text-[2.6rem] sm:text-[3rem] md:text-[3.8rem] font-black text-[#111] leading-[1.08] tracking-tight text-center mb-3 sm:mb-4">
          More Brands We&apos;ve<br />
          <span className="text-[#FF4D00]">Worked With.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-500 font-normal sm:font-medium text-center mb-8 sm:mb-12 max-w-xl px-2 leading-relaxed">
          From emerging startups to established businesses — we&apos;ve helped bring 100+ brands to life across India and beyond.
        </p>

        {/* Logos Grid - 3 columns on mobile matching screenshot */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 sm:gap-4 md:gap-5 w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] sm:rounded-2xl flex items-center justify-center p-3 sm:p-5 border border-gray-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 aspect-[16/10] sm:aspect-[16/9]"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={`/logos/${logo}`}
                  alt={`Brand logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 25vw, 220px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
