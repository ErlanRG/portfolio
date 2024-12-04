import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from "./components/BootstrapClient";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Erlan Rangel | Portfolio",
  description: "Erlan Rangel's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        <Navbar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
