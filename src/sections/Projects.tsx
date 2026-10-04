import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import { projects, type Project } from '../data/projects'
import { Badge, Btn, PhoneMock, Reveal, Section } from '../components/ui'

function Details({ p, onClose }: { p: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = ''; prev?.focus() }
  }, [onClose])
  const H = ({ children }: { children: string }) => <h3 className="mb-2 mt-6 text-sm font-bold text-mint">{children}</h3>
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="pd-h" onClick={e => e.stopPropagation()} className="card max-h-[88vh] w-full max-w-2xl overflow-y-auto bg-panel p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="pd-h" className="text-2xl font-extrabold">{p.name}</h2>
          <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="grid size-9 shrink-0 place-items-center rounded-lg border border-line"><X size={18} /></button>
        </div>
        <H>Overview</H><p className="text-slate-300">{p.description}</p>
        <H>Technologies</H><ul className="flex flex-wrap gap-2">{p.tech.map(t => <li key={t}><Badge>{t}</Badge></li>)}</ul>
        <H>Features</H><ul className="list-disc space-y-1 pl-5 text-slate-300 marker:text-mint">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
        {p.architecture && (<><H>Architecture</H><p className="text-slate-300">{p.architecture}</p></>)}
        <H>GitHub</H>
        <Btn href={p.github} external variant="ghost"><Github size={16} aria-hidden />View on GitHub</Btn>
      </div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null)
  return (
    <Section id="projects" title="Featured Projects">
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <article className="card grid items-center gap-8 overflow-hidden p-6 sm:p-8 md:grid-cols-[260px_1fr]">
              <div className={`relative rounded-2xl bg-gradient-to-br ${i % 2 ? 'from-sky/15' : 'from-mint/15'} to-transparent py-8 md:order-none ${i % 2 ? 'md:order-2' : ''}`}>
                <PhoneMock kind={p.kind} image={p.image} label={`${p.name} app preview mockup`} />
              </div>
              <div className={i % 2 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-2 text-soft">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <li key={t}><Badge>{t}</Badge></li>)}</ul>
                <ul className="mt-5 grid gap-x-6 gap-y-1.5 text-sm text-slate-300 sm:grid-cols-2">
                  {p.features.slice(0, 6).map(f => <li key={f} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" />{f}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn href={p.github} external variant="ghost"><Github size={16} aria-hidden />GitHub</Btn>
                  <button onClick={() => setOpen(p)} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-mint to-sky px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5"><ExternalLink size={16} aria-hidden />View Details</button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {open && <Details p={open} onClose={() => setOpen(null)} />}
    </Section>
  )
}
