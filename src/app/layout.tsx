import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Studio | Landing pages premium para pequeños negocios",
  description:
    "Creamos landing pages rápidas, modernas y orientadas a conversión para pequeños negocios que quieren generar más consultas.",
  metadataBase: new URL("https://nova-studio.vercel.app"),
  openGraph: {
    title: "Nova Studio | Landing pages premium",
    description:
      "Sistema reutilizable para crear landing pages profesionales por rubro, con foco en velocidad, confianza y conversión.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
