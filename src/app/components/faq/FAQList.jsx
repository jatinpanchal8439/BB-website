"use client";
import React, { useState } from 'react';

export default function FAQList() {
  const faqs = [
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

  const [openIndices, setOpenIndices] = useState({ 0: true, 1: true, 2: true, 3: true });

  const toggleFaq = (index) => {
    setOpenIndices(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="w-full bg-[#FCF8F5] pt-4 pb-16 sm:py-20 lg:py-24 font-sans">
      <div className="max-w-[860px] mx-auto px-5 sm:px-8 flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
          <div className="h-[1px] w-8 sm:w-14 bg-orange-300"></div>
          <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
            FAQ
          </span>
          <div className="h-[1px] w-8 sm:w-14 bg-orange-300"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[30px] xs:text-[34px] sm:text-[44px] lg:text-[52px] font-[800] leading-[1.1] tracking-tight text-[#061B35] mb-3 sm:mb-4 text-center">
          Questions Founders<br />
          <span className="text-[#FF5425]">Usually Ask</span>
        </h2>

        {/* Subheading */}
        <p className="text-[13px] sm:text-[15px] text-gray-500 font-medium leading-relaxed max-w-[360px] sm:max-w-[460px] mb-8 sm:mb-12 text-center">
          Here are some common questions we get from founders, with clear and practical answers.
        </p>

        {/* FAQ Accordion Cards */}
        <div className="w-full flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = !!openIndices[index];
            
            return (
              <div 
                key={index} 
                className="w-full bg-white rounded-2xl border border-[#F0EAE1] shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-4 sm:p-5 flex flex-col gap-2 transition-all duration-300 hover:border-orange-200 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  {/* Number Circle */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF5425] text-[11px] sm:text-[13px] font-bold shrink-0 mt-0.5">
                    {faq.num}
                  </div>

                  {/* Title */}
                  <h3 className={`text-[14px] sm:text-[16px] font-bold leading-snug flex-1 pt-1 ${isOpen ? 'text-[#061B35]' : 'text-[#061B35]'} transition-colors`}>
                    {faq.question}
                  </h3>
                  
                  {/* Chevron Toggle Button */}
                  <div 
                    className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-orange-200/90 flex items-center justify-center text-[#FF5425] mt-0.5 transition-colors ${isOpen ? 'bg-[#FFF2E6] text-[#FF5425]' : 'bg-transparent'}`}
                  >
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Collapsible Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out pl-11 sm:pl-13 ${
                    isOpen ? 'max-h-96 opacity-100 pt-1 pb-1' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[12px] sm:text-[14px] text-gray-500 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
