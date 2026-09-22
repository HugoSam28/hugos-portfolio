import { skills } from '../content'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-5xl mx-auto bg-card/50">
      <Reveal>
        <h2 className="font-heading font-bold text-3xl text-foreground mb-10">
          Compétences
        </h2>
      </Reveal>
      <Reveal stagger className="grid sm:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-heading font-semibold text-foreground mb-3">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-secondary bg-muted rounded-full px-3 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
