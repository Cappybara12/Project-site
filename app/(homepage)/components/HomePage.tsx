import { Hero } from "./Hero";
import { TrustedBy } from "./TrustedBy";
import { GlobalRegions } from "./GlobalRegions";
import { ImpactMetrics } from "./ImpactMetrics";
import { UnifiedInfrastructure } from "./UnifiedInfrastructure";
import { StickyFeatures } from "./StickyFeatures";
import { BeforeAfterYuno } from "./BeforeAfterYuno";
import { SolutionSection } from "./SolutionSection";
import { Industries } from "./Industries";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { CTASection } from "./CTASection";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <GlobalRegions />
      <ImpactMetrics />
      <UnifiedInfrastructure />
      <StickyFeatures />
      <BeforeAfterYuno />
      <SolutionSection />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
};

