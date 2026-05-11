
import { BrainCircuit, BriefcaseBusiness, BookOpen, Globe2, LayoutDashboard, PlayCircle, Sparkles, Users } from "lucide-react";

const services = [
  ["Business Systems", "End-to-end business management systems, dashboards, and workflow solutions.", BriefcaseBusiness],
  ["AI Automation", "AI agents, intelligent automation, and workflow intelligence for the future.", BrainCircuit],
  ["Learning Platforms", "Education systems for students, workers, entrepreneurs, and skill growth.", BookOpen],
  ["Digital Operations", "Digital infrastructure, cloud systems, and operational excellence for organizations.", LayoutDashboard],
  ["Global Networks", "Japan–Nepal bridge, global talent, partnerships, and international collaboration.", Globe2],
  ["Creative Media Systems", "Video, design, branding, and content systems that build meaningful digital impact.", PlayCircle],
];

const subsystems = [
  ["ORYNEXA OS", "Business operating system for teams and organizations.", LayoutDashboard],
  ["ORYNEXA AI", "AI agents and automation for smarter workflows.", BrainCircuit],
  ["ORYNEXA LEARN", "Learning management systems for all ages and skills.", BookOpen],
  ["ORYNEXA STUDIO", "Creative studio for video, design, and digital content.", PlayCircle],
  ["ORYNEXA GLOBAL", "Global partnerships, talent networks, and international bridge.", Globe2],
  ["ORYNEXA BUSINESS", "Consulting, digital transformation, and business solutions.", BriefcaseBusiness],
];

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <nav className="nav">
          <a className="logoWrap" href="#">
            <div className="mark" />
            <div>
              <div className="logo">ORYNEXA</div>
              <div className="slogan">FROM THE CORE</div>
            </div>
          </a>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#builds">Systems</a>
            <a href="#layers">Layers</a>
            <a href="#subsystems">Subsystems</a>
            <a href="#founder">Founder</a>
          </div>
          <a className="btn" href="#contact">Start Building</a>
        </nav>
      </header>

      <section id="home" className="container hero">
        <div>
          <div className="kicker">FROM THE CORE</div>
          <h1>Build Intelligent Systems From the <span className="gold">Core</span></h1>
          <p className="lead">
            ORYNEXA connects business, technology, learning, automation, and global human potential into one evolving system.
          </p>
          <div className="actions">
            <a className="btn" href="#contact">Start Building</a>
            <a className="btn secondary" href="#subsystems">Explore Systems</a>
          </div>
          <div className="metrics">
            <div className="metric"><b>6</b><span>Subsystems</span></div>
            <div className="metric"><b>5</b><span>System Layers</span></div>
            <div className="metric"><b>∞</b><span>Possibilities</span></div>
          </div>
        </div>

        <div className="heroBannerWrap">
          <img
            src="/header-banner.jpg"
            alt="ORYNEXA — From the Core"
            className="heroBanner"
          />
        </div>
      </section>

      <section id="builds" className="section">
        <div className="container">
          <div className="sectionTitle">WHAT ORYNEXA <span>BUILDS</span></div>
          <div className="grid">
            {services.map(([title, text, Icon]) => (
              <div className="card" key={title as string}>
                <div className="icon"><Icon size={28} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="layers" className="section">
        <div className="container">
          <div className="sectionTitle">THE ORYNEXA <span>SYSTEM LAYERS</span></div>
          <div className="layers">
            <div className="layerVisual" />
            <div>
              {[
                ["Solar Layer", "Vision, expansion, global impact, and infinite possibilities.", "EXPANSION"],
                ["Atmosphere Layer", "Community, branding, marketing, and human connection.", "CONNECTION"],
                ["Crust Layer", "Websites, apps, platforms, dashboards, and interfaces.", "EXECUTION"],
                ["Mantle Layer", "Operations, workflows, automation, processes, and systems.", "OPERATION"],
                ["Core Layer", "Identity, mission, strategy, values, and knowledge.", "FOUNDATION"],
              ].map(([a,b,c]) => (
                <div className="layerRow" key={a}>
                  <strong>{a}</strong>
                  <p>{b}</p>
                  <small>{c}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="subsystems" className="section">
        <div className="container">
          <div className="sectionTitle">ORYNEXA <span>SUBSYSTEMS</span></div>
          <div className="grid">
            {subsystems.map(([title, text, Icon]) => (
              <div className="card" key={title as string}>
                <div className="icon"><Icon size={28} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="section">
        <div className="container founder">
          <div className="portrait">
            <img
              src="/founder-ceo.jpg"
              alt="Suman Suryabanshi — CEO & Founder of ORYNEXA"
              className="founderImg"
            />
          </div>
          <div>
            <div className="kicker">FOUNDER</div>
            <h2 style={{fontSize:"44px", margin:"14px 0"}}>Suman Suryabanshi</h2>
            <h3 className="gold">Founder & CEO of ORYNEXA</h3>
            <p className="lead">
              Builder. Visionary. System Creator. Based in Japan, Suman is building ORYNEXA from real business experience, cross-cultural understanding, and a long-term vision to connect people, technology, education, business, and opportunity across borders.
            </p>
            <p className="quote">
              “Every strong future begins from a core: identity, discipline, knowledge, and execution.”
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="card" style={{textAlign:"center"}}>
            <Sparkles />
            <h2>Ready to Build From the Core?</h2>
            <p>Let’s build intelligent systems that create real impact.</p>
            <div className="actions" style={{justifyContent:"center"}}>
              <a className="btn" href="mailto:info@orynexa.com">Start With ORYNEXA</a>
              <a className="btn secondary" href="/dashboard">Open Dashboard Preview</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="logo">ORYNEXA</div>
          <p>FROM THE CORE — Intelligent systems for business, learning, automation, media, and global connection.</p>
        </div>
      </footer>
    </main>
  );
}
