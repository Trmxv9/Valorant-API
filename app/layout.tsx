import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Termax - Valorant",
  description: "Termax - Valorant, Agents, weapons and more",
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
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css"
        />
      </head>
      <body className={inter.className}>
        <Menu /> {children}
      </body>
    </html>
  );
}
