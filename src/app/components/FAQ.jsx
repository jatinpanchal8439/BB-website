"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export const allFaqs = [
  {
    num: "01",
    question: "I only have an idea. Can I still work with you?",
    answer: "Yes. You don't need to have a formula or manufacturer ready. We can start with your idea and figure out the next steps together."
  },
  {
    num: "02",
    question: "How much money do I need to start?",
    answer: "It depends on the category, product, MOQ, packaging and how you plan to launch. As a broad starting range, projects can vary from ₹3-5 lakh to ₹10 lakh. We can help you understand where your money will go before you start."
  },
  {
    num: "03",
    question: "How long does it take?",
    answer: "A typical launch can take around 45–90 days, but the timeline depends on the product, formulation, testing, packaging and approvals involved."
  },
  {
    num: "04",
    question: "Which product categories do you support?",
    answer: "We support Perfume & Fragrance, Beauty & Skincare, Ayurveda & Wellness, Nutraceuticals and other consumer-product categories relevant to D2C brands."
  },
  {
    num: "05",
    question: "How do you help choose a manufacturer?",
    answer: "We match you with suppliers based on your product category, quality expectations, MOQ needs and launch requirements."
  },
  {
    num: "06",
    question: "What is a typical MOQ?",
    answer: "MOQs vary by category, supplier and product type. We help compare options so you can choose the right starting volume for your launch."
  },
  {
    num: "07",
    question: "What is the difference between private label and custom formulation?",
    answer: "Private label often uses an existing supplier formula, while custom formulation is tailored to your brand goals. We help you decide which path fits your product and launch plan."
  },
  {
    num: "08",
    question: "Can I sample products before production?",
    answer: "Yes. We recommend sampling so you can review texture, scent, feel and performance before finalizing production."
  },
  {
    num: "09",
    question: "Do you support packaging and branding?",
    answer: "Yes. We help with packaging design and branding so your product looks polished and ready for launch."
  },
  {
    num: "10",
    question: "Who handles licences, testing and compliance?",
    answer: "Requirements vary by category and supplier. We help guide compliance support, testing and license needs so you understand what is involved."
  },
  {
    num: "11",
    question: "Can you help launch on marketplaces or my own website?",
    answer: "Yes. We support marketplace launch on Amazon, Flipkart, Nykaa and other platforms, as well as your own D2C website. Eligibility varies by category and channel."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative bg-[#FCFBF8] py-20 sm:py-24 border-t border-gray-100/70 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 sm:w-10 h-[1.5px] bg-[#FF5000]"></div>
            <span className="text-[#FF5000] text-xs font-bold tracking-[0.2em] uppercase">
              FAQ
            </span>
            <div className="w-8 sm:w-10 h-[1.5px] bg-[#FF5000]"></div>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-black text-[#0B1B36] leading-tight tracking-tight mb-4">
            Questions Founders<br />
            <span className="text-[#FF5000]">Usually Ask</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
            Here are some common questions we get from founders, with clear and practical answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5 sm:gap-4 mb-14">
          {allFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={faq.num}
                className={`flex flex-col bg-white rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.02)] p-5 sm:p-6 ${
                  isOpen ? "border border-[#FFD7BA] shadow-[0_6px_25px_rgba(255,80,0,0.06)]" : "border border-gray-100 hover:border-orange-200"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Number badge */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF2E8] text-[#FF5000] text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {faq.num}
                  </div>
                  
                  {/* Question and Answer */}
                  <div className="flex-grow pr-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#0B1B36] leading-snug">
                      {faq.question}
                    </h3>
                    
                    {/* Collapsible Answer */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-96 opacity-100 mt-2.5" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-500 text-xs sm:text-[13px] font-normal leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  
                  {/* Plus / Minus Toggle Button */}
                  <div 
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                      isOpen 
                        ? "border-[#FF5000] bg-[#FF5000] text-white" 
                        : "border-[#FF5000]/40 text-[#FF5000] hover:border-[#FF5000] hover:bg-[#FFF2E8]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={15} strokeWidth={2.5} />
                    ) : (
                      <Plus size={15} strokeWidth={2.5} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Action */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-500 font-medium text-sm">Still have questions?</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0B1B36] hover:bg-[#152a5a] text-white px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Talk to an Expert
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
