import { Shield, Target, Award } from "lucide-react";
import ceoImage from "@/assets/ceo-portrait.jpg";

const values = [
  { icon: Shield, title: "Trust & Integrity", desc: "Transparent dealings with every client." },
  { icon: Target, title: "Strategic Vision", desc: "Data-driven investment strategies." },
  { icon: Award, title: "Proven Track Record", desc: "Consistent returns for our investors." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CEO + values */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                A Legacy of Smart Investing
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Founded in Tokha, Kathmandu, GrowUp Investment has been at the forefront of Nepal's 
              investment landscape. Under the leadership of CEO <strong className="text-foreground">Amrit Wagle</strong>, 
              we deliver personalized investment strategies that align with our clients' financial goals 
              and risk appetite.
            </p>
            <div className="space-y-5">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{v.title}</h4>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CEO image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 rounded-2xl rotate-3" />
              <img
                src={ceoImage}
                alt="Amrit Wagle - CEO"
                className="relative rounded-2xl shadow-xl w-80 h-96 object-cover"
                loading="lazy"
                width={512}
                height={640}
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl px-6 py-3 shadow-lg text-center">
                <p className="font-heading font-semibold text-foreground">Amrit Wagle</p>
                <p className="text-sm text-gold">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
