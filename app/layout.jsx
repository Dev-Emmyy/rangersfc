import { Bebas_Neue, Inter, Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Rangers International F.C Enugu",
  description: "Rangers International Football Club stands as one of Nigeria's most decorated and historic football institutions. From our home at the Nnamdi Azikiwe Stadium, we've written countless chapters of glory, inspiring generations of fans across Enugu State and beyond. Whether you're a lifelong supporter or discovering us for the first time, you're now part of the Rangers family—a community built on passion, excellence, and unwavering pride.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${inter.variable} ${montserrat.variable} ${lato.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}