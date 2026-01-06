import { SkillCard } from './SkillCard';
import { SkillTag } from './SkillTag';
import { skills, skillTags } from '../lib/utils';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{/* Le mie competenze */}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Le tecnologie che utilizzo quotidianamente per creare applicazioni moderne e scalabili.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.level}
              category={skillGroup.level === 'expert' ? 'Competenze Avanzate' : 'In Sviluppo'}
              skills={skillGroup.items}
              delay={index}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skillTags.map((skill, index) => (
            <SkillTag key={skill} skill={skill} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}