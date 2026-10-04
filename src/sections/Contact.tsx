import { useState, type FormEvent } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { sendMessage, validate, type ContactData, type Errors } from '../lib/contact'
import { Reveal, Section } from '../components/ui'

const empty: ContactData = { name: '', email: '', subject: '', message: '' }
const fields: { k: keyof ContactData; label: string; type?: string }[] = [
  { k: 'name', label: 'Name' }, { k: 'email', label: 'Email', type: 'email' }, { k: 'subject', label: 'Subject' }, { k: 'message', label: 'Message' },
]

export function GithubBand() {
  return (
    <section aria-labelledby="gh-h" className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <Reveal>
        <div className="card relative overflow-hidden p-8 text-center sm:p-12">
          <div aria-hidden className="absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />
          <h2 id="gh-h" className="relative text-3xl font-extrabold sm:text-4xl">Building. Learning. Creating.</h2>
          <p className="relative mx-auto mt-3 max-w-md text-soft">Explore my development work, experiments, and projects on GitHub.</p>
          <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-mint to-sky px-5 py-3 text-sm font-semibold text-ink"><Github size={16} aria-hidden />Visit GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-semibold hover:border-mint/60"><Linkedin size={16} aria-hidden />LinkedIn</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function Contact() {
  const [d, setD] = useState(empty)
  const [err, setErr] = useState<Errors>({})
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const [delivered, setDelivered] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    const v = validate(d); setErr(v)
    if (Object.keys(v).length) { document.getElementById(`f-${Object.keys(v)[0]}`)?.focus(); return }
    setState('sending')
    try { setDelivered((await sendMessage(d)).delivered) } finally { setState('done') }
  }
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`)}`
  const info = [
    { i: Mail, l: 'Email', v: profile.email, h: `mailto:${profile.email}` },
    { i: Phone, l: 'Phone', v: profile.phone, h: `tel:${profile.phone}` },
    { i: MapPin, l: 'Location', v: profile.location },
  ]
  const input = 'mt-1.5 w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-soft/60 focus:border-mint/70'

  return (
    <Section id="contact" title="Let's Build Something Great" intro="Have an opportunity, project, or idea you'd like to discuss? Feel free to get in touch.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-3">
          {info.map(x => (
            <div key={x.l} className="card flex items-center gap-4 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-mint/10 text-mint"><x.i size={18} aria-hidden /></span>
              <div className="min-w-0"><p className="text-xs text-soft">{x.l}</p>
                {x.h ? <a href={x.h} className="break-words font-medium hover:text-mint">{x.v}</a> : <p className="font-medium">{x.v}</p>}</div>
            </div>
          ))}
          <div className="flex gap-3 pt-1">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="card inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"><Github size={16} aria-hidden />GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="card inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"><Linkedin size={16} aria-hidden />LinkedIn</a>
          </div>
        </Reveal>
        <Reveal>
          <form onSubmit={submit} noValidate className="card space-y-4 p-6 sm:p-8">
            {fields.map(f => (
              <div key={f.k}>
                <label htmlFor={`f-${f.k}`} className="text-sm font-medium">{f.label}</label>
                {f.k === 'message'
                  ? <textarea id="f-message" rows={5} value={d.message} onChange={e => setD({ ...d, message: e.target.value })} aria-invalid={!!err.message} aria-describedby={err.message ? 'e-message' : undefined} className={input} />
                  : <input id={`f-${f.k}`} type={f.type ?? 'text'} value={d[f.k]} onChange={e => setD({ ...d, [f.k]: e.target.value })} aria-invalid={!!err[f.k]} aria-describedby={err[f.k] ? `e-${f.k}` : undefined} className={input} />}
                {err[f.k] && <p id={`e-${f.k}`} role="alert" className="mt-1 text-sm text-red-400">{err[f.k]}</p>}
              </div>
            ))}
            <button type="submit" disabled={state === 'sending'} className="w-full rounded-xl bg-gradient-to-r from-mint to-sky px-5 py-3 text-sm font-semibold text-ink transition-all hover:shadow-[0_0_30px_-6px_var(--color-mint)] disabled:opacity-60">
              {state === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <div aria-live="polite">
              {state === 'done' && (delivered
                ? <p className="text-sm text-mint">Message sent. I&apos;ll get back to you soon.</p>
                : <p className="text-sm text-soft">Your message is valid, but this form isn&apos;t connected to an email service yet. <a className="text-mint underline" href={mailto}>Send it from your email app</a> or write to {profile.email}.</p>)}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
