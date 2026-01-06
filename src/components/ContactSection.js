import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">
            {/* Contatti */}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lavoriamo <span className="text-gradient">Insieme</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hai un progetto in mente? Scrivimi e discutiamo di come posso
            aiutarti a realizzare la tua visione.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:ggsugamiele@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ggsugamiele@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 0-.635-.635C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Italia 🇮🇹</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">
                    Disponibile per lavoro remoto worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-mono font-bold text-green-400">
                  Disponibile
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Attualmente accetto nuovi progetti. Rispondo solitamente entro
                24 ore.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
