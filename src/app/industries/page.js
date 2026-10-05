import React from "react";
import IndustriesHero from "../components/IndustriesHero";
import IndustryCategories from "../components/IndustryCategories";
import IndustryCTA from "../components/IndustryCTA";
import Footer from "../components/Footer";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans pt-24">
      <IndustriesHero />
      <IndustryCategories />
      <IndustryCTA />
      <Footer />
    </main>
  );
}
