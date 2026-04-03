const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-gold/10 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                <span className="font-heading text-navy-deep font-bold">W</span>
              </div>
              <span className="font-heading text-primary-foreground font-semibold text-lg">
                Wagle Investments
              </span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              Your trusted investment partner in Nepal. Building wealth through strategic, 
              diversified, and transparent investment solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Why Us", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-primary-foreground/50">
              <p>Registered Investment Company</p>
              <p>SEBON Regulated</p>
              <p>Tokha, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Wagle Investments. All rights reserved. Investment involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
