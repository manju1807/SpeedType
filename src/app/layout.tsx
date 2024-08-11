import type { Metadata } from 'next';
import manrope from '@/lib/fonts/Manrope';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import Navbar from './components/navbar';

export const metadata: Metadata = {
  title: 'SpeedType Challenge: Improve Your Typing Skills with React and Next.js',
  description: 'Test and enhance your typing speed and accuracy with SpeedType Challenge, a modern web-based typing game built with React, Next.js, and TypeScript. Features include real-time error tracking, WPM calculation, and a sleek UI powered by Tailwind CSS and Framer Motion. Challenge yourself with random text snippets and track your progress as you earn points and improve your typing skills. Perfect for coders, writers, and anyone looking to boost their keyboard proficiency.',
  keywords: 'typing game, speed typing, typing practice, WPM calculator, keyboard skills, React typing game, Next.js app, TypeScript project, Tailwind CSS UI, Framer Motion animations, Zustand state management, web-based typing test, typing accuracy, error tracking, typing challenges, coding practice, touch typing, typing speed improvement, online typing tutor, React hooks, modern web development, responsive typing game, gamified learning, typing efficiency, keyboard proficiency',
  openGraph: {
    images: [
      {
        url: '/public/OG-images/SpeedType The ultimate Typing Challenge.png', // Replace with the actual path to your image
        width: 1200,
        height: 630,
        alt: 'SpeedType Challenge - Improve Your Typing Skills',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpeedType Challenge',
    description: 'Improve your typing skills with our interactive game',
    images: ['/public/OG-images/SpeedType The ultimate Typing Challenge.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/public/icons/apple-touch-icon.png'
  },
  alternates: {
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  authors: [{ name: 'Manjunath R' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: 'SpeedType Challenge',
  category: 'Typing Game, Typing speed challenge, Type speed checker',
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={manrope.className}
    >
      <head />
      <body className={cn('min-h-screen bg-background antialiased relative')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="max-w-6xl mx-auto py-12 sm:py-24 px-6">
            {children}
          </div>
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}