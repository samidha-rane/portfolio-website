import { useEffect, useRef, useState } from 'react'

const IMG = '/images/'
const WORDS = ['I build apps.', 'I make videos.', 'I keep learning new things.']

const SKILLS = [
  ['Programming', ['Java', 'JavaScript', 'Kotlin', 'C++']],
  ['Websites', ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'REST APIs']],
  ['Data', ['SQL', 'Firebase', 'Room', 'SQLite']],
  ['Tools', ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Postman']],
  ['Also', ['Botpress chatbots', 'OOP', 'DSA', 'Testing']],
]

const PROJECTS = [
  { cat: 'Android', title: 'IMPACT', tag: 'Group project', tint: 'sage',
    text: 'Our final-year app. It shows how much time you spend on your phone and gives simple tips for a healthier routine.',
    mine: 'I built the login with Firebase, the home dashboard, and the part that reads phone usage (screen time, unlocks and most used apps).',
    tech: ['Kotlin', 'Java', 'Firebase', 'Room DB'],
    shots: ['impact-home.png', 'impact-checkin.png', 'impact-profile.png', 'impact-settings.png'] },
  { cat: 'Web', title: 'SplitEasy', tint: 'peach',
    text: 'A website to split expenses with friends. Make a group, add what you spent, and it shows who owes whom.',
    tech: ['React', 'Node.js', 'Express', 'SQL'],
    links: [['Live site', 'https://expense-splitter-six-gray.vercel.app'], ['Code', 'https://github.com/samidha-rane/expense-splitter']] },
  { cat: 'Web', title: 'Product manager + online store', tint: 'sky',
    text: 'A tool to manage product details. When I add a product here, it shows up in a real WooCommerce store by itself.',
    tech: ['Node.js', 'Express', 'SQLite', 'REST API'],
    links: [['Code', 'https://github.com/samidha-rane/pim-woocommerce-integration'], ['Demo', 'https://drive.google.com/drive/folders/1ZkRs5-ar7wlWntBDBOqWXrnRKN4cciZV?usp=sharing']] },
  { cat: 'Web', title: 'Strava Connect', tint: 'sage',
    text: 'Log in with a Strava account, see your activities on a calendar, and edit them. It also has a demo mode with sample data.',
    tech: ['Node.js', 'Express', 'OAuth2'],
    links: [['Code', 'https://github.com/samidha-rane/strava-code-test/tree/main/strava-app'], ['Demo', 'https://drive.google.com/drive/folders/1ByZ_mHDhabtdoBqSAib7C79nVGwvRyvb?usp=sharing']] },
  { cat: 'Android', title: 'Defence App', tint: 'peach',
    text: "An Android app that uses Google's Gemini AI.",
    tech: ['Android', 'Gemini API'],
    links: [['Code', 'https://github.com/samidha-rane/Defence_app']] },
  { cat: 'Android', title: 'Restaurant Ordering App', tint: 'sky',
    text: 'A food ordering app for Android, from the first design to testing.',
    tech: ['Java', 'XML'] },
  { cat: 'Data', title: 'Data Cleaner', tint: 'sage',
    text: 'A Python tool that collects data from APIs and files, cleans it, and makes clear reports.',
    tech: ['Python', 'Pandas'] },
]

const FACTS = [
  'I finished my BSc in Computer Science in 2026.',
  'I was an NCC cadet for 3 years and hold the A, B and C certificates.',
  'I completed a 60+ hour AI course with Lenovo LEAP NextGen.',
  'I built and deployed my first full-stack app, SplitEasy, on my own.',
  'My favourite subject in college was Data Structures & Algorithms.',
  "I got an academic excellence award in my third year at St. Xavier's.",
  'I taught myself React to rebuild this exact portfolio.',
]

const CERTS = [
  ['cert-lenovo.png', 'Lenovo LEAP NextGen Scholar', 'AI course, 60+ hours'],
  ['cert-goodspace.png', 'GoodSpace AI Assessment', 'Distinguished in Reliability, Teamwork, Honesty'],
  ['award-xaviers.jpg', 'Academic Excellence Award', "St. Xavier's College, 2025–26"],
]

const EMAIL = 'samidharane05@gmail.com'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.15 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function Title({ children }) {
  return <Reveal><h2>{children}</h2></Reveal>
}

