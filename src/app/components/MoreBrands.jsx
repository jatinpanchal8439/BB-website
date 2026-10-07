import React from "react";
import Image from "next/image";

export default function MoreBrands() {
  // Ordered to match the Figma reference grid (5 cols × 3 rows)
  const logos = [
    "ROUGX LOGO 1.png",
    "Contempory logo.png",
    "ZYNX PERFUME clean.png",
    "Biography logo.png",
    "Blush en Bloom Logo.png",

    "APETOME FINAL LOGO.png",
    "BELLMONTAE LOGO clean.png",
    "GenZ Obsession logo.png",
    "Tuesday london logo clean.png",

    "DREFOR LOGO.png",
    "ESSAENCE logo 2.png",
    "MAIN GREVETY LOGO.png",
  ];

  return (
    <section className="w-full bg-[#FEFCF7] py-20 relative overflow-hidden">

      {/* Abstract Background Decorations - matching Figma */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Left curved route */}
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0">
          <path d="M-80 100 C 80 200, 20 450, -60 800" stroke="#FF4D00" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.5" />
          <circle cx="95" cy="295" r="8" fill="#FF4D00" opacity="0.7" />
          {/* Left warm wash blob */}
          <path d="M-40 520 Q 60 640 120 820 L -40 820 Z" fill="#FFEDE0" opacity="0.6" />

          {/* Right route */}
          <path d="M1350 250 C 1430 150, 1520 350, 1480 800" stroke="#FF4D00" strokeWidth="1.2" opacity="0.4" />
          <circle cx="1358" cy="510" r="8" fill="#FF4D00" opacity="0.7" />
          {/* Right warm wash blob */}
          <path d="M1480 680 Q 1580 560 1600 820 L 1480 820 Z" fill="#FFEDE0" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">

        {/* Heading */}
        <h2 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] font-black text-[#111] leading-[1.05] tracking-tight text-center mb-3">
          More Brands We&apos;ve
          <br />
          <span className="text-[#FF4D00]">Worked With.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-500 font-medium text-center mb-12 max-w-xl leading-relaxed">
          From emerging startups to established businesses — we&apos;ve helped bring 100+ brands to life across India and beyond.
        </p>

        {/* Logos Grid - 5 columns matching Figma */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl flex items-center justify-center p-5 border border-[#EDE9E0] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={`/logos/${logo}`}
                  alt={`Brand logo ${index + 1}`}
                  fill
                  className={`object-contain ${['108_nobg.png', 'COSMICO_nobg.png'].includes(logo) ? 'grayscale' : ''}`}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
