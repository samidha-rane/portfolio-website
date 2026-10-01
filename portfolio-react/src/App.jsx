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
  search: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  trash: <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />,
  left: <path d="M15 18l-6-6 6-6" />,
  right: <path d="M9 18l6-6-6-6" />,
  expand: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />,
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

const NAV = [['About', 'about'], ['Education', 'education'], ['Skills', 'skills'], ['Projects', 'projects'], ['Try it', 'playground'], ['Certificates', 'certificates'], ['Contact', 'contact']]

const SHOT_INFO = {
  'impact-home.png': ['Home dashboard', 'Screen time, unlocks and the most used app at a glance.'],
  'impact-checkin.png': ['Daily check-in', 'Log your mood, sleep and productivity every day.'],
  'impact-profile.png': ['Profile', 'Your stats, streaks and wellness identity in one place.'],
  'impact-settings.png': ['Settings', 'Journal entry, daily reminder and account options.'],
}

const MARQUEE = ['Java', 'Kotlin', 'JavaScript', 'React', 'Node.js', 'Express', 'SQL', 'Firebase', 'Android', 'Python', 'Git', 'REST APIs']

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

function Title({ children, no }) {
  return <Reveal>{no && <span className="eyebrow">{no}</span>}<h2>{children}</h2></Reveal>
}

function Tilt({ children, on = true }) {
  const ref = useRef(null)
  if (!on) return <div className="tilt">{children}</div>
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

function PhoneCarousel({ shots, onZoom }) {
  const [i, setI] = useState(0)
  const [hold, setHold] = useState(false)
  const touch = useRef(0)
  const n = shots.length
  const go = d => setI(v => (v + d + n) % n)
  useEffect(() => {
    if (hold) return
    const t = setInterval(() => setI(v => (v + 1) % n), 3800)
    return () => clearInterval(t)
  }, [hold, n])
  const [title, desc] = SHOT_INFO[shots[i]] || ['', '']
  return (
    <div className="flow-wrap" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}
      onTouchStart={e => { touch.current = e.touches[0].clientX }}
      onTouchEnd={e => { const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 40) go(d < 0 ? 1 : -1) }}>
      <div className="flow">
        {shots.map((s, k) => {
          const h = Math.floor(n / 2)
          const o = ((k - i + n + h) % n) - h
          return (
            <button key={s} className={o === 0 ? 'flow-item on' : 'flow-item'} style={{ '--o': o, '--a': Math.abs(o) }}
              onClick={() => (o === 0 ? onZoom(IMG + s) : setI(k))} aria-label={SHOT_INFO[s] ? SHOT_INFO[s][0] : 'Screen'}>
              <img src={IMG + s} alt="" loading="lazy" draggable="false" />
            </button>
          )
        })}
      </div>
      <div className="flow-info" key={i}><h4>{title}</h4><p>{desc}</p></div>
      <div className="flow-ctrl">
        <button aria-label="Previous screen" onClick={() => go(-1)}><Icon n="left" size={20} /></button>
        <div className="dots">{shots.map((s, k) => <button key={s} className={k === i ? 'dot-b on' : 'dot-b'} aria-label={`Screen ${k + 1}`} onClick={() => setI(k)} />)}</div>
        <button aria-label="Next screen" onClick={() => go(1)}><Icon n="right" size={20} /></button>
      </div>
    </div>
  )
}

