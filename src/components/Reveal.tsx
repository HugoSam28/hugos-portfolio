import { useEffect, useRef, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Anime les enfants directs en cascade plutôt que le conteneur seul. */
  stagger?: boolean
  as?: keyof HTMLElementTagNameMap
}

// Un seul observer partagé par toutes les révélations.
let observer: IntersectionObserver | null = null
const observed = new Set<Element>()

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          // Visible, ou déjà dépassé (saut d'ancre) : on révèle.
          entry.target.classList.add('is-visible')
        } else {
          // Repasse sous la zone visible (scroll vers le haut) : rejoue à la prochaine entrée.
          entry.target.classList.remove('is-visible')
        }
      }
      // Un saut de scroll peut dépasser des blocs sans jamais les croiser : on les révèle.
      observed.forEach((el) => {
        if (el.getBoundingClientRect().top < 0) el.classList.add('is-visible')
      })
    },
    { rootMargin: '0px 0px -15% 0px' },
  )
  return observer
}

export function Reveal({ children, className, stagger = false, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Tag = as as 'div'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (stagger) {
      Array.from(el.children).forEach((child, i) =>
        (child as HTMLElement).style.setProperty('--i', String(i)),
      )
    }
    const io = getObserver()
    io.observe(el)
    observed.add(el)
    return () => {
      io.unobserve(el)
      observed.delete(el)
    }
  }, [stagger])

  return (
    <Tag
      ref={ref}
      className={`${stagger ? 'reveal-stagger' : 'reveal'}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  )
}
