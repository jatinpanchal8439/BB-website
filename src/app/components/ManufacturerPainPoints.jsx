import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ManufacturerPainPoints() {
  const comparisons = [
    {
      problem: "Massive MOQs (5,000 to 10,000+ units minimum) locking up your entire initial capital.",
      solution: "Low entry batch sizes starting at 500 units, letting you validate and iterate quickly.",
    },
    {
      problem: "Unresponsive plant managers who prioritize huge enterprise clients and ghost small founders.",
      solution: "Dedicated Banega Brand production managers tracking formulations, batch samples, and timelines daily.",
    },
    {
      problem: "Disjointed supply chain — one vendor for bottle, another for caps, another for outer box, another for filling.",
      solution: "Complete turnkey manufacturing: formula R&D, custom bottles, luxury packaging, filling & carton packaging under one roof.",
    },
    {
      problem: "Hidden certification fees, inconsistent formulation batches, and unexpected delay penalties.",
      solution: "Pre-audited GMP & ISO factories, fixed transparent pricing, and guaranteed lab-tested stability reports.",
    },
  ];

  return (
    <section className="w-full bg-[#FCFBF8] font-sans py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#FF4D00]"></span>
            <span className="font-bold sm: tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
              The Reality Check
            </span>
            <span className="w-8 h-[2px] bg-[#FF4D00]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#0B1B36] leading-[1.1] tracking-tight mb-5">
            Why Finding the <span className="text-[#FF4D00]">Right Factory</span> is Hard
          </h2>

          <p className="text-[#64748B] text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Most first-time founders waste 6-9 months and lakhs of rupees talking to the wrong manufacturing plants. Here is how our network changes the game.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Traditional Direct Sourcing (Red / Gray Card) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] border border-red-100 flex flex-col">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-gray-100">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <XCircle size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[#0B1B36] font-extrabold text-lg sm:text-xl">Direct Factory Sourcing</h3>
                <p className="text-gray-400 text-xs font-semibold">The stressful, slow, and expensive route</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6 flex-1">
              {comparisons.map((c, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-[#475569] text-xs sm:text-sm font-medium leading-relaxed">
                    {c.problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Banega Brand Network (Green / Navy / Orange Card) */}
          <div className="bg-[#0B1B36] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10 flex flex-col relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4D00]/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/10 relative z-10">
              <div className="w-9 h-9 rounded-full bg-[#FF4D00]/20 flex items-center justify-center text-[#FF4D00]">
                <CheckCircle2 size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg sm:text-xl">With Banega Brand Network</h3>
                <p className="text-[#FF4D00] text-xs font-bold tracking-wide">Turnkey, low-risk, verified execution</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6 flex-1 relative z-10">
              {comparisons.map((c, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm font-medium leading-relaxed">
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <Link 
                href="#book-call"
                className="inline-flex items-center gap-3 text-white font-bold text-sm hover:text-[#FF4D00] transition-colors group"
              >
                <span>Find matched factories for your category</span>
                <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
