import type { Metadata } from "next";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
import "./globals.css";
import { GoogleTranslate } from "./components/common/GoogleTranslate";

export const metadata: Metadata = {
  title: "Altura - Technology Infrastructure that Automates, Connects and Empowers Your Business",
  description: "Technology designed to strengthen your operations, improve your customers' experience and accelerate your company's growth from a single ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleTranslate />
        {children}
      </body>
    </html>
  );
}
