import quarryImage from "@/assets/quarry.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <img 
              src={quarryImage} 
              alt="Italian marble quarry in Carrara" 
              className="w-full h-[400px] md:h-[600px] object-cover rounded-sm shadow-2xl"
            />
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-up">
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              A Legacy of Stone & <span className="text-gold">Craftsmanship</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                At Marfields, we specialize in importing Italian marble, sourced directly from the finest quarries across Italy and Europe. Our expertise ensures every slab tells a story of precision, luxury, and sustainability.
              </p>
              
              <p>
                From private residences to commercial landmarks — our marble defines modern opulence. We work closely with architects, designers, and homeowners to bring their vision to life with authentic, premium-quality stone.
              </p>
              
              <p className="font-semibold text-foreground">
                Marfields: Where Italian heritage meets contemporary elegance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
