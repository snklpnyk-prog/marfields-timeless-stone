import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import Sourcing from "@/components/Sourcing";
import Projects from "@/components/Projects";
import WhyChoose from "@/components/WhyChoose";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <Hero />
      <About />
      <Collection />
      <Sourcing />
      <Projects />
      <WhyChoose />
      <Gallery />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
