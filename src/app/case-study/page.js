import React from "react";
import CaseStudy from "../components/CaseStudy";
import CaseStudyDetailed from "../components/CaseStudyDetailed";
import Footer from "../components/Footer";

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans pt-24">
      <CaseStudy />
      <CaseStudyDetailed />
      <Footer />
    </main>
  );
}
