import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const futura = localFont({
  src: [
    {
      path: '../public/fonts/futura/Futura Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/futura/Futura Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-futura',
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Neha Chhillar - Product Designer",
  description: "Portfolio of Neha Chhillar - Product Designer (User Experience)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${futura.variable} font-futura antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
