import "./globals.css";

export const metadata = {
  title: "Sandefur Wilson Asset Management | Albany, GA",
  description:
    "Sandefur Wilson Asset Management — investment advisory, financial planning, and life insurance in Albany, Georgia. 50+ years helping families grow and protect what matters.",

  // ⚠️ PRE-LAUNCH ONLY — DELETE THESE 3 LINES WHEN THE SITE MOVES TO ITS REAL DOMAIN.
  // Keeps wilson.creativecowboys.co out of Google while it's staff-review only.
  // If this ships on the live domain, the site will never appear in search results.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
