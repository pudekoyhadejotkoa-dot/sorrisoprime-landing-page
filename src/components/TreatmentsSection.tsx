import AnimatedSection from "./AnimatedSection";
import { Sparkles, CircleDot, Layers, SmilePlus, ShieldCheck, Palette } from "lucide-react";

const treatments = [
  { icon: Sparkles, title: "Clareamento Dental", desc: "Dentes mais brancos com tecnologia a laser de última geração." },
  { icon: CircleDot, title: "Implantes Dentários", desc: "Reabilitação oral com implantes de alta qualidade e durabilidade." },
  { icon: Layers, title: "Lentes de Contato Dental", desc: "Sorriso perfeito e natural com laminados ultrafinos de porcelana." },
  { icon: SmilePlus, title: "Ortodontia", desc: "Alinhamento dental com aparelhos modernos e alinhadores invisíveis." },
  { icon: ShieldCheck, title: "Limpeza e Profilaxia", desc: "Prevenção e saúde bucal com limpeza profissional completa." },
  { icon: Palette, title: "Harmonização Facial", desc: "Procedimentos estéticos para harmonizar o rosto e o sorriso." },
];

const TreatmentsSection = () => (
  <section id="tratamentos" className="py-16 md:py-24 bg-section-alt">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossos <span className="text-gradient">Tratamentos</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Oferecemos uma gama completa de tratamentos com excelência e tecnologia.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t, i) => (
          <AnimatedSection key={t.title} delay={i * 0.08}>
            <div className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-soft hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TreatmentsSection;
