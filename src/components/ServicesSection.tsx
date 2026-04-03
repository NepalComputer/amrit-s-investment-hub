import { BarChart3, Briefcase, Building2, Coins, LineChart, PiggyBank } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Portfolio Management", desc: "Customized portfolios across equities, bonds, and alternative assets tailored to your goals." },
  { icon: LineChart, title: "Stock Market Advisory", desc: "Expert NEPSE analysis and equity research for informed trading decisions." },
  { icon: Building2, title: "Real Estate Investment", desc: "Strategic real estate opportunities across Kathmandu Valley with high growth potential." },
  { icon: PiggyBank, title: "Mutual Funds", desc: "Diversified mutual fund schemes with professional fund management and transparent reporting." },
  { icon: Coins, title: "Fixed Income & Bonds", desc: "Government and corporate bond investments for stable, predictable returns." },
  { icon: Briefcase, title: "Financial Planning", desc: "Comprehensive retirement, education, and wealth planning for individuals and families." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Comprehensive Investment Solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            From equities to real estate, we offer a full spectrum of investment services 
            designed for Nepal's dynamic market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-6 transition-colors">
                <s.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
