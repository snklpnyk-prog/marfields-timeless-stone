import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    name: "Luxury Residence",
    location: "Mumbai, India",
    image: project1,
    description: "Italian Calacatta marble flooring and feature walls"
  },
  {
    name: "Hotel Grand Lobby",
    location: "New Delhi, India",
    image: project2,
    description: "Black Marquina marble reception with gold accents"
  },
  {
    name: "Private Spa Retreat",
    location: "Goa, India",
    image: project3,
    description: "White Carrara marble bathroom with custom features"
  },
  {
    name: "Corporate Headquarters",
    location: "Bangalore, India",
    image: project4,
    description: "Beige marble reception area with contemporary design"
  },
  {
    name: "Fine Dining Restaurant",
    location: "Mumbai, India",
    image: project5,
    description: "Green marble tables and bar counter for upscale dining"
  },
  {
    name: "Luxury Fashion Boutique",
    location: "New Delhi, India",
    image: project6,
    description: "Marble display pedestals and feature wall for high-end retail"
  },
  {
    name: "Contemporary Kitchen",
    location: "Pune, India",
    image: project7,
    description: "Carrara marble countertops and backsplash with modern design"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 px-4 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Transforming spaces with Italian marble excellence
          </p>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-sm shadow-2xl">
            <img 
              src={currentProject.image} 
              alt={currentProject.name}
              className="h-full w-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-primary-foreground">
              <h3 className="mb-2 text-3xl md:text-4xl font-bold">
                {currentProject.name}
              </h3>
              <p className="mb-1 text-lg md:text-xl text-gold">
                {currentProject.location}
              </p>
              <p className="text-base md:text-lg text-primary-foreground/90">
                {currentProject.description}
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="h-12 w-12 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-muted'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="h-12 w-12 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
