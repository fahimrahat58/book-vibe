import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
