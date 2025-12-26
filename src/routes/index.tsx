import { createFileRoute } from '@tanstack/react-router'
import CTA from "@/components/CTA"
import CaseStudies from "@/components/CaseStudies"
import FAQ from "@/components/FAQ"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import WhatYouGet from "@/components/WhatYouGet"
import Testimonials from "@/components/Testimonials"
import HowItWorks from "@/components/HowItWorks"

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CaseStudies />
      <WhatYouGet />
      <FAQ />
      <CTA />
      <Footer />
    </div>

  )
}
