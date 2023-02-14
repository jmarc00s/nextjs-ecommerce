import { Footer, Navbar, Content } from '@/components/Layout';
import { Suspense } from 'react';

import './globals.css';
import Loading from './loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen" data-theme="light">
        <Navbar />
        <Content>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Content>
        <Footer />
      </body>
    </html>
  );
}
