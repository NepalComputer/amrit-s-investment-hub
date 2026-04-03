const stats = [
  { value: "NPR 500M+", label: "Assets Under Management" },
  { value: "1,200+", label: "Happy Investors" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Retention Rate" },
];

const StatsSection = () => {
  return (
    <section className="relative -mt-20 z-20">
      <div className="container">
        <div className="bg-card rounded-2xl shadow-2xl shadow-navy/10 border border-border p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-heading font-bold text-gold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
