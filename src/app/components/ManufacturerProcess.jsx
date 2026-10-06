import React from "react";
import { FileText, FlaskConical, Building2, CheckSquare2, Truck, ChevronRight } from "lucide-react";

export default function ManufacturerProcess() {
  const steps = [
    {
      num: "01",
      title: "Product Brief & Benchmarking",
      desc: "We analyze your target market, benchmark luxury references, establish price-points, and define MOQ goals.",
      icon: <FileText className="w-6 h-6 text-[#FF4D00]" strokeWidth={2} />,
    },
    {
      num: "02",
      title: "Formulation & Lab Sampling",
      desc: "Our cosmetic chemists and perfumers develop custom samples for you to test, adjust notes, and approve.",
      icon: <FlaskConical className="w-6 h-6 text-[#FF4D00]" strokeWidth={2} />,
    },
    {
      num: "03",
      title: "Factory Matching & Costing",
      desc: "We pair your approved formula with the optimal certified plant, securing the best per-unit wholesale price.",
      icon: <Building2 className="w-6 h-6 text-[#FF4D00]" strokeWidth={2} />,
    },
    {
      num: "04",
      title: "Turnkey Production & QA",
      desc: "Bottles, nozzles, caps, outer packaging & bulk compounding are audited on-site before batch filling starts.",
      icon: <CheckSquare2 className="w-6 h-6 text-[#FF4D00]" strokeWidth={2} />,
    },
    {
      num: "05",
      title: "Compliance & Dispatch",
      desc: "Batch test COA reports, FDA/AYUSH paperwork, and insured door-to-door freight to your warehouse or 3PL.",
      icon: <Truck className="w-6 h-6 text-[#FF4D00]" strokeWidth={2} />,
    },
  ];

  return (
    <section className="w-full bg-[#FCFBF8] font-sans py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#FF4D00]"></span>
            <span className="text-[#FF4D00] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase">
              End-to-End Workflow
            </span>
            <span className="w-8 h-[2px] bg-[#FF4D00]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#0B1B36] leading-[1.1] tracking-tight mb-5">
            How Our Manufacturing <span className="text-[#FF4D00]">Process Works</span>
          </h2>

          <p className="text-[#64748B] text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            From initial formula sampling to final sealed cartons at your doorstep, we manage every single technical check.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <div 
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#FF4D00] font-black text-2xl tracking-tight">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF5E6] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#0B1B36] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-[#FF4D00]/30 shadow-md items-center justify-center z-10">
                  <ChevronRight size={14} className="text-[#FF4D00]" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
