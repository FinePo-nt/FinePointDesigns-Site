import React from 'react';

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
    <path d="M5 2H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9" />
    <path d="M8 1h5v5" />
    <path d="M13 1 7 7" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" style={{ width: 28, height: 28 }}>
    <path d="M12 5v14M5 12h14" stroke="rgba(0,201,167,0.30)" strokeWidth="1.5" />
  </svg>
);

const projects = [
  {
    id: 'betterlyfemg',
    tag: 'Media & Content',
    name: 'Better Lyfe Media Group',
    desc: 'Charlotte-based media group working with Atlantic Records, Steve Smith, and national brands.',
    url: 'https://www.betterlyfemg.com/',
    img: `${process.env.PUBLIC_URL}/img/better-lyfe-mg.png`,
  },
  {
    id: 'blasianjink',
    tag: 'Tattoo & Art',
    name: 'Blasian J Ink',
    desc: 'Anime and manga-style tattoo artist based in Hyattsville, MD with a vibrant gallery-forward presence.',
    url: 'https://www.blasianjink.com/',
    img: `${process.env.PUBLIC_URL}/img/blasian-j-ink.png`,
  },
];

const PortfolioContainers = () => (
  <section className="fp-portfolio" id="portfolio">
    <p className="fp-section-label">Selected work</p>
    <h2 className="fp-section-heading">Sites we've built that actually convert.</h2>

    <div className="fp-portfolio__grid">
      {projects.map((project) => (
        <div className="fp-card" key={project.id}>
          <div className={`fp-card__thumb fp-card__thumb--${project.id}`}>
            <img
              src={project.img}
              alt={`${project.name} website screenshot`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
          <div className="fp-card__body">
            <div className="fp-card__tag">{project.tag}</div>
            <div className="fp-card__name">{project.name}</div>
            <p className="fp-card__desc">{project.desc}</p>
            <a className="fp-card__link" href={project.url} target="_blank" rel="noopener noreferrer">
              Visit site <ExternalLinkIcon />
            </a>
          </div>
        </div>
      ))}

      <div className="fp-card fp-card--placeholder">
        <div className="fp-card__thumb fp-card__thumb--placeholder">
          <div className="fp-card__placeholder-icon">
            <PlusIcon />
            <span>Your project</span>
          </div>
        </div>
        <div className="fp-card__body">
          <div className="fp-card__tag fp-card__tag--dim">Your industry</div>
          <div className="fp-card__name fp-card__name--dim">Could be next</div>
          <p className="fp-card__desc">
            We build for gyms, salons, restaurants, contractors, coaches, and anyone who needs a site that actually works.
          </p>
          <a className="fp-card__link fp-card__link--dim" href="/faq#contact">
            Get a quote <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioContainers;