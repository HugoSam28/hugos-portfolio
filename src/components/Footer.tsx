import { profile } from '../content'

export function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
