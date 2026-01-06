import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-mono text-xl font-bold text-gradient">
            &lt;dev/&gt;
          </a>
          <SocialLinks className="gap-4" size={20} />
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © 2025 • Giovanni Sugamiele
          </p>
        </div>
      </div>
    </footer>
  );
}