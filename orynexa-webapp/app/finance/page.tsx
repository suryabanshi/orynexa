
import {
  ArrowLeftRight,
  CreditCard,
  Globe2,
  Landmark,
  Receipt,
  ShieldCheck,
} from "lucide-react";

type Provider = {
  role: string;
  name: string;
  desc: string;
  region: string;
  tier: "PRIMARY" | "BACKUP";
  Icon: typeof Landmark;
};

const stack: Provider[] = [
  {
    role: "Primary Banking",
    name: "GMO Aozora Net Bank",
    desc: "Core JPY operating account. Domestic settlement, incoming revenue, and day-to-day business banking for the Japan entity.",
    region: "Japan · JPY",
    tier: "PRIMARY",
    Icon: Landmark,
  },
  {
    role: "Domestic Japan Payroll",
    name: "Money Forward Cloud Payroll",
    desc: "Salary runs, social insurance, and tax withholding for Japan-based staff — fully compliant with domestic payroll rules.",
    region: "Japan · JPY",
    tier: "PRIMARY",
    Icon: Receipt,
  },
  {
    role: "Global Payments & Cards",
    name: "Airwallex",
    desc: "Multi-currency accounts, corporate cards, and international payouts. FX conversion and vendor settlement across borders.",
    region: "Global · Multi-currency",
    tier: "PRIMARY",
    Icon: CreditCard,
  },
  {
    role: "International Hiring & Payroll",
    name: "Deel",
    desc: "EOR and contractor payments for the overseas team. Compliant hiring, onboarding, and cross-border payroll outside Japan.",
    region: "Global · Multi-currency",
    tier: "PRIMARY",
    Icon: Globe2,
  },
  {
    role: "Backup Transfer Channel",
    name: "Wise Business",
    desc: "Redundant FX transfer rail. Fallback for international payments and a low-cost secondary route when a primary channel is unavailable.",
    region: "Global · Multi-currency",
    tier: "BACKUP",
    Icon: ArrowLeftRight,
  },
];

const flow = [
  ["Revenue in", "Customer payments land in GMO Aozora Net Bank (JPY operating account)."],
  ["Treasury hub", "Funds routed to Airwallex for multi-currency holding, cards, and FX."],
  ["Domestic payroll", "Money Forward Cloud Payroll pays Japan-based staff from the JPY account."],
  ["Global payroll", "Deel handles international hires; Airwallex funds the payouts."],
  ["Redundancy", "Wise Business stands by as the backup transfer channel."],
];

const tierStyle = (tier: Provider["tier"]) =>
  tier === "PRIMARY"
    ? { color: "var(--emerald)", border: "1px solid rgba(16,185,129,.4)", background: "rgba(16,185,129,.08)" }
    : { color: "var(--amber)", border: "1px solid rgba(251,191,36,.4)", background: "rgba(251,191,36,.08)" };

export default function Finance() {
  return (
    <main className="page">
      <header className="header">
        <nav className="nav">
          <a className="logoWrap" href="/">
            <div className="mark" />
            <div>
              <div className="logo">ORYNEXA OS</div>
              <div className="slogan">TREASURY &amp; FINANCE</div>
            </div>
          </a>
          <a className="btn secondary" href="/dashboard">Back to Dashboard</a>
        </nav>
      </header>

      <section className="container section" style={{ borderTop: "none" }}>
        <div className="kicker">TREASURY &amp; FINANCE OPERATIONS</div>
        <h1>Financial Infrastructure</h1>
        <p className="lead">
          The real money stack behind ORYNEXA — banking, payroll, global payments, and
          transfer redundancy. Each provider owns a clear role so funds move predictably
          between Japan and the global team.
        </p>

        <div className="grid" style={{ marginTop: 32 }}>
          {stack.map(({ role, name, desc, region, tier, Icon }) => (
            <div className="card" key={name}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="icon"><Icon size={28} /></div>
                <span
                  style={{
                    ...tierStyle(tier),
                    fontSize: 10,
                    letterSpacing: ".16em",
                    fontWeight: 800,
                    padding: "5px 10px",
                    borderRadius: 999,
                  }}
                >
                  {tier}
                </span>
              </div>
              <div
                style={{
                  marginTop: 16,
                  fontSize: 11,
                  letterSpacing: ".22em",
                  color: "var(--gray)",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {role}
              </div>
              <h3 style={{ margin: "6px 0 8px" }}>{name}</h3>
              <p>{desc}</p>
              <div style={{ marginTop: 14, fontSize: 12, color: "var(--cyan)", letterSpacing: ".08em" }}>
                {region}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionTitle">HOW <span>MONEY MOVES</span></div>
          <div style={{ maxWidth: 820, margin: "auto" }}>
            {flow.map(([title, text], i) => (
              <div
                key={title}
                className="layerRow"
                style={{ gridTemplateColumns: "48px 190px 1fr" }}
              >
                <strong style={{ color: "var(--cyan)" }}>{String(i + 1).padStart(2, "0")}</strong>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
            <div className="icon"><ShieldCheck size={28} /></div>
            <div>
              <h3 style={{ marginTop: 0 }}>Operational notes</h3>
              <p style={{ marginBottom: 8 }}>
                Primary rails carry normal volume; Wise Business is held in reserve so a single
                provider outage never blocks a payment run.
              </p>
              <p style={{ margin: 0 }}>
                Domestic (JPY) and international (multi-currency) payroll are kept on separate
                providers so compliance stays clean on both sides of the Japan border.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="logo">ORYNEXA</div>
          <p>FROM THE CORE — Treasury &amp; finance infrastructure for a Japan–global operation.</p>
        </div>
      </footer>
    </main>
  );
}
