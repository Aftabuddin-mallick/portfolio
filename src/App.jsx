import { useEffect, useState } from 'react'
import { profile, skills, projects, education, achievements } from './data'

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact']

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight">{title}<span className="text-brand">.</span></h2>
        {children}
      </div>
    </section>
  )
}

function Nav({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-extrabold">AM<span className="text-brand">.</span></a>
        <div className="flex items-center gap-2">
          <nav onClick={() => setOpen(false)} className={`${open ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-3 border-b bg-white p-4 dark:border-slate-800 dark:bg-slate-950 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0 md:dark:bg-transparent`}>
            {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium hover:text-brand">{l}</a>)}
          </nav>
          <button className="btn-ghost !px-3 !py-1.5" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">{dark ? '☀️' : '🌙'}</button>
          <button className="btn-ghost !px-3 !py-1.5 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        </div>
      </div>
    </header>
  )
}

function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const s = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (v.name.trim().length < 2) er.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) er.email = 'Please enter a valid email address.'
    if (v.message.trim().length < 10) er.message = 'Message should be at least 10 characters.'
    setErrors(er); setSent(false)
    if (Object.keys(er).length) return
    const body = encodeURIComponent(`${v.message}\n\nFrom: ${v.name} (${v.email})`)
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + v.name)}&body=${body}`
    setSent(true)
  }
  const err = (k) => errors[k] && <span className="mt-1 block text-sm text-red-500">{errors[k]}</span>
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-3">
        <p className="text-slate-600 dark:text-slate-300">Open to Frontend Developer opportunities. Send a message, or reach me directly:</p>
        <p><a className="font-semibold hover:text-brand" href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p><a className="font-semibold hover:text-brand" href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a></p>
        <div className="flex gap-3 pt-2">
          <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <form onSubmit={submit} noValidate className="space-y-3">
        <label className="block"><span className="mb-1 block text-sm font-medium">Name</span><input className="input" value={v.name} onChange={s('name')} />{err('name')}</label>
        <label className="block"><span className="mb-1 block text-sm font-medium">Email</span><input type="email" className="input" value={v.email} onChange={s('email')} />{err('email')}</label>
        <label className="block"><span className="mb-1 block text-sm font-medium">Message</span><textarea rows="4" className="input" value={v.message} onChange={s('message')} />{err('message')}</label>
        <button className="btn w-full">Send message</button>
        {sent && <p role="status" className="text-sm text-brand">Opening your email app to send the message…</p>}
      </form>
    </div>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])
  const card = 'rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900'
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Nav dark={dark} setDark={setDark} />
      <main>
        <section className="px-4 pb-10 pt-16 md:pt-24">
          <div className="mx-auto max-w-5xl">
            <p className="font-semibold text-brand">Hello, I’m</p>
            <h1 className="mt-1 text-4xl font-extrabold tracking-tight md:text-6xl">{profile.name}</h1>
            <p className="mt-2 text-xl text-slate-600 dark:text-slate-300 md:text-2xl">{profile.title}</p>
            <p className="mt-5 max-w-2xl text-slate-600 dark:text-slate-400">I build fast, responsive React interfaces with authentication, clean state management and real API integration.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn" href={profile.resume} download>Download resume</a>
              <a className="btn-ghost" href="#projects">View projects</a>
              <a className="btn-ghost" href="#contact">Contact me</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {profile.stats.map(([n, l]) => <div key={l} className={card + ' !p-4'}><p className="text-2xl font-extrabold text-brand">{n}</p><p className="text-xs text-slate-500">{l}</p></div>)}
            </div>
          </div>
        </section>

        <Section id="about" title="About"><p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{profile.summary}</p></Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className={card}>
                <h3 className="mb-3 font-bold">{group}</h3>
                <div className="flex flex-wrap gap-2">{items.map((i) => <span key={i} className="rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">{i}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className={card + ' flex flex-col'}>
                <h3 className="text-2xl font-extrabold">{p.name}</h3>
                <p className="text-sm text-slate-500">{p.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium dark:bg-slate-800">{t}</span>)}</div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                <div className="mt-auto flex gap-3 pt-5">
                  {p.live && <a className="btn !py-2" href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
                  <a className="btn-ghost !py-2" href={p.code} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((e) => (
              <div key={e.school} className={card}>
                <p className="text-sm font-semibold text-brand">{e.years}</p>
                <h3 className="mt-1 font-bold">{e.school}</h3>
                <p className="text-slate-600 dark:text-slate-300">{e.degree}</p>
                <p className="mt-2 text-sm text-slate-500">{e.note}</p>
              </div>
            ))}
          </div>
          <h3 className="mb-3 mt-10 text-xl font-bold">Achievements</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
        </Section>

        <Section id="contact" title="Contact"><Contact /></Section>
      </main>
      <footer className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500 dark:border-slate-800">© {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</footer>
    </div>
  )
}
