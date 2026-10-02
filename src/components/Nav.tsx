import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../content'

export function Nav() {
  const [activeHref, setActiveHref] = useState<string>('#about')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'bg-background/95 border-border'
          : 'border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="font-heading font-semibold text-lg text-foreground cursor-pointer"
        >
          {profile.name}
        </a>

        <ul className="hidden sm:flex items-center gap-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-accent ${
                  activeHref === item.href ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="sm:hidden text-foreground cursor-pointer p-2 -mr-2"
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <ul id="mobile-nav" className="sm:hidden flex flex-col px-6 pb-6 gap-4">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium transition-colors duration-200 cursor-pointer hover:text-accent ${
                  activeHref === item.href ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
