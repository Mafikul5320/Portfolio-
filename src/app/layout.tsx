import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
// @ts-ignore: side-effect import for global CSS
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'MAFIKUL ISLAM - Frontend Developer',
  description: 'Professional portfolio of Mafikul Islam, a passionate MERN stack developer specializing in React, Next.js, and modern web technologies.',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
