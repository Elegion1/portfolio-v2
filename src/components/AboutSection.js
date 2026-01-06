import { StatCard } from "./StatCard";
import { stats } from "../lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-mono text-sm mb-4 block">
              {/* Chi sono */}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sviluppatore con <span className="text-gradient">passione</span>{" "}
              per il codice
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Sono uno sviluppatore full stack con sede in Italia. La mia
              passione è creare esperienze web che non solo funzionano
              perfettamente, ma che lasciano il segno.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ogni progetto è un&apos;opportunità per imparare qualcosa di nuovo
              e superare i limiti di ciò che è possibile nel web. Credo nel
              codice pulito, nel design intuitivo e nelle performance
              eccellenti.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="glass rounded-2xl p-6 h-full card-hover">
                <div className="flex gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <pre className="font-mono text-sm text-muted-foreground overflow-hidden">
                  <code>{`const developer = {
  name: "Giovanni",
  location: "Italia 🇮🇹",
  skills: [
    "React",
    "Laravel",
    "Next.js",
    "Node.js"
  ],
  passion: "Building",
  coffee: "☕ Essential"
};

export default developer;`}</code>
                </pre>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
