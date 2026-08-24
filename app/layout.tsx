import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meme Generator | Bookchaowalit",
  description: "Caption overlay meme canvas.",
  keywords: ["meme-generator", "tool"],
  authors: [{ name: "Bookchaowalit", url: "https://bookchaowalit.com" }],
  creator: "Bookchaowalit",
  metadataBase: new URL("https://bookchaowalit.com"),
  openGraph: {
    type: "website",
    title: "Meme Generator | Bookchaowalit",
    description: "Caption overlay meme canvas.",
    siteName: "Bookchaowalit",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* THESIS: make caption writing feel like a tiny screen-print press.
OWN-WORLD: midnight ink, coral paper, yellow registration marks, and an authored vector face carry the joke.
STORY: set the two lines, choose the ink, watch the live proof, then shuffle to another local caption.
FIRST VIEWPORT: the caption thesis, controls, and live 16:9 proof are visible together.
FORM: press labels, flat ink plates, registration rules, and poster typography define the tool.
SEED: ee756fe4 · assigned direction 6 · operate mode.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
        {children}
      </body>
    </html>
  );
}
