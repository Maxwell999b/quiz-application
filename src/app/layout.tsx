import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quiz Application",
  description:
    "The Quiz App is a simple web application that allows users to answer multiple-choice questions related to React. The app includes a timer for each question, different difficulty levels, and a feature to display past quiz results and high scores.",
  keywords: ["Quiz", "React", "TypeScript", "Multiple Choice", "Learning"],
  authors: [{ name: "Maxwell999b" }],
  creator: "Maxwell999b",
  publisher: "Quiz Application",
  metadataBase: new URL("https://quiz-application-smoky.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quiz-application-smoky.vercel.app",
    title: "React Quiz Application",
    description:
      "Test your React knowledge with timed multiple-choice questions across different difficulty levels. Track your progress and compete for high scores!",
    siteName: "React Quiz Application",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "React Quiz Application",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Quiz Application",
    description:
      "Test your React knowledge with timed multiple-choice questions across different difficulty levels. Track your progress and compete for high scores!",
    images: ["/android-chrome-512x512.png"],
    creator: "@Maxwell999b",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png" },
      { url: "/favicon-16x16.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    shortcut: ["/favicon-16x16.png"],
    other: [
      {
        rel: "mask-icon",
        url: "/og-image.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://quiz-application-smoky.vercel.app/android-chrome-512x512.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
