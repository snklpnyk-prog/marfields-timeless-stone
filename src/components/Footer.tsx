const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground font-serif">
              Marfields
            </h3>
            <p className="text-sm text-muted-foreground italic">
              Luxury Marble. Timeless Elegance.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#collection" className="hover:text-gold transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>marfields.it@gmail.com</li>
              <li>+39 389 951 6628</li>
              <li>+91 9009033077</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Marfields. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
