import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
