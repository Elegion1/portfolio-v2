"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectCard({ project, delay = 1 }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article
      className="group glass rounded-2xl overflow-hidden card-hover"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden aspect-video">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-4xl opacity-50">📁</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-mono">
          {project.date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-mono text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p
          onClick={() => setExpanded(!expanded)}
          className={`text-muted-foreground mb-4 cursor-pointer transition-all ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-mono ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-[hsl(220,100%,60%)] text-primary-foreground hover:shadow-[0_0_30px_hsl(187,100%,50%,0.4)] hover:scale-105 h-9 rounded-md px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
              Vedi Progetto
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
