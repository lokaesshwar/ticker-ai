import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TICKER — AI Market Intelligence",
  description: "Your always-on AI financial analyst. Ask anything about stocks, markets, and trading.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full font-mono bg-bg text-ink overflow-hidden">
        {children}
      </body>
    </html>
  );
}
