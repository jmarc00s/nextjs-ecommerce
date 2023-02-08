import { Footer, Navbar, Content } from "@/components/Layout";

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
