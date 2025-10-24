import { Mountain, Globe, Award, Leaf } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Sourced Directly from Italian Quarries",
    description: "Authentic materials from Carrara, Tuscany, and beyond"
  },
  {
    icon: Globe,
    title: "Global Shipping & Custom Sizing",
    description: "Worldwide delivery with tailored dimensions for any project"
  },
  {
    icon: Award,
    title: "Architect-Trusted Quality",
    description: "Premium grade stone trusted by leading design professionals"
  },
  {
    icon: Leaf,
    title: "Luxury Meets Sustainability",
    description: "Ethically sourced with minimal environmental impact"
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 px-4 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Why Choose <span className="text-gold">Marfields</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 transition-all duration-300 hover:bg-gold/20 hover:scale-110">
                    <Icon className="h-10 w-10 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
