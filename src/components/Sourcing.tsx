import { MapPin, Truck, CheckCircle, Gem } from "lucide-react";
import quarryImage from "@/assets/quarry.jpg";

const steps = [
  {
    icon: MapPin,
    title: "Direct Quarry Partnerships",
    description: "We work directly with family-owned quarries in Carrara, Tuscany, and across Italy, ensuring authentic Italian marble with verified origin certificates."
  },
  {
    icon: Gem,
    title: "Hand-Selected Slabs",
    description: "Our experts personally visit quarries to hand-select premium grade slabs, inspecting each piece for color consistency, vein patterns, and structural integrity."
  },
  {
    icon: Truck,
    title: "Global Logistics",
    description: "We manage the entire supply chain from extraction to delivery, using specialized transport and handling to preserve the marble's pristine condition."
  },
  {
    icon: CheckCircle,
    title: "Quality Certification",
    description: "Every shipment includes detailed documentation: quarry certificates, quality reports, and stone composition analysis for complete transparency."
  }
];

const Sourcing = () => {
  return (
    <section id="sourcing" className="py-20 px-4 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            From <span className="text-gold">Italian Quarries</span> to Your Space
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Our commitment to authenticity begins at the source. We personally oversee every step of the journey from the ancient quarries of Italy to your project site.
          </p>
        </div>

        <div className="mb-16 animate-fade-in">
          <img 
            src={quarryImage} 
            alt="Marble quarry in Carrara, Italy showing extraction process" 
            className="w-full h-[400px] md:h-[500px] object-cover rounded-sm shadow-2xl"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                    <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-secondary/30 rounded-sm animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              Our Italian Heritage
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The marble quarries of Carrara have been operational for over 2,000 years, supplying stone for masterpieces like Michelangelo's David. We honor this legacy by maintaining the highest standards of extraction and selection, bringing you marble that carries centuries of Italian craftsmanship and geological wonder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sourcing;
