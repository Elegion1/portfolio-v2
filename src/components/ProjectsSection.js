import { ProjectCard } from './ProjectCard';
import { projects } from '../lib/utils';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{/* Portfolio */}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Progetti <span className="text-gradient">Recenti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selezione dei miei lavori più recenti. Ogni progetto è un&apos;opportunità per esplorare nuove tecnologie e risolvere problemi interessanti.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}