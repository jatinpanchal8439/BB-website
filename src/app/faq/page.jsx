import FAQHero from "../components/faq/FAQHero";
import FAQList from "../components/faq/FAQList";
import Footer from "../components/Footer";

export const metadata = {
  title: 'FAQ | Banega Brand',
  description: 'Frequently Asked Questions about launching your D2C brand with Banega Brand.',
}

export default function FAQPage() {
  return (
    <div className="bg-[#FCF8F5] min-h-screen">
      <FAQHero />
      <FAQList />
      <Footer />
    </div>
  );
}
