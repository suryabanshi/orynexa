
import {
  BrainCircuit,
  BriefcaseBusiness,
  BookOpen,
  Globe2,
  LayoutDashboard,
  PlayCircle,
  Smartphone,
  Server,
  ExternalLink,
  Building2,
  MapPin,
  CalendarDays,
  BadgeJapaneseYen,
} from "lucide-react";

const projects = [
  {
    name: "ORYNEXA WebApp",
    type: "Web Platform",
    stack: "Next.js / TypeScript",
    status: "Active",
    statusColor: "emerald",
    description: "Public marketing site, subsystem hub, and corporate gateway.",
    repo: "orynexa-webapp",
    icon: LayoutDashboard,
  },
  {
    name: "ORYNEXA Mobile",
    type: "iOS & Android",
    stack: "Expo / React Native",
    status: "Beta",
    statusColor: "cyan",
    description: "Native mobile app with dashboard, home, and Connect hub for linking external tools.",
    repo: "orynexa-mobile",
    icon: Smartphone,
  },
  {
    name: "ORYNEXA OS",
    type: "Business OS",
    stack: "SaaS Platform",
    status: "Development",
    statusColor: "gold",
    description: "All-in-one operating system for teams: projects, docs, workflows, and AI agents.",
    repo: "orynexa-os",
    icon: LayoutDashboard,
  },
  {
    name: "ORYNEXA AI",
    type: "AI Platform",
    stack: "LLM / Agents",
    status: "Development",
    statusColor: "gold",
    description: "Intelligent automation, AI agents, and workflow orchestration across all subsystems.",
    repo: "orynexa-ai",
    icon: BrainCircuit,
  },
  {
    name: "ORYNEXA LEARN",
    type: "LMS",
    stack: "Web / Mobile",
    status: "Planning",
    statusColor: "gray",
    description: "Learning management system for students, professionals, and entrepreneurs.",
    repo: "orynexa-learn",
    icon: BookOpen,
  },
  {
    name: "ORYNEXA STUDIO",
    type: "Creative Platform",
    stack: "Web / Tools",
    status: "Planning",
    statusColor: "gray",
    description: "Video, design, branding, and digital content production system.",
    repo: "orynexa-studio",
    icon: PlayCircle,
  },
  {
    name: "ORYNEXA GLOBAL",
    type: "Network",
    stack: "Ops / Partnerships",
    status: "Active",
    statusColor: "emerald",
    description: "Japan–Nepal bridge: talent, partnerships, and international business collaboration.",
    repo: "orynexa-global",
    icon: Globe2,
  },
  {
    name: "buffalonas.jp",
    type: "Infrastructure",
    stack: "NAS / Cloud",
    status: "Active",
    statusColor: "emerald",
    description: "Private NAS and media storage infrastructure running at buffalonas.jp.",
    repo: "infrastructure",
    icon: Server,
  },
];

const services = [
  {
    name: "Digital Consulting",
    jpy: "¥150,000",
    period: "/ mo",
    desc: "Strategy, systems architecture, and digital transformation advisory.",
  },
  {
    name: "AI Automation",
    jpy: "¥300,000",
    period: "/ mo",
    desc: "AI agent design, workflow automation, and intelligent operations.",
  },
  {
    name: "Full System Build",
    jpy: "¥500,000",
    period: "/ project",
    desc: "End-to-end platform development: web app, mobile, backend, and integrations.",
  },
  {
    name: "Enterprise Suite",
    jpy: "¥1,000,000+",
    period: "/ mo",
    desc: "Custom ORYNEXA OS deployment with dedicated AI, learning, and support systems.",
  },
];

const statusBadge = (color: string) => {
  const map: Record<string, string> = {
    emerald: "var(--emerald)",
    cyan: "var(--cyan)",
    gold: "var(--gold)",
    gray: "var(--gray)",
  };
  return map[color] ?? "var(--gray)";
};

