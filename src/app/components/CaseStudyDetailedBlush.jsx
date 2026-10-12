import Image from "next/image";
import Link from "next/link";
import { Lightbulb, BarChart2, Settings, Rocket, Quote, FlaskConical, MapPin, User, ArrowRight } from "lucide-react";

export default function CaseStudyDetailed() {
  const timelineData = [
    {
      icon: <Lightbulb className="text-[#ff6b2b] w-6 h-6" />,
      title: "The Idea",
      desc: "The founder came to us with just an idea — a premium, long-lasting women's perfume brand."
    },
    {
      icon: <BarChart2 className="text-[#ff6b2b] w-6 h-6" />,
      title: "What Was Hard",
      desc: "Finding the right formulation, creating a unique packaging, managing budget and handling compliance for fragrance products."
    },
    {
      icon: <Settings className="text-[#ff6b2b] w-6 h-6" />,
      title: "What We Did",
      desc: "We helped with product development, connected the right manufacturer, designed the packaging, handled registrations and planned the launch channels."
    },
    {
      icon: <Rocket className="text-[#ff6b2b] w-6 h-6" />,
      title: "What Happened",
      desc: "The brand went live in just 60 days and is now available on Amazon with amazing initial response."
    }
  ];

  return (
    <section id="details" className="w-full bg-[#fdfdfd] py-16 md:py-24 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-64 -right-64 w-[600px] h-[600px] border-[1px] border-[#ffebd6] rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-[800px] h-[800px] border-[1px] border-[#ffebd6] rounded-full opacity-60 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">

          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#ff6b2b]"></span>
              <span className="font-bold tracking-widest uppercase text-[#FF4D00] font-[family-name:var(--font-poppins)]">Case Study</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] mb-6 leading-tight">
              Blush En Bloom<span className="text-[#ff6b2b]">.</span>
            </h2>

            <p className="text-[#5a6072] text-lg mb-14 max-w-md font-medium leading-relaxed">
              From a simple idea to a successful fragrance brand in just 60 days with Banega Brand.
            </p>

            {/* Timeline */}
            <div className="relative mb-16">
              <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px] border-l-2 border-dashed border-[#fcd5c5]"></div>

              <div className="flex flex-col gap-10">
                {timelineData.map((item, idx) => (
                  <div key={idx} className="relative flex gap-6 z-10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#fcd5c5] shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                      <p className="text-[#5a6072] leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="relative mt-8 lg:mt-auto">
              <div className="absolute -left-5 -top-5 w-12 h-12 bg-[#fff2ea] rounded-xl flex items-center justify-center z-20 shadow-sm">
                <Quote className="text-[#ff6b2b] w-6 h-6" fill="#ff6b2b" />
              </div>
              <div className="bg-[#fff9f4] border border-[#ffecd9] rounded-2xl p-8 pl-10 relative z-10">
                <h4 className="font-bold text-[#1a1a2e] mb-5 text-lg">In the Founder's Words</h4>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 relative shrink-0 rounded-full overflow-hidden">
                    <Image src="/ladki.jpg" alt="Founder" fill sizes="48px" className="object-cover" />
                  </div>
                  <p className="text-[#5a6072] italic text-sm md:text-base leading-relaxed">
                    "Banega Brand made the entire process so simple. I just had an idea, and they brought it to life. We hit the market way sooner than I expected."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">

            {/* Website Mockup */}
            <div className="rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-gray-100 bg-white">
              <Image src="/Group 192.png" alt="Blush Darling Website" width={1200} height={800} className="w-full h-auto object-cover" priority />
            </div>

            {/* Info Bar - 3 Columns Horizontal */}
            <div className="grid grid-cols-3 items-center bg-white rounded-xl sm:rounded-[20px] p-2.5 sm:p-6 shadow-sm border border-gray-100 divide-x divide-gray-100">
              <div className="flex items-center gap-1.5 sm:gap-4 px-1 sm:px-3">
                <FlaskConical className="text-[#ff6b2b] w-4 h-4 sm:w-8 sm:h-8 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[8px] sm:text-[11px] text-[#5a6072] uppercase font-bold tracking-wider truncate">Category</p>
                  <p className="font-bold text-[#1a1a2e] text-[11px] sm:text-lg truncate">Perfume</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-4 px-1 sm:px-3 justify-center">
                <MapPin className="text-[#ff6b2b] w-4 h-4 sm:w-8 sm:h-8 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[8px] sm:text-[11px] text-[#5a6072] uppercase font-bold tracking-wider truncate">City</p>
                  <p className="font-bold text-[#1a1a2e] text-[11px] sm:text-lg truncate">Delhi</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-4 px-1 sm:px-3 justify-end sm:justify-start">
                <User className="text-[#ff6b2b] w-4 h-4 sm:w-8 sm:h-8 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[8px] sm:text-[11px] text-[#5a6072] uppercase font-bold tracking-wider truncate">Founder</p>
                  <p className="font-bold text-[#1a1a2e] text-[11px] sm:text-lg truncate">Riya Mehta</p>
                </div>
              </div>
            </div>

            {/* Feature Images - 3 Columns Side-by-Side */}
            <div className="grid grid-cols-3 gap-2 sm:gap-5">
              <div className="relative h-[105px] sm:h-[200px] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image src="/unique_formulation.jpg" alt="Unique Formulation" fill sizes="(max-width: 768px) 33vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <p className="absolute bottom-2 sm:bottom-5 left-2 sm:left-5 text-white font-bold text-[9.5px] sm:text-base leading-tight">Unique<br />Formulation</p>
              </div>
              <div className="relative h-[105px] sm:h-[200px] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image src="/premium_packaging.jpg" alt="Premium Packaging" fill sizes="(max-width: 768px) 33vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <p className="absolute bottom-2 sm:bottom-5 left-2 sm:left-5 text-white font-bold text-[9.5px] sm:text-base leading-tight">Premium<br />Packaging</p>
              </div>
              <div className="relative h-[105px] sm:h-[200px] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image src="/amazon_launch.jpg" alt="Launched on Amazon" fill sizes="(max-width: 768px) 33vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <p className="absolute bottom-2 sm:bottom-5 left-2 sm:left-5 text-white font-bold text-[9.5px] sm:text-base leading-tight">Launched on<br />Amazon</p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-[#fff4eb] border border-[#ffdfc8] rounded-2xl sm:rounded-[24px] p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-5 w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Rocket className="text-[#ff6b2b] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#1a1a2e] text-[13px] sm:text-[17px] mb-0.5 leading-snug">Want to Create a Success Story Like This?</h4>
                  <p className="text-[#5a6072] text-[11px] sm:text-sm truncate">Let's turn your idea into the next big brand.</p>
                </div>
              </div>
              <Link href="/contact" className="bg-[#ff6b2b] hover:bg-[#eb5b1b] transition-all duration-300 text-white rounded-full py-2.5 px-5 sm:py-3 sm:px-6 font-semibold text-xs sm:text-sm flex items-center justify-center gap-3 shrink-0 whitespace-nowrap shadow-md shadow-orange-500/20 hover:-translate-y-0.5 w-full sm:w-auto">
                Start Your Own Story
                <span className="bg-white text-[#ff6b2b] rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
                  <ArrowRight size={14} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
