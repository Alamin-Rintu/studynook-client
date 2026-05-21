import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "StudyNook",
  description: "Study room booking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppinsFont.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer/>
        <Toaster />
      </body>
    </html>
  );
}
