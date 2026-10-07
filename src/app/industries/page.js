import React from "react";
import IndustriesHero from "../components/IndustriesHero";
import IndustryCategories from "../components/IndustryCategories";
import IndustryBanners from "../components/IndustryBanners";
import Footer from "../components/Footer";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans">
      <IndustriesHero />
      <IndustryCategories />
      <IndustryBanners />
      <Footer />
    </main>
  );
}
