import { SocialLinks } from "./SocialLinks";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(187,100%,50%,0.08)_0%,_transparent_70%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(222,30%,18%,0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(222,30%,18%,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-muted-foreground font-mono">
              Disponibile per nuovi progetti
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gradient">Giovanni Sugamiele</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Full Stack Web Developer
          </p>
          <p
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Trasformo idee in esperienze digitali. Specializzato in Laravel,
            Next.js e Node.js, creo applicazioni web moderne e performanti.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium font-mono ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-[hsl(220,100%,60%)] text-primary-foreground hover:shadow-[0_0_30px_hsl(187,100%,50%,0.4)] hover:scale-105 h-12 rounded-lg px-8 text-base"
            >
              Vedi i miei progetti
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium font-mono ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(187,100%,50%,0.2)] h-12 rounded-lg px-8 text-base"
            >
              Parliamone
            </a>
          </div>
          <SocialLinks
            className="animate-fade-in"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
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
              className="lucide lucide-arrow-down"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
