import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/collection" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-gold">
          Marfields
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-gold"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg lg:hidden border-t border-border">
          <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-medium text-foreground transition-colors hover:text-gold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Social Icon - Mobile Only */}
            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border">
              <a
                href="https://www.instagram.com/marfields_official?igsh=eTJ4dGVsMmEzbjd6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-gold transition-colors flex items-center gap-2"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">Follow us on Instagram</span>
              </a>
            </div>
          </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
