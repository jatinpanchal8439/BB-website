import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Disclaimer | Banega Brand",
  description:
    "Read the Disclaimer for Banega Brand Marketing Co. regarding the accuracy of information, professional advice, and liability limitations on this website.",
  alternates: {
    canonical: "https://banegabrand.com/disclaimer",
  },
};

const sections = [
  {
    id: "general",
    title: "General Disclaimer",
    content: (
      <p>
        The information provided on the Banega Brand Marketing Co. website
        (banegabrand.com) is for general informational and marketing purposes
        only. While we strive to keep the information up to date and accurate, we
        make no representations or warranties of any kind, express or implied,
        about the completeness, accuracy, reliability, suitability, or
        availability of the website or the information, products, services, or
        related graphics contained on the website for any purpose.
      </p>
    ),
  },
  {
    id: "no-professional-advice",
    title: "No Professional Advice",
    content: (
      <>
        <p className="mb-3">
          The content on this website does not constitute legal, financial,
          medical, regulatory, or any other form of professional advice. Nothing
          on this website should be construed as a substitute for consultation
          with a qualified professional.
        </p>
        <p>
          You should not rely on any information on this website as an alternative
          to legal, financial, or other professional advice. If you have any
          specific questions about any matter, you should consult an appropriately
          qualified professional.
        </p>
      </>
    ),
  },
  {
    id: "results",
    title: "No Guarantee of Results",
    content: (
      <>
        <p className="mb-3">
          Any case studies, testimonials, examples, or descriptions of results
          presented on this website are illustrative only and do not constitute a
          guarantee, warranty, or promise of similar outcomes for any client.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            "Individual results will vary depending on many factors unique to each situation.",
            "Past performance or outcomes are not necessarily indicative of future results.",
            "Success in branding and business development depends on factors outside our control.",
            "No specific outcome is guaranteed as a result of engaging our services.",
          ].map((point, idx) => (
            <div
              key={idx}
              className="flex gap-3 items-start rounded-xl border border-orange-100 bg-orange-50/50 p-4"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF4D00] mt-1.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "external-links",
    title: "External Links",
    content: (
      <p>
        This website may contain links to external websites that are not provided
        or maintained by us. We do not guarantee the accuracy, relevance,
        timeliness, or completeness of any information on external websites. The
        inclusion of any link does not imply endorsement, approval, or control by
        Banega Brand Marketing Co. of the linked website. We are not responsible
        for the content, privacy practices, or any other aspect of any linked
        third-party websites.
      </p>
    ),
  },
  {
    id: "accuracy",
    title: "Accuracy of Information",
    content: (
      <>
        <p className="mb-3">
          We take reasonable steps to ensure that the information on this website
          is accurate and current. However, market conditions, regulations,
          pricing, and service offerings can change. We reserve the right to make
          changes to the content at any time without notice.
        </p>
        <p>
          Information about regulatory compliance, licensing requirements, and
          industry standards is provided for general awareness only. Requirements
          vary by jurisdiction, product category, and individual circumstances.
          You should verify all regulatory and compliance information with
          appropriate authorities or qualified professionals before taking any
          action.
        </p>
      </>
    ),
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by applicable law, Banega Brand Marketing
        Co., its directors, employees, and affiliates shall not be liable for any
        loss or damage including, without limitation, indirect or consequential
        loss or damage, or any loss or damage whatsoever arising from loss of
        data, profits, or business opportunities arising out of, or in connection
        with, the use of this website or reliance on information provided on this
        website.
      </p>
    ),
  },
  {
    id: "fair-use",
    title: "Fair Use & Third-Party Content",
    content: (
      <p>
        This website may reference or discuss third-party brand names, trademarks,
        or intellectual property for the purposes of commentary, education, or
        illustration. Such references are made under principles of fair use and do
        not imply any affiliation with, endorsement by, or sponsorship from those
        third parties. All third-party trademarks remain the property of their
        respective owners.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Disclaimer",
    content: (
      <p>
        We may update this Disclaimer from time to time to reflect changes in our
        practices, services, or applicable law. The date at the top of this page
        indicates when the Disclaimer was last revised. We encourage you to review
        this page periodically. Your continued use of this website following any
        changes constitutes your acceptance of the revised Disclaimer.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        If you have any questions or concerns about this Disclaimer, please
        contact us at{" "}
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

export default function DisclaimerPage() {
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
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Please read this disclaimer carefully before using the Banega Brand
            website or relying on any information found here.
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
          <Link href="/terms" className="text-[#FF4D00] hover:underline">
            Terms of Service
          </Link>
        </p>
      </section>

      <Footer />
    </div>
  );
}
