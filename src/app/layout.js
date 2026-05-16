import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const josefin = Josefin_Sans({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "WanderLast",
  description: "Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        
        <main>
            {children}
        </main>

        <Footer></Footer>

        <Toaster ></Toaster>
        
        </body>
    </html>
  );
}
