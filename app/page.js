"use client";

import { useEffect, useState } from "react";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);

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
            <a href="#team" onClick={closeMenu}>Team</a>
            <a href="#philosophy" onClick={closeMenu}>Approach</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
            <a href="/resources" onClick={closeMenu}>Client Links</a>
            <a href="#contact" className="btn" onClick={closeMenu}>
              Schedule a call
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-inner">
          <span className="eyebrow">Albany, Georgia&nbsp;·&nbsp;Since 1973</span>
          <h1>
            Plant today.
            <br />
            Harvest for life.
          </h1>
          <p>
            For more than 50 years, Sandefur Wilson Asset Management has helped
            families, individuals, and businesses grow, protect, and pass on what they&apos;ve
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
        <div className="wrap stats-grid">
          <div className="stat reveal"><b>50+</b><span>Years of experience</span></div>
          <div className="stat reveal"><b>3</b><span>Generations, one practice</span></div>
          <div className="stat reveal"><b>$700B+</b><span>Client assets through Osaic</span></div>
          <div className="stat reveal"><b>100%</b><span>Fiduciary &amp; independent</span></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-txt reveal">
            <span className="eyebrow">Who we are</span>
            <h2>Rooted in family values, serving clients nationwide.</h2>
            <p>
              Rooted in family values, serving clients nationwide with
              personalized financial guidance and long-term planning for every
              stage of life.
            </p>
            <p>
              Our product recommendation comes from years of experience and
              watching the trends and flows of the economy.
            </p>
            <p>
              Sandefur Wilson Asset Management traces its roots to 1973,
              representing more than five decades of personalized financial
              guidance and three generations of family leadership.
            </p>
            {/* Full history, revealed by the toggle below. Same client copy —
                collapsed only, never abridged. */}
            <div id="bio-more" className={`bio-more ${bioOpen ? "open" : ""}`} hidden={!bioOpen}>
              <p>
                William E. &ldquo;Bill&rdquo; Sandefur founded the original practice
                in 1973 as Sandefur and Associates. In 2003, Robert A.
                &ldquo;Bobby&rdquo; Wilson established his own practice and began
                working alongside Bill.
              </p>
              <p>
                In 2017, the firm transitioned to the independent advisory model
                through Triad Advisors. This move allowed the practice to serve
                investment advisory clients in a fiduciary capacity while gaining
                greater flexibility, expanded investment options, and enhanced
                resources&mdash;all while remaining independently owned. As
                fiduciaries, the firm&rsquo;s investment advisory professionals are
                committed to acting in their clients&rsquo; best interests and
                providing guidance tailored to each client&rsquo;s unique goals.
              </p>
              <p>
                In 2023, the firm proudly entered its third generation as Robert A.
                Wilson II joined the team, continuing a legacy of trusted financial
                guidance. Following Bill&rsquo;s retirement after 50 years of
                dedicated service, his practice was seamlessly integrated with
                Bobby&rsquo;s, uniting decades of experience and longstanding client
                relationships under one firm. During this same year, Triad Advisors
                became part of the unified Osaic brand, providing independent
                advisors with expanded technology, resources, and support.
              </p>
              <p>
                In 2024, the firm updated the name to Sandefur Wilson Asset
                Management LLC, reflecting both its rich history and continued
                growth.
              </p>
              <p>
                We are proud to be an affiliate of Osaic, one of the largest
                independent wealth management platforms in the United States.
                Osaic supports over 11,000 independent financial professionals and
                270 financial institutions, overseeing more than $700 billion in
                total client assets — giving our clients access to the resources
                and depth of a national platform with the personal attention of a
                local firm.
              </p>
            </div>

            <button
              type="button"
              className="bio-toggle"
              aria-expanded={bioOpen}
              aria-controls="bio-more"
              onClick={() => setBioOpen((o) => !o)}
            >
              {bioOpen ? "Show less" : "Read our full history"}
              {/* Wrapper carries the rotation — transform on a bare <svg> is unreliable. */}
              <span className="chev" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
          </div>
          <div className="about-photo reveal">
            <img src="/images/office-exterior.jpg" alt="Sandefur Wilson Asset Management office in Albany, Georgia" />
            <div className="tag">
              <b>50+</b>
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
              Comprehensive services for families and businesses who want
              trusted advice.
            </p>
          </div>
          <div className="cards cards-3">
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
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="team" id="team">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Meet the team</span>
            <h2>Three generations. One purpose.</h2>
          </div>
          <div className="team-grid">
            <div className="team-photo reveal">
              <img src="/images/wilson-family.jpg" alt="Bobby Wilson and Robert Aaron Wilson" />
            </div>
            <div className="team-members reveal">
              <div className="team-member">
                <h3>Bobby Wilson</h3>
                <span className="role">Principal &amp; Financial Advisor</span>
                <p>
                  Bobby took the reins from the firm&apos;s founder — his father-in-law,
                  Bill Sandefur — and has spent decades helping families across
                  South Georgia see the whole landscape of their finances and plan
                  with confidence.
                </p>
              </div>
              <div className="team-member">
                <h3>Robert Aaron Wilson</h3>
                <span className="role">Financial Advisor</span>
                <p>
                  Working alongside his father, Robert Aaron brings the next
                  generation of the firm&apos;s commitment to personal, long-term
                  financial guidance — ensuring continuity for the families they
                  serve.
                </p>
              </div>
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
              <b>50+ years</b><span>Guiding families across the nation through every kind of market.</span>
            </div>
            <div className="cred reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <b>A family business</b><span>Our family ownership shapes the way we serve—placing relationships before transactions, earning trust through every interaction, and providing thoughtful financial guidance that lasts for generations.</span>
            </div>
            <div className="cred reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              <b>Independent &amp; fiduciary</b><span>Advice built around your goals — not a product to sell. Every recommendation is made with your best interest in mind.</span>
            </div>
            <div className="cred reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
              <b>Rooted in Albany</b><span>A local practice that knows this community and plans for the long haul.</span>
            </div>
          </div>

          {/* Client testimonials — leaving for now pending compliance review */}
          <div className="quotes">
            <figure className="quote reveal">
              <blockquote>&ldquo;Bobby has looked after our family&apos;s finances for years. He explains everything plainly and always has our long-term interests at heart.&rdquo;</blockquote>
              <figcaption>Client, Albany GA</figcaption>
            </figure>
            <figure className="quote reveal">
              <blockquote>&ldquo;Having father and son on our plan gives us real peace of mind — a steady hand today and for the next generation.&rdquo;</blockquote>
              <figcaption>Client, Lee County GA</figcaption>
            </figure>
            <figure className="quote reveal">
              <blockquote>&ldquo;No pressure, no jargon. Just clear guidance that&apos;s helped us plan for retirement with confidence.&rdquo;</blockquote>
              <figcaption>Client, Dougherty County GA</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy" id="philosophy">
        <div className="wrap">
          <span className="eyebrow">Our approach</span>
          <h2>
            We measure success by the lives we help build, not the products we
            sell. As fiduciaries, every recommendation is made with one purpose:
            serving your best interest through thoughtful, long-term financial
            guidance.
          </h2>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-photo">
            <img src="/images/cypress-moss.jpg" alt="South Georgia waterway" />
          </div>
          <div className="contact-txt reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>Let&apos;s walk the path together.</h2>
            <div className="detail">
              <div>
                <div className="k">Office</div>
                <div className="v">
                  2305 Robinhood Road
                  <br />
                  Albany, GA 31707
                </div>
              </div>
            </div>
            <div className="detail">
              <div>
                <div className="k">Phone</div>
                <div className="v">(229) 446-1918</div>
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
      <SiteFooter />
    </>
  );
}
