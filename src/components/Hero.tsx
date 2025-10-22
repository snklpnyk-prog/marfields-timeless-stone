import { Button } from "@/components/ui/button";
import heroMarble from "@/assets/hero-marble.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroMarble})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold text-primary-foreground md:text-7xl lg:text-8xl animate-fade-in-up">
          Italian Marble.
          <br />
          <span className="text-gold">Infinite Luxury.</span>
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg text-primary-foreground/90 md:text-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          From the finest quarries of Italy to your space — Marfields delivers timeless beauty and authenticity.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('collection')}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-sans text-base px-8"
          >
            Explore Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-sans text-base px-8"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
