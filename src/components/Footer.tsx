import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const l = 'grid size-10 place-items-center rounded-xl border border-line transition-colors hover:border-mint/60'
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-extrabold">{profile.name}</p>
          <p className="text-sm text-mint">{profile.title}</p>
          <p className="mt-2 max-w-sm text-sm text-soft">{profile.tagline}</p>
        </div>
        <div className="flex gap-3">
          <a className={l} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a className={l} href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className={l} href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-soft">© 2026 Md. Rifat Hossain. All rights reserved.</p>
    </footer>
  )
}
