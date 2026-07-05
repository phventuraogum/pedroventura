import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Skills } from "@/components/home/Skills";
import { Setup } from "@/components/home/Setup";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedWork />
      <Skills />
      <Setup />
      <ContactCTA />
    </main>
  );
}
