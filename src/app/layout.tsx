import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolas Franck",
  description: "Coach en nutrition et sport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
