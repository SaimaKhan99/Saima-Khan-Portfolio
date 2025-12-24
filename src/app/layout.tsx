import type { Metadata } from "next";
import "./globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { VercelAnalytics } from "@/components/vercel-analytics";
// Vercel Analytics
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Developer Portfolio",
    default: "Saima - Senior QA Automation Lead",
  },
  description: "Delivering high-quality, scalable testing solutions across web, API, mobile, and cloud-based platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${readexPro.className} antialiased`}>
        <NuqsAdapter>
          <ThemeProvider attribute="class">
            <Toaster />
            {children}
          </ThemeProvider>
        </NuqsAdapter>
        <SpeedInsights />
        <VercelAnalytics />
      </body>
    </html>
  );
}
