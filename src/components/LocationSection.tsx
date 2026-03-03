import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import clinicImg from "@/assets/clinic-facade.jpg";

const LocationSection = () => (
  <section id="localizacao" className="py-16 md:py-24">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Clínica Moderna em <span className="text-gradient">Florianópolis</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Estrutura completa e equipamentos de última geração para o seu conforto.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Map */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl overflow-hidden shadow-card h-full min-h-[320px]">
            <iframe
              title="Localização Sorriso Prime"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8!2d-48.5482!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQ4LjgiUyA0OMKwMzInNTMuNSJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>

        {/* Info */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={clinicImg}
                alt="Fachada da Clínica Sorriso Prime"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="text-sm text-muted-foreground">Av. Beira-Mar Norte, 1200 — Sala 301<br />Centro, Florianópolis — SC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Telefone</p>
                  <a href="tel:+5548999999999" className="text-sm text-primary hover:underline">(48) 99999-9999</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Horário</p>
                  <p className="text-sm text-muted-foreground">Seg a Sex: 8h — 19h | Sáb: 8h — 13h</p>
                </div>
              </div>
            </div>

            <Button variant="cta" size="lg" asChild>
              <a
                href="https://www.google.com/maps/dir//Av.+Beira-Mar+Norte,+1200,+Florianópolis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4" />
                Como Chegar
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default LocationSection;
