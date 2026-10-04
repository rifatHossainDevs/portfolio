import { useEffect, useRef, type ReactNode, type ElementType } from 'react'
import { Circle, Code2, Database, Layers, Network, Puzzle, Smartphone, Sparkles, Wrench, type LucideProps } from 'lucide-react'

const icons: Record<string, ElementType> = { Code2, Database, Layers, Network, Puzzle, Smartphone, Sparkles, Wrench }

export function Icon({ name, ...p }: { name: string } & LucideProps) {
  const C = icons[name] ?? Circle
  return <C aria-hidden="true" {...p} />
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</div>
}

export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <Reveal className="mb-10 max-w-2xl">
        <h2 id={`${id}-h`} className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 text-soft">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}

export const Badge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300">{children}</span>
)

type BtnProps = { href: string; children: ReactNode; variant?: 'primary' | 'ghost'; download?: boolean; external?: boolean; className?: string }
export function Btn({ href, children, variant = 'primary', download, external, className = '' }: BtnProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 '
  const v = variant === 'primary'
    ? 'bg-gradient-to-r from-mint to-sky text-ink hover:shadow-[0_0_30px_-6px_var(--color-mint)] hover:-translate-y-0.5'
    : 'border border-line bg-white/[0.03] text-slate-100 hover:border-mint/60 hover:bg-white/[0.06]'
  return <a href={href} download={download} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={base + v + ' ' + className}>{children}</a>
}

/** CSS-only phone mockups; swap for real screenshots via project.image */
export function PhoneMock({ kind, image, label }: { kind: 'dealer' | 'tools' | 'map' | 'code'; image?: string; label: string }) {
  const bar = (w: string, c = 'bg-white/10') => <div className={`h-2 rounded-full ${c}`} style={{ width: w }} />
  return (
    <div role="img" aria-label={label} className="relative mx-auto aspect-[9/18] w-[150px] rounded-[1.6rem] border border-white/15 bg-[#0b1115] p-1.5 shadow-2xl shadow-black/60">
      <div className="absolute left-1/2 top-2.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black" />
      <div className="h-full overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-[#101a20] to-[#0a1014]">
        {image ? <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" /> : (
          <div className="flex h-full flex-col gap-2 p-3 pt-6">
            {kind === 'dealer' && (<>
              <div className="flex items-center justify-between">{bar('40%', 'bg-mint/60')}<div className="size-4 rounded-full bg-sky/40" /></div>
              <div className="grid grid-cols-2 gap-1.5">{[0, 1, 2, 3].map(i => <div key={i} className="h-11 rounded-lg border border-line bg-white/[0.04] p-1.5">{bar('50%', i % 2 ? 'bg-sky/50' : 'bg-mint/50')}<div className="mt-2">{bar('75%')}</div></div>)}</div>
              {[0, 1, 2, 3].map(i => <div key={i} className="flex items-center gap-1.5 rounded-lg bg-white/[0.04] p-1.5"><div className="size-5 rounded-md bg-mint/20" /><div className="flex-1 space-y-1">{bar('70%')}{bar('45%')}</div></div>)}
            </>)}
            {kind === 'tools' && (<>
              {bar('45%', 'bg-mint/60')}
              <div className="grid grid-cols-3 gap-1.5">{['bg-mint/30', 'bg-sky/30', 'bg-white/10', 'bg-sky/30', 'bg-mint/30', 'bg-white/10', 'bg-white/10', 'bg-mint/30', 'bg-sky/30'].map((c, i) => <div key={i} className={`aspect-square rounded-xl ${c}`} />)}</div>
              <div className="mt-1 space-y-1.5 rounded-lg bg-white/[0.04] p-2">{bar('80%')}{bar('55%')}</div>
            </>)}
            {kind === 'map' && (<>
              <div className="relative flex-1 overflow-hidden rounded-xl bg-[#12202a]">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#1f2a31 1px,transparent 1px),linear-gradient(90deg,#1f2a31 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                <svg viewBox="0 0 100 140" className="absolute inset-0 h-full w-full" fill="none"><path d="M18 120 C30 90 70 100 60 70 S40 40 78 20" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 6" /><circle cx="18" cy="120" r="5" fill="#22d3ee" /><circle cx="78" cy="20" r="5" fill="#34d399" /></svg>
              </div>
              <div className="space-y-1.5 rounded-lg bg-white/[0.06] p-2">{bar('60%', 'bg-mint/50')}{bar('40%')}</div>
            </>)}
            {kind === 'code' && (<div className="space-y-2 pt-2">{bar('55%', 'bg-mint/50')}{bar('80%')}{bar('65%', 'bg-sky/40')}{bar('72%')}<div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-mint/20 to-sky/20" />{bar('50%')}{bar('85%')}</div>)}
          </div>
        )}
      </div>
    </div>
  )
}
