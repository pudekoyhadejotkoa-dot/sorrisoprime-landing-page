import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mariana Costa",
    text: "Fiz clareamento e o resultado ficou incrível. Atendimento excelente, equipe super atenciosa!",
    initials: "MC",
  },
  {
    name: "Roberto Almeida",
    text: "Coloquei implantes e mudou minha vida. Procedimento rápido e sem dor. Recomendo demais!",
    initials: "RA",
  },
  {
    name: "Juliana Pereira",
    text: "As lentes de contato dental ficaram perfeitas. Agora sorrio com total confiança. Obrigada!",
    initials: "JP",
  },
];

const ReviewsSection = () => (
  <section id="avaliacoes" className="py-16 md:py-24">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O que nossos pacientes <span className="text-gradient">dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              Mais de 1.500 pacientes atendidos
            </span>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <AnimatedSection key={r.name} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border h-full flex flex-col">
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{r.initials}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{r.name}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
