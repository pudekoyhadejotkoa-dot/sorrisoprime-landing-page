import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section id="contato" className="py-20 md:py-28 bg-cta-gradient relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(199_90%_55%/0.3),transparent_70%)]" />
    <div className="container relative text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Agende Sua Avaliação Hoje Mesmo
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-md mx-auto mb-8">
          Dê o primeiro passo para o sorriso dos seus sonhos. Agende sua consulta agora.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="outline"
            size="xl"
            className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-semibold"
            asChild
          >
            <a href="tel:+5548999999999">📞 Ligar Agora</a>
          </Button>
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/5548999999999" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
