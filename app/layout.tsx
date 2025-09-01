import clsx from "clsx";
import type { Viewport } from "next";
import { Inter, Yanone_Kaffeesatz } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Hero from "@/components/Hero";
import LocaleProvider from "@/contexts/locale";
import "./globals.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

const yanone = Yanone_Kaffeesatz({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yanone-kaffeesatz",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata() {
  return {
    title: {
      default: "sciwork 2025",
      template: "sciwork 2025 - %s",
    },
    description: "Science, code, and open source.",
    metadataBase: process.env.SITEURL && new URL(process.env.SITEURL),
    openGraph: {
      title: "sciwork 2025",
      description: "science, code, and open source.",
      url: process.env.SITEURL,
      siteName: "sciwork 2025",
      // images: [
      //   {
      //     url: "/sw24_meta_img.png",
      //     width: 1024,
      //     height: 1024,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "sciwork 2025",
      description: "science, code, and open source.",
      // images: ["/sw23_meta_img.jpg"],
    },
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          sizes: "any",
        },
        {
          url: "/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          url: "/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "tw:relative tw:flex tw:min-h-screen tw:w-full tw:flex-col tw:overscroll-none tw:bg-white",
          inter.className,
          yanone.variable,
        )}
      >
        <LocaleProvider>
          <header className="tw:mb-4">
            <Hero />
          </header>
          <main className="tw:grow">{children}</main>
          <div id="portal" />
        </LocaleProvider>
      </body>
    </html>
  );
}
