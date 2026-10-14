"use client";
import React from 'react';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="w-full bg-[#FAF7F2] font-sans relative overflow-hidden">

      {/* Desktop Layout — full background image with left text overlay */}
      <div className="hidden lg:block w-full relative min-h-[460px] xl:min-h-[500px] 2xl:min-h-[540px]">
        {/* Background Image — full section banner */}
        <Image
          src="/assets/contact-hero-full-bg.png"
          alt="Book a call with Banega Brand"
          fill
          priority
          className="object-cover object-right"
        />

        {/* Content container aligned left */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 sm:px-12 lg:px-16 2xl:px-20 min-h-[460px] xl:min-h-[500px] 2xl:min-h-[540px] flex items-center">
          <div className="max-w-[480px] xl:max-w-[520px] py-12">
            {/* Eyebrow — orange color per request */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#FF5425]"></div>
              <span className="text-[12px] xl:text-[13px] font-bold text-[#FF5425] uppercase tracking-[0.2em] font-[family-name:var(--font-poppins)]">
                Book a Call
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[38px] xl:text-[46px] 2xl:text-[52px] font-[800] text-[#061B35] leading-[1.08] tracking-tight mb-4">
              Start Your Brand<br />
              <span className="text-[#FF5425]">With Banega Brand</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-[14px] xl:text-[15px] font-medium leading-relaxed max-w-[410px] mb-8">
              Book a free first call with Banega Brand. Tell us about your product idea and we&apos;ll help you figure out the next step.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 bg-[#0B1B36] text-white px-7 xl:px-8 py-3.5 rounded-full font-semibold text-[14px] xl:text-[15px] hover:bg-[#122a52] hover:-translate-y-0.5 transition-all shadow-md w-fit cursor-pointer"
            >
              <span>Book a free call</span>
              <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout — stacked text and full-width edge-to-edge image */}
      <div className="lg:hidden flex flex-col pt-8 pb-0">
        {/* Text Content */}
        <div className="px-6 flex flex-col items-start mb-6">
          {/* Eyebrow — orange color */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#FF5425]"></div>
            <span className="text-[11px] sm:text-[13px] font-bold text-[#FF5425] uppercase tracking-[0.2em] font-[family-name:var(--font-poppins)]">
              Book a Call
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] xs:text-[38px] sm:text-[46px] font-[800] text-[#061B35] leading-[1.08] tracking-tight mb-4">
            Start Your Brand<br />
            <span className="text-[#FF5425]">With Banega Brand</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-[14px] sm:text-[16px] font-medium leading-relaxed max-w-[460px] mb-6">
            Book a free first call with Banega Brand. Tell us about your product idea and we&apos;ll help you figure out the next step.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 bg-[#0B1B36] text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] hover:bg-[#122a52] hover:-translate-y-0.5 transition-all shadow-md w-fit cursor-pointer"
          >
            <span>Book a free call</span>
            <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Full-width image — no side padding, edge-to-edge */}
        <div className="relative w-full h-[300px] xs:h-[340px] sm:h-[420px]">
          <Image
            src="/assets/contact-hero-visual.png"
            alt="Book a call with Banega Brand"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

    </section>
  );
}
