import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Glory",
  description: "E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Navbar></Navbar>
          <CartSidebar></CartSidebar>
        {children}</CartProvider>
        
      </body>
    </html>
  );
}
