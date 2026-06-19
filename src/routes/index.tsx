import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroCad from "@/assets/hero-cad.png";
import designSketch from "@/assets/design-sketch.png";
import copyrightIdea from "@/assets/copyright-idea.png";
import processBlueprint from "@/assets/process-blueprint.png";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Lightbulb,
  ShieldCheck,
  Box,
  FileText,
  PenTool,
  Atom,
  Copyright,
  Stamp,
  Video,
  FilePenLine,
  Workflow,
  Send,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InnovatorsLab — Think It. Build It. Protect It." },
      { name: "description", content: "From idea to intellectual property — design, prototyping, and IP protection for innovators." },
      { property: "og:title", content: "InnovatorsLab" },
      { property: "og:description", content: "From idea to intellectual property — design, prototyping, and IP protection for innovators." },
    ],
  }),
  component: Index,
});

const BLUEPRINT_BG =
  "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='none' stroke='%2394a3b8' stroke-width='0.6'%3E%3Cpath d='M0 40h160M0 80h160M0 120h160M40 0v160M80 0v160M120 0v160'/%3E%3Ccircle cx='80' cy='80' r='22'/%3E%3Ccircle cx='80' cy='80' r='6'/%3E%3Cpath d='M80 54v-8M80 114v-8M54 80h-8M114 80h-8M62 62l-5-5M98 98l5 5M98 62l5-5M62 98l-5 5'/%3E%3C/g%3E%3C/svg%3E\")";

function BlueprintBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: BLUEPRINT_BG,
        backgroundSize: "160px 160px",
        opacity: 0.06,
      }}
    />
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[#0a1024] text-white antialiased">
      <Nav />
      <Hero />
      <Process />
      <Services />
      <HowItWorks />
      <ContactForm />
      <Certificates />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0d1a44]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <img src="/WhatsApp_Image_2026-06-16_at_3.59.56_PM.jpeg" alt="InnovatorsLab" className="h-8 w-auto sm:h-9" />
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Innovators<span className="text-sky-300">Lab</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-white/90 transition hover:bg-white/10 sm:text-sm"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#16307a] via-[#0f1f54] to-[#0a1024]">
      <img src={heroCad} alt="" aria-hidden="true" loading="lazy"
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 select-none opacity-[0.18] mix-blend-screen lg:block" />
      <img src={heroCad} alt="" aria-hidden="true" loading="lazy"
        className="pointer-events-none absolute -left-24 bottom-0 hidden h-[320px] w-[320px] select-none opacity-[0.08] mix-blend-screen lg:block" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 md:py-32">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
          Innovation · Design · IP Protection
        </div>
        <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Think It. Build It.{" "}
          <span className="bg-gradient-to-r from-sky-300 to-sky-100 bg-clip-text text-transparent">Protect It.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/65 sm:text-lg">
          From idea to intellectual property — we help innovators turn concepts into protected, market-ready products.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0a1024] transition hover:bg-white/90 sm:w-auto">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="inline-flex w-full items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
            Explore Services
          </a>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-white/60 sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-sky-300" /> +91 94057 79118</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-sky-300" /> innovatorslab1@gmail.com</span>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  { icon: Lightbulb, title: "Your Idea", tag: "Every innovation starts here.", desc: "Share your concept with confidence. We listen, evaluate, and help shape it into a viable product." },
  { icon: ShieldCheck, title: "NDA + Idea Development", tag: "Your idea. Protected. Refined.", desc: "NDA-backed discussions, market validation, and expert guidance to transform concepts into actionable plans." },
  { icon: Box, title: "CAD + Prototype Development", tag: "See your vision come to life.", desc: "Professional CAD designs and functional prototypes that help validate, test, and showcase your idea." },
  { icon: FileText, title: "Patent Filing", tag: "Secure what you create.", desc: "End-to-end patent support to protect your intellectual property and prepare it for commercialization." },
];

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-to-b from-[#16307a] via-[#0f1f54] to-[#0a1024] py-20 sm:py-24">
      <img src={processBlueprint} alt="" aria-hidden="true" loading="lazy"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.05] mix-blend-screen md:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">From idea to intellectual property</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/65">A clear, proven four-step journey — confidential, collaborative, and built to deliver.</p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-sky-400/20 to-sky-600/20 ring-1 ring-sky-400/30">
                <s.icon className="h-7 w-7 text-sky-300" />
                <span className="absolute -bottom-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-[#0a1024] text-xs font-semibold ring-1 ring-white/15">{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-sky-300">{s.tag}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: PenTool, title: "CAD Design Development", desc: "Precision 3D & 2D models built to spec." },
  { icon: Atom, title: "Prototype Development", desc: "Tangible prototypes to validate your idea." },
  { icon: Lightbulb, title: "Idea Development", desc: "Expert-guided refinement with industry experience." },
  { icon: FilePenLine, title: "Design Filing", desc: "Register the unique look of your product." },
  { icon: Copyright, title: "Copyright Filing", desc: "Protect your original creative works." },
  { icon: Stamp, title: "Patent Filing", desc: "End-to-end patent support for your invention." },
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 text-slate-900 sm:py-24">
      <BlueprintBackdrop />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">What we do</p>
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-sky-600"><s.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const howItWorksSteps = {
  design: [
    { icon: Video, title: "Free Consultation Call", desc: "Discuss your idea on Google Meet." },
    { icon: FilePenLine, title: "NDA Signing", desc: "Your idea remains confidential." },
    { icon: PenTool, title: "CAD Design Development", desc: "Professional CAD files & technical drawings." },
    { icon: Send, title: "Design Registration Filing", desc: "We prepare and submit all documentation." },
    { icon: Workflow, title: "Registration Support", desc: "We track the process and update you." },
    { icon: Box, title: "Final Delivery", desc: "Receive complete documentation and records." },
  ],
  copyright: [
    { icon: Video, title: "Consultation Call", desc: "Explain your concept." },
    { icon: FileText, title: "Documentation Preparation", desc: "We prepare all required paperwork." },
    { icon: Copyright, title: "Copyright Filing", desc: "Our team handles the registration process." },
    { icon: Workflow, title: "Tracking & Updates", desc: "Receive status updates throughout." },
  ],
};

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 sm:py-24">
      <BlueprintBackdrop />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">How it works</p>
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Two focused services. One simple promise.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">You explain your idea. We handle the rest — design, documentation, filing and tracking.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">Design Registration</span>
              <img src={designSketch} alt="Industrial design sketch" loading="lazy" className="h-20 w-20 shrink-0 select-none object-contain sm:h-24 sm:w-24" />
            </div>
            <ol className="mt-6 space-y-4">
              {howItWorksSteps.design.map((s, i) => (
                <li key={s.title} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky-50 text-[11px] font-semibold text-sky-700">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><s.icon className="h-4 w-4 text-sky-600" />{s.title}</div>
                    <p className="text-sm text-slate-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Copyright Registration</span>
              <img src={copyrightIdea} alt="Lightbulb with circuit traces" loading="lazy" className="h-20 w-20 shrink-0 select-none object-contain sm:h-24 sm:w-24" />
            </div>
            <ol className="mt-6 space-y-4">
              {howItWorksSteps.copyright.map((s, i) => (
                <li key={s.title} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky-50 text-[11px] font-semibold text-sky-700">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><s.icon className="h-4 w-4 text-sky-600" />{s.title}</div>
                    <p className="text-sm text-slate-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

const INDUSTRY_OPTIONS = [
  "AI", "Automobile", "Aerospace", "Pharmaceutical", "Health Care", "Other (Please Specify)",
];

const SERVICE_OPTIONS = [
  "CAD Design Development", "Prototype Development", "Idea Development",
  "Design Filing", "Copyright Filing", "Patent Filing",
];

// Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6kHsCQJpWlO4_uA39dn_tEvmu9hPnfkJxehor8ChEhU711XtJ-or0oHB5cqGZwzyA/exec";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    industry: "",
    service: "",
    otherIndustry: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          industry: formData.industry === "Other (Please Specify)"
            ? `Other: ${formData.otherIndustry}`
            : formData.industry,
          service: formData.service,
          description: formData.description,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200";
  const labelCls = "block text-sm font-medium text-slate-800";
  const req = <span className="text-red-500">*</span>;

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 sm:py-24">
      <BlueprintBackdrop />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Get in touch</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Please fill in your details and requirements. We'll get back to you within 12 hours.
        </h2>

        <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
          {[
            "Free 30-minute call — no obligation",
            "NDA available before detailed discussion",
            "Clear next steps and timeline by the end of the call",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>Full Name {req}</label>
              <input name="fullName" required maxLength={100} value={formData.fullName} onChange={handleChange} className={inputCls} placeholder="Jane Doe" />
            </div>
            <div>
              <label className={labelCls}>Phone Number {req}</label>
              <input name="phone" required type="tel" maxLength={10} minLength={10} pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} className={inputCls} placeholder="9876543210" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>Email Address {req}</label>
              <input name="email" required type="email" maxLength={255} value={formData.email} onChange={handleChange} className={inputCls} placeholder="you@email.com" />
            </div>
            <div>
              <label className={labelCls}>Industry / Sector {req}</label>
              <select name="industry" required value={formData.industry} onChange={handleChange} className={inputCls}>
                <option value="" disabled>Select an industry</option>
                {INDUSTRY_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Service Required {req}</label>
              <select name="service" required value={formData.service} onChange={handleChange} className={inputCls}>
                <option value="" disabled>Select a service</option>
                {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            {formData.industry === "Other (Please Specify)" && (
              <div className="sm:col-span-2">
                <label className={labelCls}>Please Specify {req}</label>
                <input name="otherIndustry" required maxLength={100} value={formData.otherIndustry} onChange={handleChange} className={inputCls} placeholder="Your industry" />
              </div>
            )}
            <div className="sm:col-span-2">
              <label className={labelCls}>Brief Description</label>
              <textarea name="description" rows={4} maxLength={1000} value={formData.description} onChange={handleChange} className={inputCls} placeholder="Tell us about your idea or project..." />
            </div>
          </div>

          <button type="submit" disabled={loading || submitted}
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:opacity-95 disabled:opacity-60">
            {loading ? "Submitting..." : submitted ? "Submitted ✓" : "Submit"}
          </button>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
            <Lock className="h-3.5 w-3.5 text-slate-400" />
            Your details are confidential. NDA can be signed before detailed discussions.
          </p>

          {submitted && (
            <p
              ref={(el) => {
                if (el && !el.dataset.scrolled) {
                  el.dataset.scrolled = "true";
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              }}
              className="mt-4 rounded-md bg-emerald-50 px-3 py-2 text-center text-sm text-emerald-700"
            >
              Thanks — we received your details and will be in touch within 12 hours.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const certificates = [
  { src: "/Design certificate 1.jpeg", title: "Design Patent — MODIFIED ELEVATED PLUS MAZE WITH STAGGERED STAIRCASE FOR ANXIETY AND EXPLORATORY BEHAVIOR ASSESSMENT" },
  { src: "/Design certificate 2.jpeg", title: "Design Patent — MEASURING CYLINDER WITH INTEGRATED SENSOR AND DRAINAGE MECHANISM" },
  { src: "/Design certificate 3.jpg", title: "Design Patent — NASAL CLIP FOR DRUG DELIVERY" },
  { src: "/Copyright certificate 1.jpg", title: "Copyright — SURAKSHAK DEVICE USER MANUAL" },
];

function Certificates() {
  const [index, setIndex] = useState(0);
  const total = certificates.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const current = certificates[index];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-24">
      <BlueprintBackdrop />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Our credentials</p>
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">Design Patents & Copyrights</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">A few of the registrations we've secured for innovators like you.</p>

        <div className="mt-12 flex items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous certificate"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-sky-400 hover:text-sky-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100">
              <img
                src={current.src}
                alt={current.title}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-slate-800">{current.title}</p>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next certificate"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-sky-400 hover:text-sky-600"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {certificates.map((cert, i) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to certificate ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-sky-500" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#070d1f] py-12 text-sm text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src="/WhatsApp_Image_2026-06-16_at_3.59.56_PM.jpeg" alt="InnovatorsLab" className="h-8 w-auto" />
            <span className="text-base font-semibold text-white">Innovators<span className="text-sky-300">Lab</span></span>
          </div>
          <p className="mt-3 max-w-xs text-white/60">From idea to intellectual property — design, prototyping, and IP protection for innovators.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Contact</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-300" /> +91 94057 79118</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky-300" /> innovatorslab1@gmail.com</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Company</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/40">© 2026 InnovatorsLab. All rights reserved.</p>
    </footer>
  );
}
