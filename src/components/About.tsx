import { MapPin } from 'lucide-react'
import { about, profile } from '../content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-5xl mx-auto">
      <Reveal className="grid sm:grid-cols-[auto_1fr] gap-10 items-start">
        <img src="ProfilePic.jpeg" className="w-32 h-32 rounded-2xl bg-muted shrink-0" aria-hidden="true" />
        <div className="flex flex-col gap-4">
          <h2 className="font-heading font-bold text-3xl text-foreground">À propos</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
