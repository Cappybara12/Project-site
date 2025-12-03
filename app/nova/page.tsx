import { NovaNavbar } from "./components/NovaNavbar";
import { NovaHero } from "./components/NovaHero";
import { SimulateCall } from "./components/SimulateCall";
import { OrchestrationSection } from "./components/OrchestrationSection";
import { WhatNovaHelps } from "./components/WhatNovaHelps";
import { NovaInAction } from "./components/NovaInAction";
import { TestimonialsNova } from "./components/TestimonialsNova";
import { NovaCtaSection } from "./components/NovaCtaSection";
import { NovaFooter } from "./components/NovaFooter";

export default function NovaPage() {
  return (
    <div className="bg-black">
      <NovaNavbar />
      <NovaHero />
      <SimulateCall />
      <OrchestrationSection />
      <WhatNovaHelps />
      <NovaInAction />
      <TestimonialsNova />
      <NovaCtaSection />
      <NovaFooter />
    </div>
  );
}

