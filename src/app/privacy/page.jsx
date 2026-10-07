import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Banega Brand",
  description:
    "Read Banega Brand's Privacy Policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://banegabrand.com/privacy",
  },
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <p>
        We may collect your name, email address, phone number, and business
        information; billing and payment information; website usage and analytics
        data; and information you provide through forms, emails, or other
        communications.
      </p>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: (
      <>
        <p className="mb-3">We use personal information to:</p>
        <ul>
          <li>Provide marketing, branding, website development, and consulting services.</li>
          <li>Process payments and invoices.</li>
          <li>Communicate with clients and prospective clients.</li>
          <li>Improve our website and services.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing Personal Information",
    content: (
      <>
        <p className="mb-4">
          Where required by law, we process personal information based on one or
          more of the following legal grounds:
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Consent",
              text: "When you voluntarily provide information, subscribe to marketing communications, or otherwise agree to specific processing activities. If consent is the basis for processing, you may withdraw it at any time.",
            },
            {
              label: "Contractual Necessity",
              text: "When processing is needed to enter into, perform, or manage a contract with you, including providing services, communicating about projects, and processing payments.",
            },
            {
              label: "Legal Obligation",
              text: "When processing is necessary to comply with applicable laws, regulations, court orders, tax requirements, accounting obligations, or other legal duties.",
            },
            {
              label: "Legitimate Interests",
              text: "When processing is necessary to operate, secure, improve, or promote our business and services, provided those interests do not outweigh your rights and freedoms.",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#FF4D00] mt-2" />
              <p>
                <span className="font-semibold text-gray-900">{item.label}:</span>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 mb-3 font-medium text-gray-800">Examples include:</p>
        <ul>
          <li>
            <span className="font-medium">Marketing &amp; consulting services:</span>{" "}
            Contractual necessity and, where applicable, legitimate interests.
          </li>
          <li>
            <span className="font-medium">Processing payments and invoices:</span>{" "}
            Contractual necessity and legal obligation.
          </li>
          <li>
            <span className="font-medium">Client communications:</span>{" "}
            Contractual necessity, consent, or legitimate interests, depending on the
            communication.
          </li>
          <li>
            <span className="font-medium">Analytics and usage data:</span>{" "}
            Legitimate interests and, where required by law, consent.
          </li>
          <li>
            <span className="font-medium">Marketing or promotional communications:</span>{" "}
            Consent where required by law, or legitimate interests where permitted.
          </li>
          <li>
            <span className="font-medium">Complying with legal obligations:</span>{" "}
            Legal obligation.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "user-rights",
    title: "Your Rights",
    content: (
      <>
        <p className="mb-4">
          Subject to applicable law, you may have the following rights regarding
          your personal information:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { right: "Access", desc: "Request access to the personal information we hold about you." },
            { right: "Correction", desc: "Request that inaccurate or incomplete information be corrected or updated." },
            { right: "Deletion", desc: "Request deletion of your personal information, subject to legal, contractual, or regulatory requirements." },
            { right: "Data Copy", desc: "Request a copy of the personal information you provided to us in a commonly used format, where applicable." },
            { right: "Marketing Opt-Out", desc: "Stop receiving marketing communications at any time by using the unsubscribe link in our emails or contacting us directly." },
          ].map((item) => (
            <div
              key={item.right}
              className="rounded-xl border border-orange-100 bg-orange-50/50 p-4"
            >
              <p className="font-semibold text-[#FF4D00] mb-1">{item.right}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          To exercise these rights, contact us using the information in the Contact
          section below. We may need to verify your identity before processing
          certain requests and will respond as required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <>
        <p className="mb-3">
          We use reasonable administrative, technical, and organizational
          safeguards to protect personal information from unauthorized access,
          disclosure, or misuse.
        </p>
        <p>
          If we become aware of a data breach or security incident, we will
          investigate and take appropriate corrective action. When required by law,
          we will notify affected individuals and relevant regulatory authorities
          without undue delay and within any legally required timeframes. Examples
          of notifiable incidents include unauthorized access to personal
          information, data theft, ransomware attacks, accidental disclosure of
          sensitive information, or other security events that materially affect the
          confidentiality, integrity, or availability of personal information.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: (
      <p>
        We may use trusted third-party service providers, including payment
        processors, analytics tools, CRM systems, advertising platforms, and cloud
        hosting providers. These providers are authorized to use your personal
        information only as necessary to provide services to us.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <>
        <p className="mb-4">
          Our website uses cookies and similar technologies to enhance
          functionality, improve user experience, analyze website traffic, and
          support marketing activities. Where required by applicable law, we will
          display a cookie consent notice when you visit our website.
        </p>
        <div className="space-y-3">
          {[
            {
              type: "Essential Cookies",
              desc: "Necessary for the operation, security, and core functionality of the website. These cookies cannot generally be disabled.",
            },
            {
              type: "Analytics Cookies",
              desc: "Help us understand how visitors interact with our website by collecting information about usage, performance, and traffic patterns.",
            },
            {
              type: "Marketing Cookies",
              desc: "Used to deliver relevant advertising, measure campaign effectiveness, and track interactions with marketing content across websites and platforms.",
            },
          ].map((c) => (
            <div key={c.type} className="flex gap-3 items-start">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF4D00] mt-2" />
              <p>
                <span className="font-semibold text-gray-900">{c.type}:</span>{" "}
                {c.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          You can manage your cookie preferences through our cookie consent banner.
          Most web browsers also allow you to control cookies through browser
          settings. If you choose to disable certain cookies, some features may not
          operate as intended.
        </p>
      </>
    ),
  },
  {
    id: "disclosure",
    title: "Disclosure of Information",
    content: (
      <p>
        We do not sell personal information. We may share information when
        required by law or with authorized service providers that help support our
        operations.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <p>
        We keep personal information only as long as necessary to meet business,
        legal, accounting, or regulatory requirements.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        For privacy-related questions or concerns, contact us at{" "}
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

export default function PrivacyPage() {
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
              Last Updated: June 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Banega Brand Marketing Co. respects your privacy and is committed to
            protecting your personal information. This policy explains how we
            collect, use, and safeguard your data.
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
          By using our website, you consent to this Privacy Policy. ·{" "}
          <Link href="/terms" className="text-[#FF4D00] hover:underline">
            Terms of Service
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