export default function CorporationPage() {
  return (
    <main className="page">
      <header className="header">
        <nav className="nav">
          <a className="logoWrap" href="/">
            <div className="mark" />
            <div>
              <div className="logo">ORYNEXA</div>
              <div className="slogan">CORPORATION</div>
            </div>
          </a>
          <div className="links">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="#projects">Projects</a>
            <a href="#pricing">Pricing</a>
          </div>
          <a className="btn" href="mailto:info@orynexa.com">Contact</a>
        </nav>
      </header>

      {/* Corp Header */}
      <section className="section" style={{ borderTop: "none", paddingTop: 64 }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div className="kicker">CORPORATE PROFILE</div>
              <h1 style={{ fontSize: "clamp(38px,6vw,64px)", margin: "14px 0", lineHeight: 0.96 }}>
                ORYNEXA <span className="gold">Corp.</span>
              </h1>
              <p className="lead">
                A Japan-based technology corporation building intelligent systems for business,
                AI automation, education, creative media, and global human connection.
              </p>
            </div>
            <div style={{ display: "grid", gap: 12, minWidth: 260 }}>
              {[
                [Building2, "Registered Entity", "ORYNEXA Corp."],
                [MapPin, "Headquarters", "Japan (JP) · Nepal (NP)"],
                [CalendarDays, "Founded", "2024 — From the Core"],
                [BadgeJapaneseYen, "Operating Currency", "JPY ¥ · NPR Rs · USD $"],
              ].map(([Icon, label, value]) => (
                <div
                  key={label as string}
                  className="card"
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", minHeight: "auto" }}
                >
                  <div className="icon" style={{ width: 40, height: 40, flexShrink: 0 }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--gray)", letterSpacing: "0.2em", fontWeight: 700 }}>{label as string}</div>
                    <div style={{ fontSize: 14, color: "var(--white)", fontWeight: 600, marginTop: 2 }}>{value as string}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="metrics" style={{ marginTop: 40 }}>
            {[
              ["8", "Active Projects"],
              ["6", "Subsystems"],
              ["2", "Countries"],
              ["¥", "JPY Operating"],
            ].map(([v, l]) => (
              <div className="metric" key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Registry */}
      <section id="projects" className="section">
        <div className="container">
          <div className="sectionTitle">
            ALL <span>PROJECTS & ARTIFACTS</span>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {projects.map((p) => (
              <div
                key={p.name}
                className="card"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 18,
                  padding: "18px 22px",
                  minHeight: "auto",
                }}
              >
                <div className="icon" style={{ flexShrink: 0 }}>
                  <p.icon size={24} />
                </div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 17, fontWeight: 700, color: "var(--white)" }}>{p.name}</span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        color: statusBadge(p.statusColor),
                        background: `${statusBadge(p.statusColor)}22`,
                        borderRadius: 999,
                        padding: "2px 10px",
                        border: `1px solid ${statusBadge(p.statusColor)}55`,
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--cyan)", letterSpacing: "0.16em", marginTop: 3 }}>
                    {p.type} · {p.stack}
                  </div>
                  <p style={{ color: "#CBD5E1", fontSize: 13, margin: "6px 0 0", lineHeight: 1.6 }}>{p.description}</p>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--gray)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    flexShrink: 0,
                  }}
                >
                  <ExternalLink size={13} />
                  {p.repo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JPY Pricing */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="sectionTitle">
            SERVICES & <span>JPY PRICING</span>
          </div>
          <p className="lead" style={{ textAlign: "center", margin: "0 auto 32px", maxWidth: 560 }}>
            All services billed in Japanese Yen (JPY ¥). International invoicing available in USD or NPR.
          </p>
          <div className="grid">
            {services.map((s) => (
              <div className="card" key={s.name} style={{ position: "relative" }}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "var(--gold)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s.jpy}
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--gray)", marginLeft: 4 }}>{s.period}</span>
                </div>
                <h3 style={{ marginTop: 10 }}>{s.name}</h3>
                <p>{s.desc}</p>
                <a
                  className="btn"
                  href="mailto:info@orynexa.com"
                  style={{ display: "inline-block", marginTop: 16, fontSize: 13 }}
                >
                  Inquire
                </a>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              color: "var(--gray)",
              fontSize: 13,
              marginTop: 24,
            }}
          >
            Tax-exclusive pricing. Consumption tax (消費税 10%) applies for Japan-based clients.
            Custom scopes and payment schedules available.
          </p>
        </div>
      </section>

      {/* System Layers */}
      <section className="section">
        <div className="container">
          <div className="sectionTitle">
            ORYNEXA <span>SYSTEM LAYERS</span>
          </div>
          <div className="layers">
            <div className="layerVisual" />
            <div>
              {[
                ["Solar Layer", "Vision, expansion, global impact, and infinite possibilities.", "EXPANSION"],
                ["Atmosphere Layer", "Community, branding, marketing, and human connection.", "CONNECTION"],
                ["Crust Layer", "Websites, apps, platforms, dashboards, and interfaces.", "EXECUTION"],
                ["Mantle Layer", "Operations, workflows, automation, processes, and systems.", "OPERATION"],
                ["Core Layer", "Identity, mission, strategy, values, and knowledge.", "FOUNDATION"],
              ].map(([a, b, c]) => (
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

      <footer className="footer">
        <div className="container">
          <div className="logo">ORYNEXA</div>
          <p>CORPORATION · FROM THE CORE · Japan (JP) · info@orynexa.com</p>
        </div>
      </footer>
    </main>
  );
}
