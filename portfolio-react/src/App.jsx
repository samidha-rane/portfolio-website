import { useEffect, useRef, useState } from 'react'

const IMG = '/images/'
const WORDS = ['I build apps.', 'I make videos.', 'I keep learning new things.']
const EMAIL = 'samidharane05@gmail.com'

const ICONS = {
  sun: <><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>,
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  phone: <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></>,
  film: <><rect x="2" y="2" width="20" height="20" rx="2.18" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" /></>,
  award: <><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  book: <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />,
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>,
  tool: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  layers: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  x: <path d="M18 6L6 18M6 6l12 12" />,
  menu: <path d="M3 12h18M3 6h18M3 18h18" />,
  up: <path d="M12 19V5M5 12l7-7 7 7" />,
  ext: <path d="M7 17L17 7M7 7h10v10" />,
  download: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />,
  copy: <><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
  check: <path d="M20 6L9 17l-5-5" />,
}

function Icon({ n, size = 20 }) {
  return (
    <svg className="ic" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[n]}
    </svg>
  )
}

const SKILLS = [
  ['Programming', 'code', [
    ['Java', 'Build Android apps and write clean object-oriented code using classes, inheritance and data structures.', 'IMPACT, Restaurant Ordering App'],
    ['Kotlin', 'Build Android screens and features, like the dashboard and the phone-usage tracking.', 'IMPACT'],
    ['JavaScript', 'Make websites interactive and write server-side logic that connects a page to its data.', 'SplitEasy, Strava Connect'],
    ['C++', 'Solve problems with data structures and algorithms.'],
    ['Python', 'Collect data from APIs and CSV files, clean it with Pandas and produce clear reports.', 'Data Cleaner'],
  ]],
  ['Web development', 'globe', [
    ['React', 'Build the front end of a full web app: components, state, forms and pages.', 'SplitEasy, this portfolio'],
    ['Node.js and Express', 'Build REST APIs with secure login (JWT and bcrypt) and connect them to a database.', 'SplitEasy, Product manager'],
    ['HTML and CSS', 'Turn a design into a responsive page that works on phones and laptops.'],
    ['REST APIs', 'Design endpoints and connect separate systems, like sending products to a WooCommerce store or logging in with Strava.', 'Product manager, Strava Connect'],
  ]],
  ['Databases', 'database', [
    ['SQL', 'Design tables and relations, and write queries, for example to calculate who owes whom in a group.', 'SplitEasy'],
    ['Firebase', 'Add user login and store app data in Firestore.', 'IMPACT'],
    ['Room Database', 'Save data on the phone so an Android app keeps working offline.', 'IMPACT'],
  ]],
  ['Tools and practice', 'tool', [
    ['Git and GitHub', 'Track changes, manage code in repositories and deploy to Vercel straight from GitHub.'],
    ['Postman', 'Test REST APIs and check every request and response before connecting the front end.'],
    ['Android Studio', 'Build, run and debug Android apps.'],
    ['Testing and debugging', 'Write unit and integration test cases and find the cause of bugs.', 'IMPACT'],
    ['Botpress', 'Build chatbots: plan the conversation, understand user questions and connect the bot to other tools.', 'Internship'],
    ['Agile and SDLC', 'Work through requirements, design, coding, testing and deployment as part of a team.'],
  ]],
]

const EDUCATION = [
  { when: '2023 – 2026', title: 'BSc in Computer Science', where: "St. Xavier's College, Mapusa, Goa",
    text: 'Favourite subject: Data Structures and Algorithms. Received an academic excellence award for my third-year results.' },
  { when: 'Class 12', title: 'HSC (12th Standard)', where: 'B. M. Gogte College, Shiroda, Maharashtra', score: '61.33%' },
  { when: 'Class 10', title: 'SSC (10th Standard)', where: 'Shri Mauli Vidyamandir, Redi, Maharashtra', score: '86%' },
]

