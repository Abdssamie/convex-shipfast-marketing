import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import BentoSection from "../components/landing/bento-section";
import Navbar from "../components/sections/navbar/default";
import { BuildVsBuy } from "../components/landing/build-vs-buy";
import { CommercialValue } from "../components/landing/commercial-value";
import { FaqSection } from "../components/landing/faq-section";
import { FeatureCatalog } from "../components/landing/feature-catalog";
import { FinalCta } from "../components/landing/final-cta";
import { PricingChecklist } from "../components/landing/pricing-checklist";
import { PricingSection } from "../components/landing/pricing-section";
import { SocialProof } from "../components/landing/social-proof";
import { TechStackStrip } from "../components/landing/tech-stack-strip";
import { TrustStrip } from "../components/landing/trust-strip";
import { FeatureShowcase } from "../components/landing/feature-showcase";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Hero />
      <TechStackStrip />
      <BentoSection />
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
