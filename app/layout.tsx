import type { Metadata } from "next";
import { DotGothic16, Zen_Kaku_Gothic_New, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import { SITE } from "@/data/site";
import "./globals.css";

const pixel = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});
const body = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Portfolio`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name}のポートフォリオサイト。これまでの制作物を紹介しています。`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: next-themes が初期化時に <html> へ data-theme を
    // 付与するため、サーバーとの属性差分の警告を抑止する(html タグのみに作用)
    <html lang="ja" suppressHydrationWarning>
      <body className={`${pixel.variable} ${body.variable} ${mono.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          <Header />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} {SITE.name} — built with Next.js
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
