import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sigma FlareWatch | AI Satellite Gas Flaring Monitor | SigmaE Global",
  description:
    "Sigma FlareWatch detects and scores abnormal gas flaring activity at oil and gas facilities worldwide using NOAA satellite data. Live dashboard, automated PDF reports, built by SigmaE Global.",
  alternates: {
    canonical: "https://www.sigmae.global/products/flarewatch",
  },
  openGraph: {
    title: "Sigma FlareWatch | AI Satellite Gas Flaring Monitor | SigmaE Global",
    description:
      "Sigma FlareWatch detects and scores abnormal gas flaring activity at oil and gas facilities worldwide using NOAA satellite data. Live dashboard, automated PDF reports, built by SigmaE Global.",
    url: "https://www.sigmae.global/products/flarewatch",
    images: ["/sigmae-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0A0A0B]">{children}</body>
    </html>
  );
}
