import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <img
        src={heroBg}
        alt="Kathmandu skyline"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Trusted Investment Partner in Nepal</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight">
            Building Wealth,{" "}
            <span className="text-gradient-gold">Securing Futures</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
            GrowUp Investment offers expert portfolio management, strategic financial planning, 
            and diversified investment solutions to help you grow your wealth with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/9779861252123" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy-deep font-semibold text-base px-8 gap-2">
                Start Investing <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
              >
                Our Services
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
