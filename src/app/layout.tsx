import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "./components/menubar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carol ❤ Eduardo",
  description: "De Eduardo para Caroline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-screen bg-gradient-to-b from-black to-purple-600">
        <MenuBar />
        {children}
      </body>
    </html>
  );
}
