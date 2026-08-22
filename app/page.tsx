"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Menu,
  MessageCircle,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const DOCS_URL = "https://rahul-dev-studio-docs.vercel.app/";
const DEMO_URL = "https://local-business-demo-blue.vercel.app/";
const PORTFOLIO_URL = "https://portfolio-seven-xi-elkvbaphf0.vercel.app/";
const GITHUB_URL = "https://github.com/rahul-dev-web";
const WHATSAPP_URL = "https://wa.me/9981977828?text=Hi%20Rahul%20Development%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const services = [
  ["01", "Business Websites", "Focused digital homes for local businesses, professionals, startups and organizations.", "Web presence"],
  ["02", "Web Applications", "Custom dashboards, authentication, databases and workflows built around real requirements.", "Custom systems"],
  ["03", "Mobile Applications", "Flutter-based Android experiences for products, utilities and business workflows.", "Mobile"],
  ["04", "Custom Software", "APIs, automation, bots, integrations and specialized software beyond a standard website.", "Engineering"],
  ["05", "Deployment & Infrastructure", "Domain, hosting, deployment and technical setup when included in the agreed scope.", "Launch"],
  ["06", "Maintenance & Support", "Post-launch fixes, updates and ongoing technical support as separately scoped.", "After launch"],
];

const process = [
  ["01", "Discover", "Understand the idea, business context and requirements."],
  ["02", "Plan", "Define scope, structure, technology and deliverables."],
  ["03", "Design", "Shape the visual direction and user experience."],
  ["04", "Develop", "Build, integrate, test and refine the product."],
  ["05", "Deploy", "Launch, hand over and support the agreed deliverables."],
];

const principles = [
  ["01", "Built around your requirements", "Every project starts with the actual business or product need instead of forcing a generic template."],
  ["02", "Clear project scope", "Deliverables, additional work, revisions and responsibilities are defined before execution."],
  ["03", "Modern technology", "The stack is selected around the product, maintainability and deployment requirements."],
  ["04", "Direct communication", "Feedback, approvals and project communication stay structured and easy to follow."],
];

