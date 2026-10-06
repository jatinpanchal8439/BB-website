import React from "react";
import Image from "next/image";
import { Sparkles, Droplets, Sun, HeartHandshake, Box, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ManufacturerCapabilities() {
  const categories = [
    {
      title: "Fine Fragrances & Perfumes",
      desc: "Eau De Parfum (EDP), Extrait, Attars, Body Mists, Pocket Perfumes. Imported French & Arabian fragrance oils with 10-14hr longevity.",
      moq: "From 500 pcs",
      tags: ["French Fragrance Oils", "IFRA Certified", "Custom Bottle Sourcing"],
      image: "/about-bottles.png",
      badge: "Flagship Specialty",
    },
    {
      title: "Skincare & Active Serums",
      desc: "Vitamin C, Niacinamide, Salicylic Acid, Retinol Serums, Sunscreens SPF 50+ PA++++, Foaming Face Washes and Barrier Repair moisturizers.",
      moq: "From 1,000 pcs",
      tags: ["Dermatologically Tested", "Clean & Toxin-Free", "Stability Tested"],
      image: "/mo2.png",
      badge: "High Growth",
    },
    {
      title: "Cosmetics & Color Formulation",
      desc: "Matte Lipsticks, Liquid Lip Inks, Foundations, BB Creams, Setting Powders, Highlighters, and Eyeliners with ultra-pigmented textures.",
      moq: "From 1,000 pcs",
      tags: ["Cruelty-Free", "FDA Compliant", "Custom Shades"],
      image: "/mo3.png",
      badge: "Trending",
    },
    {
      title: "Ayurveda & Herbal Wellness",
      desc: "Classical Ayurvedic Oils, Onion & Rosemary Hair Oils, Herbal Shampoos, Kumkumadi face oils, and wellness extracts with AYUSH licensing.",
      moq: "From 500 pcs",
      tags: ["AYUSH Approved", "Authentic Decoctions", "Cold-Pressed"],
      image: "/mo1.png",
      badge: "Heritage Formulation",
    },
  ];

  return (
    <section id="manufacturers" className="w-full bg-white font-sans py-14 sm:py-20 lg:py-28 border-b border-[#F0EFEA]">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#FF4D00]"></span>
              <span className="text-[#FF4D00] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase">
                Manufacturing Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#0B1B36] leading-[1.1] tracking-tight">
              Categories We <span className="text-[#FF4D00]">Produce</span>
            </h2>
          </div>

          <p className="text-[#64748B] text-sm sm:text-base font-medium max-w-md">
            Direct access to specialized GMP-grade manufacturing facilities equipped for luxury finishes, custom formulation, and rapid batch dispatch.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((cat, i) => (
            <div 
              key={i}
              className="bg-[#FCFBF8] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#FFF5E6] text-[#FF4D00] font-extrabold text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full tracking-wide">
                    {cat.badge}
                  </span>
                  <span className="text-[#0B1B36] font-bold text-xs sm:text-sm bg-white px-3 py-1 rounded-full border border-gray-100">
                    MOQ: <span className="text-[#FF4D00] font-extrabold">{cat.moq}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0B1B36] mb-3 group-hover:text-[#FF4D00] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {cat.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] sm:text-xs font-semibold bg-white text-[#475569] px-3 py-1 rounded-lg border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link 
                  href="#book-call"
                  className="text-sm font-bold text-[#0B1B36] group-hover:text-[#FF4D00] transition-colors flex items-center gap-2"
                >
                  <span>Request Factory Quote & Samples</span>
                  <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
