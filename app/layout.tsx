import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { BookProvider } from "./components/books/context/book-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <BookProvider>
          <Navbar />
          {children}
          <ToastContainer position="top-right" autoClose={2000} />
        </BookProvider>
      </body>
    </html>
  );
}
