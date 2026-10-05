import React from "react";
import OurWork from "../components/OurWork";
import RealFounders from "../components/RealFounders";
import MoreBrands from "../components/MoreBrands";
import Footer from "../components/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans selection:bg-[#FF4D00] selection:text-white pt-24">
      <OurWork />
      <RealFounders />
      <MoreBrands />
      <Footer />
    </main>
  );
}
