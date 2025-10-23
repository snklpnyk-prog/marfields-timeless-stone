import Navigation from "@/components/Navigation";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const CollectionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <div className="pt-20">
        <Collection />
      </div>
      <Footer />
    </div>
  );
};

export default CollectionPage;
