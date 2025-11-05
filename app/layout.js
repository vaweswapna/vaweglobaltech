import { Poppins, Orbitron, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-poppins", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400","500","600","700","800","900"], variable: "--font-orbitron", display: "swap" });
const raleway = Raleway({ subsets: ["latin"], weight: ["300","400","500","600","700","800"], variable: "--font-raleway", display: "swap" });

export const metadata = {
  title: "VAWE GlobalTech — Building Digital Brilliance",
  description: "VAWE GlobalTech transforms brands through creative innovation and strategy.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${orbitron.variable} ${raleway.variable} antialiased min-h-screen`}
      >
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full grad-mc blur-3xl opacity-20 animate-glow"></div>
          <div className="absolute top-1/3 -right-24 w-[520px] h-[520px] rounded-full grad-co blur-3xl opacity-20 animate-glow"></div>
          <div className="absolute -bottom-20 left-1/4 w-[640px] h-[640px] rounded-full grad-mo blur-3xl opacity-15"></div>
        </div>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
