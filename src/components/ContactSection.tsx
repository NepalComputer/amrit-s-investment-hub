import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out to us via WhatsApp or visit our office in Tokha, Kathmandu. 
            Our team is ready to help you build your financial future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Office Address</h4>
                <p className="text-sm text-muted-foreground mt-1">Tokha, Kathmandu<br />Nepal</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Phone / WhatsApp</h4>
                <p className="text-sm text-muted-foreground mt-1">+977 9861252123</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Office Hours</h4>
                <p className="text-sm text-muted-foreground mt-1">Sun - Fri: 10:00 AM – 5:00 PM<br />Saturday: Closed</p>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-navy-gradient rounded-2xl p-8 md:p-10 flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground">
              Chat With Us on WhatsApp
            </h3>
            <p className="text-primary-foreground/60 text-sm max-w-xs">
              Get instant answers to your investment queries. Our advisors are just a message away.
            </p>
            <a href="https://wa.me/9779861252123" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="lg" className="w-full bg-gold hover:bg-gold-light text-navy-deep font-semibold text-base gap-2">
                <MessageCircle className="w-5 h-5" /> Message on WhatsApp
              </Button>
            </a>
            <p className="text-primary-foreground/40 text-xs">Ask about: Portfolio Management • Mutual Funds • Financial Planning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
