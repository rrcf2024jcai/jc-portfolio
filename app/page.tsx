"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Palette,
  Globe,
  Megaphone,
  Smartphone,
  ArrowUpRight,
} from "lucide-react"

/* ─── Data ─── */
const NAV_LINKS = ["Home", "Services", "Works", "Blog", "Contact"]

const SERVICES = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Creating intuitive interfaces and seamless user experiences that delight your customers.",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Building modern, responsive websites that stand out and drive real business results.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven campaigns that grow your audience and boost engagement across channels.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile apps built for performance and user retention.",
  },
]

const SKILLS = [
  { name: "React", value: 90 },
  { name: "Next.js", value: 90 },
  { name: "Python", value: 85 },
  { name: "DevOps", value: 80 },
  { name: "Video Editing", value: 88 },
  { name: "UI/UX Design", value: 90 },
]

const PORTFOLIO_FILTERS = ["All", "Youtube", "Vimeo", "Details", "Popup", "Soundcloud"]

const PORTFOLIO_ITEMS = [
  { src: "/placeholder.jpg", alt: "Full Stack E-commerce App", category: "Details" },
  { src: "/placeholder.jpg", alt: "Motion Graphics Reel", category: "Youtube" },
  { src: "/placeholder.jpg", alt: "Data Analysis Dashboard", category: "Vimeo" },
]

/* ─── Component ─── */
export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const [serviceIndex, setServiceIndex] = useState(0)

  const filteredPortfolio =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === activeFilter)

  const visibleServices = SERVICES.slice(serviceIndex, serviceIndex + 3)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-[family-name:var(--font-sans)] overflow-x-hidden">
      {/* ════════ NAVBAR ════════ */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-1 text-xl font-bold font-[family-name:var(--font-heading)]">
            Jiyu<span className="inline-block h-2 w-2 rounded-full bg-forest" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-forest ${
                  link === "Home" ? "text-forest" : "text-gray-600"
                }`}
              >
                {link}
                {link === "Blog" && <ChevronDown className="ml-1 inline-block h-3 w-3" />}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 hover:text-forest"
              >
                {link}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* ════════ HERO ════════ */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-forest-50 to-white">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-forest/10 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-10 h-56 w-56 rounded-full bg-forest/5 blur-2xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:py-28">
          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-forest">{"Hi, I'm"}</p>
            <h1 className="mb-3 text-4xl font-extrabold leading-tight font-[family-name:var(--font-heading)] text-gray-900 md:text-5xl lg:text-6xl text-balance">
              Jiyu Cai
            </h1>
            <p className="mb-4 text-lg font-semibold text-gray-800">Full Stack Developer & Creative Editor</p>
            <p className="mb-8 max-w-md leading-relaxed text-gray-500">
              With 7 years of professional experience in video editing and visual design, I am currently studying the App Development program at RRC Polytech in Winnipeg, Canada. I am dedicated to achieving a perfect integration of exquisite visual aesthetics and rigorous code logic.
            </p>
          </div>

          {/* Image */}
          <div className="relative order-1 flex justify-center md:order-2">
            <div className="relative h-72 w-72 md:h-96 md:w-96">
              <div className="absolute inset-0 rounded-full bg-forest/15" />
              <Image
                src="/placeholder.jpg"
                alt="Jiyu Cai — Full Stack Developer & Creative Editor"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
            {/* Heading */}
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-forest">Services</p>
              <h2 className="mb-6 text-2xl font-extrabold leading-snug font-[family-name:var(--font-heading)] text-gray-900 text-balance md:text-3xl">
                I Provide Wide Range Of Digital Services
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setServiceIndex(Math.max(0, serviceIndex - 1))}
                  disabled={serviceIndex === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition hover:border-forest hover:text-forest disabled:opacity-40"
                  aria-label="Previous services"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    setServiceIndex(Math.min(SERVICES.length - 1, serviceIndex + 1))
                  }
                  disabled={serviceIndex >= SERVICES.length - 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white transition hover:bg-forest-dark disabled:opacity-40"
                  aria-label="Next services"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleServices.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-forest/30"
                >
                  <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-forest-50 text-forest transition group-hover:bg-forest group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-base font-bold text-gray-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ EXPERIENCE / SKILLS ════════ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-forest">Why Choose Me</p>
          <h2 className="mb-12 text-2xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 md:text-3xl">
            My Experience Area
          </h2>

          <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2 text-left">
            {SKILLS.map(({ name, value }) => (
              <div key={name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{name}</span>
                  <span className="font-bold text-forest">{value}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-forest transition-all duration-700"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PORTFOLIO ════════ */}
      <section id="works" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-forest">Portfolio</p>
          <h2 className="mb-6 text-2xl font-extrabold font-[family-name:var(--font-heading)] text-gray-900 md:text-3xl">
            My Amazing Works
          </h2>

          {/* Filters */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeFilter === f
                    ? "bg-forest text-white shadow-md shadow-forest/20"
                    : "text-gray-500 hover:text-forest"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPortfolio.map((item) => (
              <div key={item.alt} className="group relative overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-forest/60 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest shadow-lg">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer id="contact" className="bg-gray-900 py-12 text-center text-gray-400">
        <div className="mx-auto max-w-7xl px-6">
          <a href="#" className="mb-4 inline-flex items-center gap-1 text-xl font-bold text-white font-[family-name:var(--font-heading)]">
            Jiyu<span className="inline-block h-2 w-2 rounded-full bg-forest" />
          </a>
          <p className="mb-6 text-sm">
            Crafting digital experiences with passion and precision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-forest">
                {link}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-600">&copy; {new Date().getFullYear()} Jiyu Cai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
