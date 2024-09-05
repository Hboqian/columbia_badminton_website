import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts'
import "./globals.css";


export const metadata: Metadata = {
  title: "Columbia Badminton Club",
  description: "The official columbia badminton club website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='${inter.className} dark'>
        {children}
      </body>
    </html>
  );
}
