import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const pretendard = Inter({
  variable: "--font-pretendard",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XYLO - The First DEX Built for Ripple's XLT Ledger",
  description:
    "Xylo Introduces a new era of DeFi with the XLT Ledger. Through seamless transactions, transparent governance, and secure liquidity, we connect real-world assets to the blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body
        className={`${pretendard.variable} font-pretendard antialiased`}
        style={{
          fontFamily:
            'Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
