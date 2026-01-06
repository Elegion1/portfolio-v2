export function SkillTag({ skill, delay = 0 }) {
  return (
    <span
      className="px-4 py-2 rounded-full glass text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
      style={{ animationDelay: `${delay}s` }}
    >
      {skill}
    </span>
  );
}