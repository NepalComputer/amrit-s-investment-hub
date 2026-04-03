import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-md border-b border-gold/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
            <span className="font-heading text-navy-deep font-bold text-lg">G</span>
          </div>
          <span className="font-heading text-primary-foreground text-xl font-semibold tracking-tight">
            GrowUp <span className="text-gradient-gold">Investment</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/9779861252123" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gold hover:bg-gold-light text-navy-deep font-semibold gap-2">
              <Phone className="w-4 h-4" /> WhatsApp Us
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-deep/98 border-t border-gold/10 pb-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href="https://wa.me/9779861252123" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gold hover:bg-gold-light text-navy-deep font-semibold gap-2">
                <Phone className="w-4 h-4" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
