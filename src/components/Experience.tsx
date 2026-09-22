import { experience } from '../content'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-5xl mx-auto">
      <Reveal>
        <h2 className="font-heading font-bold text-3xl text-foreground mb-10">
          Expérience
        </h2>
      </Reveal>
      <Reveal stagger className="flex flex-col">
        {experience.map((item, index) => (
          <div key={item.role + item.company} className="grid grid-cols-[auto_1fr] gap-6">
            <div className="flex flex-col items-center pt-1.5">
              <span className="w-3 h-3 rounded-full bg-accent shrink-0" aria-hidden="true" />
              {index < experience.length - 1 && (
                <span className="w-px flex-1 bg-border" aria-hidden="true" />
              )}
            </div>
            <div className="pb-10">
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                {item.role} · {item.company}
              </h3>
              <ul className="mt-2 flex flex-col gap-1 list-disc list-inside text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
