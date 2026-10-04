import { about, capabilities, strengths } from '../data/profile'
import { skills } from '../data/skills'
import { Badge, Icon, Reveal, Section } from '../components/ui'

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-4 leading-relaxed text-slate-300">{about.map(p => <p key={p}>{p}</p>)}</Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card h-full p-5">
                <span className="grid size-10 place-items-center rounded-xl bg-mint/10 text-mint"><Icon name={c.icon} size={20} /></span>
                <h3 className="mt-4 font-bold">{c.t}</h3>
                <p className="mt-1.5 text-sm text-soft">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.t} delay={(i % 3) * 70}>
            <div className="card group h-full p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-sky/10 text-sky transition-colors group-hover:bg-mint/15 group-hover:text-mint"><Icon name={s.icon} size={18} /></span>
                <h3 className="font-bold">{s.t}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">{s.items.map(t => <li key={t}><Badge>{t}</Badge></li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Strengths() {
  return (
    <Section id="strengths" title="Professional Strengths">
      <div className="grid gap-4 md:grid-cols-3">
        {strengths.map((s, i) => (
          <Reveal key={s.t} delay={i * 70}><div className="card h-full p-6"><h3 className="font-bold text-mint">{s.t}</h3><p className="mt-2 text-sm text-soft">{s.d}</p></div></Reveal>
        ))}
      </div>
    </Section>
  )
}
