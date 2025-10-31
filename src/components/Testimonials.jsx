import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Alessandro Bianchi",
    project: "Villa Eleganza - Private Residence",
    review:
      "The quality of Marfields' Calacatta marble transformed our living spaces into works of art. Their expertise in sourcing directly from Italian quarries ensured we received the finest pieces.",
    location: "Milan, Italy",
  },
  {
    name: "Priya Sharma",
    project: "The Grand Royale Hotel",
    review:
      "Outstanding service from start to finish. The marble selection process was seamless, and the installation team's precision was remarkable. Our hotel lobby now exudes timeless luxury.",
    location: "Mumbai, India",
  },
  {
    name: "Robert Chen",
    project: "Metropolitan Tower Penthouse",
    review:
      "Marfields delivered exceptional Statuario marble that perfectly complemented our modern design vision. Their attention to detail and commitment to quality is unmatched.",
    location: "Singapore",
  },
  {
    name: "Sofia Martinez",
    project: "Casa Moderna - Residential Complex",
    review:
      "Working with Marfields was a pleasure. They helped us source rare Honey Onyx that became the centerpiece of our reception area. The translucent quality is breathtaking.",
    location: "Barcelona, Spain",
  },
  {
    name: "Vikram Patel",
    project: "Nexus Corporate Headquarters",
    review:
      "The team at Marfields provided invaluable guidance throughout our commercial project. Their Nero Marquina marble created the bold, sophisticated aesthetic we envisioned.",
    location: "Bangalore, India",
  },
  {
    name: "Emily Thompson",
    project: "Heritage Mansion Restoration",
    review:
      "Marfields' expertise in Italian marble was crucial for our heritage restoration project. They sourced period-appropriate Carrara marble that maintained the building's historical integrity.",
    location: "London, UK",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover what our clients say about their experience with Marfields
          </p>
        </div>

        {/* Carousel Section */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="h-full p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
                    {/* Star Rating */}
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground italic">
                      "{testimonial.review}"
                    </p>

                    {/* Client Info */}
                    <div className="mt-auto">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                      <p className="text-xs text-gold mt-1">{testimonial.location}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
