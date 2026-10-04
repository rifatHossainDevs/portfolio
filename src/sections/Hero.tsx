import { Download, Github, Linkedin } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { Btn, PhoneMock } from '../components/ui'

const chips = [
  { t: 'Flutter', c: 'top-2 left-[6%]', d: '0s' }, { t: 'Kotlin', c: 'top-16 right-[4%]', d: '1s' },
  { t: 'Jetpack Compose', c: 'bottom-24 right-[2%]', d: '2s' }, { t: 'Firebase', c: 'bottom-4 left-[28%]', d: '3s' },
]

export default function Hero() {
  const d = (n: number) => ({ animationDelay: `${n}ms` })
  return (
    <section id="home" aria-labelledby="hero-h" className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="drift absolute -right-24 top-10 size-[420px] rounded-full bg-mint/10 blur-3xl" />
      <div aria-hidden className="drift absolute -left-24 bottom-0 size-[320px] rounded-full bg-sky/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-sm font-medium text-mint" style={d(0)}>
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60" /><span className="relative size-2 rounded-full bg-mint" /></span>
            Available for Opportunities
          </p>
          <h1 id="hero-h" className="hero-in mt-5 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl" style={d(100)}>
            Android &amp; Flutter <span className="grad-text">Developer</span>
          </h1>
          <p className="hero-in mt-4 text-xl font-semibold text-slate-200 sm:text-2xl" style={d(200)}>{profile.tagline}</p>
          <p className="hero-in mt-4 max-w-xl leading-relaxed text-soft" style={d(300)}>{profile.intro}</p>
          <div className="hero-in mt-8 flex flex-wrap gap-3" style={d(400)}>
            <Btn href="#projects">View My Projects</Btn>
            <Btn href={profile.cv} download variant="ghost"><Download size={16} aria-hidden />Download CV</Btn>
          </div>
          <div className="hero-in mt-8 flex items-center gap-3" style={d(500)}>
            <span className="text-sm text-soft">Let&apos;s Connect</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid size-10 place-items-center rounded-xl border border-line transition-colors hover:border-mint/60"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid size-10 place-items-center rounded-xl border border-line transition-colors hover:border-mint/60"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="hero-in relative mx-auto h-[400px] w-full max-w-[420px] sm:h-[460px]" style={d(300)} aria-hidden>
          <div className="float absolute left-1/2 top-4 -translate-x-1/2 scale-110 sm:scale-125"><PhoneMock kind="dealer" label="" /></div>
          <div className="float absolute -left-0 top-28 hidden -rotate-6 scale-90 opacity-80 sm:block" style={{ animationDelay: '1.5s' }}><PhoneMock kind="map" label="" /></div>
          <div className="card absolute bottom-6 left-0 z-10 w-[220px] bg-ink/80 p-3 font-mono text-[11px] leading-relaxed backdrop-blur sm:-left-4 sm:w-[250px]">
            <div className="mb-2 flex gap-1.5"><i className="size-2 rounded-full bg-red-400/70" /><i className="size-2 rounded-full bg-yellow-400/70" /><i className="size-2 rounded-full bg-mint/70" /></div>
            <p><span className="text-sky">class</span> <span className="text-mint">HomeViewModel</span> :</p>
            <p className="pl-3"><span className="text-sky">ViewModel</span>() &#123;</p>
            <p className="pl-6 text-soft">// MVVM · Retrofit · Firebase</p>
            <p className="pl-3">&#125;</p>
          </div>
          {chips.map(c => <span key={c.t} className={`float absolute ${c.c} rounded-full border border-line bg-panel/90 px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur`} style={{ animationDelay: c.d }}>{c.t}</span>)}
        </div>
      </div>

      <dl className="relative mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-y border-line bg-line md:grid-cols-4 md:rounded-2xl md:border">
        {stats.map(s => (
          <div key={s.l} className="flex flex-col bg-ink px-5 py-6 sm:px-8">
            <dt className="order-2 mt-1 text-sm text-soft">{s.l}</dt>
            <dd className="text-2xl font-extrabold text-white sm:text-3xl">{s.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
