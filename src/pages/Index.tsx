import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Values } from "@/components/sections/Values";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Values />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
