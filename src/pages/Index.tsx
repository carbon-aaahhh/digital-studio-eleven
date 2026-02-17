import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="grain-overlay">
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <SelectedWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
