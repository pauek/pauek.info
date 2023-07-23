import { Header } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../public/webfonts/ss-social.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pauek",
  description: "Pau Fernández's Home Page",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  const id = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Pau Fernández" />
        <meta
          name="description"
          content="Profesor en la UPC, Programador, Creador de minidosis.org"
        />
        <link
          href="https://fonts.googleapis.com/css?family=EB+Garamond|Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://feeds.feedburner.com/pauek"
          rel="alternate"
          title="Pau Fernández"
          type="application/atom+xml"
        />
        <title>Pauek&apos;s home page</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
      `}</Script>
    </html>
  );
}
