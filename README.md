# Sandefur Wilson Asset Management — Website

Next.js (App Router) marketing site for Sandefur Wilson Asset Management, Albany, GA.

## Run locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

- `app/page.js` — the single-page site (client component; nav scroll effect via useEffect)
- `app/layout.js` — page metadata (title/description)
- `app/globals.css` — all styling + Google Fonts (Fraunces + Inter) + nature palette
- `public/images/` — photos (Ben Bracken) + SW logo assets:
  - `hero.jpg`, `family.jpg` (father/son), `deer.jpg`, `feathers.jpg`
  - `mark-white.png` / `mark-black.png` — SW monogram only
  - `logo-white.png` / `logo-black.png` — full stacked lockup

## To do before launch

- **Compliance:** replace the footer placeholder with required disclosures, firm registration / broker-dealer or RIA affiliation, ADV language, and product disclaimers.
- Confirm business details (hours, additional services — tax prep, investment advisory), and whether to name Bobby's son.
- Consider splitting into multiple pages (About / Services / Contact) and adding a real contact form + Google Maps embed.
- Swap plain `<img>` for `next/image` for optimization.
- Get a proper favicon / social share image.

## Notes

- Business: Sandefur Wilson Asset Management, LLC — 2305 Robinhood Dr, Albany, GA 31707 — (229) 436-5472
- Design reference: kmpfa.com (modern + nature theme)
