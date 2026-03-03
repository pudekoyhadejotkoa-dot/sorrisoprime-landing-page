import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

const trustItems = [
  "Atendimento personalizado",
  "Equipamentos modernos",
  "Profissionais qualificados",
  "Parcelamento facilitado",
];

const HeroSection = () => (
  <section id="inicio" className="relative pt-20 md:pt-24 overflow-hidden bg-hero-gradient">
    <div className="container py-12 md:py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Seu Novo Sorriso{" "}
            <span className="text-gradient">Começa Aqui</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Tratamentos modernos, tecnologia avançada e atendimento humanizado em Florianópolis.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="cta" size="xl" asChild>
              <a href="#contato">Agendar Consulta</a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/5548999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img
              src={heroImg}
              alt="Consultório moderno da Sorriso Prime Odontologia"
              className="w-full h-[320px] md:h-[420px] lg:h-[480px] object-cover"
              loading="eager"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6 bg-card rounded-xl shadow-soft p-4 border border-border">
            <p className="text-2xl font-bold text-primary">+1.500</p>
            <p className="text-xs text-muted-foreground">Pacientes atendidos</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
