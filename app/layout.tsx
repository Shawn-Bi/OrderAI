import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/i18n-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orderai.example.com"),
  title: "OrderAI — Never miss another call",
  description:
    "OrderAI is the AI phone assistant for nail salons, spas, restaurants, and clinics. It answers calls 24/7, books appointments, takes orders, and answers questions — so you never miss another booking.",
  keywords: [
    "AI phone answering",
    "nail salon answering service",
    "restaurant phone AI",
    "spa booking assistant",
    "clinic phone AI",
    "missed call recovery",
  ],
  openGraph: {
    title: "OrderAI — Never miss another call",
    description:
      "AI phone assistant for nail salons, spas, restaurants, and clinics. Books appointments, takes orders, and answers questions 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansSC.variable}`}>
      <body className="font-sans">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
