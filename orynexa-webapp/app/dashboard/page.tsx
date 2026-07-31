
import { BrainCircuit, FileText, LayoutDashboard, ListChecks, Network, Users, Wallet } from "lucide-react";

const items = [
  ["Projects", "12 active systems", LayoutDashboard, undefined],
  ["AI Tasks", "38 automated actions", BrainCircuit, undefined],
  ["Documents", "Knowledge base ready", FileText, undefined],
  ["Team", "Global operators", Users, undefined],
  ["Workflows", "Execution pipelines", ListChecks, undefined],
  ["Finance", "Treasury · banking · payroll", Wallet, "/finance"],
  ["Network", "buffalonas.jp · Japan / Nepal / Global", Network, undefined],
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
          {items.map(([title, text, Icon, href]) => {
            const IconEl = Icon as typeof LayoutDashboard;
            const card = (
              <div className="card">
                <div className="icon"><IconEl size={28}/></div>
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </div>
            );
            return href ? (
              <a href={href as string} key={title as string}>{card}</a>
            ) : (
              <div key={title as string}>{card}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
