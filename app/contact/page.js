import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Contact | Sandefur Wilson Asset Management, LLC",
  description:
    "Contact Sandefur Wilson Asset Management, LLC in Albany, Georgia — office address, phone, and email.",
};

/**
 * Contact details are the same ones the client approved on the homepage
 * contact section. Do not add copy here without the client's wording.
 */
const DETAILS = [
  {
    label: "Office",
    lines: ["2305 Robinhood Road", "Albany, GA 31707"],
  },
  {
    label: "Phone",
    lines: ["(229) 446-1918"],
    href: "tel:+12294461918",
  },
  {
    label: "Email",
    lines: ["info@swamllc.com"],
    href: "mailto:info@swamllc.com",
  },
];

export default function Contact() {
  return (
    <>
      <header className="solid">
        <div className="wrap nav">
          <a href="/" className="brand">
            <img src="/images/mark-white.png" alt="SW" />
            <span className="brand-txt">
              <b>Sandefur Wilson</b>
              <span>Asset Management, LLC</span>
            </span>
          </a>
          <nav className="nav-simple">
            <a href="/" className="nav-back">Back to site</a>
            <a href="tel:+12294461918" className="btn">
              Call (229) 446-1918
            </a>
          </nav>
        </div>
      </header>

      <main className="res-page">
        <div className="wrap">
          <span className="eyebrow">Get in touch</span>
          <h1>Let&apos;s walk the path together.</h1>

          <div className="contact-page-grid">
            <div className="contact-page-details">
              {DETAILS.map((d) => (
                <div className="detail" key={d.label}>
                  <div>
                    <div className="k">{d.label}</div>
                    <div className="v">
                      {d.href ? (
                        <a href={d.href}>{d.lines[0]}</a>
                      ) : (
                        d.lines.map((line, i) => (
                          <span key={line}>
                            {line}
                            {i < d.lines.length - 1 && <br />}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-page-photo">
              <img
                src="/images/cypress-moss.jpg"
                alt="South Georgia waterway"
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter home="/" />
    </>
  );
}
