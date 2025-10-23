import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-gold">Marfields</h3>
            <p className="text-sm leading-relaxed mb-4">
              Premium Italian marble sourced directly from the world's finest quarries. 
              Bringing timeless elegance to your spaces.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#collection" className="hover:text-gold transition-colors">
                  Our Collection
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-foreground">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-gold" />
                <a href="mailto:marfields.it@gmail.com" className="hover:text-gold transition-colors">
                  marfields.it@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gold" />
                <div>
                  <a href="tel:+393899516628" className="hover:text-gold transition-colors block">
                    +39 389 951 6628
                  </a>
                  <a href="tel:+919009033077" className="hover:text-gold transition-colors block">
                    +91 9009033077
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/marfields_official?igsh=eTJ4dGVsMmEzbjd6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-secondary/50 text-foreground transition-all hover:bg-gold hover:text-charcoal"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/30 pt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>&copy; {new Date().getFullYear()} Marfields. All rights reserved.</p>
          <p className="text-xs">
            Made with <span className="text-gold">❤️</span> by{" "}
            <a
              href="https://udmtechno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline transition-colors"
            >
              UDMtechno
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