function CertShowcase({ items, onZoom }) {
  const [i, setI] = useState(0)
  const [hold, setHold] = useState(false)
  const n = items.length
  useEffect(() => {
    if (hold) return
    const t = setInterval(() => setI(v => (v + 1) % n), 5000)
    return () => clearInterval(t)
  }, [hold, n])
  const [img, title, desc] = items[i]
  return (
    <div className="cert-show" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
      <div className="cert-stage">
        <button className="cert-img" key={img} onClick={() => onZoom(IMG + img)} aria-label={`View ${title}`}>
          <img src={IMG + img} alt={title} />
          <span className="zoom-hint"><Icon n="expand" size={16} /> View full size</span>
        </button>
      </div>
      <div className="cert-info">
        <span className="cert-no">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
        <h3 key={title}>{title}</h3>
        <p>{desc}</p>
        <div className="cert-thumbs">
          {items.map(([im, t], k) => <button key={im} className={k === i ? 'th on' : 'th'} onClick={() => setI(k)} aria-label={t}><img src={IMG + im} alt="" loading="lazy" /></button>)}
        </div>
        <div className="flow-ctrl left">
          <button aria-label="Previous certificate" onClick={() => setI((i - 1 + n) % n)}><Icon n="left" size={20} /></button>
          <button aria-label="Next certificate" onClick={() => setI((i + 1) % n)}><Icon n="right" size={20} /></button>
        </div>
      </div>
    </div>
  )
}

function SplitDemo() {
  const [people, setPeople] = useState(['Asha', 'Ravi', 'Meera'])
  const [exps, setExps] = useState([
    { id: 1, desc: 'Dinner', amount: 1800, payer: 'Asha', among: ['Asha', 'Ravi', 'Meera'] },
    { id: 2, desc: 'Cab', amount: 600, payer: 'Ravi', among: ['Asha', 'Ravi', 'Meera'] },
  ])
  const [desc, setDesc] = useState('')
  const [amt, setAmt] = useState('')
  const [payer, setPayer] = useState('Asha')
  const [skip, setSkip] = useState([])
  const [name, setName] = useState('')

  const fmt = n => '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 2 })
  const among = people.filter(p => !skip.includes(p))

  const add = () => {
    const a = parseFloat(amt)
    if (!(a > 0) || !among.length) return
    setExps(e => [...e, { id: Date.now(), desc: desc.trim() || 'Expense', amount: a, payer, among }])
    setDesc(''); setAmt('')
  }
  const addPerson = () => {
    const n = name.trim()
    if (!n || people.includes(n) || people.length >= 6) return
    setPeople(p => [...p, n]); setName('')
  }
  const toggle = p => setSkip(s => (s.includes(p) ? s.filter(x => x !== p) : [...s, p]))

  const bal = {}
  people.forEach(p => { bal[p] = 0 })
  exps.forEach(e => {
    const share = e.amount / e.among.length
    bal[e.payer] += e.amount
    e.among.forEach(a => { bal[a] -= share })
  })
  const cr = Object.entries(bal).filter(([, v]) => v > 0.01).sort((a, b) => b[1] - a[1])
  const de = Object.entries(bal).filter(([, v]) => v < -0.01).map(([n, v]) => [n, -v]).sort((a, b) => b[1] - a[1])
  const pay = []
  let i = 0, j = 0
  while (i < de.length && j < cr.length) {
    const m = Math.min(de[i][1], cr[j][1])
    pay.push([de[i][0], cr[j][0], m])
    de[i][1] -= m; cr[j][1] -= m
    if (de[i][1] < 0.01) i++
    if (cr[j][1] < 0.01) j++
  }
  const total = exps.reduce((t, e) => t + e.amount, 0)

  return (
    <div className="split">
      <div className="split-card">
        <h3>Add an expense</h3>
        <div className="fld"><label>What was it for?</label><input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Dinner, cab, tickets" /></div>
        <div className="row">
          <div className="fld"><label>Amount (₹)</label><input type="number" min="0" value={amt} onChange={e => setAmt(e.target.value)} placeholder="500" onKeyDown={e => e.key === 'Enter' && add()} /></div>
          <div className="fld"><label>Paid by</label><select value={payer} onChange={e => setPayer(e.target.value)}>{people.map(p => <option key={p}>{p}</option>)}</select></div>
        </div>
        <div className="fld"><label>Split between (tap to include or exclude)</label>
          <div className="pick">{people.map(p => <button key={p} type="button" className={skip.includes(p) ? 'pill' : 'pill on'} onClick={() => toggle(p)}>{p}</button>)}</div>
        </div>
        <button className="btn main full" onClick={add}><Icon n="plus" size={16} /> Add expense</button>
        <div className="fld addp">
          <label>Add a friend ({people.length}/6)</label>
          <div className="inline"><input value={name} onChange={e => setName(e.target.value)} placeholder="Name" onKeyDown={e => e.key === 'Enter' && addPerson()} /><button className="btn" onClick={addPerson}>Add</button></div>
        </div>
      </div>

      <div className="split-card">
        <h3>Who owes whom</h3>
        {pay.length === 0
          ? <p className="muted">Everyone is settled up.</p>
          : <ul className="settle">{pay.map(([f, t, m]) => <li key={f + t}><b>{f}</b> pays <b>{t}</b><span className="amt">{fmt(m)}</span></li>)}</ul>}
        <div className="bals">{people.map(p => (
          <div key={p} className="bal"><span>{p}</span><span className={bal[p] >= 0.01 ? 'pos' : bal[p] <= -0.01 ? 'neg' : ''}>{bal[p] >= 0.01 ? 'gets back ' + fmt(bal[p]) : bal[p] <= -0.01 ? 'owes ' + fmt(-bal[p]) : 'settled'}</span></div>
        ))}</div>
        <div className="exp-head"><span>Expenses</span><span>Total {fmt(total)}</span></div>
        <ul className="exps">{exps.map(e => (
          <li key={e.id}>
            <div><b>{e.desc}</b><small>{e.payer} paid · split {e.among.length} way{e.among.length > 1 ? 's' : ''}</small></div>
            <span className="amt">{fmt(e.amount)}</span>
            <button className="icon-btn" aria-label="Delete expense" onClick={() => setExps(x => x.filter(y => y.id !== e.id))}><Icon n="trash" size={16} /></button>
          </li>
        ))}</ul>
      </div>
    </div>
  )
}

