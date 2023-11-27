import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Cars Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="relative">
          <Navbar />
          {children}
          <Analytics />
          <Footer/>
        </body>
    </html>
  )
}
