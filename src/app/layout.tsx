import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "QuietLens – See the Sound of Your Neighborhood",
  description:
    "QuietLens helps you understand when and where a neighborhood is truly peaceful — before you move in.",
  applicationName: "QuietLens",
  keywords: [
    "quiet neighborhoods",
    "noise levels",
    "livability data",
    "peaceful places",
    "neighborhood sound map",
    "QuietLens",
  ],
  authors: [{ name: "QuietLens" }],
  creator: "QuietLens",
  publisher: "QuietLens",
  metadataBase: new URL("https://quiet-lens.vercel.app/"), // update when live
  alternates: {
    canonical: "https://quiet-lens.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quiet-lens.vercel.app/",
    title: "QuietLens – See the Sound of Your Neighborhood",
    description:
      "Discover when and where a neighborhood is truly peaceful — before you move in.",
    siteName: "QuietLens",
    images: [
      {
        url: "/quietlens-img.png", // placeholder in /public
        width: 1200,
        height: 630,
        alt: "QuietLens app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuietLens – See the Sound of Your Neighborhood",
    description:
      "QuietLens helps you understand when and where a neighborhood is truly peaceful — before you move in.",
    images: ["/quietlens-img.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#3a7bd5",
  category: "Real Estate Technology",
  manifest: "/manifest.json",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
