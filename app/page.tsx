import { BuildVsBuy } from "../components/landing/build-vs-buy";
import { FaqSection } from "../components/landing/faq-section";
import { FeatureCatalog } from "../components/landing/feature-catalog";
import { FeatureShowcase } from "../components/landing/feature-showcase";
import { FinalCta } from "../components/landing/final-cta";
import { PricingSection } from "../components/landing/pricing-section";
import { TechStackStrip } from "../components/landing/tech-stack-strip";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Navbar from "../components/sections/navbar/default";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Hero />
      <TechStackStrip />
      <FeatureShowcase />
      <FeatureCatalog />
      <BuildVsBuy />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
