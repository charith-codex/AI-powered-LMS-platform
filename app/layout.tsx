import type { Metadata } from 'next';
import './globals.css';
import { Outfit } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Provider from './provider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ai-powered-lms',
  description: 'ai powered lms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
