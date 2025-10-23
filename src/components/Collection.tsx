import { useState } from "react";
import carraraImage from "@/assets/carrara.jpg";
import calacattaImage from "@/assets/calacatta.jpg";
import marquinaImage from "@/assets/marquina.jpg";
import onyxImage from "@/assets/onyx.jpg";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const marbles = [
  {
    name: "Carrara Marble",
    origin: "Tuscany, Italy",
    image: carraraImage,
    description: "Classic white marble with delicate gray veining, prized for centuries in classical sculpture and architecture.",
    details: "Carrara marble features a pure white background with soft gray veining. Its compact grain structure and high polish retention make it perfect for both interior and exterior applications. This timeless Italian marble has been used in iconic structures worldwide.",
    characteristics: ["Compact grain structure", "High polish retention", "Timeless elegance"],
    applications: ["Flooring", "Wall Cladding", "Countertops", "Sculptures"]
  },
  {
    name: "Calacatta Marble",
    origin: "Carrara, Italy",
    image: calacattaImage,
    description: "Luxurious white marble with bold gold and gray veining, representing the pinnacle of marble elegance.",
    details: "Rarer and more prestigious than Carrara, Calacatta features dramatic golden and gray veining on a bright white canvas. Its translucent quality and bold patterns make it the ultimate choice for luxury interiors.",
    characteristics: ["Bold dramatic veining", "Translucent quality", "Premium grade"],
    applications: ["Feature Walls", "Luxury Bathrooms", "Statement Countertops", "Artistic Installations"]
  },
  {
    name: "Nero Marquina",
    origin: "Basque Country, Spain",
    image: marquinaImage,
    description: "Deep black marble with striking white calcite veins, perfect for contemporary and modern interiors.",
    details: "Nero Marquina's intense black color and contrasting white vein patterns create a dramatic aesthetic. This Spanish marble is ideal for creating bold statements in modern design schemes.",
    characteristics: ["Intense black color", "White vein patterns", "High contrast"],
    applications: ["Accent Walls", "Bar Counters", "Flooring", "Contemporary Design"]
  },
  {
    name: "Honey Onyx",
    origin: "Various Premium Sources",
    image: onyxImage,
    description: "Translucent semi-precious stone with warm amber tones that creates stunning luminous effects when backlit.",
    details: "Honey Onyx is a rare translucent stone with warm amber and golden tones. Its unique ability to transmit light creates breathtaking backlit features in luxury spaces.",
    characteristics: ["Translucent properties", "Warm color palette", "Unique patterns"],
    applications: ["Backlit Features", "Luxury Bathrooms", "Reception Desks", "Statement Pieces"]
  }
];

const Collection = () => {
  const [selectedMarble, setSelectedMarble] = useState<typeof marbles[0] | null>(null);

  return (
    <section id="collection" className="py-20 px-4 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Our <span className="text-gold">Collection</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Curated selections from the world's most prestigious quarries
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {marbles.map((marble, index) => (
            <Card 
              key={index}
              onClick={() => setSelectedMarble(marble)}
              className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={marble.image} 
                  alt={`${marble.name} - Premium ${marble.origin} marble`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-light">{marble.description}</p>
                </div>
              </div>
              
              <div className="p-6 bg-card">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {marble.name}
                </h3>
                <p className="text-sm text-muted-foreground">{marble.origin}</p>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedMarble} onOpenChange={() => setSelectedMarble(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedMarble && (
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src={selectedMarble.image}
                    alt={selectedMarble.name}
                    className="w-full h-[400px] object-cover rounded-sm"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {selectedMarble.name}
                  </h2>
                  <p className="text-gold text-lg mb-4">{selectedMarble.origin}</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedMarble.details}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Key Characteristics
                      </h3>
                      <ul className="space-y-2">
                        {selectedMarble.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-gold mt-1">•</span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Common Applications
                      </h3>
                      <ul className="space-y-2">
                        {selectedMarble.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-gold mt-1">•</span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Collection;
