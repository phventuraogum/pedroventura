import { Hero } from "@/components/home/Hero";
import { LogoWall } from "@/components/home/LogoWall";
import { About } from "@/components/home/About";
import { Principles } from "@/components/home/Principles";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Skills } from "@/components/home/Skills";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoWall />
      <About />
      <Principles />
      <SelectedWork />
      <Skills />
      <ContactCTA />
    </main>
  );
}
