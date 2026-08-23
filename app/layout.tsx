import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./mobile.css";
import "./premium.css";
import "./mobile-polish.css";
import "./mobile-final.css";
import "./channel.css";

const SITE_URL = "https://rahul-dev-studio.vercel.app";
const LOGO_URL = `${SITE_URL}/brand/logo.png`;
const CHANNEL_URL = "https://whatsapp.com/channel/0029VbCaUAIKQuJSdCcDnL2m";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rahul Development Studio — Web • App • Solutions",
    template: "%s | Rahul Development Studio",
  },
  description: "Rahul Development Studio builds modern websites, web applications, mobile apps and custom digital solutions for businesses and individuals.",
  applicationName: "Rahul Development Studio",
  keywords: ["Rahul Development Studio", "web development", "web applications", "mobile apps", "custom software", "business websites"],
  alternates: { canonical: "/" },
  icons: { icon: "/brand/logo.png", apple: "/brand/logo.png" },
  openGraph: {
    title: "Rahul Development Studio",
    description: "Websites, applications and custom digital solutions built for real requirements.",
    url: SITE_URL,
    siteName: "Rahul Development Studio",
    images: [{ url: LOGO_URL, width: 768, height: 768, alt: "Rahul Development Studio logo" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Development Studio",
    description: "Websites, applications and custom digital solutions built for real requirements.",
    images: [LOGO_URL],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080a0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<a className="rds-channel-pill" href={CHANNEL_URL} target="_blank" rel="noreferrer" aria-label="Follow Rahul Development Studio updates on WhatsApp Channel"><span className="rds-channel-dot" aria-hidden="true" />Follow RDS updates <span aria-hidden="true">↗</span></a></body></html>;
}
