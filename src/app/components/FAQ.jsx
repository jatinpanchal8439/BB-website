"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "I only have an idea. Can I still work with you?",
      answer: "Yes! You don't need a ready product. We help you from the initial idea, concept development, formulation, packaging, branding to final market launch."
    },
    {
      question: "How much money do I need to start?",
      answer: "The investment varies based on product category, formulations, and scale. Our experts can provide a tailored estimate after understanding your vision."
    },
    {
      question: "How long does it take?",
      answer: "Typically, the end-to-end process from ideation to launch takes between 3 to 6 months, depending on the complexity of formulations and packaging."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative bg-[#FCFBF8] py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#FF4D00]"></div>
            <span className="text-[#FF4D00] text-xs font-bold tracking-[0.2em] uppercase">FAQ</span>
            <div className="w-8 h-[1px] bg-[#FF4D00]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#0B1B3D] leading-[1.1] tracking-tight mb-5">
            Questions<br />
            Founders <span className="text-[#FF4D00]">Usually Ask</span>
          </h2>
          
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            Quick answers to help you understand the process, cost, timelines and how we can bring your brand to life.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4 mb-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, '0');

            return (
              <div 
                key={index}
                className={`flex flex-col bg-white rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] ${
                  isOpen ? "border border-[#FFD7BA]" : "border border-transparent"
                }`}
                onClick={() => toggleFaq(index)}
              >
                {/* Accordion Header */}
                <div className="flex items-center px-6 py-5">
                  <div className="w-12 h-12 rounded-full bg-[#FFF2E8] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FF4D00] font-black text-lg">{number}</span>
                  </div>
                  
                  <div className="w-[1px] h-8 bg-gray-200 mx-5 flex-shrink-0"></div>
                  
                  <h3 className="text-lg font-bold text-[#0B1B3D] flex-grow pr-4">
                    {faq.question}
                  </h3>
                  
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp size={24} className="text-[#FF4D00]" />
                    ) : (
                      <ChevronDown size={24} className="text-[#0B1B3D]" />
                    )}
                  </div>
                </div>

                {/* Accordion Body */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100 mb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-[104px] pr-8 text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Action */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-500 font-medium">Still have questions?</p>
          <Link 
            href="#all-faqs"
            className="inline-flex items-center gap-2 bg-[#0B1B3D] hover:bg-[#152a5a] text-white px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            See all FAQs
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
