import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldAlert, Sparkles } from "lucide-react";

export default function ManufacturerCTA() {
  return (
    <section className="w-full bg-[#0B1B36] font-sans py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#FF4D00]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 relative z-10 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 bg-white/10 text-[#FF4D00] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 backdrop-blur-sm border border-white/10">
          <Sparkles size={16} />
          <span>Verified Manufacturer Matchmaking</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6 max-w-3xl">
          Ready to Find the <span className="text-[#FF4D00]">Right Factory</span> for Your Brand?
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-10 font-medium">
          Tell us about your product idea, target quantity, and budget. We will share formulation feasibility, sample timelines, and wholesale cost breakdown within 48 hours.
        </p>

        {/* Benefits Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 text-left w-full max-w-2xl mx-auto">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            <CheckCircle className="text-[#FF4D00] w-5 h-5 shrink-0" />
            <span className="text-white text-xs sm:text-sm font-medium">Pre-Negotiated MOQs</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            <CheckCircle className="text-[#FF4D00] w-5 h-5 shrink-0" />
            <span className="text-white text-xs sm:text-sm font-medium">Free Formula Audit</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            <CheckCircle className="text-[#FF4D00] w-5 h-5 shrink-0" />
            <span className="text-white text-xs sm:text-sm font-medium">Door-to-Door Delivery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="#book-call"
            className="w-full sm:w-auto bg-[#FF4D00] hover:bg-[#e64500] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-xl shadow-[#FF4D00]/25 hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            <span>Book Factory Consultation Call</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
          <a
            href="https://wa.me/918439000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-full font-bold text-base transition-all duration-300 border border-white/15"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
