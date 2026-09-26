import { useState } from 'react';
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Download,
  ExternalLink,
  FileText,
  Grid2X2,
  Layers3,
  Menu,
  MoreHorizontal,
  Palette,
  Search,
  Settings2,
  Shirt,
  Sparkles,
  Store,
  X,
} from 'lucide-react';

type Section = 'Overview' | 'Identity' | 'Applications' | 'Guidelines';

type LogoProps = {
  inverse?: boolean;
  compact?: boolean;
};

const sections: { label: Section; icon: typeof Grid2X2 }[] = [
  { label: 'Overview', icon: Grid2X2 },
  { label: 'Identity', icon: Sparkles },
  { label: 'Applications', icon: Layers3 },
  { label: 'Guidelines', icon: BookOpen },
];

const assets = [
  { name: 'Primary Logo', type: 'Logo suite', accent: 'red', icon: Sparkles },
  { name: 'Color System', type: 'Palette / 04', accent: 'yellow', icon: Palette },
  { name: 'Storefront', type: 'Environmental', accent: 'blue', icon: Store },
  { name: 'Crew Uniforms', type: 'Apparel / 03', accent: 'charcoal', icon: Shirt },
];

function SpeedyLogo({ inverse = false, compact = false }: LogoProps) {
  return (
    <div className={`speedy-logo ${inverse ? 'is-inverse' : ''} ${compact ? 'is-compact' : ''}`} aria-label="Speedy's Gas & Grub">
      <div className="wing-mark"><span className="wing wing-left" /><span className="seal">S</span><span className="wing wing-right" /></div>
      {!compact && <><strong>SPEEDY</strong><small>GAS &amp; GRUB</small></>}
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>('Overview');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenu ? 'mobile-open' : ''}`}>
        <div className="sidebar-top">
          <div className="brand-lockup"><SpeedyLogo inverse compact /><span className="brand-divider" /><span className="brand-label">BRAND<br />STUDIO</span></div>
          <button className="mobile-close" onClick={() => setMobileMenu(false)} aria-label="Close menu"><X size={20} /></button>
          <div className="workspace-switcher"><span className="workspace-dot" /><span>Speedy’s / 2024</span><ChevronDown size={15} /></div>
          <nav>
            <p className="eyebrow sidebar-eyebrow">Workspace</p>
            {sections.map(({ label, icon: Icon }) => (
              <button key={label} className={`nav-item ${activeSection === label ? 'active' : ''}`} onClick={() => { setActiveSection(label); setMobileMenu(false); }}>
                <Icon size={17} strokeWidth={1.8} /><span>{label}</span>{label === 'Identity' && <span className="nav-count">12</span>}
              </button>
            ))}
          </nav>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-rule" />
          <button className="nav-item"><Settings2 size={17} /><span>Workspace settings</span></button>
          <div className="profile"><div className="avatar">MC</div><div><strong>Marcy Carter</strong><span>Brand lead</span></div><MoreHorizontal size={18} /></div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileMenu(true)} aria-label="Open menu"><Menu size={21} /></button>
          <div className="breadcrumbs"><span>Workspace</span><span>/</span><strong>{activeSection}</strong></div>
          <div className="topbar-actions"><button aria-label="Search"><Search size={18} /></button><button aria-label="Notifications"><Bell size={18} /><i /></button><div className="top-avatar">MC</div></div>
        </header>

        {activeSection === 'Overview' ? <Overview onPreview={() => setShowPreview(true)} /> : <SectionView section={activeSection} />}
      </main>

      {showPreview && <div className="modal-backdrop" onClick={() => setShowPreview(false)}><div className="preview-modal" onClick={(event) => event.stopPropagation()}><div className="preview-heading"><div><span className="eyebrow">Live preview</span><h2>Speedy’s web direction</h2></div><button onClick={() => setShowPreview(false)} aria-label="Close preview"><X size={19} /></button></div><div className="browser-frame"><div className="browser-bar"><span /><span /><span /><small>speedysgasandgrub.com</small></div><div className="web-preview"><SpeedyLogo inverse compact /><div><p>GOOD FOOD.<br /><em>FULL SPEED.</em></p><button>Find your nearest Speedy <ArrowUpRight size={15} /></button></div><div className="web-rings" /></div></div></div></div>}
    </div>
  );
}

function Overview({ onPreview }: { onPreview: () => void }) {
  return <>
    <section className="hero-section">
      <div className="hero-copy"><div className="hero-kicker"><span className="live-dot" /> Brand system / v2.4 <span className="status-pill">Approved</span></div><h1>Move fast.<br /><span>Stay hungry.</span></h1><p>A refreshed identity system for the neighborhood’s favorite stop. Built for bright mornings, late nights, and everything in between.</p><div className="hero-actions"><button className="button-primary" onClick={onPreview}>View website direction <ArrowUpRight size={17} /></button><button className="button-ghost"><Download size={16} /> Download kit</button></div></div><div className="hero-art"><div className="sunburst" /><div className="hero-card"><span className="card-label">SIGNATURE<br />MARK</span><SpeedyLogo inverse /><span className="card-footer">SINCE 1987 <i /> 24 / 7</span></div><div className="floating-tag tag-one">Freshly made <Sparkles size={13} /></div><div className="floating-tag tag-two">Gas &amp; grub <span>+</span></div></div></section>
    <section className="content-section intro-section"><div className="section-heading"><div><span className="eyebrow">The big picture</span><h2>One system.<br /><em>Many pit stops.</em></h2></div><p>Everything Speedy’s needs to show up with confidence, from the canopy to the cup in your hand.</p></div><div className="stats-row"><div><strong>04</strong><span>Core chapters</span></div><div><strong>28</strong><span>Brand assets</span></div><div><strong>03</strong><span>Signature colors</span></div><div className="updated"><span>Last updated</span><strong>Sep 24, 2024</strong></div></div></section>
    <section className="content-section asset-section"><div className="section-heading compact-heading"><div><span className="eyebrow">Explore the system</span><h2>Built to be <em>seen.</em></h2></div><button className="text-button">View all assets <ArrowUpRight size={15} /></button></div><div className="asset-grid">{assets.map(({ name, type, accent, icon: Icon }) => <button className={`asset-card ${accent}`} key={name}><div className="asset-visual"><Icon size={26} strokeWidth={1.45} /><span className="asset-index">0{assets.findIndex((asset) => asset.name === name) + 1}</span>{accent === 'red' && <SpeedyLogo inverse compact />}{accent === 'yellow' && <div className="swatches"><i /><i /><i /></div>}{accent === 'blue' && <div className="store-shape"><span /><span /><span /></div>}{accent === 'charcoal' && <div className="shirt-shape">S</div>}</div><div className="asset-meta"><div><strong>{name}</strong><span>{type}</span></div><ArrowUpRight size={17} /></div></button>)}</div></section>
    <section className="content-section principle-section"><div className="principle-number">01</div><div className="principle-copy"><span className="eyebrow">The north star</span><h2>Keep it <em>human.</em></h2><p>Speedy’s has always been the place where the cashier knows your order and the coffee is already on. The new system keeps that warmth, while giving the brand enough energy to go anywhere.</p><button className="text-button">Read the story <ArrowUpRight size={15} /></button></div><div className="quote-card"><span>“</span><p>Familiar, but<br /><em>never forgettable.</em></p><small>— The Speedy’s brand voice</small></div></section>
  </>;
}

function SectionView({ section }: { section: Section }) {
  const copy = { Identity: ['Identity in motion.', 'The marks, colors, and typefaces that make Speedy’s unmistakably Speedy.'], Applications: ['Ready for the road.', 'A field guide to bringing the system to life across every customer touchpoint.'], Guidelines: ['Make it feel like Speedy’s.', 'Simple rules for a consistent, energetic, and always-human brand experience.'] }[section];
  return <section className="placeholder-section"><div className="placeholder-hero"><span className="eyebrow">{section} / 04</span><h1>{copy[0]}</h1><p>{copy[1]}</p><button className="button-primary"><FileText size={16} /> Open chapter <ArrowUpRight size={16} /></button></div><div className="chapter-cards"><div><span>01</span><h3>{section === 'Identity' ? 'Primary logo' : section === 'Applications' ? 'Storefront system' : 'Voice & tone'}</h3><p>Core guidance and approved examples.</p><ExternalLink size={17} /></div><div><span>02</span><h3>{section === 'Identity' ? 'Color palette' : section === 'Applications' ? 'Food & beverage' : 'Do / don’t'}</h3><p>Practical details for daily use.</p><ExternalLink size={17} /></div></div></section>;
}

export default App;
