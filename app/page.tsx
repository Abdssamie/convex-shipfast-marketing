import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import BentoSection from "../components/landing/bento-section";
import Navbar from "../components/sections/navbar/default";
import {
  BuildVsBuy,
  CommercialValue,
  FaqSection,
  FeatureCatalog,
  FinalCta,
  PricingChecklist,
  PricingSection,
  ProductTour,
  SocialProof,
  TechStackStrip,
  TrustStrip,
} from "../components/landing/commercial-sections";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Hero />
      <TechStackStrip />
      <BentoSection />
      <TrustStrip />
      <CommercialValue />
      <ProductTour />
      <FeatureCatalog />
      <BuildVsBuy />
      <SocialProof />
      <PricingSection />
      <PricingChecklist />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
