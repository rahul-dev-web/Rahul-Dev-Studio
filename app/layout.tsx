import "./globals.css";
import "./mobile.css";
import "./premium.css";
import "./mobile-polish.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rahul Development Studio — Web • App • Solutions",
  description: "Rahul Development Studio builds websites, web applications, mobile apps and custom digital solutions for businesses and individuals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
