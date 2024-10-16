import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: "Next.js 14 Starter Template ",
  description:
    "Next.js 14 starter template with TypeScript, Tailwind CSS, and Shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body
          className={`${mulish.className} flex min-h-dvh flex-col antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
