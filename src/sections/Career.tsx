import { Award, GraduationCap } from 'lucide-react'
import { certifications, education, experience, journey } from '../data/timeline'
import { Badge, Reveal, Section } from '../components/ui'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-3 space-y-8 border-l border-line pl-8">
        {experience.map((e, i) => (
          <li key={e.role} className="relative">
            <span aria-hidden className={`absolute -left-[2.55rem] top-6 size-4 rounded-full border-2 border-ink ${i === 0 ? 'bg-mint shadow-[0_0_14px_var(--color-mint)]' : 'bg-sky'}`} />
            <Reveal>
              <div className="card p-6">
                <p className="text-sm font-medium text-mint">{e.period}</p>
                <h3 className="mt-1 text-xl font-bold">{e.role}</h3>
                <p className="text-soft">{e.org}</p>
                <ul className="mt-4 grid gap-1.5 text-sm text-slate-300 sm:grid-cols-2">
                  {e.points.map(p => <li key={p} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" />{p}</li>)}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 70}>
            <div className="card flex h-full flex-col p-6">
              <GraduationCap className="text-sky" size={24} aria-hidden />
              <h3 className="mt-4 font-bold leading-snug">{e.degree}</h3>
              <p className="mt-1 text-sm text-soft">{e.school}</p>
              <p className="mt-auto pt-6 text-xs text-soft">{e.gradeLabel}</p>
              <p className="text-2xl font-extrabold text-mint">{e.grade}</p>
              <p className="mt-1 text-sm text-slate-300">{e.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" title="Training & Certifications">
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <div className="card flex h-full flex-col p-5">
              {/* Certificate image slot: set `image` in src/data/timeline.ts */}
              <div className="mb-4 grid h-32 place-items-center overflow-hidden rounded-xl border border-dashed border-line bg-white/[0.02]">
                {c.image ? <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="h-full w-full object-cover" /> : <Award className="text-mint/60" size={32} aria-hidden />}
              </div>
              <h3 className="font-bold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-soft">{c.issuer} · {c.year}</p>
              <ul className="mt-4 flex flex-wrap gap-2">{c.topics.map(t => <li key={t}><Badge>{t}</Badge></li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Journey() {
  return (
    <Section id="journey" title="Developer Journey">
      <ol className="flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible lg:grid-cols-7">
        {journey.map((j, i) => (
          <li key={i} className="relative min-w-[180px] snap-start pt-6 md:min-w-0">
            <span aria-hidden className="absolute left-0 right-[-1rem] top-1.5 h-px bg-line md:right-0" />
            <span aria-hidden className="absolute left-0 top-0 size-3 rounded-full bg-mint shadow-[0_0_10px_var(--color-mint)]" />
            <p className="font-extrabold text-mint">{j.y}</p>
            <p className="mt-1 text-sm text-slate-300">{j.t}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
