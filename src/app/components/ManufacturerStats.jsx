import React from "react";
import { Factory, ShieldCheck, Layers, Award } from "lucide-react";

export default function ManufacturerStats() {
  const stats = [
    {
      icon: <Factory className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF4D00]" strokeWidth={2} />,
      number: "50+",
      title: "Vetted Factories",
      desc: "Top manufacturing facilities across Gujarat, Maharashtra, HP, Delhi NCR & South India.",
    },
    {
      icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF4D00]" strokeWidth={2} />,
      number: "500+",
      title: "Low MOQ Batches",
      desc: "Flexible batch sizes starting from just 500 units so you can test before scaling.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF4D00]" strokeWidth={2} />,
      number: "100%",
      title: "Compliance & GMP",
      desc: "FDA, AYUSH, ISO 9001 and GMP certified production units with rigorous quality audits.",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF4D00]" strokeWidth={2} />,
      number: "₹0",
      title: "Hidden Markups",
      desc: "Transparent factory pricing negotiated directly to maximize your unit economics.",
    },
  ];

  return (
    <section className="w-full bg-white font-sans py-14 sm:py-20 border-b border-[#F0EFEA]">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-gray-100">
          {stats.map((s, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${idx > 0 ? "lg:pl-8" : ""}`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF5E6] flex items-center justify-center mb-4 sm:mb-5">
                {s.icon}
              </div>
              <span className="text-[#FF4D00] font-black text-3xl sm:text-4xl tracking-tight mb-1 sm:mb-2">
                {s.number}
              </span>
              <h3 className="text-[#0B1B36] font-bold text-base sm:text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed max-w-[260px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
