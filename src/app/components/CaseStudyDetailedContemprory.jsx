"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Lightbulb, 
  BarChart2, 
  Settings, 
  Rocket, 
  Quote, 
  Sparkles, 
  FlaskConical, 
  Building2, 
  User, 
  ArrowRight,
  Play,
  X,
  Award
} from "lucide-react";

export default function CaseStudyDetailedContemprory() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const timelineData = [
    {
      icon: <Lightbulb className="text-[#ff6b2b] w-6 h-6" />,
      title: "The Idea",
      desc: "Mohan Paroha, Founder of Paroha Life Sciences, envisioned CONTEMPRORY — a next-generation clinical skincare brand delivering advanced dermatological care and active ingredient efficacy."
    },
    {
      icon: <BarChart2 className="text-[#ff6b2b] w-6 h-6" />,
      title: "What Was Hard",
      desc: "Developing dermatologically backed active formulations, sourcing airless pump and glass packaging, managing strict quality compliances, and planning an impactful market debut."
    },
    {
      icon: <Settings className="text-[#ff6b2b] w-6 h-6" />,
      title: "What We Did",
      desc: "Banega Brand managed end-to-end execution: formulation development, certified manufacturing partners, bespoke bottle & label aesthetics, legal approvals, and organizing a star-studded launch event."
    },
    {
      icon: <Rocket className="text-[#ff6b2b] w-6 h-6" />,
      title: "What Happened",
      desc: "CONTEMPRORY launched successfully within 60 days with massive social media visibility, attendance by 50+ creators and influencers, and overwhelming initial customer reception."
    }
  ];

  return (
    <section id="details" className="w-full bg-[#fdfdfd] py-16 md:py-24 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-64 -right-64 w-[600px] h-[600px] border-[1px] border-[#ffebd6] rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-[800px] h-[800px] border-[1px] border-[#ffebd6] rounded-full opacity-60 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">

          {/* Left Column */}
          <div className="w-full lg:w-[48%] flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#ff6b2b]"></span>
              <span className="font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Case Study</span>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] leading-tight">
                CONTEMPRORY<span className="text-[#ff6b2b]">.</span>
              </h2>
            </div>
            
            <p className="text-[#FF4D00] text-lg font-semibold tracking-wide uppercase mb-4">
              Renew. Replenish. Redefine. — Define Your Presence
            </p>

            <p className="text-[#5a6072] text-base md:text-lg mb-12 max-w-lg font-medium leading-relaxed">
              Crafted by Paroha Life Sciences in collaboration with Banega Brand. High-performance anti-ageing skincare featuring Retinal, Bakuchiol & Peptides, paired with bespoke fine fragrances.
            </p>

            {/* Timeline */}
            <div className="relative mb-14">
              <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px] border-l-2 border-dashed border-[#fcd5c5]"></div>

              <div className="flex flex-col gap-10">
                {timelineData.map((item, idx) => (
                  <div key={idx} className="relative flex gap-6 z-10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#fcd5c5] shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                      <p className="text-[#5a6072] leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Testimonial Card */}
            <div className="relative mb-8">
              <div className="absolute -left-4 -top-4 w-11 h-11 bg-[#fff2ea] rounded-xl flex items-center justify-center z-20 shadow-sm border border-orange-100">
                <Quote className="text-[#ff6b2b] w-5 h-5" fill="#ff6b2b" />
              </div>
              <div className="bg-[#fff9f4] border border-[#ffecd9] rounded-2xl p-6 sm:p-8 pl-8 sm:pl-10 relative z-10 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-[#1a1a2e] text-lg">In the Founder&apos;s Words</h4>
                  <button 
                    onClick={() => setActiveVideoModal({ url: "/videos/paroha-testimonial.mp4", title: "Mohan Paroha - Founder Testimonial" })}
                    className="inline-flex items-center gap-1.5 bg-[#f55926] hover:bg-[#df4a1a] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Video</span>
                  </button>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 relative shrink-0 rounded-full overflow-hidden border-2 border-[#ff6b2b]/30">
                    <Image 
                      src="/videos/paroha-thumb.jpg" 
                      alt="Mohan Paroha" 
                      fill 
                      sizes="56px" 
                      className="object-cover object-center" 
                    />
                  </div>
                  <div>
                    <p className="text-[#5a6072] italic text-sm md:text-base leading-relaxed mb-3">
                      &ldquo;We planned the vision, but Banega Brand executed it to perfection. From product development to the grand launch, their dedicated team delivered a true 10/10 experience.&rdquo;
                    </p>
                    <p className="font-bold text-[#1a1a2e] text-sm">Mohan Paroha</p>
                    <p className="text-xs text-[#FF4D00] font-semibold uppercase tracking-wider">Founder, CONTEMPRORY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grand Launch Highlight Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 relative z-10 shadow-sm flex flex-col sm:flex-row items-center gap-5">
              <div className="w-full sm:w-28 h-28 relative rounded-xl overflow-hidden shrink-0 border border-gray-100">
                <Image 
                  src="/videos/contemprory-launch-thumb.jpg" 
                  alt="CONTEMPRORY Launch Event" 
                  fill 
                  className="object-cover object-top" 
                />
                <button 
                  onClick={() => setActiveVideoModal({ url: "/videos/contemprory-launch-testimonial.mp4", title: "CONTEMPRORY Grand Launch Event" })}
                  className="absolute inset-0 bg-black/30 flex items-center justify-center group hover:bg-black/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                    <Play className="w-3.5 h-3.5 text-[#ff6b2b] fill-[#ff6b2b] ml-0.5" />
                  </div>
                </button>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#ff6b2b]" />
                  <span className="text-xs font-bold text-[#ff6b2b] uppercase tracking-wider">Grand Launch Event</span>
                </div>
                <h5 className="font-bold text-[#1a1a2e] text-base mb-1">Star-Studded Creator Gathering</h5>
                <p className="text-[#5a6072] text-xs sm:text-sm leading-relaxed mb-2">
                  50+ influencers & industry experts gathered for an electrifying showcase celebrating CONTEMPRORY&apos;s market debut.
                </p>
                <button 
                  onClick={() => setActiveVideoModal({ url: "/videos/contemprory-launch-testimonial.mp4", title: "CONTEMPRORY Grand Launch Event" })}
                  className="text-xs font-bold text-[#ff6b2b] hover:underline inline-flex items-center gap-1"
                >
                  Watch Launch Highlights →
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (Visual showcase - shown first on mobile) */}
          <div className="w-full lg:w-[52%] flex flex-col gap-4 sm:gap-6 order-first lg:order-last mb-8 lg:mb-0">

            {/* Brand Logo Banner */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#f0e6de] flex items-center justify-between">
              <div className="relative w-40 sm:w-52 h-14 sm:h-16">
                <Image 
                  src="/logos/Contempory logo clean.png" 
                  alt="CONTEMPRORY Brand Logo" 
                  fill 
                  className="object-contain object-left" 
                  priority 
                />
              </div>
              <div className="text-right">
                <span className="inline-block bg-orange-50 text-[#ff6b2b] font-bold text-xs px-3 py-1 rounded-full border border-orange-100">
                  New-Age Lifestyle
                </span>
              </div>
            </div>

            {/* Website Mockup */}
            <div className="rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#f0e6de] bg-white group">
              <Image 
                src="/contemprory-website-showcase.png" 
                alt="CONTEMPRORY Official Website — Renew. Replenish. Redefine." 
                width={1024} 
                height={457} 
                className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-[1.02]" 
                priority 
              />
            </div>

            {/* Info Bar - 4 Columns Horizontal */}
            <div className="bg-white rounded-2xl sm:rounded-[20px] p-3 sm:p-5 shadow-sm border border-[#F2E5DA] grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F0E2D6] gap-y-3 sm:gap-y-0">
              <div className="flex items-center justify-start gap-2.5 px-2 sm:px-3">
                <FlaskConical className="text-[#ff6b2b] w-5 h-5 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">Category</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-sm leading-tight truncate">Advanced Skincare</p>
                </div>
              </div>

              <div className="flex items-center justify-start gap-2.5 px-2 sm:px-3 pt-2 sm:pt-0">
                <Building2 className="text-[#ff6b2b] w-5 h-5 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">Entity</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-sm leading-tight truncate">Paroha Life Sciences</p>
                </div>
              </div>

              <div className="flex items-center justify-start gap-2.5 px-2 sm:px-3 pt-2 sm:pt-0">
                <User className="text-[#ff6b2b] w-5 h-5 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">Founder</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-sm leading-tight truncate">Mohan Paroha</p>
                </div>
              </div>

              <div className="flex items-center justify-start gap-2.5 px-2 sm:px-3 pt-2 sm:pt-0">
                <Award className="text-[#ff6b2b] w-5 h-5 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">Launch</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-sm leading-tight truncate">D2C & Grand Event</p>
                </div>
              </div>
            </div>

            {/* Feature Images - 3 Columns Horizontal */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image 
                  src="/videos/contemprory-launch-thumb.jpg" 
                  alt="Celebrity Grand Launch" 
                  fill 
                  sizes="(max-width: 768px) 33vw, 20vw" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">
                  Grand<br />Launch Event
                </p>
              </div>

              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image 
                  src="/unique_formulation.jpg" 
                  alt="Advanced Formulations" 
                  fill 
                  sizes="(max-width: 768px) 33vw, 20vw" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">
                  Clinical<br />Formulation
                </p>
              </div>

              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image 
                  src="/premium_packaging.jpg" 
                  alt="Luxury Glass Packaging" 
                  fill 
                  sizes="(max-width: 768px) 33vw, 20vw" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">
                  Luxury<br />Packaging
                </p>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="bg-[#FFF5EC] border border-[#FFDFC9] rounded-2xl sm:rounded-[24px] p-3.5 sm:p-5 md:p-6 shadow-sm flex items-center justify-between gap-2.5 sm:gap-6">
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <Rocket className="text-[#ff6b2b] w-6 h-6 sm:w-7 sm:h-7 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <h4 className="font-bold text-[#1a1a2e] text-[12px] sm:text-[15px] md:text-[17px] leading-tight mb-0.5">
                    Want to Create a Success Story Like CONTEMPRORY?
                  </h4>
                  <p className="text-[#5a6072] text-[10px] sm:text-xs md:text-sm truncate sm:overflow-visible">
                    From idea to grand market launch in 60 days.
                  </p>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="bg-[#ff6b2b] hover:bg-[#eb5b1b] transition-all duration-300 text-white rounded-full py-2.5 px-3.5 sm:py-3 sm:px-5 md:px-6 font-semibold text-[11px] sm:text-xs md:text-sm flex items-center gap-2 shrink-0 whitespace-nowrap shadow-md shadow-orange-500/20 hover:-translate-y-0.5"
              >
                <span>Start Your Own Story</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-white text-[#ff6b2b] rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={12} className="sm:hidden" strokeWidth={2.5} />
                  <ArrowRight size={14} className="hidden sm:block" strokeWidth={2.5} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="bg-black rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h4 className="text-white font-bold text-sm sm:text-base">{activeVideoModal.title}</h4>
              <button 
                onClick={() => setActiveVideoModal(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video 
                src={activeVideoModal.url} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
