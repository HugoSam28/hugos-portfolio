import { useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type RevealProps = {
  children: ReactNode
  className?: string
  /** Anime les enfants directs en cascade plutôt que le conteneur seul. */
  stagger?: boolean
  as?: keyof HTMLElementTagNameMap
}

export function Reveal({ children, className, stagger = false, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Tag = as as 'div'

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (prefersReducedMotion) return

      const targets = stagger ? Array.from(el.children) : el

      gsap.from(targets, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: stagger ? 0.08 : 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