const TERM_CMDS = ['about', 'skills', 'education', 'projects', 'contact', 'resume', 'clear']

function Terminal() {
  const [lines, setLines] = useState([
    { t: 'out', x: 'Hi, I am Samidha. Type a command or tap one below.' },
    { t: 'out', x: 'Try: about, skills, projects. Type help to see everything.' },
  ])
  const [v, setV] = useState('')
  const box = useRef(null)
  const inp = useRef(null)
  useEffect(() => { if (box.current) box.current.scrollTop = box.current.scrollHeight }, [lines])

  const out = c => {
    switch (c) {
      case 'help': return ['Commands: ' + TERM_CMDS.join(', ')]
      case 'about': return ['Samidha Rane, BSc Computer Science graduate from Goa.', 'I build Android apps and full-stack websites, and I make short videos.', 'Open to internships and full-time jobs.']
      case 'skills': return SKILLS.map(([n, , items]) => `${n}: ${items.map(i => i[0]).join(', ')}`)
      case 'education': return EDUCATION.map(e => `${e.when}  ${e.title}, ${e.where}${e.score ? ' (' + e.score + ')' : ''}`)
      case 'projects': return PROJECTS.map(p => `${p.title}  [${p.tech.join(', ')}]`)
      case 'contact': return [EMAIL, '+91 7350182844', 'github.com/samidha-rane', 'linkedin.com/in/samidha-rane-0892ba345']
      case 'resume': { const a = document.createElement('a'); a.href = '/resume.pdf'; a.download = ''; a.click(); return ['Downloading resume.pdf ...'] }
      default: return [`command not found: ${c}. Type help.`]
    }
  }
  const run = raw => {
    const c = raw.trim().toLowerCase()
    if (!c) return
    if (c === 'clear') { setLines([]); return }
    setLines(l => [...l, { t: 'cmd', x: c }, ...out(c).map(x => ({ t: 'out', x }))])
  }

  return (
    <div className="term">
      <div className="term-bar"><i /><i /><i /><span>samidha@portfolio: ~</span></div>
      <div className="term-body" ref={box} onClick={() => inp.current && inp.current.focus()}>
        {lines.map((l, k) => <p key={k} className={l.t}>{l.t === 'cmd' ? <><span className="ps">$</span>{l.x}</> : l.x}</p>)}
        <div className="term-in">
          <span className="ps">$</span>
          <input ref={inp} value={v} onChange={e => setV(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { run(v); setV('') } }} placeholder="type a command" spellCheck="false" autoCapitalize="none" autoComplete="off" aria-label="Terminal command" />
        </div>
      </div>
      <div className="term-chips">{TERM_CMDS.map(c => <button key={c} onClick={() => run(c)}>{c}</button>)}</div>
    </div>
  )
}

