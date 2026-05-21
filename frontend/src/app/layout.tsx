import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QR Vision SS",
  description:
    "QR code generation and detection system using FastAPI, OpenCV, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}