
import { BrainCircuit, FileText, LayoutDashboard, ListChecks, Network, Users } from "lucide-react";

const items = [
  ["Projects", "12 active systems", LayoutDashboard],
  ["AI Tasks", "38 automated actions", BrainCircuit],
  ["Documents", "Knowledge base ready", FileText],
  ["Team", "Global operators", Users],
  ["Workflows", "Execution pipelines", ListChecks],
  ["Network", "Japan / Nepal / Global", Network],
];

export default function Dashboard() {
  return (
    <main className="page">
      <header className="header">
        <nav className="nav">
          <a className="logoWrap" href="/">
            <div className="mark" />
            <div>
              <div className="logo">ORYNEXA OS</div>
              <div className="slogan">DASHBOARD PREVIEW</div>
            </div>
          </a>
          <a className="btn" href="/">Back Home</a>
        </nav>
      </header>
      <section className="container section">
        <div className="kicker">SYSTEM CONTROL CENTER</div>
        <h1>Future WebApp Dashboard</h1>
        <p className="lead">This is the first preview of the ORYNEXA OS: a future control center for business systems, AI agents, learning, documents, team tasks, and global operations.</p>
        <div className="grid" style={{marginTop:32}}>
          {items.map(([title, text, Icon]) => (
            <div className="card" key={title as string}>
              <div className="icon"><Icon size={28}/></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
