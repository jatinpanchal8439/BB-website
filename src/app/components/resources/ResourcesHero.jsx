import React from 'react';

export default function ResourcesHero() {
  const collectionList = [
    { num: "01", text: "Validate your product idea" },
    { num: "02", text: "Choose a manufacturer" },
    { num: "03", text: "Understand your first MOQ" },
    { num: "04", text: "Plan packaging costs" },
    { num: "05", text: "Private label or custom formulation" },
    { num: "06", text: "Prepare for Amazon" },
  ];

  return (
    <section className="w-full bg-[#FCF8F5] pt-32 pb-12 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Top Eyebrow row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-[#FF5425]"></div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-[#061B35] uppercase">
              BANEGA BRAND | RESOURCES
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
            THE FOUNDER'S READING LIST
          </span>
        </div>

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-[800] leading-[1.05] tracking-tight text-[#061B35]">
            Founder <span className="text-[#FF5425]">Guides</span>
          </h1>
          <p className="text-gray-500 text-[16px] sm:text-[18px] font-medium leading-relaxed max-w-[460px] lg:mb-4">
            Practical answers for first-time founders in India. From your first idea to planning a product launch.
          </p>
        </div>

        {/* Divider & Filter Row */}
        <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <span className="text-[14px] font-bold text-[#061B35]">
            06 short guides · One complete reading page
          </span>
          <span className="text-[13px] text-gray-400 font-medium">
            Start with an idea. Explore at your own pace.
          </span>
        </div>

        {/* In This Collection Box */}
        <div className="w-full bg-[#F5EFE9] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          <div className="w-full lg:w-[35%] flex flex-col">
            <span className="text-[11px] font-bold tracking-[0.1em] text-[#FF5425] uppercase mb-4">
              IN THIS COLLECTION
            </span>
            <h2 className="text-[28px] lg:text-[32px] font-bold text-[#061B35] leading-[1.1] mb-4">
              Six questions. Clearer next steps.
            </h2>
            <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
              Each guide is around 100 words. All seven are included in full below.
            </p>
          </div>

          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4 lg:pt-0">
            {collectionList.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-[#FF5425] font-bold text-[14px] mt-0.5">{item.num}</span>
                <span className="text-[#061B35] font-semibold text-[15px] leading-snug">{item.text}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