function LogoImage({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src="/brand/rds-logo.jpg"
      alt="Rahul Development Studio logo"
      loading="eager"
      decoding="async"
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = "/brand/rds-logo-fallback.svg";
      }}
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <main className="rds-page" id="top">
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={close} aria-label="Rahul Development Studio home">
            <span className="brand-logo"><img src="/brand/rds-mark.svg" alt="RDS" /></span>
            <span className="brand-copy">
              <strong>RAHUL DEVELOPMENT STUDIO</strong>
              <span>Web • App • Solutions</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
          </nav>

          <div className="nav-actions">
            <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Start a Project <ArrowUpRight size={13} />
            </a>
            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-nav">
            <a href="#services" onClick={close}>Services <ArrowUpRight size={14} /></a>
            <a href="#work" onClick={close}>Work <ArrowUpRight size={14} /></a>
            <a href="#process" onClick={close}>Process <ArrowUpRight size={14} /></a>
            <a href="#about" onClick={close}>About <ArrowUpRight size={14} /></a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer" onClick={close}>Client Guide <ExternalLink size={14} /></a>
            <a className="mobile-nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={close}>Start a Project <MessageCircle size={14} /></a>
          </div>
        )}
      </header>

      <section className="hero">
        <div className="grid-bg" />
        <div className="noise" />
        <div className="hero-beam" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="kicker"><i /> WEB <span>/</span> APP <span>/</span> SOLUTIONS</div>
            <h1>Build. Deploy.<br /><span>Grow.</span></h1>
            <p className="hero-lead">Rahul Development Studio builds modern websites, applications and custom digital solutions for businesses and individuals — from the first idea to a real, deployed product.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Start a Project <ArrowRight size={16} /></a>
              <a className="button button-secondary" href="#work">Explore Our Work <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-meta"><span><b>01</b> Requirements</span><span><b>02</b> Build</span><span><b>03</b> Launch</span><span><b>04</b> Support</span></div>
          </div>

          <div className="hero-visual" aria-label="Rahul Development Studio brand visual">
            <div className="orbit" />
            <div className="orbit-glow" />
            <div className="visual-label top">CODE / CREATE / DELIVER</div>
            <div className="logo-frame">
              <LogoImage />
            </div>
            <div className="visual-label bottom">MAKE IDEAS REAL. / EST. 2024</div>
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <div className="section-head"><div><span className="section-number">01 / CAPABILITIES</span></div><div><h2>One studio. Multiple digital layers.</h2><p className="section-intro">From a clean business website to a custom application or automation system, RDS keeps the experience focused on what the product actually needs.</p></div></div>
          <div className="capabilities">
            <Capability icon={<Layers3 size={18} />} no="01" title="Web" text="Business websites, landing pages, portfolios and responsive digital experiences." />
            <Capability icon={<Code2 size={18} />} no="02" title="Apps" text="Web applications, dashboards, authentication, databases and custom workflows." />
            <Capability icon={<Smartphone size={18} />} no="03" title="Mobile" text="Flutter-based Android applications and mobile-first product experiences." />
            <Capability icon={<Sparkles size={18} />} no="04" title="Solutions" text="APIs, automation, bots, integrations and specialized software systems." />
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head"><div><span className="section-number">02 / SERVICES</span></div><div><h2>What we can build for you.</h2><p className="section-intro">Services are selected and scoped around the project. Deployment, infrastructure, third-party services and advanced features are included only when agreed in the project scope.</p></div></div>
          <div className="services">{services.map(([no, title, text, tag]) => <article className="service" key={no}><div className="service-top"><span>{no}</span><span>{tag}</span></div><h3>{title}</h3><p>{text}</p><a className="service-link" href={DOCS_URL} target="_blank" rel="noreferrer">View service policy <ArrowUpRight size={13} /></a></article>)}</div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-head"><div><span className="section-number">03 / PROCESS</span></div><div><h2>A clear path from idea to launch.</h2><p className="section-intro">The working process is intentionally simple: understand the requirement, agree the scope, build the product, then launch what was agreed.</p></div></div>
          <div className="process">{process.map(([no, title, text]) => <article className="process-step" key={no}><span className="no">{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <div className="section-head"><div><span className="section-number">04 / SELECTED WORK</span></div><div><h2>See what your business could look like online.</h2><p className="section-intro">Our Local Business Demo Studio is a sales and visual showcase for business website concepts across multiple industries.</p></div></div>
          <article className="work-card">
            <div className="work-copy"><span className="work-tag">Local Business Demo Studio</span><h3>From discovery to a website customers can actually use.</h3><p>Explore website concepts for restaurants, salons, gyms, clinics, coaching, hospitality, retail, automobile and real-estate businesses — then bring the right direction into a real project.</p><div className="work-points"><span>Industry-led concepts</span><span>Mobile-first</span><span>Direct contact flows</span><span>Business focused</span></div><a className="button button-primary work-button" href={DEMO_URL} target="_blank" rel="noreferrer">Explore Demo Studio <ExternalLink size={14} /></a></div>
            <div className="work-visual"><LogoImage /><div className="work-overlay"><span>RDS / Visual Direction</span><strong>Web • App • Solutions</strong></div></div>
          </article>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="principles">
            <div><span className="section-number">05 / WHY RDS</span><h2 className="principles-title">Built to be useful, not just impressive.</h2><p className="section-intro">RDS is an independent digital development studio. The goal is straightforward: build a useful product, communicate the scope clearly and make the next step obvious.</p></div>
            <div className="principle-list">{principles.map(([no, title, text]) => <article className="principle" key={no}><span className="no">{no}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section className="section" id="docs">
        <div className="container">
          <div className="section-head"><div><span className="section-number">06 / CLIENT RESOURCES</span></div><div><h2>Everything important stays documented.</h2><p className="section-intro">The public website stays concise. Detailed commercial and delivery rules live in the Client Guide & Service Policy.</p></div></div>
          <div className="docs">
            <article className="doc"><small>01 / CLIENT GUIDE</small><h3>How projects work</h3><p>Scope, workflow, payment structure, revisions, timelines, responsibilities, delivery and support are explained in one place.</p><a href={DOCS_URL} target="_blank" rel="noreferrer">Read the Client Guide <ArrowUpRight size={14} /></a></article>
            <article className="doc"><small>02 / DEVELOPER PROFILE</small><h3>Meet Rahul</h3><p>For a deeper look at the developer behind RDS, explore the personal portfolio and complete engineering work.</p><a href={PORTFOLIO_URL} target="_blank" rel="noreferrer">Open Personal Portfolio <ArrowUpRight size={14} /></a></article>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container cta-inner"><div><span className="section-number">07 / START A PROJECT</span><h2>Have an idea worth building?</h2><p>Tell us what you are trying to create. We can start with the requirement, define the right scope and decide the next step.</p></div><div className="cta-actions"><a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Start a Project <MessageCircle size={15} /></a><a className="button button-secondary" href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a></div></div>
      </section>

      <footer className="footer"><div className="container footer-inner"><div><span className="footer-brand">RAHUL DEVELOPMENT STUDIO</span><span className="footer-tagline">Web • App • Solutions</span></div><div className="footer-links"><a href="#services">Services</a><a href="#work">Work</a><a href={DOCS_URL} target="_blank" rel="noreferrer">Client Guide</a><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a><a href={PORTFOLIO_URL} target="_blank" rel="noreferrer">Portfolio</a></div><span>© 2026 RDS</span></div></footer>
    </main>
  );
}

function Capability({ icon, no, title, text }: { icon: ReactNode; no: string; title: string; text: string }) {
  return <article className="capability"><div className="capability-top"><span className="index">{no}</span><span>{icon}</span></div><h3>{title}</h3><p>{text}</p></article>;
}
