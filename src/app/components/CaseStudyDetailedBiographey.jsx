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
              Biographey<span className="text-[#ff6b2b]">.</span>
            </h2>

            <p className="text-[#5a6072] text-lg mb-14 max-w-md font-medium leading-relaxed">
              Every fragrance holds a memory. Crafted with the world's finest ingredients to transform moments into timeless memories.
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
                    "Every fragrance tells a story waiting to be remembered. Banega Brand understood our vision and helped us bring these untold stories to life through exceptional perfumery."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">

            {/* Website Mockup */}
            <div className="rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 bg-white">
              <Image src="/biographey-screenshot.png" alt="Biographey Website" width={1200} height={800} className="w-full h-auto object-cover" priority />
            </div>

            {/* Info Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 w-full sm:w-1/3 mb-4 sm:mb-0">
                <FlaskConical className="text-[#ff6b2b] w-8 h-8" />
                <div>
                  <p className="text-[11px] text-[#5a6072] uppercase font-bold tracking-wider">Category</p>
                  <p className="font-bold text-[#1a1a2e] text-lg">Perfume</p>
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-gray-100"></div>
              <div className="flex items-center gap-4 w-full sm:w-1/3 sm:justify-center mb-4 sm:mb-0">
                <MapPin className="text-[#ff6b2b] w-8 h-8" />
                <div>
                  <p className="text-[11px] text-[#5a6072] uppercase font-bold tracking-wider">City</p>
                  <p className="font-bold text-[#1a1a2e] text-lg">Delhi</p>
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-gray-100"></div>
              <div className="flex items-center gap-4 w-full sm:w-1/3 sm:justify-end">
                <User className="text-[#ff6b2b] w-8 h-8" />
                <div>
                  <p className="text-[11px] text-[#5a6072] uppercase font-bold tracking-wider">Founder</p>
                  <p className="font-bold text-[#1a1a2e] text-lg">Riya Mehta</p>
                </div>
              </div>
            </div>

            {/* Feature Images */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="relative h-[200px] rounded-[20px] overflow-hidden group">
                <Image src="/finest_ingredients.jpg" alt="Finest Ingredients" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <p className="absolute bottom-5 left-5 text-white font-bold w-[70%] leading-snug">Finest<br />Ingredients</p>
              </div>
              <div className="relative h-[200px] rounded-[20px] overflow-hidden group">
                <Image src="/timeless_memories.jpg" alt="Timeless Memories" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <p className="absolute bottom-5 left-5 text-white font-bold w-[70%] leading-snug">Timeless<br />Memories</p>
              </div>
              <div className="relative h-[200px] rounded-[20px] overflow-hidden group">
                <Image src="/untold_stories.jpg" alt="Untold Stories" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <p className="absolute bottom-5 left-5 text-white font-bold w-[80%] leading-snug">Untold<br />Stories</p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-[#fff4eb] border border-[#ffdfc8] rounded-[24px] p-6 sm:p-8 flex flex-col xl:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5 w-full">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Rocket className="text-[#ff6b2b] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a2e] text-[17px] mb-1">Want to Create a Success Story Like This?</h4>
                  <p className="text-[#5a6072] text-sm">Let's turn your idea into the next big brand.</p>
                </div>
              </div>
              <Link href="/contact" className="bg-[#ff6b2b] hover:bg-[#eb5b1b] transition-all duration-300 text-white rounded-full py-3 px-6 font-semibold flex items-center justify-center gap-4 shrink-0 whitespace-nowrap shadow-lg shadow-orange-500/20 hover:-translate-y-1 hover:shadow-orange-500/30 w-full xl:w-auto">
                Start Your Own Story
                <span className="bg-white text-[#ff6b2b] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
