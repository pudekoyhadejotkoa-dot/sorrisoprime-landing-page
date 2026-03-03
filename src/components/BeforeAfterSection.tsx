import AnimatedSection from "./AnimatedSection";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const cases = [
  { img: ba1, label: "Clareamento Dental" },
  { img: ba2, label: "Lentes de Contato" },
  { img: ba3, label: "Ortodontia" },
];

const BeforeAfterSection = () => (
  <section id="antes-depois" className="py-16 md:py-24">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Resultados <span className="text-gradient">Reais</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Veja a transformação dos nossos pacientes com tratamentos de excelência.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.1}>
            <div className="rounded-2xl overflow-hidden shadow-card border border-border group">
              <img
                src={c.img}
                alt={`Antes e depois — ${c.label}`}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-4 bg-card">
                <p className="text-sm font-medium text-foreground text-center">{c.label}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
