import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Banega Brand",
  description:
    "Read the Terms of Service governing your use of Banega Brand Marketing Co.'s website and services.",
  alternates: {
    canonical: "https://banegabrand.com/terms",
  },
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using the Banega Brand Marketing Co. website
        (banegabrand.com) or engaging our services, you agree to be bound by
        these Terms of Service ("Terms") and our{" "}
        <Link href="/privacy" className="text-[#FF4D00] underline underline-offset-2 hover:opacity-80 transition-opacity">
          Privacy Policy
        </Link>
        . If you do not agree to these Terms, please do not use our website or
        services. We reserve the right to update these Terms at any time; continued
        use following any changes constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "services",
    title: "Services",
    content: (
      <>
        <p className="mb-3">
          Banega Brand Marketing Co. provides marketing, branding, website
          development, consulting, and related services ("Services") to
          entrepreneurs and businesses. The specific scope of Services provided
          to any client is governed by a separate agreement, proposal, or
          statement of work entered into between us.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect of
          our Services at any time with reasonable notice. We shall not be liable
          to you or any third party for any modification, suspension, or
          discontinuation of Services.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p className="mb-3">
          All content on this website — including text, graphics, logos, images,
          audio clips, and software — is the property of Banega Brand Marketing
          Co. or its content suppliers and is protected by applicable intellectual
          property laws.
        </p>
        <p className="mb-3">
          Regarding client deliverables: upon receipt of full payment, ownership
          of final agreed-upon deliverables will transfer to the client as
          specified in the applicable service agreement. Banega Brand Marketing
          Co. retains the right to display completed work in its portfolio unless
          explicitly agreed otherwise in writing.
        </p>
        <p>
          You may not reproduce, distribute, modify, create derivative works from,
          publicly display, or exploit any content from this website without our
          prior written consent.
        </p>
      </>
    ),
  },
  {
    id: "user-obligations",
    title: "User Obligations",
    content: (
      <>
        <p className="mb-3">By using our website and services, you agree to:</p>
        <ul>
          <li>Provide accurate, current, and complete information when requested.</li>
          <li>Use our website and services only for lawful purposes.</li>
          <li>Not engage in any activity that disrupts or interferes with our website or services.</li>
          <li>Not attempt to gain unauthorized access to any portion of our website or systems.</li>
          <li>Not transmit any harmful, offensive, or unlawful content through our communications channels.</li>
          <li>Comply with all applicable local, national, and international laws and regulations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment & Billing",
    content: (
      <>
        <p className="mb-3">
          Fees for Services are set forth in the applicable service agreement,
          proposal, or invoice. Payment terms, schedules, and methods will be
          specified therein. Unless otherwise agreed:
        </p>
        <ul>
          <li>Invoices are due within the period specified on the invoice.</li>
          <li>Late payments may be subject to late fees as specified in the service agreement.</li>
          <li>We reserve the right to suspend Services for overdue payments.</li>
          <li>All fees are non-refundable unless explicitly stated otherwise in writing.</li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: (
      <p>
        Both parties agree to keep confidential any proprietary or sensitive
        information shared during the course of engagement. This includes business
        strategies, client lists, financial data, and unpublished creative work.
        Confidentiality obligations survive the termination of any service
        agreement for a period of two (2) years, unless a longer period is
        required by law or agreed in writing.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-3">
          To the maximum extent permitted by applicable law, Banega Brand
          Marketing Co. shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, including but not limited to loss of
          profits, revenue, data, or goodwill, arising from your use of our
          website or services.
        </p>
        <p>
          Our total liability to you for any claim arising out of or relating to
          these Terms or our services shall not exceed the total fees paid by you
          to us in the three (3) months preceding the event giving rise to the
          claim.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer-of-warranties",
    title: "Disclaimer of Warranties",
    content: (
      <p>
        Our website and services are provided on an "as is" and "as available"
        basis without warranties of any kind, either express or implied, including
        but not limited to implied warranties of merchantability, fitness for a
        particular purpose, or non-infringement. We do not warrant that our
        website will be uninterrupted, error-free, or free of harmful components.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites. These links are
        provided for convenience only. We have no control over the content of
        those sites and accept no responsibility for them or for any loss or
        damage that may arise from your use of them. Visiting any linked
        third-party website is at your own risk.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>
        We reserve the right to terminate or suspend your access to our website
        or services at our sole discretion, without notice, for conduct that we
        believe violates these Terms or is harmful to other users, us, third
        parties, or for any other reason. Upon termination, all provisions of
        these Terms which by their nature should survive termination shall
        survive, including intellectual property provisions and limitation of
        liability.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of India. Any dispute arising out of or relating to these Terms or
        our services shall be subject to the exclusive jurisdiction of the courts
        located in India. We encourage you to contact us first at{" "}
        <a
          href="mailto:help@banegabrand.com"
          className="text-[#FF4D00] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          help@banegabrand.com
        </a>{" "}
        to resolve any dispute informally before initiating formal proceedings.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        Questions about these Terms? Reach us at{" "}
        <a
          href="mailto:help@banegabrand.com"
          className="text-[#FF4D00] font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          help@banegabrand.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[#FCF8F5] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange-50 opacity-60" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-orange-50 opacity-40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4D00]" />
            <span className="text-xs font-semibold text-[#FF4D00] tracking-wider uppercase">
              Effective: June 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            These Terms govern your use of the Banega Brand website and services.
            Please read them carefully before engaging with us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-medium text-gray-600 bg-gray-100 hover:bg-orange-50 hover:text-[#FF4D00] px-3 py-1.5 rounded-full transition-colors duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20 space-y-10">
        {sections.map((section, i) => (
          <div
            key={section.id}
            id={section.id}
            className="scroll-mt-28 bg-white rounded-2xl border border-gray-100 shadow-sm p-7 md:p-9"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-orange-50 border border-orange-100 shrink-0">
                <span className="text-sm font-bold text-[#FF4D00]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                {section.title}
              </h2>
            </div>
            <div className="text-gray-600 leading-relaxed text-[15px] [&_ul]:list-none [&_ul]:space-y-2 [&_ul_li]:flex [&_ul_li]:gap-2 [&_ul_li]:before:content-['→'] [&_ul_li]:before:text-[#FF4D00] [&_ul_li]:before:shrink-0 [&_ul_li]:before:mt-0.5">
              {section.content}
            </div>
          </div>
        ))}

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400 pt-4">
          ·{" "}
          <Link href="/privacy" className="text-[#FF4D00] hover:underline">
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link href="/disclaimer" className="text-[#FF4D00] hover:underline">
            Disclaimer
          </Link>
        </p>
      </section>

      <Footer />
    </div>
  );
}