const PROJECTS = [
  { cat: 'Android', title: 'IMPACT', tag: 'Group project', tint: 'sage',
    text: 'Our final-year app. It shows how much time you spend on your phone and gives simple tips for a healthier routine.',
    mine: 'I built the login with Firebase, the home dashboard, and the part that reads phone usage (screen time, unlocks and most used apps).',
    tech: ['Kotlin', 'Java', 'Firebase', 'Room DB'],
    shots: ['impact-home.png', 'impact-checkin.png', 'impact-profile.png', 'impact-settings.png'] },
  { cat: 'Web', title: 'SplitEasy', tint: 'peach',
    text: 'A website to split expenses with friends. Make a group, add what you spent, and it shows who owes whom.',
    tech: ['React', 'Node.js', 'Express', 'JWT', 'SQL'],
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

const ABOUT = [
  ['book', 'My studies', "BSc Computer Science at St. Xavier's College, Mapusa, Goa (2023–2026). I received an excellence award for my third-year results."],
  ['shield', 'NCC Cadet', 'I was in the NCC for 3 years and hold the A, B and C certificates.'],
  ['film', 'Video maker', 'I make short videos and reels. It is my creative break from coding.'],
]

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
      {zoom && <div className="lightbox" onClick={() => setZoom(null)}><img src={zoom} alt="" /><button aria-label="Close"><Icon n="x" size={20} /></button></div>}
      {egg && <div className="egg">You found the secret! Thanks for looking closely.</div>}
      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="wrap nav-in">
          <a className="logo" href="#top" onClick={hitLogo}>Samidha</a>
          <button className="theme-btn" onClick={() => setDark(d => !d)} aria-label="Toggle theme"><Icon n={dark ? 'sun' : 'moon'} size={18} /></button>
          <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu"><Icon n={menu ? 'x' : 'menu'} size={24} /></button>
          <div className={menu ? 'links open' : 'links'}>
            {['About', 'Education', 'Skills', 'Projects', 'Certificates', 'Contact'].map(l =>
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
            <span className="sticker s1"><Icon n="phone" size={16} /> Apps</span>
            <span className="sticker s2"><Icon n="film" size={16} /> Videos</span>
            <span className="sticker s3"><Icon n="award" size={16} /> NCC</span>
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
          {ABOUT.map(([ic, t, d], i) =>
            <Reveal key={t} delay={i * 120}><div className="soft-card"><span className="ico"><Icon n={ic} size={22} /></span><h3>{t}</h3><p>{d}</p></div></Reveal>)}
        </div>
        <Reveal delay={200}><button className="fact-card" onClick={() => setFact(f => (f + 1) % FACTS.length)}>
          <span className="fact-label">A quick fact about me — click for another</span>
          <p key={fact}>{FACTS[fact]}</p>
        </button></Reveal>
      </div></section>

      <section id="education" className="tint"><div className="wrap">
        <Title>Education</Title>
        <div className="timeline">
          {EDUCATION.map((e, i) =>
            <Reveal key={e.title} delay={i * 100}>
              <div className="tl-item">
                <p className="tl-when">{e.when}</p>
                <h3>{e.title}</h3>
                <p className="tl-where">{e.where}</p>
                {e.score && <span className="tl-score">{e.score}</span>}
                {e.text && <p>{e.text}</p>}
              </div>
            </Reveal>)}
        </div>
      </div></section>

      <section id="skills"><div className="wrap">
        <Title>My skills</Title>
        {SKILLS.map(([cat, ic, items]) =>
          <Reveal key={cat}>
            <div className="skill-group">
              <h3 className="sg-title"><span className="ico"><Icon n={ic} size={20} /></span>{cat}</h3>
              <div className="skill-cards">
                {items.map(([t, d, u]) =>
                  <div key={t} className="skill-card">
                    <h4>{t}</h4>
                    <p>{d}</p>
                    {u && <span className="used">Used in: {u}</span>}
                  </div>)}
              </div>
            </div>
          </Reveal>)}
      </div></section>

      <section id="projects" className="tint"><div className="wrap">
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
                {p.links && <div className="plinks">{p.links.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer">{n} <Icon n="ext" size={14} /></a>)}</div>}
              </article></Tilt>
            </Reveal>)}
        </div>
      </div></section>

      <section><div className="wrap two">
        <Reveal><div className="feature">
          <h3>My videos</h3>
          <p>Along with coding, I make short videos. Telling a story in one minute teaches you to keep things clear and simple.</p>
          <a className="btn main" href="https://drive.google.com/drive/folders/133qHYz9otyPSZ0XponxX4-K6UcGE0GgH?usp=sharing" target="_blank" rel="noreferrer">Watch my videos <Icon n="ext" size={16} /></a>
        </div></Reveal>
        <Reveal delay={140}><div className="feature">
          <h3>My internship</h3>
          <p>In my internship I learned to build chatbots with Botpress: how to plan a conversation, understand what users ask, and connect the bot to other tools.</p>
        </div></Reveal>
      </div></section>

      <section id="certificates" className="tint"><div className="wrap">
        <Title>Certificates and awards</Title>
        <div className="cert-grid">
          {CERTS.map(([img, t, d], i) =>
            <Reveal key={t} delay={i * 120}><figure className="cert"><img className="zoomable" onClick={() => setZoom(IMG + img)} src={IMG + img} alt={t} loading="lazy" /><figcaption><b>{t}</b><span>{d}</span></figcaption></figure></Reveal>)}
        </div>
      </div></section>

      <section id="contact"><div className="wrap">
        <Reveal><div className="contact">
          <h2>Get in touch</h2>
          <p>I am looking for an internship or a first job. Send me a message any time.</p>
          <div className="email-row">
            <a className="btn main" href={`mailto:${EMAIL}`} onClick={() => { setBurst(true); setTimeout(() => setBurst(false), 1200) }}>{EMAIL}</a>
            <button className="btn" onClick={copyEmail}><Icon n={copied ? 'check' : 'copy'} size={16} />{copied ? 'Copied' : 'Copy email'}</button>
          </div>
          {burst && <div className="confetti">{Array.from({ length: 16 }).map((_, i) => <span key={i} style={{ '--i': i }} />)}</div>}
          <p className="phone">+91 7350182844 · <a className="dl" href="/resume.pdf" download>Download resume <Icon n="download" size={15} /></a></p>
          <div className="plinks center">
            <a href="https://github.com/samidha-rane" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/samidha-rane-0892ba345/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div></Reveal>
      </div></section>
      {top && <a className="totop" href="#top" aria-label="Back to top"><Icon n="up" size={22} /></a>}
      <footer>© 2026 Samidha Rane</footer>
    </>
  )
}