import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ITM - L19",
  description: "React upgrade - Learn NEXT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navbar */}
        <Navbar />

          {/* app content */}
          <main>
            {children}
          </main>

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