function Tilt({ children }) {
  const ref = useRef(null)
  const move = e => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`
  }
  return <div ref={ref} className="tilt" onMouseMove={move} onMouseLeave={() => (ref.current.style.transform = '')}>{children}</div>
}

function Count({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      let start = null
      const step = t => { start ??= t; const p = Math.min((t - start) / 1200, 1); setN(Math.round(to * p)); if (p < 1) requestAnimationFrame(step) }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{n}</span>
}

export default function App() {
  const [word, setWord] = useState(0)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prog, setProg] = useState(0)
  const [top, setTop] = useState(false)
  const [filter, setFilter] = useState('All')
  const [zoom, setZoom] = useState(null)
  const [fact, setFact] = useState(0)
  const [dark, setDark] = useState(true)
  const [clicks, setClicks] = useState(0)
  const [egg, setEgg] = useState(false)
  const [burst, setBurst] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setWord(w => (w + 1) % WORDS.length), 2600)
    const s = () => {
      const h = document.documentElement
      setScrolled(window.scrollY > 10)
      setTop(window.scrollY > 700)
      const max = h.scrollHeight - h.clientHeight
      setProg(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    const m = e => { const r = document.documentElement.style; r.setProperty('--mx', e.clientX + 'px'); r.setProperty('--my', e.clientY + 'px') }
    const k = e => e.key === 'Escape' && setZoom(null)
    window.addEventListener('scroll', s); window.addEventListener('mousemove', m); window.addEventListener('keydown', k)
    return () => { clearInterval(t); window.removeEventListener('scroll', s); window.removeEventListener('mousemove', m); window.removeEventListener('keydown', k) }
  }, [])

  useEffect(() => { document.documentElement.dataset.theme = dark ? '' : 'light' }, [dark])

  const go = () => setMenu(false)

  const hitLogo = () => {
    const n = clicks + 1
    setClicks(n)
    if (n === 5) { setEgg(true); setClicks(0); setTimeout(() => setEgg(false), 3200) }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // fallback for browsers/contexts where the clipboard API is unavailable
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <div className="progress" style={{ width: prog + '%' }} />
      <div className="glow" />
      {zoom && <div className="lightbox" onClick={() => setZoom(null)}><img src={zoom} alt="" /><button aria-label="Close">✕</button></div>}
      {egg && <div className="egg">✨ You found the secret! Thanks for looking closely. ✨</div>}
      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="wrap nav-in">
          <a className="logo" href="#top" onClick={hitLogo}>Samidha</a>
          <button className="theme-btn" onClick={() => setDark(d => !d)} aria-label="Toggle theme">{dark ? '☀️' : '🌙'}</button>
          <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? '✕' : '☰'}</button>
          <div className={menu ? 'links open' : 'links'}>
            {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map(l =>
              <a key={l} href={`#${l.toLowerCase()}`} onClick={go}>{l}</a>)}
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
        <div className="wrap hero-in">
          <div className="hero-text">
            <p className="hi">Hello, I'm</p>
            <h1>Samidha Rane</h1>
            <p className="words"><span key={word}>{WORDS[word]}</span></p>
            <p className="lede">I'm a computer science graduate from Goa. I like making things that people can really use, like mobile apps and websites.</p>
            <div className="now-pill"><span className="dot" /> Open to internships and Full-time Job right now</div>
            <div className="btns">
              <a className="btn main" href="#projects">See my work</a>
              <a className="btn" href="#contact">Say hello</a>
            </div>
          </div>
          <div className="photo-area">
            <div className="ring" />
            <div className="photo"><span>S</span><img src={IMG + 'photo.png'} alt="Samidha" onError={e => e.currentTarget.remove()} /></div>
            <span className="sticker s1">📱 Apps</span><span className="sticker s2">🎬 Videos</span><span className="sticker s3">🎖️ NCC</span>
          </div>
        </div>
      </header>

      <section id="about"><div className="wrap">
        <Title>About me</Title>
        <Reveal><p className="about-text">I finished my BSc in Computer Science in 2026. I enjoy taking a small idea and turning it into something that works and is live on the internet. I learn new tools quickly, and I like working with a team.</p></Reveal>
        <Reveal><div className="stats">
          <div><b><Count to={7} /></b><span>Projects</span></div>
          <div><b><Count to={3} /></b><span>Years in NCC</span></div>
          <div><b><Count to={3} /></b><span>Certificates & awards</span></div>
          <div><b><Count to={4} /></b><span>Languages I code in</span></div>
        </div></Reveal>
        <div className="cards3">
          {[['🎓', 'My studies', "BSc Computer Science at St. Xavier's College, Mapusa, Goa (2023–2026). I received an excellence award for my third-year results."],
            ['🎖️', 'NCC Cadet', 'I was in the NCC for 3 years and hold the A, B and C certificates.'],
            ['🎬', 'Video maker', 'I make short videos and reels. It is my creative break from coding.']].map(([e, t, d], i) =>
            <Reveal key={t} delay={i * 120}><div className="soft-card"><span className="emoji">{e}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}
        </div>
        <Reveal delay={200}><button className="fact-card" onClick={() => setFact(f => (f + 1) % FACTS.length)}>
          <span className="fact-label">A quick fact about me — click for another</span>
          <p key={fact}>{FACTS[fact]}</p>
        </button></Reveal>
      </div></section>

      <section id="skills" className="tint"><div className="wrap">
        <Title>My skills</Title>
        <div className="skill-grid">
          {SKILLS.map(([name, list], i) =>
            <Reveal key={name} delay={i * 90}>
              <div className="skill-box"><h4>{name}</h4>
                <div className="chips">{list.map(s => <span key={s} className="chip">{s}</span>)}</div></div>
            </Reveal>)}
        </div>
      </div></section>

      <section id="projects"><div className="wrap">
        <Title>My projects</Title>
        <Reveal><div className="tabs">{['All', 'Android', 'Web', 'Data'].map(f =>
          <button key={f} className={filter === f ? 'tab on' : 'tab'} onClick={() => setFilter(f)}>{f}</button>)}</div></Reveal>
        <div className="proj-grid">
          {PROJECTS.filter(p => filter === 'All' || p.cat === filter).map((p, i) =>
            <Reveal key={p.title} delay={(i % 2) * 120} className={p.shots ? 'wide' : ''}>
              <Tilt><article className={`proj ${p.tint}`}>
                <h3>{p.title} {p.tag && <em className="tag">{p.tag}</em>}</h3>
                <p>{p.text}</p>
                {p.mine && <p className="mine"><b>What I did:</b> {p.mine}</p>}
                <div className="chips small">{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>
                {p.shots && <div className="shots">{p.shots.map(s => <img key={s} className="zoomable" onClick={() => setZoom(IMG + s)} src={IMG + s} alt={p.title + ' screen'} loading="lazy" />)}</div>}
                {p.links && <div className="plinks">{p.links.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer">{n} →</a>)}</div>}
              </article></Tilt>
            </Reveal>)}
        </div>
      </div></section>

      <section className="tint"><div className="wrap two">
        <Reveal><div className="feature">
          <h3>My videos</h3>
          <p>Along with coding, I make short videos. Telling a story in one minute teaches you to keep things clear and simple.</p>
          <a className="btn main" href="https://drive.google.com/drive/folders/133qHYz9otyPSZ0XponxX4-K6UcGE0GgH?usp=sharing" target="_blank" rel="noreferrer">Watch my videos</a>
        </div></Reveal>
        <Reveal delay={140}><div className="feature">
          <h3>My internship</h3>
          <p>In my internship I learned to build chatbots with Botpress: how to plan a conversation, understand what users ask, and connect the bot to other tools.</p>
        </div></Reveal>
      </div></section>

      <section id="certificates"><div className="wrap">
        <Title>Certificates and awards</Title>
        <div className="cert-grid">
          {CERTS.map(([img, t, d], i) =>
            <Reveal key={t} delay={i * 120}><figure className="cert"><img className="zoomable" onClick={() => setZoom(IMG + img)} src={IMG + img} alt={t} loading="lazy" /><figcaption><b>{t}</b><span>{d}</span></figcaption></figure></Reveal>)}
        </div>
      </div></section>

      <section id="contact" className="tint"><div className="wrap">
        <Reveal><div className="contact">
          <h2>Get in touch</h2>
          <p>I am looking for an internship or a first job. Send me a message any time.</p>
          <div className="email-row">
            <a className="btn main" href={`mailto:${EMAIL}`} onClick={() => { setBurst(true); setTimeout(() => setBurst(false), 1200) }}>{EMAIL}</a>
            <button className="btn" onClick={copyEmail}>{copied ? 'Copied ✓' : 'Copy email'}</button>
          </div>
          {burst && <div className="confetti">{Array.from({ length: 16 }).map((_, i) => <span key={i} style={{ '--i': i }}>🎉</span>)}</div>}
          <p className="phone">+91 7350182844 · <a href="/resume.pdf" download>Download resume ↓</a></p>
          <div className="plinks center">
            <a href="https://github.com/samidha-rane" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/samidha-rane-0892ba345/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div></Reveal>
      </div></section>
      {top && <a className="totop" href="#top" aria-label="Back to top">↑</a>}
      <footer>© 2026 Samidha Rane</footer>
    </>
  )
}