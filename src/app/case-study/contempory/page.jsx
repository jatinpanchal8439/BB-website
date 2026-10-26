import React from "react";
import CaseStudyContemprory from "../../components/CaseStudyContemprory";
import CaseStudyDetailedContemprory from "../../components/CaseStudyDetailedContemprory";
import Footer from "../../components/Footer";

export const metadata = {
  title: "CONTEMPRORY Case Study | Banega Brand",
  description: "Learn how Banega Brand helped Paroha Life Sciences launch CONTEMPRORY — a next-generation skincare & luxury perfume brand with an unforgettable creator grand launch in 60 days.",
};

export default function ContemporyAliasPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFBF8] font-sans">
      <CaseStudyContemprory />
      <CaseStudyDetailedContemprory />
      <Footer />
    </main>
  );
}
