export function SkillCard({ category, skills, delay = 0 }) {
  return (
    <div className="glass rounded-2xl p-6 card-hover">
      <h3 className="font-mono text-xl font-bold text-primary mb-6">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            style={{ animationDelay: `${(delay + index) * 0.1}s` }}
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-foreground font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}