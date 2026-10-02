import { useState, type FormEvent } from 'react'
import { Link2, Mail } from 'lucide-react'
import { profile } from '../content'
import { Reveal } from './Reveal'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

function validate(data: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = 'Merci d’indiquer votre nom.'
  if (!data.email.trim()) {
    errors.email = 'Merci d’indiquer votre email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Cet email ne semble pas valide.'
  }
  if (!data.message.trim()) errors.message = 'Merci d’écrire un message.'
  return errors
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const validationErrors = validate(data)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL ?? ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-6 py-20 max-w-3xl mx-auto">
      <Reveal>
        <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Contact</h2>
        <p className="text-muted-foreground mb-10">
          Une opportunité, une question ? N'hésitez pas à m'écrire.
        </p>
      </Reveal>

      <Reveal>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-accent transition-colors duration-200"
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-accent transition-colors duration-200"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-accent transition-colors duration-200 resize-none"
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="self-start inline-flex items-center gap-2 rounded-lg bg-accent text-on-accent font-semibold px-6 py-3 transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === 'submitting' ? 'Envoi…' : 'Envoyer'}
          </button>

          <p role="status" className="text-sm min-h-5">
            {status === 'success' && (
              <span className="text-emerald-600">Message envoyé, merci !</span>
            )}
            {status === 'error' && (
              <span className="text-destructive">
                Une erreur est survenue, réessayez ou écrivez-moi directement par email.
              </span>
            )}
          </p>
        </form>
      </Reveal>

      <div className="flex items-center gap-6 mt-10 pt-10 border-t border-border">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          <Mail size={16} aria-hidden="true" />
          {profile.email}
        </a>
        {profile.socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            <Link2 size={16} aria-hidden="true" />
            {social.label}
          </a>
        ))}
      </div>
    </section>
  )
}
