import * as React from 'react';

const TrustItem = ({ icon, title, body }) => (
  <div className="fp-contact__trust-item">
    <div className="fp-contact__trust-icon">{icon}</div>
    <div>
      <p className="fp-contact__trust-title">{title}</p>
      <p className="fp-contact__trust-body">{body}</p>
    </div>
  </div>
);

const Contact = () => {
  const [form, setForm] = React.useState({
    firstName: '', lastName: '', email: '',
    businessType: '', message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/mwvgplyn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          firstName:    form.firstName,
          lastName:     form.lastName,
          email:        form.email,
          businessType: form.businessType,
          message:      form.message,
        }),
      });
      if (res.ok) setSubmitted(true);
      else console.error('Formspree error:', await res.text());
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  return (
    <section className="fp-contact" id="contact">
      <div className="fp-contact__inner">

        {/* ── LEFT: pitch + trust signals ── */}
        <div className="fp-contact__left">
          <span className="fp-contact__dotgrid" aria-hidden="true" />
          <span className="fp-contact__glow"    aria-hidden="true" />

          <div className="fp-contact__left-content">
            <p className="fp-section-label">Let's work together</p>
            <h2 className="fp-contact__heading">
              Start your<br />
              <em>project today.</em>
            </h2>
            <p className="fp-contact__sub">
              Tell us about your business. We'll come back with an honest
              quote within 24 hours — no commitment required.
            </p>

            <div className="fp-contact__trust">
              <TrustItem
                icon="⚡"
                title="Fast reply"
                body="We respond within 1 business day, every time."
              />
              <TrustItem
                icon="💰"
                title="Free quote"
                body="No pressure, no commitment. Just an honest price."
              />
              <TrustItem
                icon="🎨"
                title="Custom built"
                body="Every site is designed from scratch — never a template."
              />
              <TrustItem
                icon="🚀"
                title="Live in 2 weeks"
                body="Most clients are online within 14 days of starting."
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: form ── */}
        <div className="fp-contact__right">
          {submitted ? (
            <div className="fp-contact__success">
              <div className="fp-contact__success-icon">✓</div>
              <h3 className="fp-contact__success-title">Message sent!</h3>
              <p className="fp-contact__success-body">
                Thanks for reaching out. We'll get back to you within
                one business day with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="fp-contact__form">
              <div className="fp-contact__form-header">
                <p className="fp-contact__form-eyebrow">Get a free quote</p>
                <p className="fp-contact__form-note">All fields marked * are required</p>
              </div>

              <div className="fp-contact__row">
                <div className="fp-contact__field">
                  <label htmlFor="firstName">First name *</label>
                  <input
                    id="firstName" name="firstName" type="text"
                    placeholder="Jordan"
                    value={form.firstName} onChange={handleChange} required
                  />
                </div>
                <div className="fp-contact__field">
                  <label htmlFor="lastName">Last name *</label>
                  <input
                    id="lastName" name="lastName" type="text"
                    placeholder="Smith"
                    value={form.lastName} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className="fp-contact__field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="you@yourbusiness.com"
                  value={form.email} onChange={handleChange} required
                />
              </div>

              <div className="fp-contact__field">
                <label htmlFor="businessType">Type of business *</label>
                <input
                  id="businessType" name="businessType" type="text"
                  placeholder="e.g. Gym, salon, restaurant, contractor..."
                  value={form.businessType} onChange={handleChange} required
                />
              </div>

              <div className="fp-contact__field">
                <label htmlFor="message">Tell us about your project *</label>
                <textarea
                  id="message" name="message"
                  placeholder="What do you need your website to do? Any must-have features? Rough timeline?"
                  value={form.message} onChange={handleChange} required
                />
              </div>

              <div className="fp-contact__submit">
                <button type="submit" className="fp-btn-primary fp-contact__submit-btn">
                  Send message →
                </button>
                <span className="fp-contact__submit-note">We'll reply within 24 hrs</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;