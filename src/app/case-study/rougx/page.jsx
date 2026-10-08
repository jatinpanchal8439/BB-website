import React from "react";
import CaseStudyRougx from "../../components/CaseStudyRougx";
import CaseStudyDetailedRougx from "../../components/CaseStudyDetailedRougx";
import Footer from "../../components/Footer";

export default function RougxPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans">
      <CaseStudyRougx />
      <CaseStudyDetailedRougx />
      <Footer />
    </main>
  );
}
