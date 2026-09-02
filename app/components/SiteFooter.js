/**
 * Shared site footer.
 *
 * The Osaic/FINRA/SIPC paragraph is a required broker-dealer disclosure and must
 * appear identically on every page — keep it here rather than copying it per route.
 */
export default function SiteFooter({ home = "#top" }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <a href={home} className="brand">
            <img src="/images/mark-white.png" alt="SW" />
            <span className="brand-txt">
              <b>Sandefur Wilson</b>
              <span>Asset Management, LLC</span>
            </span>
          </a>
          <div>2305 Robinhood Road, Albany, GA 31707&nbsp;·&nbsp;(229) 446-1918</div>
        </div>
        <p className="disclosure">
          Securities and advisory services offered through <strong>Osaic
          Wealth, Inc.</strong>,
          member <a href="https://www.finra.org" target="_blank" rel="noopener noreferrer">FINRA</a>/<a href="https://www.sipc.org" target="_blank" rel="noopener noreferrer">SIPC</a>.
          <strong> Osaic Wealth, Inc.</strong> is separately owned and other
          entities and/or marketing names, products, or services referenced
          here are independent of <strong>Osaic Wealth, Inc.</strong> Investment
          advisory and insurance products carry required disclosures. © 2026
          Sandefur Wilson Asset Management, LLC. All rights reserved.
        </p>
        <div className="foot-links">
          <a
            className="btn"
            href="https://www.osaic.com/crs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Osaic Form CRS
          </a>
        </div>
        <div className="foot-bottom">
          <a
            className="cc-credit"
            href="https://creativecowboys.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Designed and built by Creative Cowboys"
          >
            <span>Designed &amp; built by</span>
            <img src="/images/creative-cowboys-white.png" alt="Creative Cowboys" />
          </a>
        </div>
      </div>
    </footer>
  );
}
