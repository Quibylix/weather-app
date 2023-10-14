import { PositionProvider } from "@/components";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Weather App",
  description:
    "Get accurate and up-to-date weather forecasts for your location and beyond with our easy-to-use weather app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <PositionProvider>{children}</PositionProvider>
      </body>
    </html>
  );
}
