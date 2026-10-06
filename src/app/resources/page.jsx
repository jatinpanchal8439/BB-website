import React from 'react';
import ResourcesHero from "../components/resources/ResourcesHero";
import ResourcesList from "../components/resources/ResourcesList";
import ResourcesCTA from "../components/resources/ResourcesCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: 'Founder Guides & Resources | Banega Brand',
  description: 'Practical answers for first-time founders in India. From your first idea to planning a product launch.',
}

export default function ResourcesPage() {
  return (
    <div className="bg-[#FCF8F5] min-h-screen">
      <ResourcesHero />
      <ResourcesList />
      <ResourcesCTA />
      <Footer />
    </div>
  );
}
