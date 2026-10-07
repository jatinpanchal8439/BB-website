"use client";
import React from "react";
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
      className="relative w-full overflow-hidden bg-[#FBF8F2] bg-no-repeat bg-cover bg-center h-[100vh] lg:py-24"
      style={{ backgroundImage: "url('/services-overview-bg.png')" }}
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-14 items-start">
        {/* Left Content Area */}
        <div className="w-full lg:w-[34%] flex flex-col pt-2 lg:pt-4 what-we-do-title">
          <div className="flex items-center gap-3 mb-5">
            <span className="sm: font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
              WHAT WE DO
            </span>
            <div className="h-[1.5px] w-10 bg-[#FF5000]/25"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-black text-[#18181B] leading-[1.12] tracking-tight mb-6">
            From <span className="text-[#FF5000]">Idea</span><br />
            to Launch,<br />
            We Handle<br />
            the Pieces<span className="text-[#FF5000]">.</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-[17px] font-normal leading-relaxed max-w-sm">
            You don't need to figure everything out before you start. We help with the important parts of building a product brand:
          </p>
        </div>

        {/* Right Cards Grid */}
        <div className="w-full lg:w-[66%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="what-we-do-card bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100/80 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 min-h-[235px]"
            >
              {/* Top Row: Icon and Number */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center ${step.iconBg}`}>
                  {step.icon}
                </div>
                <span className="text-[#FF5000] font-bold text-lg">{step.number}</span>
              </div>

              {/* Title & Arrow */}
              <div className="mb-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-bold text-[#18181B]">{step.title}</h3>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={15} className={step.arrowColor} />
                  </div>
                </div>
                {/* Underline accent */}
                <div
                  className="w-7 h-[2.5px] mt-2 rounded-full"
                  style={{ backgroundColor: step.accentColor }}
                />
              </div>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-[13px] font-normal leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
