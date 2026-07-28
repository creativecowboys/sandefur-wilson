import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Client Links | Sandefur Wilson Asset Management",
};

/**
 * Links exactly as the client supplied them — same URLs, same order, no added
 * labels or descriptions. Do not add copy here without the client's wording.
 */
const LINKS = [
  "https://www.ssa.gov",
  "https://osaic.com/im-a-client",
  "https://auth.osaic.com/",
  "https://brokercheck.finra.org/",
  "https://www.wealthscape.com/",
  "https://www.americanfunds.com",
];

/* How the client wrote each one, for display. */
const AS_WRITTEN = {
  "https://www.ssa.gov": "ssa.gov",
  "https://osaic.com/im-a-client": "https://osaic.com/im-a-client",
  "https://auth.osaic.com/": "https://auth.osaic.com/",
  "https://brokercheck.finra.org/": "https://brokercheck.finra.org/",
  "https://www.wealthscape.com/": "https://www.wealthscape.com/",
  "https://www.americanfunds.com": "americanfunds.com",
};

export default function Resources() {
  return (
    <>
      <header className="solid">
        <div className="wrap nav">
          <a href="/" className="brand">
            <img src="/images/mark-white.png" alt="SW" />
            <span className="brand-txt">
              <b>Sandefur Wilson</b>
              <span>Asset Management</span>
            </span>
          </a>
          <nav className="nav-simple">
            <a href="/" className="nav-back">Back to site</a>
            <a href="/#contact" className="btn">
              Schedule a call
            </a>
          </nav>
        </div>
      </header>

      <main className="res-page">
        <div className="wrap">
          <h1>Client Links</h1>

          <ul className="res-list">
            {LINKS.map((href) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <span>{AS_WRITTEN[href]}</span>
                  <svg
                    className="res-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SiteFooter home="/" />
    </>
  );
}
