import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RESTECH - Coming Soon",
  description:
    "Something amazing is coming soon. Stay tuned for updates and be the first to know when we launch.",
  openGraph: {
    title: "RESTECH - Coming Soon",
    description:
      "Something amazing is coming soon. Stay tuned for updates and be the first to know when we launch.",
    url: "https://restech.com",
    siteName: "RESTECH",
    images: [
      {
        url: "https://res.cloudinary.com/temidayo-falomo/image/upload/v1759831688/restech_mfcwsw.jpg",
        width: 1200,
        height: 630,
        alt: "RESTECH - Coming Soon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RESTECH - Coming Soon",
    description:
      "Something amazing is coming soon. Stay tuned for updates and be the first to know when we launch.",
    images: [
      "https://res.cloudinary.com/temidayo-falomo/image/upload/v1759831688/restech_mfcwsw.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
