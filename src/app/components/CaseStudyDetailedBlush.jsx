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
  FlaskConical, 
  MapPin, 
  User, 
  ArrowRight,
  Play,
  X,
  Sparkles
} from "lucide-react";

export default function CaseStudyDetailed() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const timelineData = [
    {
      icon: <Lightbulb className="text-[#ff6b2b] w-6 h-6" />,
      title: "The Idea",
      desc: "The founder came to us with just an idea — a premium, long-lasting women's perfume brand."
    },
    {
      icon: <BarChart2 className="text-[#ff6b2b] w-6 h-6" />,
      title: "What Was Hard",
      desc: "Finding the right formulation, creating a unique packaging, managing budget and handling compliance for fragrance products."
    },
    {
      icon: <Settings className="text-[#ff6b2b] w-6 h-6" />,
      title: "What We Did",
      desc: "We helped with product development, connected the right manufacturer, designed the packaging, handled registrations and planned the launch channels."
    },
    {
      icon: <Rocket className="text-[#ff6b2b] w-6 h-6" />,
      title: "What Happened",
      desc: "The brand went live in just 60 days and is now available on Amazon with amazing initial response."
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
          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#ff6b2b]"></span>
              <span className="font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Case Study</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] mb-6 leading-tight">
              Blush En Bloom<span className="text-[#ff6b2b]">.</span>
            </h2>

            <p className="text-[#5a6072] text-lg mb-14 max-w-md font-medium leading-relaxed">
              From a simple idea to a successful fragrance brand in just 60 days with Banega Brand.
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

            {/* Testimonial */}
            <div className="relative mb-8">
              <div className="absolute -left-4 -top-4 w-11 h-11 bg-[#fff2ea] rounded-xl flex items-center justify-center z-20 shadow-sm border border-orange-100">
                <Quote className="text-[#ff6b2b] w-5 h-5" fill="#ff6b2b" />
              </div>
              <div className="bg-[#fff9f4] border border-[#ffecd9] rounded-2xl p-6 sm:p-8 pl-8 sm:pl-10 relative z-10 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-[#1a1a2e] text-lg">In the Founder&apos;s Words</h4>
                  <button 
                    onClick={() => setActiveVideoModal({ url: "/videos/blush-en-bloom-testimonial.mp4", title: "Blush En Bloom Grand Launch Event" })}
                    className="inline-flex items-center gap-1.5 bg-[#f55926] hover:bg-[#df4a1a] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors shadow-sm cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Video</span>
                  </button>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 relative shrink-0 rounded-full overflow-hidden border border-orange-200">
                    <Image src="/ladki.jpg" alt="Founder" fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[#5a6072] italic text-sm md:text-base leading-relaxed mb-2">
                      &ldquo;Banega Brand made the entire process so simple. I just had an idea, and they brought it to life. We hit the market way sooner than I expected.&rdquo;
                    </p>
                    <p className="font-bold text-[#1a1a2e] text-sm">Riya Mehta</p>
                    <p className="text-xs text-[#FF4D00] font-semibold uppercase tracking-wider">Founder, Blush En Bloom</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grand Launch Video Spotlight */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 relative z-10 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-28 h-32 relative rounded-xl overflow-hidden shrink-0 border border-gray-100">
                <Image 
                  src="/videos/blush-en-bloom-thumb.jpg" 
                  alt="Blush En Bloom Grand Launch Event" 
                  fill 
                  className="object-cover object-center" 
                />
                <button 
                  onClick={() => setActiveVideoModal({ url: "/videos/blush-en-bloom-testimonial.mp4", title: "Blush En Bloom Grand Launch Event" })}
                  className="absolute inset-0 bg-black/30 flex items-center justify-center group hover:bg-black/40 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                    <Play className="w-3.5 h-3.5 text-[#ff6b2b] fill-[#ff6b2b] ml-0.5" />
                  </div>
                </button>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                  <Sparkles className="w-4 h-4 text-[#ff6b2b]" />
                  <span className="text-[11px] font-bold text-[#ff6b2b] uppercase tracking-wider">Launch Celebration</span>
                </div>
                <h5 className="font-bold text-[#1a1a2e] text-sm mb-1">A Grand Event, A New Chapter</h5>
                <p className="text-[#5a6072] text-xs leading-relaxed mb-2">
                  My first brand affair with Blush En Bloom. A luxury launch celebration organized by Banega Brand.
                </p>
                <button 
                  onClick={() => setActiveVideoModal({ url: "/videos/blush-en-bloom-testimonial.mp4", title: "Blush En Bloom Grand Launch Event" })}
                  className="text-xs font-bold text-[#ff6b2b] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  Play Launch Video →
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (Visual showcase - shown first on mobile) */}
          <div className="w-full lg:w-[55%] flex flex-col gap-3 sm:gap-6 order-first lg:order-last mb-8 lg:mb-0">

            {/* Website Mockup */}
            <div className="rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#f0e6de] bg-white">
              <Image 
                src="/Frame 13.png" 
                alt="Blush Darling Website" 
                width={1200} 
                height={750} 
                className="w-full h-auto object-cover block" 
                priority 
              />
            </div>

            {/* Info Bar - 3 Columns Horizontal */}
            <div className="bg-white rounded-2xl sm:rounded-[20px] p-3 sm:p-5 shadow-sm border border-[#F2E5DA] grid grid-cols-3 divide-x divide-[#F0E2D6]">
              <div className="flex items-center justify-start gap-2 sm:gap-3 px-2 sm:px-4">
                <FlaskConical className="text-[#ff6b2b] w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">Category</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-base leading-tight truncate">Perfume</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 sm:gap-3 px-2 sm:px-4">
                <MapPin className="text-[#ff6b2b] w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">City</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-base leading-tight truncate">Delhi</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 sm:gap-3 px-2 sm:px-4">
                <User className="text-[#ff6b2b] w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">Founder</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-base leading-tight truncate">Riya Mehta</p>
                </div>
              </div>
            </div>

            {/* Feature Images - 3 Columns Horizontal */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image src="/blush1.jpg" alt="Unique Formulation" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">Unique<br />Formulation</p>
              </div>
              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image src="/blush2.jpg" alt="Premium Packaging" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">Premium<br />Packaging</p>
              </div>
              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm cursor-pointer" onClick={() => setActiveVideoModal({ url: "/videos/blush-en-bloom-testimonial.mp4", title: "Blush En Bloom Grand Launch Event" })}>
                <Image src="/videos/blush-en-bloom-thumb.jpg" alt="Grand Launch Event" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <Play className="w-3 h-3 text-[#ff6b2b] fill-[#ff6b2b] ml-0.5" />
                </div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">Grand<br />Launch Event</p>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="bg-[#FFF5EC] border border-[#FFDFC9] rounded-2xl sm:rounded-[24px] p-3.5 sm:p-5 md:p-6 shadow-sm flex items-center justify-between gap-2.5 sm:gap-6">
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <Rocket className="text-[#ff6b2b] w-6 h-6 sm:w-7 sm:h-7 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <h4 className="font-bold text-[#1a1a2e] text-[11px] sm:text-[15px] md:text-[17px] leading-tight mb-0.5">
                    Want to Create a<br className="sm:hidden" /> Success Story Like This?
                  </h4>
                  <p className="text-[#5a6072] text-[9px] sm:text-xs md:text-sm truncate sm:overflow-visible">
                    Let&apos;s turn your idea into the next big brand.
                  </p>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="bg-[#ff6b2b] hover:bg-[#eb5b1b] transition-all duration-300 text-white rounded-full py-2 px-3 sm:py-3 sm:px-5 md:px-6 font-semibold text-[10px] sm:text-xs md:text-sm flex items-center gap-1.5 sm:gap-3 shrink-0 whitespace-nowrap shadow-md shadow-orange-500/20 hover:-translate-y-0.5"
              >
                <span>Start Your Own Story</span>
                <span className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-white text-[#ff6b2b] rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={10} className="sm:hidden" strokeWidth={2.5} />
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
            className="bg-black rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h4 className="text-white font-bold text-sm sm:text-base">{activeVideoModal.title}</h4>
              <button 
                onClick={() => setActiveVideoModal(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative aspect-[9/16] max-h-[75vh] w-full bg-black flex items-center justify-center mx-auto">
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
