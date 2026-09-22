import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../content'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-start justify-center px-6 max-w-5xl mx-auto"
    >
      <Reveal stagger className="flex flex-col gap-6">
        <p className="text-accent font-medium tracking-wide uppercase text-sm">
          {profile.availability}
        </p>
        <h1 className="font-heading font-bold text-4xl sm:text-6xl leading-tight text-foreground">
          {profile.name}
          <br />
          <span className="text-secondary">{profile.role}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">{profile.tagline}</p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent text-on-accent font-semibold px-6 py-3 transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Me contacter
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary text-primary font-semibold px-6 py-3 transition-colors duration-200 hover:bg-primary hover:text-on-primary cursor-pointer"
          >
            <Download size={18} aria-hidden="true" />
            Télécharger le CV
          </a>
        </div>
      </Reveal>

      <a
        href="#about"
        aria-label="Aller à la section À propos"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
      >
        <ArrowDown size={22} aria-hidden="true" />
      </a>
    </section>
  )
}
