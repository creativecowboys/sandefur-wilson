import "./globals.css";

export const metadata = {
  title: "Sandefur Wilson Asset Management | Albany, GA",
  description:
    "Sandefur Wilson Asset Management — investment advisory, financial planning, and life insurance in Albany, Georgia. 50+ years helping families grow and protect what matters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
