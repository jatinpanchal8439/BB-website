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
              ROUGX<span className="text-[#ff6b2b]">.</span>
            </h2>

            <p className="text-[#5a6072] text-lg mb-14 max-w-md font-medium leading-relaxed">
              An unforgettable gift of pure desire. A warm, smooth, and deeply seductive fragrance that unfolds beautifully over skin, leaving a captivating and permanent impression.
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

          {/* Right Column (Visual showcase - shown first on mobile) */}
          <div className="w-full lg:w-[55%] flex flex-col gap-3 sm:gap-6 order-first lg:order-last mb-8 lg:mb-0">

            {/* Website Mockup */}
            <div className="rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#f0e6de] bg-white">
              <Image src="/blush-en-bloom-screenshot-2.png" alt="ROUGX Website" width={1200} height={800} className="w-full h-auto object-cover block" priority />
            </div>

            {/* Info Bar - 3 Columns Horizontal */}
            <div className="bg-white rounded-2xl sm:rounded-[20px] p-3 sm:p-5 shadow-sm border border-[#F2E5DA] grid grid-cols-3 divide-x divide-[#F0E2D6]">
              <div className="flex items-center justify-start gap-2 sm:gap-3 px-2 sm:px-4">
                <FlaskConical className="text-[#ff6b2b] w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">Category</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-base leading-tight truncate">Perfume</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 sm:gap-3 px-2 sm:px-4">
                <MapPin className="text-[#ff6b2b] w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">City</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-base leading-tight truncate">Delhi</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 sm:gap-3 px-2 sm:px-4">
                <User className="text-[#ff6b2b] w-5 h-5 sm:w-6 sm:h-6 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-[#8A90A2] font-semibold tracking-wide">Founder</p>
                  <p className="font-bold text-[#1a1a2e] text-[12px] sm:text-base leading-tight truncate">Riya Mehta</p>
                </div>
              </div>
            </div>

            {/* Feature Images - 3 Columns Horizontal */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image src="/unique_formulation.jpg" alt="Unique Formulation" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">Unique<br />Formulation</p>
              </div>
              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image src="/premium_packaging.jpg" alt="Premium Packaging" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">Premium<br />Packaging</p>
              </div>
              <div className="relative aspect-[1.1/1] sm:aspect-[4/3] rounded-xl sm:rounded-[20px] overflow-hidden group shadow-sm">
                <Image src="/amazon_launch.jpg" alt="Launched on Amazon" fill sizes="(max-width: 768px) 33vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                <p className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 text-white font-bold text-[11px] sm:text-sm md:text-base leading-tight drop-shadow-sm">Launched on<br />Amazon</p>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="bg-[#FFF5EC] border border-[#FFDFC9] rounded-2xl sm:rounded-[24px] p-3.5 sm:p-5 md:p-6 shadow-sm flex items-center justify-between gap-2.5 sm:gap-6">
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <Rocket className="text-[#ff6b2b] w-6 h-6 sm:w-7 sm:h-7 shrink-0" strokeWidth={1.8} />
                <div className="min-w-0">
                  <h4 className="font-bold text-[#1a1a2e] text-[12px] sm:text-[15px] md:text-[17px] leading-tight mb-0.5">
                    Want to Create a Success Story Like This?
                  </h4>
                  <p className="text-[#5a6072] text-[10px] sm:text-xs md:text-sm truncate sm:overflow-visible">
                    Let's turn your idea into the next big brand.
                  </p>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="bg-[#ff6b2b] hover:bg-[#eb5b1b] transition-all duration-300 text-white rounded-full py-2.5 px-3.5 sm:py-3 sm:px-5 md:px-6 font-semibold text-[11px] sm:text-xs md:text-sm flex items-center gap-2 shrink-0 whitespace-nowrap shadow-md shadow-orange-500/20 hover:-translate-y-0.5"
              >
                <span>Start Your Own Story</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-white text-[#ff6b2b] rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={12} className="sm:hidden" strokeWidth={2.5} />
                  <ArrowRight size={14} className="hidden sm:block" strokeWidth={2.5} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
