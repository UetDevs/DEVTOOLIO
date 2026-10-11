export function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden>
      <div className="site-backdrop__grid" />
      <div className="site-backdrop__major" />
      <div className="site-backdrop__dots" />
      <div className="site-backdrop__glow" />
      <svg className="site-backdrop__graph" viewBox="0 0 1200 640" fill="none" preserveAspectRatio="xMidYMin slice">
        <path d="M80 92H214L268 148H392" />
        <path d="M808 78H964L1018 132H1142" />
        <path d="M140 420L214 360H340L392 308" />
        <path d="M860 430L934 370H1060" />
        <path d="M268 148V248" />
        <path d="M964 132V236" />
        <circle cx="214" cy="92" r="3.2" />
        <circle cx="268" cy="148" r="3.2" />
        <circle cx="392" cy="148" r="2.4" />
        <circle cx="964" cy="78" r="3.2" />
        <circle cx="1018" cy="132" r="3.2" />
        <circle cx="214" cy="360" r="2.6" />
        <circle cx="340" cy="360" r="2.6" />
        <circle cx="934" cy="370" r="2.6" />
        <text x="80" y="78">{`{ }`}</text>
        <text x="1108" y="118">{`/>`}</text>
      </svg>
    </div>
  );
}
