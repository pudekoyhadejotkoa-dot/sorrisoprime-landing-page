import AnimatedSection from "./AnimatedSection";
import { Award, Users, HeartPulse, Cpu } from "lucide-react";
import teamImg from "@/assets/team.jpg";

const highlights = [
  { icon: Award, text: "Mais de 15 anos de experiência" },
  { icon: Users, text: "Equipe com formação especializada" },
  { icon: HeartPulse, text: "Atendimento humanizado e acolhedor" },
  { icon: Cpu, text: "Tecnologia de ponta" },
];

const AboutSection = () => (
  <section id="sobre" className="py-16 md:py-24 bg-section-alt">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <AnimatedSection>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={teamImg}
              alt="Equipe Sorriso Prime Odontologia"
              className="w-full h-[340px] md:h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a <span className="text-gradient">Clínica</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A Sorriso Prime é referência em odontologia estética e funcional em Florianópolis.
            Nossa equipe é formada por profissionais com formação especializada nas melhores
            instituições do país, unindo conhecimento técnico a um atendimento acolhedor e humanizado.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Utilizamos tecnologia de última geração — como scanner intraoral 3D, radiografia digital
            e laser — para proporcionar tratamentos mais rápidos, confortáveis e com resultados excepcionais.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.text} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-foreground leading-snug">{h.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
