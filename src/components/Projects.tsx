import { Code2, ExternalLink } from 'lucide-react'
import { projects, type Project } from '../content'
import { Reveal } from './Reveal'

function ProjectTags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null
  return (
    <ul className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-xs font-medium text-secondary bg-muted rounded-full px-2.5 py-1"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.demoUrl && !project.repoUrl) return null
  return (
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
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6 transition-transform duration-200 hover:-translate-y-1">
      <h3 className="font-heading font-semibold text-lg text-foreground">{project.title}</h3>
      <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
      <ProjectTags tags={project.tags} />
      <ProjectLinks project={project} />
    </article>
  )
}

function ProjectGroupCard({ project }: { project: Project }) {
  return (
    <article className="sm:col-span-2 lg:col-span-3 flex flex-col rounded-xl border border-border bg-card p-6">
      <h3 className="font-heading font-semibold text-lg text-foreground">{project.title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {project.subProjects?.map((sub) => (
          <div
            key={sub.title}
            className="flex flex-col rounded-lg border border-border bg-background p-4"
          >
            <h4 className="font-heading font-semibold text-sm text-foreground">{sub.title}</h4>
            <p className="text-sm text-muted-foreground mt-2 flex-1">{sub.description}</p>
            <ProjectTags tags={sub.tags} />
            <ProjectLinks project={sub} />
          </div>
        ))}
      </div>
      <ProjectLinks project={project} />
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-5xl mx-auto bg-card/50">
      <Reveal>
        <h2 className="font-heading font-bold text-3xl text-foreground mb-10">Projets</h2>
      </Reveal>
      <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) =>
          project.subProjects?.length ? (
            <ProjectGroupCard key={project.title} project={project} />
          ) : (
            <ProjectCard key={project.title} project={project} />
          ),
        )}
      </Reveal>
    </section>
  )
}
