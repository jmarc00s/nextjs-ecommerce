import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen">
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
