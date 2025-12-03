import { AboutHero } from "./components/AboutHero";
import { OurOffices } from "./components/OurOffices";
import { WhatWeDo } from "./components/WhatWeDo";
import { YunoAdvantage } from "./components/YunoAdvantage";
import { Investors } from "./components/Investors";
import { JoinUs } from "./components/JoinUs";
import { ContactForm } from "./components/ContactForm";

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <OurOffices />
      <WhatWeDo />
      <YunoAdvantage />
      <Investors />
      <JoinUs />
      <ContactForm />
    </div>
  );
}

