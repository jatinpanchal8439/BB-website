import React from 'react';
import Image from 'next/image';

export default function ResourcesList() {
  const resources = [
    {
      num: "01",
      category: "GETTING STARTED",
      title: "I Have a Product Idea. What Should I Do First?",
      paragraphs: [
        "Start with a customer problem, not a bulk order. Describe who the product is for, what it solves and why someone would choose it over existing options. Speak to potential buyers, review competing products and note common complaints. Test interest with a simple concept, sample or small pilot before committing.",
        "Write a product brief covering ingredients or materials, pack size, target selling price and sales channel. Request indicative manufacturing and packaging quotes, then estimate your margin after delivery, taxes and channel fees. Check which category-specific licences, tests and labels may apply in India. Use these findings to refine the idea before spending on inventory."
      ],
      image: "/assets/blog/1f9d24ffbb6b02acb82321cedae3e1500bd112ef.jpg"
    },
    {
      num: "02",
      category: "MANUFACTURING",
      title: "How Do I Choose the Right Manufacturer?",
      paragraphs: [
        "Shortlist manufacturers with experience in your product category, not simply the lowest quote. Ask about production capacity, minimum order quantities, lead times and quality checks. Request samples made to your brief and assess consistency, packaging compatibility and performance. Where practical, visit the facility or arrange an independent inspection before paying.",
        "Verify relevant licences and certifications for your category, and clarify who handles testing and documentation. Compare written quotes using the same specifications, including taxes, freight and packaging. Agree on payment milestones, acceptable defects, replacement terms and delivery responsibilities. Record formula ownership, confidentiality and repeat-order pricing in the contract. A clear agreement matters as much as a good sample."
      ],
      image: "/assets/blog/7ca785cc4f4074adfce3497b6942a9e0f2f5b841.jpg"
    },
    {
      num: "03",
      category: "PRODUCTION PLANNING",
      title: "What Should I Know Before Placing My First MOQ?",
      paragraphs: [
        "MOQ means minimum order quantity: the smallest batch a supplier will accept. It may apply separately to a formula, pack size, colour or printed component. Confirm each minimum in writing. A lower unit price on a larger batch is not automatically better if stock ties up cash or expires unsold.",
        "Calculate landed cost: product, packaging, freight, handling, duties where applicable and non-recoverable taxes. Track recoverable GST separately with accounting advice. Add storage and selling costs when assessing margin. Check shelf life, demand assumptions, payment terms and replenishment time. Ask whether a paid pilot or stock packaging can reduce your first commitment. Approve samples and specifications before production."
      ],
      image: "/assets/blog/30d2057701b757aa239d3067caf62751052034f8.jpg"
    },
    {
      num: "04",
      category: "PACKAGING & COSTS",
      title: "How Much Does Product Packaging Really Cost?",
      paragraphs: [
        "Packaging cost depends on the product and category. Bottles, jars, pouches and cartons have different material, protection and compatibility needs. Size, order quantity, printing colours, finishes, closures and custom moulds also affect quotes. Separate one-time design, tooling and setup charges from recurring per-unit costs so repeat orders are easier to compare.",
        "Ask for an itemised quote covering primary packs, labels, outer boxes, inserts, shipping cartons, assembly, taxes and transport. Include wastage and sample testing in your plan. Check leakage, breakage and shipping weight before choosing a finish. Label requirements vary by category; leave space for the applicable declarations. Standard components can lower upfront commitment without sacrificing essential protection."
      ],
      image: "/assets/blog/bfff8aa625bb9ad02ef125076ac03f3ccd724376.jpg"
    },
    {
      num: "05",
      category: "PRODUCT DEVELOPMENT",
      title: "Private Label vs Custom Formulation: What's the Difference?",
      paragraphs: [
        "Private label usually means selling a manufacturer's existing formulation under your brand, with agreed packaging and limited changes. It can reduce development work, but other brands may use a similar base. Custom formulation develops or adapts a product to your brief, offering more control over ingredients, performance and differentiation.",
        "Custom work typically needs more sampling, testing, time and budget; neither route guarantees success. Ask what changes are included, who pays for trials and what minimum quantities apply. Formula ownership and exclusivity are contractual, not automatic. Clarify access to specifications, test reports and future manufacturing options. Choose based on your customer need, evidence of demand and available resources."
      ],
      image: "/assets/blog/dd2dd6391de86d05acec171ea8a8ad97f3bc773b.jpg"
    },
    {
      num: "06",
      category: "MARKETPLACE LAUNCH",
      title: "What Should I Know Before Launching on Amazon?",
      paragraphs: [
        "Before buying inventory, check Amazon India's current seller onboarding and category rules. Documentation, GST treatment, product identifiers and approval requirements vary by product and category. Some products need additional licences or safety records. Confirm your product can be listed, and keep invoices and relevant supporting documents ready for verification.",
        "Build accurate titles, clear photographs and descriptions that match your packaging and supported claims. Compare self-shipping, Easy Ship and FBA using current fees and eligibility. Model referral fees, fulfilment, storage, returns and advertising alongside landed cost. Plan stock levels, customer support and return handling. Start with a manageable assortment and review actual margins before expanding your spend."
      ],
      // Reusing the first image for the 6th as it was not provided in the screenshots
      image: "/assets/blog/1f9d24ffbb6b02acb82321cedae3e1500bd112ef.jpg"
    }
  ];

  return (
    <section className="w-full bg-[#FCF8F5] pb-20 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Main Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-16"></div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {resources.map((res, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative">
              
              {/* Left Image */}
              <div className="w-full lg:w-[35%]">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src={res.image} 
                    alt={res.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[65%] flex flex-col pt-2">
                
                {/* Category & Number Row */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[#FF5425] font-bold text-[18px]">{res.num}</span>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <span className="font-bold tracking-[0.15em] uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">
                    {res.category}
                  </span>
                </div>

                <h3 className="text-[28px] sm:text-[32px] font-bold text-[#061B35] leading-[1.2] mb-6">
                  {res.title}
                </h3>

                <div className="flex flex-col gap-4">
                  {res.paragraphs.map((p, i) => (
                    <p key={i} className="text-[14.5px] text-gray-500 font-medium leading-[1.8]">
                      {p}
                    </p>
                  ))}
                </div>

              </div>

              {/* Bottom Divider (Except for last item) */}
              {index < resources.length - 1 && (
                <div className="absolute -bottom-8 lg:-bottom-12 left-0 right-0 h-[1px] bg-gray-200"></div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
