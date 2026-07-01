import React from 'react';

const HowItWorks = () => {
  return (
    <div className="fp-cta-band">
      <div>
        <h2>Ready to stop losing customers to a bad website?</h2>
        <p>
          Most of our clients start seeing results within the first week of going live.
          Let's talk about what we can build for you.
        </p>
      </div>
      <div className="fp-cta-band__right">
        <a href="/faq#contact">
          <button className="fp-btn-primary">Start a project</button>
        </a>
        <span className="fp-cta-band__note">No commitment required</span>
      </div>
    </div>
  );
};

export default HowItWorks;