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

  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 font-sans">
      <div className="max-w-[800px] mx-auto px-6 md:px-8 flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 sm:w-16 bg-orange-200"></div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-[#FF5425] uppercase">
            FAQ
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-orange-200"></div>
        </div>

        {/* Heading */}
        <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-[800] leading-[1.1] tracking-tight text-[#061B35] mb-6 text-center">
          Questions Founders<br />
          <span className="text-[#FF5425]">Usually Ask</span>
        </h2>

        {/* Subheading */}
        <p className="text-[15px] sm:text-[16px] text-gray-500 font-medium leading-relaxed max-w-[460px] mb-16 text-center">
          Here are some common questions we get from founders, with clear and practical answers.
        </p>

        {/* FAQ Accordion */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`w-full flex gap-4 sm:gap-6 py-6 sm:py-8 border-t border-gray-100 ${isOpen ? 'bg-[#FCF8F5]/30' : 'bg-transparent hover:bg-gray-50/50'} transition-colors cursor-pointer px-2 sm:px-4 rounded-xl`}
                onClick={() => toggleFaq(index)}
              >
                {/* Number Circle */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFF2E6] flex items-center justify-center text-[#FF5425] text-[12px] sm:text-[14px] font-bold shrink-0 mt-1">
                  {faq.num}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-[16px] sm:text-[18px] font-bold mt-2 ${isOpen ? 'text-[#FF5425]' : 'text-[#061B35]'} transition-colors`}>
                      {faq.question}
                    </h3>
                    
                    {/* Plus/Minus Icon */}
                    <button className="shrink-0 w-8 h-8 rounded-full border border-orange-200 flex items-center justify-center text-[#FF5425] mt-1 hover:bg-[#FF5425] hover:text-white transition-colors">
                      {isOpen ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  {/* Answer (Accordion) */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
