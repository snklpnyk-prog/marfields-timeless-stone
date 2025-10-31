import React, { useState } from "react";
import carraraImage from "@/assets/carrara.jpg";
import calacattaImage from "@/assets/calacatta.jpg";
import marquinaImage from "@/assets/marquina.jpg";
import onyxImage from "@/assets/onyx.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const galleryItems = [
  {
    name: "Carrara Bianco",
    image: carraraImage,
    origin: "Carrara, Tuscany, Italy",
    description:
      "The most iconic Italian marble, prized for its pure white background with soft gray veining. Used in classical sculpture and architecture for centuries.",
    characteristics: [
      "Compact grain structure",
      "High polish retention",
      "Excellent for interior & exterior",
    ],
    applications: ["Flooring", "Wall Cladding", "Countertops", "Sculptures"],
  },
  {
    name: "Calacatta Gold",
    image: calacattaImage,
    origin: "Carrara Region, Italy",
    description:
      "Rarer and more prestigious than Carrara, featuring dramatic golden and gray veining on a bright white canvas. The pinnacle of luxury marble.",
    characteristics: [
      "Bold, dramatic veining",
      "Translucent quality",
      "Premium grade selection",
    ],
    applications: [
      "Feature Walls",
      "Luxury Bathrooms",
      "Statement Countertops",
      "Artistic Installations",
    ],
  },
  {
    name: "Nero Marquina",
    image: marquinaImage,
    origin: "Basque Country, Spain",
    description:
      "Deep black marble with striking white calcite veins creating a dramatic contrast. Perfect for modern and contemporary interiors.",
    characteristics: [
      "Intense black color",
      "White vein patterns",
      "High contrast aesthetic",
    ],
    applications: [
      "Accent Walls",
      "Bar Counters",
      "Flooring",
      "Contemporary Design",
    ],
  },
  {
    name: "Honey Onyx",
    image: onyxImage,
    origin: "Various Premium Sources",
    description:
      "Translucent semi-precious stone with warm amber and golden tones. When backlit, creates a stunning luminous effect.",
    characteristics: [
      "Translucent properties",
      "Warm color palette",
      "Unique patterns",
    ],
    applications: [
      "Backlit Features",
      "Luxury Bathrooms",
      "Reception Desks",
      "Statement Pieces",
    ],
  },
  {
    name: "Statuario Venato",
    image: carraraImage,
    origin: "Carrara, Italy",
    description:
      "Premium white marble with bold gray veining resembling classical statuary. Limited availability makes it highly sought after.",
    characteristics: ["Bright white base", "Prominent veining", "Statuario grade"],
    applications: [
      "High-End Residential",
      "Commercial Lobbies",
      "Luxury Hotels",
      "Premium Projects",
    ],
  },
  {
    name: "Emperador Dark",
    image: marquinaImage,
    origin: "Spain",
    description:
      "Rich brown marble with white and golden veins, offering warmth and sophistication to any space.",
    characteristics: ["Chocolate brown tones", "Irregular veining", "Warm aesthetic"],
    applications: [
      "Flooring",
      "Wall Panels",
      "Bathroom Vanities",
      "Commercial Spaces",
    ],
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Marble <span className="text-gold">Gallery</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our curated collection of the world's finest marble and
            natural stone. Click any stone to view detailed specifications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-sm shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} - Premium ${item.origin} marble`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="mb-2 text-2xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gold">{item.origin}</p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedItem && (
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-[400px] object-cover rounded-sm"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {selectedItem.name}
                  </h2>
                  <p className="text-gold text-lg mb-4">{selectedItem.origin}</p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Key Characteristics
                      </h3>
                      <ul className="space-y-2">
                        {selectedItem.characteristics.map((char, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
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
                        {selectedItem.applications.map((app, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
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

export default Gallery;
