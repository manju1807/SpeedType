import type { Metadata } from 'next';
import manrope from '@/lib/fonts/Manrope';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import Navbar from './components/navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://speedtype-v1.netlify.app'),
  title: 'SpeedType: Boost Typing Skills with React & Next.js',
  description: "Improve your typing speed and accuracy with SpeedType Challenge, a web-based game built with React, Next.js, and TypeScript. Features real-time error tracking, WPM calculation, and a sleek UI using Tailwind CSS and Framer Motion. Ideal for coders, writers, and anyone looking to boost keyboard skills.",
  keywords: 'typing game, speed typing, typing practice, WPM calculator, keyboard skills, React typing game, Next.js app, TypeScript project, Tailwind CSS UI, Framer Motion animations, Zustand state management, web-based typing test, typing accuracy, error tracking, typing challenges, coding practice, touch typing, typing speed improvement, online typing tutor, React hooks, modern web development, responsive typing game, gamified learning, typing efficiency, keyboard proficiency',
  openGraph: {
    type: 'website',
    url: 'https://speedtype-v1.netlify.app/',
    title: 'SpeedType: Boost Typing Skills with React & Next.js',
    description: "Improve your typing speed and accuracy with SpeedType Challenge, a web-based game built with React, Next.js, and TypeScript.",
    siteName: 'SpeedType',
    images: [{
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'SpeedType Challenge - Improve Your Typing Skills',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpeedType: Boost Typing Skills with React & Next.js',
    description: 'Improve your typing skills with our interactive game',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png'
  },
  alternates: {
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
    canonical: 'https://speedtype-v1.netlify.app/',
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
  applicationName: 'SpeedType',
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
      <head>
        <link rel="alternate" hrefLang="en-US" href="https://speedtype-v1.netlify.app/en-US" />
        <link rel="alternate" hrefLang="es-ES" href="https://speedtype-v1.netlify.app/es-ES" />
        <link rel="alternate" hrefLang="x-default" href="https://speedtype-v1.netlify.app/" />
      </head>
      <body className={cn('min-h-screen max-h-screen bg-background antialiased relative')}>
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
          <h1 className='absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs font-semibold md:text-sm text-muted-foreground'>Made with ❤️ by Manjunath R</h1>
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}