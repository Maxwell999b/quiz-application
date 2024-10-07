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
    "The Quiz App is a simple, fun, and interactive web application that allows users to test their knowledge on various topics. The app includes multiple-choice questions with different difficulty levels and tracks quiz scores for progress.",
  keywords: ["Quiz", "React", "Multiple Choice", "Education", "Trivia"],
  authors: [{ name: "Maxwell999b" }],
  creator: "Maxwell999b",
  publisher: "Quiz Application",
  metadataBase: new URL("https://quiz-application-smoky.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quiz-application-smoky.vercel.app",
    title: "Quiz Application - Test Your Knowledge",
    description:
      "Challenge yourself with our Quiz Application! Answer multiple-choice questions across various categories and difficulty levels. Track your scores and improve over time.",
    siteName: "Quiz Application",
    images: [
      {
        url: "https://quiz-application-smoky.vercel.app/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Quiz Application - Test Your Knowledge",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz Application - Test Your Knowledge",
    description:
      "Challenge yourself with our Quiz Application! Answer multiple-choice questions across various categories and difficulty levels.",
    images: ["https://quiz-application-smoky.vercel.app/android-chrome-512x512.png"],
    creator: "@Maxwell999b",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png" },
      { url: "/favicon-16x16.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
