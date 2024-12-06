import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const einaBold = localFont({
  src: "./fonts/Eina04-Bold.ttf",
  variable: "--font-einaBold",
  weight: "500 800",
});

const einaRegular = localFont({
  src: "./fonts/Eina03-Regular.ttf",
  variable: "--font-einaRegular",
  weight: "500",
});


export const metadata: Metadata = {
  title: "m1seria",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${einaBold.variable} ${einaRegular.variable} antialiased`}
        style={{ fontFamily: 'var(--font-einaRegular)' }}
      >
        {children}
      </body>
    </html>
  );
}
