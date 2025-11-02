import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ViewModeProvider } from "@/contexts/ViewModeContext";
import LayoutContent from "@/components/LayoutContent";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Savoria - Fine Dining Experience",
  description: "Experience culinary excellence at Savoria, where every dish tells a story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ViewModeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ViewModeProvider>
      </body>
    </html>
  );
}

