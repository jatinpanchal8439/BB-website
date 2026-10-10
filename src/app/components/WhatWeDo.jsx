"use client";
import React from "react";
import Link from "next/link";
import { Package, Factory, PaintRoller, ShieldCheck, Rocket, BarChart3, ArrowRight } from "lucide-react";

export default function WhatWeDo() {
  const steps = [
    {
      number: "01",
      title: "Product",
      description: "Finding the right category, product direction and formulation.",
      icon: <Package size={22} className="text-[#FF5000]" />,
      iconBg: "bg-[#FFEFE7]",
      accentColor: "#FF5000",
      arrowColor: "text-[#FF5000]"
    },
    {
      number: "02",
      title: "Manufacturing",
      description: "Connecting you with the right manufacturing partner and managing production.",
      icon: <Factory size={22} className="text-[#3B82F6]" />,
      iconBg: "bg-[#EEF4FF]",
      accentColor: "#3B82F6",
      arrowColor: "text-[#3B82F6]"
    },
    {
      number: "03",
      title: "Branding",
      description: "Naming, packaging and a brand identity that fits your audience.",
      icon: <PaintRoller size={22} className="text-[#FF5000]" />,
      iconBg: "bg-[#FFEFE7]",
      accentColor: "#FF5000",
      arrowColor: "text-[#FF5000]"
    },
    {
      number: "04",
      title: "Compliance",
      description: "Registrations, licences and documentation your product needs.",
      icon: <ShieldCheck size={22} className="text-[#3B82F6]" />,
      iconBg: "bg-[#EEF4FF]",
      accentColor: "#3B82F6",
      arrowColor: "text-[#3B82F6]"
    },
    {
      number: "05",
      title: "Launch",
      description: "Getting your brand ready for marketplaces, D2C and other sales channels.",
      icon: <Rocket size={22} className="text-[#FF5000]" />,
      iconBg: "bg-[#FFEFE7]",
      accentColor: "#FF5000",
      arrowColor: "text-[#FF5000]"
    },
    {
      number: "06",
      title: "Growth",
      description: "Understanding what comes next once your product is in the market.",
      icon: <BarChart3 size={22} className="text-[#3B82F6]" />,
      iconBg: "bg-[#EEF4FF]",
      accentColor: "#3B82F6",
      arrowColor: "text-[#3B82F6]"
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative w-full overflow-hidden bg-[#FBF8F2] bg-no-repeat bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundImage: "url('/services-overview-bg.png')" }}
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start">
        {/* Left Content Area */}
        <div className="w-full lg:w-[35%] flex flex-col items-center text-center lg:items-start lg:text-left pt-1 lg:pt-4 what-we-do-title">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-5">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
              WHAT WE DO
            </span>
            <div className="h-[1.5px] w-8 sm:w-10 bg-[#FF5000]/25"></div>
          </div>

          <h2 className="text-[28px] xs:text-[34px] sm:text-4xl lg:text-[44px] xl:text-[50px] font-black text-[#18181B] leading-[1.12] tracking-tight mb-4 sm:mb-6">
            From <span className="text-[#FF5000]">Idea</span><br className="hidden lg:block" />
            to Launch,<br className="hidden lg:block" />
            We Handle<br className="hidden lg:block" />
            the Pieces<span className="text-[#FF5000]">.</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-[17px] font-normal leading-relaxed max-w-sm mx-auto lg:mx-0">
            You don&apos;t need to figure everything out before you start. We help with the important parts of building a product brand:
          </p>
        </div>

        {/* Right Cards Grid */}
        <div className="w-full lg:w-[65%] grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-none grid-flow-col lg:grid-flow-row gap-3 sm:gap-5 lg:gap-5 xl:gap-6 relative">
          {steps.map((step, index) => (
            <Link
              href="/contact"
              key={step.number}
              className="what-we-do-card bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 min-h-[160px] sm:min-h-[210px] xl:min-h-[230px] block cursor-pointer relative"
            >
              {/* Top Row: Icon and Number */}
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center ${step.iconBg}`}>
                  {React.cloneElement(step.icon, { className: `${step.icon.props.className} w-4 h-4 sm:w-[22px] sm:h-[22px]` })}
                </div>
                <span className="text-[#FF5000] font-bold text-sm sm:text-lg">{step.number}</span>
              </div>

              {/* Title & Arrow */}
              <div className="mb-2 sm:mb-3">
                <div className="flex justify-between items-center relative">
                  <h3 className="text-[14px] sm:text-lg lg:text-xl font-bold text-[#18181B]">{step.title}</h3>
                  <div className="relative">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0 relative z-10">
                      <ArrowRight size={12} className={`sm:w-3.5 sm:h-3.5 ${step.arrowColor}`} />
                    </div>
                    {/* Connecting line on mobile for the first column */}
                    {index < 3 && (
                      <div className="lg:hidden absolute top-1/2 left-full w-[20px] sm:w-[32px] h-[1.5px] bg-[#FF5000] -translate-y-1/2 pointer-events-none ml-2">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF5000]"></div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Underline accent */}
                <div
                  className="w-5 sm:w-7 h-[2.5px] mt-1.5 sm:mt-2 rounded-full"
                  style={{ backgroundColor: step.accentColor }}
                />
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[11px] sm:text-[13px] font-normal leading-relaxed">
                {step.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
