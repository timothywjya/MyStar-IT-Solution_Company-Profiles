import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@presentation/components/layout/Navbar";
import { Footer } from "@presentation/components/layout/Footer";
import { getCompanyProfileUseCase } from "@presentation/di/container";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Stars IT Solution — Software House",
  description:
    "My Stars IT Solution adalah software house yang membangun sistem digital untuk koperasi, UMKM, dan perusahaan menengah.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const profile = await getCompanyProfileUseCase.execute();

  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} ${inter.variable} bg-paper font-body text-ink antialiased`}>
        <Navbar profile={profile} />
        <main>{children}</main>
        <Footer profile={profile} />
      </body>
    </html>
  );
}
