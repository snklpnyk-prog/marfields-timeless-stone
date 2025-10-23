import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arch. Marco Bianchi",
    role: "Lead Architect",
    company: "Studio Bianchi, Milan",
    text: "The quality and authenticity of Marfields' Italian marble transformed our luxury residential project. Truly unmatched.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    company: "Luxe Interiors, Mumbai",
    text: "Working with Marfields has been seamless. Their sourcing expertise and attention to detail sets them apart.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Property Developer",
    company: "Elite Estates",
    text: "The marble we sourced from Marfields elevated our project to a new level of sophistication. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sofia Rossi",
    role: "Boutique Hotel Owner",
    company: "Villa Eleganza, Rome",
    text: "Marfields delivered exceptional Calacatta marble for our hotel renovation. The beauty and craftsmanship exceeded all expectations.",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Construction Director",
    company: "Anderson & Partners",
    text: "Professional service from start to finish. The marble quality is outstanding and the logistics were perfectly managed.",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    role: "Residential Client",
    company: "Private Villa, Delhi",
    text: "Our home has been transformed with the stunning Italian marble from Marfields. It's a masterpiece that will last generations.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl font-serif">
            Trusted by <span className="text-gold">Professionals</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-sans">
            What our clients say about working with Marfields
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up bg-card/80 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="mb-6 text-muted-foreground leading-relaxed italic font-sans">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground font-serif">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground font-sans">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
