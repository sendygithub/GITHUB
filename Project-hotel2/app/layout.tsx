import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/navbar/footer";
import "./globals.css";



const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Home",
  description: "Online Booking Hotel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}  antialiased`}>
        <Navbar/>
          <main className="bg-gray-50 min-h-screen">{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
