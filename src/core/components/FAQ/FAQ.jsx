import * as React from 'react';
import Contact from '../Contact/Contact';

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Pricing depends on what your business actually needs. A 5-page site for a local contractor looks very different from a full e-commerce build for a product brand. That said, we\'ve built every project so far at a price that would make a traditional agency blush. We don\'t do retainers, hidden fees, or vague "starting at" numbers. Once we hear about your project, we send you a flat quote. What you see is what you pay.',
  },
  {
    q: 'How long does it take to build a site?',
    a: 'For most of our clients, we go from first conversation to live website in about two weeks. That includes the design, development, revisions, and launch. The biggest factor in timeline is usually how quickly we can get content from you. Things like your logo, photos, and copy. If you\'re not sure what you need, we\'ll help you figure that out too. Bigger projects with custom features or integrations take a bit longer, but we\'ll map out a clear schedule before we ever start.',
  },
  {
    q: 'Will I be able to update the site myself?',
    a: 'That\'s something we talk about upfront, because the answer should depend on how you actually want to use your site. If you\'re the type who wants to log in and change your hours, update a menu, or post new photos on your own, we\'ll set you up with a CMS that makes that straightforward with no technical knowledge required. If you\'d rather just send us a message and have us handle changes, we do that too. Either way, you\'re never stuck waiting on someone else to make basic updates to your own business.',
  },
  {
    q: 'Do you help with domain names and hosting?',
    a: 'Yes, and we\'d rather handle it than leave you to figure it out yourself. We\'ll walk you through registering your domain if you don\'t have one, connect it to your hosting, set up your SSL certificate so your site shows as secure, and make sure everything is pointed correctly before launch. After that, we\'ll explain exactly what you\'re paying for (hosting, domain renewal) and when, so there are no surprise charges down the road. You stay in control of your own accounts and we just help you set them up right.',
  },
  {
    q: 'What if I already have a website but want it redesigned?',
    a: 'This is honestly one of our favorite types of projects. A lot of small business owners have a site that\'s either outdated, slow, hard to navigate on mobile, or just doesn\'t represent what their business has grown into. We start by taking a hard look at what you currently have, what\'s working, what\'s holding you back, and what your customers actually need to see when they land on your page. From there we rebuild it from the ground up with a design that fits where your business is today, not where it was when the original site was made.',
  },
  {
    q: 'Do you work with businesses outside of Charlotte?',
    a: 'Absolutely. Charlotte is home base for us, but we\'ve worked with clients in other cities and states without any issues. Our whole process is built to work remotely. We communicate over email and video calls, share design drafts through links you can view and comment on, and handle every part of the build and launch without needing to be in the same room. If you\'re outside Charlotte and found us, that\'s reason enough to reach out.',
  },
];

const ChevronIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ width: 16, height: 16, flexShrink: 0, transition: 'transform 0.25s' }}>
    <path d="M4 6l4 4 4-4" />
  </svg>
);

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`fp-faq-item${open ? ' fp-faq-item--open' : ''}`}
      style={{ '--i': index }}
    >
      <button
        className="fp-faq-item__trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="fp-faq-item__q">{q}</span>
        <span style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s', color: open ? '#00C9A7' : 'rgba(242,237,228,0.4)', flexShrink: 0 }}>
          <ChevronIcon />
        </span>
      </button>
      <div className="fp-faq-item__body" style={{ maxHeight: open ? '400px' : '0' }}>
        <p className="fp-faq-item__a">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <>
      {/* ── Page hero banner ── */}
      <div className="fp-faq-hero">
        <span className="fp-faq-hero__dotgrid" aria-hidden="true" />
        <span className="fp-faq-hero__accent" aria-hidden="true" />
        <div className="fp-faq-hero__inner">
          <p className="fp-faq-hero__eyebrow">Help center</p>
          <h1 className="fp-faq-hero__title">
            Got questions?<br />
            <em>We've got answers.</em>
          </h1>
          <p className="fp-faq-hero__sub">
            Everything you need to know about working with FinePoint Designs.
            Can't find what you're looking for? Just reach out below.
          </p>
        </div>
      </div>

      {/* ── FAQ + sidebar layout ── */}
      <section className="fp-faq-page" id="faq">
        <div className="fp-faq-page__inner">

          {/* Left: accordion */}
          <div className="fp-faq-page__list">
            <p className="fp-section-label">Frequently asked</p>
            <h2 className="fp-faq-page__heading">Common questions</h2>
            <div className="fp-faq-list">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>

          {/* Right: sticky sidebar */}
          <aside className="fp-faq-sidebar">
            <div className="fp-faq-sidebar__card">
              <div className="fp-faq-sidebar__icon">💬</div>
              <h3 className="fp-faq-sidebar__title">Still have questions?</h3>
              <p className="fp-faq-sidebar__body">
                We reply to every message within one business day. No bots, no auto-replies. Just a real answer from us.
              </p>
              <a href="#contact">
                <button className="fp-btn-primary fp-faq-sidebar__cta">Send us a message</button>
              </a>
            </div>

            <div className="fp-faq-sidebar__card fp-faq-sidebar__card--teal">
              <div className="fp-faq-sidebar__stat-row">
                <div>
                  <div className="fp-faq-sidebar__stat-num">$0</div>
                  <div className="fp-faq-sidebar__stat-label">Monthly fees</div>
                </div>
                <div>
                  <div className="fp-faq-sidebar__stat-num">14</div>
                  <div className="fp-faq-sidebar__stat-label">Days To launch</div>
                </div>
                <div>
                  <div className="fp-faq-sidebar__stat-num">24</div>
                  <div className="fp-faq-sidebar__stat-label"> Hour Reply time</div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

      <Contact />
    </>
  );
};

export default FAQ;