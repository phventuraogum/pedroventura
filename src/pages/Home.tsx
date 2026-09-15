import { Hero } from "@/components/home/Hero";
import { WhatIDo } from "@/components/home/WhatIDo";
import { SelectedSystems } from "@/components/home/SelectedSystems";
import { Skills } from "@/components/home/Skills";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedSystems />
      <WhatIDo />
      <Skills />
      <ContactCTA />
    </main>
  );
}
