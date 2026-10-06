import InvestmentHero from "../components/InvestmentHero";
import InvestmentRoadmap from "../components/InvestmentRoadmap";
import InvestmentEstimate from "../components/InvestmentEstimate";
import CategoryCTA from "../components/CategoryCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: 'Investment Guide | Banega Brand',
  description: 'Wondering how much you need to start a D2C brand? Find out the costs for product, packaging, manufacturing, and more.',
}

export default function InvestmentGuidePage() {
  return (
    <main className="min-h-screen bg-[#FAF5EE] font-sans">
      <InvestmentHero />
      <InvestmentRoadmap />
      <InvestmentEstimate />
      <CategoryCTA />
      <Footer />
    </main>
  );
}
