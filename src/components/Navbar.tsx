import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { nav, profile } from '../data/profile'
import { useScrolled } from '../hooks/useScrolled'
import { Btn } from './ui'

const id = (n: string) => (n === 'Home' ? 'home' : n.toLowerCase())

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-line bg-ink/85 py-2 shadow-lg shadow-black/30 backdrop-blur-xl' : 'bg-transparent py-4'}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-lg font-extrabold tracking-tight">{profile.short}<span className="text-mint">.</span></a>
        <ul className="hidden items-center gap-1 xl:flex">
          {nav.map(n => <li key={n}><a href={`#${id(n)}`} className="rounded-lg px-3 py-2 text-sm font-medium text-soft transition-colors hover:text-white">{n}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <Btn href={profile.cv} download className="hidden !py-2 sm:inline-flex"><Download size={16} aria-hidden />Download CV</Btn>
          <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)} className="grid size-10 place-items-center rounded-xl border border-line xl:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={`grid overflow-hidden transition-all duration-300 xl:hidden ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} {...(!open && { inert: true })}>
        <ul className="min-h-0 space-y-1 overflow-hidden px-5 pt-3 sm:px-8">
          {nav.map(n => <li key={n}><a href={`#${id(n)}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 font-medium text-slate-200 hover:bg-white/5">{n}</a></li>)}
          <li className="pb-4 pt-2"><Btn href={profile.cv} download className="w-full"><Download size={16} aria-hidden />Download CV</Btn></li>
        </ul>
      </div>
    </header>
  )
}
