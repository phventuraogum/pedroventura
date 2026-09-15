import { Hero } from "@/components/home/Hero";
import { SelectedSystems } from "@/components/home/SelectedSystems";
import { WhatIDo } from "@/components/home/WhatIDo";
import { Lab } from "@/components/home/Lab";
import { AskPedro } from "@/components/home/AskPedro";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedSystems />
      <WhatIDo />
      <Lab />
      <AskPedro />
      <ContactCTA />
    </main>
  );
}