function GitHubLive() {
  const [d, setD] = useState(null)
  const [err, setErr] = useState(false)
  useEffect(() => {
    let off = false
    const get = u => fetch(u).then(r => (r.ok ? r.json() : Promise.reject()))
    Promise.all([
      get('https://api.github.com/users/samidha-rane'),
      get('https://api.github.com/users/samidha-rane/repos?sort=updated&per_page=12'),
    ]).then(([u, r]) => { if (!off) setD({ u, r: r.filter(x => !x.fork).slice(0, 4) }) })
      .catch(() => { if (!off) setErr(true) })
    return () => { off = true }
  }, [])
  if (err) return null
  return (
    <div className="gh">
      <div className="gh-head">
        <div><span className="eyebrow">LIVE FROM GITHUB</span><h3>What I have been building lately</h3></div>
        {d && <div className="gh-stats"><div><b>{d.u.public_repos}</b><span>repos</span></div><div><b>{d.u.followers}</b><span>followers</span></div></div>}
      </div>
      {!d ? <p className="muted">Loading from GitHub...</p> : (
        <div className="gh-grid">{d.r.map(r => (
          <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="gh-repo">
            <b>{r.name}</b>
            <p>{r.description || 'No description yet.'}</p>
            <span className="gh-meta">{r.language && <i>{r.language}</i>}<i>Updated {new Date(r.pushed_at).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</i></span>
          </a>
        ))}</div>
      )}
    </div>
  )
}

function Palette({ items, onClose }) {
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const list = items.filter(a => a.label.toLowerCase().includes(q.toLowerCase()))
  const run = a => { onClose(); a.run() }
  const key = e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(v => Math.min(v + 1, list.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx(v => Math.max(v - 1, 0)) }
    else if (e.key === 'Enter' && list[idx]) run(list[idx])
  }
  return (
    <div className="pal-wrap" onClick={onClose}>
      <div className="pal" onClick={e => e.stopPropagation()}>
        <input autoFocus value={q} onChange={e => { setQ(e.target.value); setIdx(0) }} onKeyDown={key} placeholder="Where do you want to go?" />
        <ul>{list.map((a, k) => <li key={a.label} className={k === idx ? 'on' : ''} onMouseEnter={() => setIdx(k)} onClick={() => run(a)}>{a.label}</li>)}
          {list.length === 0 && <li>Nothing found</li>}</ul>
        <div className="pal-hint">Arrow keys to move, Enter to open, Esc to close</div>
      </div>
    </div>
  )
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
  const [pal, setPal] = useState(false)
  const [active, setActive] = useState('')

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
    const k = e => {
      if (e.key === 'Escape') { setZoom(null); setPal(false) }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPal(p => !p) }
    }
    window.addEventListener('scroll', s); window.addEventListener('mousemove', m); window.addEventListener('keydown', k)
    return () => { clearInterval(t); window.removeEventListener('scroll', s); window.removeEventListener('mousemove', m); window.removeEventListener('keydown', k) }
  }, [])

  useEffect(() => { document.documentElement.dataset.theme = dark ? '' : 'light' }, [dark])

  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  const go = () => setMenu(false)
  const jump = id => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

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

  const actions = [
    ...NAV.map(([l, id]) => ({ label: `Go to ${l}`, run: () => jump(id) })),
    { label: 'Switch between light and dark theme', run: () => setDark(d => !d) },
    { label: 'Copy email address', run: copyEmail },
    { label: 'Download resume', run: () => { const a = document.createElement('a'); a.href = '/resume.pdf'; a.download = ''; a.click() } },
    { label: 'Open GitHub', run: () => window.open('https://github.com/samidha-rane', '_blank', 'noreferrer') },
    { label: 'Open LinkedIn', run: () => window.open('https://www.linkedin.com/in/samidha-rane-0892ba345/', '_blank', 'noreferrer') },
  ]

  return (
    <>
      <div className="progress" style={{ width: prog + '%' }} />
      <div className="glow" />
      {zoom && <div className="lightbox" onClick={() => setZoom(null)}><img src={zoom} alt="" /><button aria-label="Close"><Icon n="x" size={20} /></button></div>}
      {pal && <Palette items={actions} onClose={() => setPal(false)} />}
      {egg && <div className="egg">You found the secret! Thanks for looking closely.</div>}
      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="wrap nav-in">
          <a className="logo" href="#top" onClick={hitLogo}>Samidha</a>
          <button className="theme-btn" onClick={() => setDark(d => !d)} aria-label="Toggle theme"><Icon n={dark ? 'sun' : 'moon'} size={18} /></button>
          <button className="cmd-btn" onClick={() => setPal(true)} aria-label="Quick search"><Icon n="search" size={16} /><kbd>Ctrl K</kbd></button>
          <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu"><Icon n={menu ? 'x' : 'menu'} size={24} /></button>
          <div className={menu ? 'links open' : 'links'}>
            {NAV.map(([l, id]) =>
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={go}>{l}</a>)}
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

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">{[...MARQUEE, ...MARQUEE].map((m, k) => <span key={k}>{m}</span>)}</div>
      </div>

      <section id="about"><div className="wrap">
        <Title no="01">About me</Title>
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
        <Title no="02">Education</Title>
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
        <Title no="03">My skills</Title>
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
        <Title no="04">My projects</Title>
        <Reveal><div className="tabs">{['All', 'Android', 'Web', 'Data'].map(f =>
          <button key={f} className={filter === f ? 'tab on' : 'tab'} onClick={() => setFilter(f)}>{f}</button>)}</div></Reveal>
        <div className="proj-grid">
          {PROJECTS.filter(p => filter === 'All' || p.cat === filter).map((p, i) =>
            <Reveal key={p.title} delay={(i % 2) * 120} className={p.shots ? 'wide' : ''}>
              <Tilt on={!p.shots}><article className={`proj ${p.tint}`}>
                <h3>{p.title} {p.tag && <em className="tag">{p.tag}</em>}</h3>
                <p>{p.text}</p>
                {p.mine && <p className="mine"><b>What I did:</b> {p.mine}</p>}
                <div className="chips small">{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>
                {p.shots && <PhoneCarousel shots={p.shots} onZoom={setZoom} />}
                {p.links && <div className="plinks">{p.links.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer">{n} <Icon n="ext" size={14} /></a>)}</div>}
              </article></Tilt>
            </Reveal>)}
        </div>
        <Reveal><GitHubLive /></Reveal>
      </div></section>

      <section id="playground"><div className="wrap">
        <Title no="05">Try it yourself</Title>
        <Reveal><p className="about-text">A small working version of the idea behind my SplitEasy project. Add an expense, change who shares it, and watch the balances update.</p></Reveal>
        <Reveal><SplitDemo /></Reveal>
        <Reveal>
          <h3 className="sub-h">Or talk to my terminal</h3>
          <p className="muted">Type a command, or tap one of the buttons.</p>
          <Terminal />
        </Reveal>
      </div></section>

      <section className="tint"><div className="wrap two">
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

      <section id="certificates"><div className="wrap">
        <Title no="06">Certificates and awards</Title>
        <Reveal><CertShowcase items={CERTS} onZoom={setZoom} /></Reveal>
      </div></section>

      <section id="contact" className="tint"><div className="wrap">
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