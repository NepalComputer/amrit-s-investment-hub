import { CheckCircle } from "lucide-react";

const reasons = [
  "SEBON-compliant investment practices",
  "Personalized investment strategies for every client",
  "Dedicated relationship managers",
  "Transparent fee structure with no hidden charges",
  "Real-time portfolio tracking and quarterly reports",
  "Deep expertise in Nepal's capital markets (NEPSE)",
  "Risk-adjusted returns with diversified portfolios",
  "Local presence in Tokha, Kathmandu with easy accessibility",
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-navy-gradient">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            Your Wealth Deserves the Best
          </h2>
          <p className="mt-4 text-primary-foreground/60">
            We combine deep market knowledge with a client-first philosophy to deliver results that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-6 py-4"
            >
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-primary-foreground/80 text-sm">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
