// Landing page — assembles all OrderAI sections in document order.
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { UseCases } from "@/components/sections/use-cases";
import { Features } from "@/components/sections/features";
import { Demo } from "@/components/sections/demo";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CtaForm } from "@/components/sections/cta-form";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <Features />
        <Demo />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CtaForm />
      </main>
      <Footer />
    </>
  );
}
