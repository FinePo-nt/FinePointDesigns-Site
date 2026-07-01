import React, { useEffect, useRef } from 'react';

const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const ExternalLink = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" style={{ width: 11, height: 11 }}>
    <path d="M5 2H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9" />
    <path d="M8 1h5v5M13 1 7 7" />
  </svg>
);

const Hero = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const word = 'Your website should too.';
    let i = 0;
    el.textContent = '';
    const iv = setInterval(() => {
      el.textContent = word.slice(0, i + 1);
      i++;
      if (i >= word.length) clearInterval(iv);
    }, 55);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="fp-hero" id="home">

      {/* Dot-grid texture */}
      <span className="fp-hero__dotgrid" aria-hidden="true" />

      {/* Ambient teal glow — top right */}
      <span className="fp-hero__glow" aria-hidden="true" />

      {/* Left accent bar */}
      <span className="fp-hero__accent-line" aria-hidden="true" />

      {/* FP watermark */}
      <span className="fp-hero__watermark" aria-hidden="true">FP</span>

      <div className="fp-hero__inner">

        {/* ── LEFT: copy ── */}
        <div className="fp-hero__copy">
          <p className="fp-hero__eyebrow">FinePoint Designs</p>

          <h1 className="fp-hero__headline">
            <span>Your business looks this good.</span>
            <span>
              <em ref={headlineRef} className="fp-hero__typed" />
              <span className="fp-hero__cursor" aria-hidden="true" />
            </span>
          </h1>

          <p className="fp-hero__sub">
            Your business deserves a website that actually represents how
            good you are at what you do. We build custom sites for small
            businesses that win customers and turn heads. No templates,
            no monthly fees, no excuses.
          </p>

          <div className="fp-hero__actions">
            <a href="#portfolio">
              <button className="fp-btn-primary">See our work</button>
            </a>
            <a href="/faq#contact">
              <button className="fp-btn-ghost">Get in touch <ArrowRight /></button>
            </a>
          </div>
        </div>

        {/* ── RIGHT: floating client card ── */}
        <div className="fp-hero__card-wrap" aria-label="Featured client work">

          {/* "Built by FinePoint" pill — top right of card */}
          <div className="fp-client-badge fp-client-badge--top">
            ✦ Built by FinePoint
          </div>

          {/* Main client card */}
          <div className="fp-client-card">
            <div className="fp-client-card__header">
              <div className="fp-client-card__dot" />
              <div>
                <p className="fp-client-card__name">Blasian J Ink</p>
                <p className="fp-client-card__meta">Tattoo &amp; Art · Hyattsville, MD</p>
              </div>
              <a
                href="https://www.blasianjink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fp-client-card__link"
                aria-label="Visit Blasian J Ink"
              >
                <ExternalLink />
              </a>
            </div>

            {/* Real screenshot preview */}
            <div className="fp-client-card__preview" style={{ padding: 0, overflow: 'hidden', borderRadius: 6 }}>
              <img
                src={`${process.env.PUBLIC_URL}/img/blasian-j-ink.png`}
                alt="Blasian J Ink website"
                style={{ width: '100%', height: '120px', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </div>

            {/* Tags */}
            <div className="fp-client-card__tags" style={{ marginTop: 14 }}>
              <span className="fp-client-card__tag">Tattoo</span>
              <span className="fp-client-card__tag">Anime art</span>
              <span className="fp-client-card__tag">Gallery</span>
            </div>
          </div>

          {/* "Launched in 12 days" badge — bottom */}
          <div className="fp-client-badge fp-client-badge--bottom">
            ✓ Launched in 12 days
          </div>

        </div>
      </div>

      {/* ── Stats strip — full width below ── */}
      <div className="fp-hero__stats">
        {[
          { num: '$0',   label: 'Monthly fees'     },
          { num: '14d',  label: 'Days to launch'   },
          { num: '24h',  label: 'Reply time'        },
        ].map(({ num, label }) => (
          <div className="fp-stat" key={label}>
            <div className="fp-stat__num">{num}</div>
            <div className="fp-stat__label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;