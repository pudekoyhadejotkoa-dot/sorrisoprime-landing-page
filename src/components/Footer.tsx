import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-cta-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold">S</span>
            </div>
            <span className="font-display font-bold text-background text-lg">Sorriso Prime</span>
          </div>
          <p className="text-sm leading-relaxed text-background/60">
            Transformando sorrisos com tecnologia e cuidado.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-background mb-3 text-sm">Links Rápidos</h4>
          <nav className="flex flex-col gap-2">
            {["Início", "Tratamentos", "Sobre", "Avaliações"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-sm text-background/60 hover:text-background transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-background mb-3 text-sm">Contato</h4>
          <div className="space-y-2 text-sm">
            <a href="tel:+5548999999999" className="flex items-center gap-2 text-background/60 hover:text-background transition-colors">
              <Phone className="w-4 h-4" /> (48) 99999-9999
            </a>
            <div className="flex items-start gap-2 text-background/60">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Av. Beira-Mar Norte, 1200<br />Florianópolis — SC</span>
            </div>
            <div className="flex items-center gap-2 text-background/60">
              <Clock className="w-4 h-4" /> Seg a Sex: 8h — 19h
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-background mb-3 text-sm">Redes Sociais</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/40">
        © {new Date().getFullYear()} Sorriso Prime Odontologia. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
