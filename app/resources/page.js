import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Client Resources | Sandefur Wilson Asset Management, LLC",
  description:
    "Account access, research tools, and planning resources for Sandefur Wilson Asset Management, LLC clients in Albany, Georgia.",
};

/**
 * ⚠️ UNAPPROVED COPY — FOR DAVE'S REVIEW ONLY.
 *
 * The client supplied the six URLs and nothing else. Every heading, group name,
 * description, and the closing note below were written by Claude, NOT by Bobby
 * or Ben. Get the firm's own wording (and Osaic's sign-off) before this stays.
 * The links-only version is in git history at d1c0fda.
 */
const GROUPS = [
  {
    title: "Account access",
    note: "Sign in to view balances, statements, and account activity.",
    links: [
      {
        name: "Wealthscape Investor",
        href: "https://www.wealthscape.com/",
        desc: "View your account balances, statements, and activity.",
      },
      {
        name: "Osaic account login",
        href: "https://auth.osaic.com/",
        desc: "Sign in to your Osaic investor account.",
      },
      {
        name: "American Funds",
        href: "https://www.americanfunds.com",
        desc: "Access your American Funds accounts and statements.",
      },
    ],
  },
  {
    title: "Client support",
    note: "Resources from our broker-dealer.",
    links: [
      {
        name: "Osaic — I'm a Client",
        href: "https://osaic.com/im-a-client",
        desc: "Client resources, forms, and support from Osaic Wealth, Inc.",
      },
      {
        name: "FINRA BrokerCheck",
        href: "https://brokercheck.finra.org/",
        desc: "Research the background of any firm or financial professional.",
      },
    ],
  },
  {
    title: "Planning resources",
    note: "Independent tools that may help with your planning.",
    links: [
      {
        name: "Social Security Administration",
        href: "https://www.ssa.gov",
        desc: "Benefit estimates, retirement planning, and your my Social Security account.",
      },
    ],
  },
];

function ExternalIcon() {
  return (
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
  );
}

export default function Resources() {
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
            <a href="/contact" className="btn">
              Schedule a call
            </a>
          </nav>
        </div>
      </header>

      <main className="res-page">
        <div className="wrap">
          <span className="eyebrow">Client Resources</span>
          <h1>Everything in one place.</h1>
          <p className="res-intro">
            Quick links to your accounts and to the tools we reference most often.
            If you have trouble reaching any of them, call us at{" "}
            <a href="tel:+12294461918">(229) 446-1918</a>{" "}
            and we&apos;ll walk you through it.
          </p>

          {GROUPS.map((group) => (
            <section className="res-group" key={group.title}>
              <div className="res-group-head">
                <h2>{group.title}</h2>
                <p>{group.note}</p>
              </div>
              <div className="res-grid">
                {group.links.map((link) => (
                  <a
                    className="res-card"
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="res-card-top">
                      <h3>{link.name}</h3>
                      <ExternalIcon />
                    </div>
                    <p>{link.desc}</p>
                    <span className="res-host">
                      {new URL(link.href).hostname.replace(/^www\./, "")}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))}

          <p className="res-note">
            The links above open websites operated by third parties. Sandefur
            Wilson Asset Management, LLC and <strong>Osaic Wealth, Inc.</strong> are not
            responsible for and do not control, adopt, or endorse the content of
            any third-party site. We will never ask you for your password or
            account credentials by email or text — always sign in directly
            through the sites above.
          </p>
        </div>
      </main>

      <SiteFooter home="/" />
    </>
  );
}
