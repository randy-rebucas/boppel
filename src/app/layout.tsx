import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Boppel - Artisan Marketplace Platform",
    template: "%s | Boppel"
  },
  description: "Discover unique handcrafted items from talented artisans. A comprehensive marketplace platform connecting creators with buyers, featuring business tools, community features, and sustainability initiatives.",
  keywords: [
    "artisan marketplace",
    "handcrafted items",
    "creative business",
    "sustainable shopping",
    "creator platform",
    "artisan community",
    "unique products",
    "handmade goods"
  ],
  authors: [{ name: "Boppel Team" }],
  creator: "Boppel",
  publisher: "Boppel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://boppel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boppel.com",
    title: "Boppel - Artisan Marketplace Platform",
    description: "Discover unique handcrafted items from talented artisans. A comprehensive marketplace platform connecting creators with buyers.",
    siteName: "Boppel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boppel - Artisan Marketplace Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boppel - Artisan Marketplace Platform",
    description: "Discover unique handcrafted items from talented artisans. A comprehensive marketplace platform connecting creators with buyers.",
    images: ["/og-image.jpg"],
    creator: "@boppel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background-primary text-text-primary`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
