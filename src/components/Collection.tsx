import carraraImage from "@/assets/carrara.jpg";
import calacattaImage from "@/assets/calacatta.jpg";
import marquinaImage from "@/assets/marquina.jpg";
import onyxImage from "@/assets/onyx.jpg";
import { Card } from "@/components/ui/card";

const marbles = [
  {
    name: "Carrara Marble",
    origin: "Tuscany, Italy",
    image: carraraImage,
    description: "Classic white marble with delicate gray veining"
  },
  {
    name: "Calacatta Marble",
    origin: "Carrara, Italy",
    image: calacattaImage,
    description: "Luxurious white marble with bold gold veining"
  },
  {
    name: "Nero Marquina",
    origin: "Basque Country, Spain",
    image: marquinaImage,
    description: "Dramatic black marble with white veining"
  },
  {
    name: "Honey Onyx",
    origin: "Various Locations",
    image: onyxImage,
    description: "Translucent golden amber stone"
  }
];

const Collection = () => {
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
              className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={marble.image} 
                  alt={marble.name}
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
      </div>
    </section>
  );
};

export default Collection;
