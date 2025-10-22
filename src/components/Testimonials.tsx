import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Architect",
    company: "Studio RKM",
    text: "Marfields provided exceptional Calacatta marble for our luxury residential project. The quality and authenticity are unmatched. Their direct sourcing from Italian quarries made all the difference.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    company: "Elegance Interiors",
    text: "Working with Marfields has been a pleasure. Their marble selection is stunning, and the team understands the needs of high-end projects. Truly premium quality.",
    rating: 5
  },
  {
    name: "Marco Bianchi",
    role: "Property Developer",
    company: "Vista Developments",
    text: "The marble from Marfields transformed our hotel lobby into a showpiece. The attention to detail and custom sizing options exceeded our expectations.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Trusted by <span className="text-gold">Professionals</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            What our clients say about working with Marfields
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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
              
              <p className="mb-6 text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
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
