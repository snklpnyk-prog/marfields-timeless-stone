import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import Projects from "@/components/Projects";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Collection />
      <Projects />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
