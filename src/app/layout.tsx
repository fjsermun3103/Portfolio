import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Silkscreen } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const pixel = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Paco Serrano · Desarrollador full-stack",
  description:
    "Portfolio de Francisco José Serrano Muñoz, desarrollador junior full-stack en Granada. React, TypeScript, Node.js, Docker e IA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${pixel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
