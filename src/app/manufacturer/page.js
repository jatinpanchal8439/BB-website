import React from "react";
import ManufacturerHero from "../components/ManufacturerHero";
import ManufacturerProblem from "../components/ManufacturerProblem";
import ManufacturerStats from "../components/ManufacturerStats";
import ManufacturerCapabilities from "../components/ManufacturerCapabilities";
import ManufacturerProcess from "../components/ManufacturerProcess";
import Footer from "../components/Footer";

export const metadata = {
  title: "Manufacturer Network | Banega Brand",
  description: "Find the right manufacturing factory for your perfume, cosmetic, skincare, and Ayurveda brand. Low MOQs, GMP certified plants, and end-to-end support.",
};

export default function ManufacturerPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F3] font-sans pt-20 sm:pt-24 overflow-x-hidden w-full">
      <ManufacturerHero />
      <ManufacturerProblem />
      <ManufacturerStats />
      <ManufacturerCapabilities />
      <ManufacturerProcess />
      <Footer />
    </main>
  );
}
