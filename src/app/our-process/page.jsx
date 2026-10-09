import React from "react";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";
import OurProcessHero from "../components/OurProcessHero";
import ProcessStep from "../components/ProcessStep";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const metadata = {
  title: "Our Process | Banega Brand - From Idea to Launch",
  description: "Discover the 6-step process Banega Brand uses to help you launch a successful product brand. From product development and manufacturing to branding, compliance, and growth.",
  keywords: [
    "product development", 
    "manufacturing partner", 
    "brand building", 
    "cosmetics manufacturing", 
    "perfume branding", 
    "skincare launch", 
    "Banega Brand process", 
    "D2C brand launch",
    "product compliance"
  ],
  openGraph: {
    title: "Our Process | Banega Brand - From Idea to Launch",
    description: "Discover the 6-step process Banega Brand uses to help you launch a successful product brand.",
    url: "https://banegabrand.com/our-process",
    siteName: "Banega Brand",
    images: [
      {
        url: "/step1_product.jpg",
        width: 1200,
        height: 630,
        alt: "Banega Brand Process",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | Banega Brand",
    description: "Discover the 6-step process Banega Brand uses to help you launch a successful product brand.",
    images: ["/step1_product.jpg"],
  },
  alternates: {
    canonical: "https://banegabrand.com/our-process",
  },
};

export default function OurProcessPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans">
      
      {/* Hero Section */}
      <OurProcessHero />

      {/* Step 01 */}
      <ProcessStep 
        number="01"
        titleBlack="Step 01:"
        titleOrange="Product"
        description1="The foundation of any great brand is an exceptional product. We start by helping you find the perfect category, analyzing market trends, and defining a unique product direction that stands out."
        description2="Whether it's developing a signature fragrance formulation or sourcing the finest raw materials, we work closely with you to ensure your product isn't just good—it's market-ready and unforgettable."
        imageSrc="/step1_product.jpg"
        imageRight={false}
        bgColor="bg-[#FDF9F4]"
      />

      {/* Step 02 */}
      <ProcessStep 
        number="02"
        titleBlack="Step 02:"
        titleOrange="Manufacturing"
        description1="Bringing your product to life requires the right partners. We connect you with vetted, high-quality manufacturing facilities that align with your brand's standards and production scale."
        description2="From negotiating minimum order quantities to overseeing quality control on the production line, we manage the entire manufacturing process so you can focus on building your business."
        imageSrc="/step2_manufacturing.jpg"
        imageRight={true}
        bgColor="bg-[#FCFBF8]"
      />

      {/* Step 03 */}
      <ProcessStep 
        number="03"
        titleBlack="Step 03:"
        titleOrange="Branding"
        description1="A product is what you sell, but a brand is what people buy. We craft a compelling brand identity, starting with a memorable name, a distinct voice, and stunning visual design."
        description2="Our team designs beautiful, premium packaging that not only protects your product but delivers an incredible unboxing experience that your customers will love and share."
        imageSrc="/step3_branding.jpg"
        imageRight={false}
        bgColor="bg-[#FDF9F4]"
      />

      {/* Step 04 */}
      <ProcessStep 
        number="04"
        titleBlack="Step 04:"
        titleOrange="Compliance"
        description1="Navigating the legal landscape can be overwhelming. We handle the complex regulatory requirements, ensuring your brand is fully compliant from day one."
        description2="From trademark registrations to acquiring the necessary industry licenses and safety documentation, we make sure your product is legally sound and ready for retail shelves."
        imageSrc="/step4_compliance.jpg"
        imageRight={true}
        bgColor="bg-[#FCFBF8]"
      />

      {/* Step 05 */}
      <ProcessStep 
        number="05"
        titleBlack="Step 05:"
        titleOrange="Launch"
        description1="It's time to introduce your brand to the world. We prepare a comprehensive launch strategy tailored to your target audience and chosen sales channels."
        description2="Whether you're launching direct-to-consumer on Shopify, entering Amazon, or pitching to retail stores, we optimize your listings, set up your store, and ensure a seamless go-to-market execution."
        imageSrc="/step5_launch.jpg"
        imageRight={false}
        bgColor="bg-[#FDF9F4]"
      />

      {/* Step 06 */}
      <ProcessStep 
        number="06"
        titleBlack="Step 06:"
        titleOrange="Growth"
        description1="Launching is just the beginning. Once your product is in the market, we help you understand the data, gather customer feedback, and refine your approach."
        description2="From scaling production to exploring new marketing channels and product variations, we provide the strategic guidance needed to turn your initial launch into sustained, long-term growth."
        imageSrc="/step6_growth.jpg"
        imageRight={true}
        bgColor="bg-[#FCFBF8]"
      />

      {/* Centered CTA */}
      <div className="w-full bg-[#FCFBF8] py-12 flex justify-center items-center">
        <Link 
          href="/contact"
          className="bg-[#FF4D00] text-white hover:bg-[#E64500] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(255,77,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,77,0,0.4)] font-extrabold py-5 px-10 rounded-[30px] text-[17px] flex items-center gap-3 uppercase tracking-wider"
        >
          Start Your Launch
          <ArrowRight size={22} strokeWidth={2.5} />
        </Link>
      </div>

      {/* The 6 Steps component */}
      <WhatWeDo />

      <Footer />
    </main>
  );
}
