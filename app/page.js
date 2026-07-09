"use client";

import { useEffect, useState } from "react";

/* Signature motif: concentric "growth rings" — tree rings / seasons / the long view */
function Rings({ className }) {
  const rings = [];
  for (let i = 1; i <= 7; i++) {
    const r = i * 44;
    rings.push(<ellipse key={i} cx="220" cy="220" rx={r} ry={r * 0.82} />);
  }
  return (
    <svg className={className} viewBox="0 0 440 440" aria-hidden="true">
      {rings}
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
    const safety = setTimeout(() => els.forEach((e) => e.classList.add("in")), 1600);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        id="hdr"
        className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
      >
        <div className="wrap nav">
          <a href="#top" className="brand" onClick={closeMenu}>
            <img src="/images/mark-white.png" alt="SW" />
            <span className="brand-txt">
              <b>Sandefur Wilson</b>
              <span>Asset Management</span>
            </span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#philosophy" onClick={closeMenu}>Approach</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href="#contact" className="btn" onClick={closeMenu}>
              Schedule a call
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <Rings className="rings rings-hero" />
        <div className="wrap hero-inner">
          <span className="eyebrow">Albany, Georgia&nbsp;·&nbsp;Since 2001</span>
          <h1>
            Plant today.
            <br />
            Harvest for life.
          </h1>
          <p>
            For more than 25 years, Sandefur Wilson Asset Management has helped
            families and individuals grow, protect, and pass on what they&apos;ve
            worked for — with a steady hand and a long view.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn">
              Schedule a conversation
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore services
            </a>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      {/* STATS */}
      <section className="stats" aria-label="At a glance">
        <Rings className="rings rings-stats" />
        <div className="wrap stats-grid">
          <div className="stat reveal"><b>25+</b><span>Years of experience</span></div>
          <div className="stat reveal"><b>2</b><span>Generations, one practice</span></div>
          <div className="stat reveal"><b>4</b><span>Ways we help you plan</span></div>
          <div className="stat reveal"><b>100%</b><span>Independent &amp; personal</span></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-txt reveal">
            <span className="eyebrow">Who we are</span>
            <h2>Rooted in experience. Focused on you.</h2>
            <p>
              Good financial planning is a lot like a healthy forest — it
              isn&apos;t built overnight, and it isn&apos;t built by accident.
              It grows season by season, with patience, care, and someone who
              knows the terrain.
            </p>
            <p>
              That&apos;s the work Bobby Wilson has done for over 25 years.
              Today he runs Sandefur Wilson Asset Management alongside his son —
              a true family practice, helping people across South Georgia see
              the whole landscape of their finances and make confident decisions
              for the decades ahead.
            </p>
            <p>
              No pressure, no jargon. Just clear guidance and a plan that grows
              with you.
            </p>
          </div>
          <div className="about-photo reveal">
            <img src="/images/family.jpg" alt="Bobby Wilson and his son" />
            <div className="tag">
              <b>25+</b>
              <span>years guiding families through every kind of market</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Guidance for every season</h2>
            <p>
              Comprehensive advice for individuals and families who want a
              trusted guide, not a sales pitch.
            </p>
          </div>
          <div className="cards">
            <div className="card reveal">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v18h18" />
                <path d="M7 14l4-4 3 3 5-6" />
              </svg>
              <h3>Investment Advisory</h3>
              <p>
                Strategies built around your goals, timeline, and comfort with
                risk — then tended over time as the landscape shifts.
              </p>
            </div>
            <div className="card reveal">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <h3>Financial Planning</h3>
              <p>
                A clear map for the road ahead — retirement, milestones, and
                everything in between, adjusted as life changes.
              </p>
            </div>
            <div className="card reveal">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3>Life Insurance</h3>
              <p>
                Protection that stands like an old oak — there for the people
                you love, in every season of life.
              </p>
            </div>
            <div className="card reveal">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M8 13h8M8 17h5" />
              </svg>
              <h3>Tax Preparation</h3>
              <p>
                Preparation that fits into the bigger picture, so your planning
                and your taxes work together — not against each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / TRUST */}
      <section className="proof" id="proof">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Why families trust us</span>
            <h2>A steady hand, earned over decades</h2>
            <p>Real advice from people you can sit across the table from — not a call center or an algorithm.</p>
          </div>

          <div className="creds">
            <div className="cred reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17.3 5.7 21.4 8 14 2 9.4h7.6z"/></svg>
              <b>25+ years</b><span>Guiding South Georgia families through every kind of market.</span>
            </div>
            <div className="cred reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <b>A family practice</b><span>Bobby Wilson and his son, working side by side for your family.</span>
            </div>
            <div className="cred reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              <b>Independent &amp; fiduciary</b><span>Advice built around your goals — not a product to sell. <em>[confirm registrations]</em></span>
            </div>
            <div className="cred reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
              <b>Rooted in Albany</b><span>A local practice that knows this community and plans for the long haul.</span>
            </div>
          </div>

          {/* Placeholder testimonials — replace with real, approved client quotes (mind advisory testimonial rules) */}
          <div className="quotes">
            <figure className="quote reveal">
              <blockquote>&ldquo;Bobby has looked after our family&apos;s finances for years. He explains everything plainly and always has our long-term interests at heart.&rdquo;</blockquote>
              <figcaption>Client, Albany GA <span>&middot; placeholder</span></figcaption>
            </figure>
            <figure className="quote reveal">
              <blockquote>&ldquo;Having father and son on our plan gives us real peace of mind — a steady hand today and for the next generation.&rdquo;</blockquote>
              <figcaption>Client, Lee County GA <span>&middot; placeholder</span></figcaption>
            </figure>
            <figure className="quote reveal">
              <blockquote>&ldquo;No pressure, no jargon. Just clear guidance that&apos;s helped us plan for retirement with confidence.&rdquo;</blockquote>
              <figcaption>Client, Dougherty County GA <span>&middot; placeholder</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy" id="philosophy">
        <Rings className="rings rings-phil" />
        <div className="wrap">
          <span className="eyebrow">Our approach</span>
          <h2>
            &ldquo;We make decisions for decades, not headlines. The best plans,
            like the healthiest land, are grown with patience and tended with
            care.&rdquo;
          </h2>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-photo">
            <img src="/images/feathers.jpg" alt="Georgia outdoors" />
          </div>
          <div className="contact-txt reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>Let&apos;s walk the path together.</h2>
            <div className="detail">
              <div>
                <div className="k">Office</div>
                <div className="v">
                  2305 Robinhood Dr
                  <br />
                  Albany, GA 31707
                </div>
              </div>
            </div>
            <div className="detail">
              <div>
                <div className="k">Phone</div>
                <div className="v">(229) 436-5472</div>
              </div>
            </div>
            <div className="detail">
              <div>
                <div className="k">Email</div>
                <div className="v">rwilson@swamllc.com</div>
              </div>
            </div>
            <a href="#contact" className="btn">
              Schedule your free consultation
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <a href="#top" className="brand">
              <img src="/images/mark-white.png" alt="SW" />
              <span className="brand-txt">
                <b>Sandefur Wilson</b>
                <span>Asset Management</span>
              </span>
            </a>
            <div>2305 Robinhood Dr, Albany, GA 31707&nbsp;·&nbsp;(229) 436-5472</div>
          </div>
          <p className="disclosure">
            <strong>Placeholder — pending compliance review.</strong> Add
            required disclosures, firm registration / broker-dealer affiliation,
            ADV language, and product disclaimers before publishing. Investment
            advisory and insurance products carry required disclosures. © 2026
            Sandefur Wilson Asset Management, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
