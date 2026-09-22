import { Code2, ExternalLink } from 'lucide-react'
import { projects } from '../content'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto bg-card/50">
      <Reveal>
        <h2 className="font-heading font-bold text-3xl text-foreground mb-10">Projets</h2>
      </Reveal>
      <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <h3 className="font-heading font-semibold text-lg text-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 flex-1">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {project.tags?.map((tag) => (
                <li
                  key={tag}
                  className="text-xs font-medium text-secondary bg-muted rounded-full px-2.5 py-1"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline cursor-pointer"
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  Démo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline cursor-pointer"
                >
                  <Code2 size={15} aria-hidden="true" />
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  )
}
